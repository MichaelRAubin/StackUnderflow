using System;
using StackUnderflow.Data;
using StackUnderflow.Models;

namespace StackUnderflow.Services
{
    public class CategoriesService
    {
        private readonly CategoriesRepository _repo;

        public Category AddCategory(Category categoryData)
        {
            categoryData.Id = Guid.NewGuid().ToString();
            categoryData.DateCatAdded = DateTime.Now;
            _repo.Create(categoryData);
            return categoryData;
        }

        public Category EditCategory(Category categoryData)
        {
            var category = _repo.GetCategoryById(categoryData.Id);
            category.Name = categoryData.Name;
            category.CatDeletedAt = categoryData.CatDeletedAt;
            bool success = _repo.EditCategory(category);
            if (category.AddedToQuestion == true)
            {
                throw new Exception("Category cannot be edited after added to question.");
            }
            if (!success)
            {
                throw new Exception("Could not edit Category");
            }
            return category;
        }

        public Cataction CatAction(Cataction catAction)
        {
            if (catAction.Action == "add")
            {
                _repo.AddCatToQuestion(catAction.CategoryId, catAction.QuestionId);
            }
            if (catAction.Action == "remove")
            {
                _repo.RemoveCatFromQuestion(catAction.CategoryId);
            }
            return catAction;
        }

        // public Category DeleteCategory(string id)
        // {
        //     var category = _repo.GetCategoryById(id);
        //     if (category.AddedToQuestion == true)
        //     { throw new Exception("Category cannot be edited after added to question."); }
        //     var deleted = _repo.DeleteCategory(id);
        //     if (!deleted)
        //     {
        //         throw new Exception($"Could not delete category with ID {id}");
        //     }
        //     return category;
        // }

        public CategoriesService(CategoriesRepository repo)
        {
            _repo = repo;
        }
    }
}