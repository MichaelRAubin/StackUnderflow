using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StackUnderflow.Models;
using StackUnderflow.Services;

namespace StackUnderflow.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly QuestionsService _qs;
        private readonly ResponsesService _rs;
        private readonly CategoriesService _cs;

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

        [HttpGet("{id}/responses")]
        public ActionResult<IEnumerable<Response>> GetResponses(string id)
        {
            try
            {
                return Ok(_rs.GetQuestionResponses(id));

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Authorize]
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
        [Authorize]
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

        [Authorize]
        [HttpPut("{id}/categories")]

        public ActionResult<Cataction> Put(string id, [FromBody] Cataction catActionData)
        {
            try
            {
                catActionData.QuestionId = id;
                var Cataction = _cs.CatAction(catActionData);
                return Ok(Cataction);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Authorize]
        [HttpDelete("{id}")]
        public ActionResult<Question> Delete(string id)
        {
            try
            {
                var question = _qs.DeleteQuestion(id);
                question.AuthorId = HttpContext.User.FindFirst("Id").Value;

                return Ok(question);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        public QuestionsController(QuestionsService qs, ResponsesService rs, CategoriesService cs)
        {
            _qs = qs;
            _rs = rs;
            _cs = cs;
        }
    }
}