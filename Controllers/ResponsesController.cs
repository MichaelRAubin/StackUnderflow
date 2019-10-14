using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StackUnderflow.Models;
using StackUnderflow.Services;

namespace StackUnderflow.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ResponsesController : ControllerBase
    {
        private readonly ResponsesService _rs;

        [HttpPost]

        public ActionResult<Response> Post([FromBody] Response responseData)
        {
            try
            {
                responseData.AuthorId = HttpContext.User.FindFirst("Id").Value;
                Response myResponse = _rs.AddResponse(responseData);
                return Created("api/responses/" + myResponse.Id, myResponse);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]

        public ActionResult<Response> Put(string id, [FromBody] Response responseData)
        {
            try
            {
                responseData.AuthorId = HttpContext.User.FindFirst("Id").Value;
                var question = _rs.EditResponse(responseData);
                return Ok(question);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        public ResponsesController(ResponsesService rs)
        {
            _rs = rs;
        }
    }
}