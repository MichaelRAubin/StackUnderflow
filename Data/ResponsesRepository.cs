using System.Collections.Generic;
using System.Data;
using Dapper;
using StackUnderflow.Models;

namespace StackUnderflow.Data
{
    public class ResponsesRepository
    {
        private readonly IDbConnection _db;

        public Response Create(Response responseData)
        {
            var sql = @"INSERT INTO responses
            (id, body, questionid, authorid, responseadded)
            VALUES (@Id, @Body, @QuestionId, @AuthorId, @ResponseAdded);";
            var x = _db.Execute(sql, responseData);
            return responseData;
        }

        internal bool EditResponse(Response response)
        {
            var nRows = _db.Execute(@"
                UPDATE responses SET
                body = @Body,
                questionid = @QuestionId,
                answered = @Answered
                WHERE id = @Id
                ", response);
            return nRows == 1;
        }

        public Response GetResponseById(string id)
        {
            return _db.QueryFirstOrDefault<Response>(
              "SELECT * FROM responses WHERE id = @id",
                new { id }
            );
        }

        public IEnumerable<Response> GetResponsesByQuestionId(string id)
        {
            return _db.Query<Response>(
                "SELECT * FROM responses WHERE questionid = @id",
                new { id }
            );
        }

        public ResponsesRepository(IDbConnection db)
        {
            _db = db;
        }
    }
}