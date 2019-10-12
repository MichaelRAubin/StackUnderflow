using System.Collections.Generic;
using System.Data;
using Dapper;
using StackUnderflow.Models;

namespace StackUnderflow.Data
{
    public class QuestionsRepository
    {
        private readonly IDbConnection _db;

        public IEnumerable<Question> GetAll()
        {
            return _db.Query<Question>("SELECT * FROM questions");
        }

        public Question Create(Question questionData)
        {
            var sql = @"INSERT INTO questions
            (id, title, body, authorid, questionadded)
            VALUES (@Id, @Title, @Body, @AuthorId, @QuestionAdded);";
            var x = _db.Execute(sql, questionData);
            return questionData;
        }

        public Question GetQuestionById(string id)
        {
            return _db.QueryFirstOrDefault<Question>(
                "SELECT * FROM questions WHERE id = @id",
                new { id }
            );
        }

        internal bool EditQuestion(Question Question)
        {
            var nRows = _db.Execute(@"
            UPDATE questions SET
            title = @Title,
            body = @Body,
            deleted = @Deleted,
            questionadded = @QuestionAdded,
            questiondeletedat = @QuestionDeletedAt
            WHERE id = @Id
            ", Question);
            return nRows == 1;
        }

        internal bool DeleteQuestion(string id)
        {
            var success = _db.Execute(@"DELETE FROM questions
            WHERE id = @id", new { id });
            if (success == 1)
            {
                return true;
            }
            return false;
        }

        public QuestionsRepository(IDbConnection db)
        {
            _db = db;
        }
    }
}