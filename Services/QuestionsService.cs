using System;
using System.Collections.Generic;
using System.Linq;
using StackUnderflow.Data;
using StackUnderflow.Models;

namespace StackUnderflow.Services
{
    public class QuestionsService
    {
        private readonly QuestionsRepository _repo;

        public List<Question> GetQuestions()
        {
            return _repo.GetAll().ToList();
        }

        public Question AddQuestion(Question questionData)
        {
            questionData.Id = Guid.NewGuid().ToString();
            _repo.Create(questionData);
            return questionData;
        }

        public Question GetQuestionById(string id)
        {
            var question = _repo.GetQuestionById(id);
            if (question == null)
            {
                throw new Exception("Bad Question ID");
            }
            return question;
        }

        public Question EditQuestion(Question questionData)
        {
            var question = _repo.GetQuestionById(questionData.Id);
            question.Title = questionData.Title;
            question.Body = questionData.Body;
            bool success = _repo.EditQuestion(question);
            if (!success)
            {
                throw new Exception("Could not edit Question");
            }
            return question;
        }

        public Question DeleteQuestion(string id)
        {
            var question = GetQuestionById(id);
            if (question.AnswerId != "")
            { throw new Exception("Answered Questions cannot be deleted"); }
            var deleted = _repo.DeleteQuestion(id);
            if (!deleted)
            {
                throw new Exception($"Could not delete question with ID {id}");
            }
            return question;
        }

        public QuestionsService(QuestionsRepository repo)
        {
            _repo = repo;
        }
    }
}