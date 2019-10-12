using System;
using System.Collections.Generic;
using StackUnderflow.Interfaces;

namespace StackUnderflow.Models
{
    public class Question : IQuestion
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string AuthorId { get; set; }
        public string AnswerId { get; set; }
        public List<Category> Tags { get; set; }
        public bool Deleted { get; set; }
        public DateTime? QuestionAdded { get; set; }
        public DateTime? QuestionDeletedAt { get; set; }
    }
}