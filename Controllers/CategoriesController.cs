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
    public class CategoriesController : ControllerBase
    {
        private readonly CategoriesService _cs;

        [Authorize]
        [HttpPost]

        public ActionResult<Category> Post([FromBody] Category categoryData)
        {
            try
            {
                //categoryData. = HttpContext.User.FindFirst("Id").Value; //TODO ask about this
                Category myCategory = _cs.AddCategory(categoryData);
                return Created("api/categories/" + myCategory.Id, myCategory);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [Authorize]
        [HttpPut("{id}")]

        public ActionResult<Category> Put(string id, [FromBody] Category categoryData)
        {
            try
            {
                var category = _cs.EditCategory(categoryData);
                //categoryData.AuthorId = HttpContext.User.FindFirst("Id").Value; //TODO ask about this


                return Ok(category);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [Authorize]
        [HttpDelete("{id}")]
        public ActionResult<Category> Delete(string id)
        {
            try
            {
                var category = _cs.DeleteCategory(id);
                //category.AuthorId = HttpContext.User.FindFirst("Id").Value; //TODO ask about this

                return Ok(category);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        public CategoriesController(CategoriesService cs)
        {
            _cs = cs;

        }
    }
}