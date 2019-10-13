using System;
using System.Collections.Generic;
using StackUnderflow.Data;
using StackUnderflow.Models;

namespace StackUnderflow.Services
{
    public class ResponsesService
    {
        private readonly ResponsesRepository _repo;
        private readonly QuestionsService _qs;

        public Response AddResponse(Response responseData)
        {
            responseData.Id = Guid.NewGuid().ToString();
            _repo.Create(responseData);
            return responseData;
        }

        public Response GetResponseById(string id)
        {
            var response = _repo.GetResponseById(id);
            if (response == null)
            {
                throw new Exception("Bad response ID");
            }
            return response;
        }

        public Response EditResponse(Response responseData)
        {
            var response = GetResponseById(responseData.Id);
            response.Body = responseData.Body;
            response.Answered = responseData.Answered;


            bool success = _repo.EditResponse(response);
            if (!success)
            {
                throw new Exception("Could not edit response");
            }
            return response;
        }

        public IEnumerable<Response> GetQuestionResponses(string id)
        {
            var responses = _repo.GetResponsesByQuestionId(id);
            if (responses == null)
            {
                throw new Exception("Bad Question ID");
            }
            return responses;
        }


        public ResponsesService(ResponsesRepository repo, QuestionsService qs)
        {
            _repo = repo;
            _qs = qs;
        }
    }
}