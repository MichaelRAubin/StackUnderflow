using System.Data;
using Dapper;
using StackUnderflow.Models;

namespace StackUnderflow.Data
{
    public class CategoriesRepository
    {
        private readonly IDbConnection _db;


        public Category Create(Category categoryData)
        {
            var sql = @"INSERT INTO categories
            (id, name, addedtoquestion, datecatadded)
            VALUES (@Id, @Name, @AddedToQuestion, @DateCatAdded);";
            var x = _db.Execute(sql, categoryData);
            return categoryData;
        }


        public CategoriesRepository(IDbConnection db)
        {
            _db = db;
        }
    }
}