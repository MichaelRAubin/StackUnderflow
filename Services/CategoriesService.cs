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
            var tag = _repo.GetCatActionById(categoryData.Id);//TODO find cataction by its categoryId
            if (tag != null)
            {
                throw new Exception("cannot edit Category");
            }
            var category = _repo.GetCategoryById(categoryData.Id);
            category.Name = categoryData.Name;
            bool success = _repo.EditCategory(category);
            if (!success)
            {
                throw new Exception("Could not edit review");
            }
            return category;
        }

        public Cataction CatAction(Cataction catAction)
        {
            if (catAction.Action == "add")
            {
                catAction.AddedToQuestion = true;
                _repo.AddCatToQuestion(catAction.CategoryId, catAction.QuestionId, catAction.AddedToQuestion);

            }
            if (catAction.Action == "remove")
            {
                _repo.RemoveCatFromQuestion(catAction.CategoryId);
            }
            return catAction;
        }

        public CategoriesService(CategoriesRepository repo)
        {
            _repo = repo;
        }
    }
}