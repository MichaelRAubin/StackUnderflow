using System;
using System.Data;
using Dapper;
using StackUnderflow.Models;
using StackUnderflow.Services;

namespace StackUnderflow.Data
{
    public class CategoriesRepository
    {
        private readonly IDbConnection _db;
        private readonly QuestionsService _qs;

        public Category Create(Category categoryData)
        {
            var sql = @"INSERT INTO categories
            (id, name, addedtoquestion, datecatadded)
            VALUES (@Id, @Name, @AddedToQuestion, @DateCatAdded);";
            var x = _db.Execute(sql, categoryData);
            return categoryData;
        }

        internal bool EditCategory(Category category)
        {
            var nRows = _db.Execute(@"
            UPDATE categories SET
            name = @Name,
            addedtoquestion = @AddedToQuestion,
            datecatadded = @DateCatAdded,
            catdeletedat = @CatDeletedAt
            WHERE id = @Id
            ", category);
            return nRows == 1;
        }

        internal bool AddCatToQuestion(string categoryId)
        {
            var sql = @"INSERT INTO tag_items(id, questionid, categoryid)
            VALUES(@id, @questionId, @categoryId); ";
            var x = _db.Execute(sql, new { categoryId });
            return x == 1;
        }

        internal bool RemoveCatFromQuestion(string id)
        {
            var success = _db.Execute(@"DELETE FROM tag_items
            WHERE categoryid = @id", new { id });
            if (success == 1)
            {
                return true;
            }
            return false;
        }
        public Category GetCategoryById(string id)
        {
            return _db.QueryFirstOrDefault<Category>(
                "SELECT * FROM categories WHERE id = @id",
                new { id }
            );
        }

        internal bool DeleteCategory(string id)
        {
            var success = _db.Execute(@"DELETE FROM categories
            WHERE id = @id", new { id });
            if (success == 1)
            {
                return true;
            }
            return false;
        }

        public CategoriesRepository(IDbConnection db, QuestionsService qs)
        {
            _db = db;
            _qs = qs;
        }
    }
}