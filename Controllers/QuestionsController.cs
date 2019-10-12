using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StackUnderflow.Models;
using StackUnderflow.Services;

namespace StackUnderflow.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly QuestionsService _qs;

        [HttpGet]
        public ActionResult<IEnumerable<Question>> Get()
        {
            return Ok(_qs.GetQuestions());
        }

        [HttpGet("{id}")]

        public ActionResult<Question> Get(string id)
        {
            try
            {
                Question question = _qs.GetQuestionById(id);
                return Ok(question);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]

        public ActionResult<Question> Post([FromBody] Question questionData)
        {
            try
            {
                questionData.AuthorId = HttpContext.User.FindFirst("Id").Value;
                Question myQuestion = _qs.AddQuestion(questionData);
                return Created("api/questions/" + myQuestion.Id, myQuestion);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]

        public ActionResult<Question> Put(string id, [FromBody] Question questionData)
        {
            try
            {
                questionData.AuthorId = HttpContext.User.FindFirst("Id").Value;
                questionData.Id = id;
                var question = _qs.EditQuestion(questionData);
                return Ok(question);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<Question> Delete(string id, [FromBody] Question questionData)
        {
            try
            {
                questionData.AuthorId = HttpContext.User.FindFirst("Id").Value;
                var question = _qs.DeleteQuestion(id);
                return Ok(question);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        public QuestionsController(QuestionsService qs) => _qs = qs;
    }
}