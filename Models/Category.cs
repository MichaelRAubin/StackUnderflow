using System;
using StackUnderflow.Interfaces;

namespace StackUnderflow.Models
{
    public class Category : ICategory
    {
        public string Id { get; set; }
        public string Name { get; set; }
        //public bool AddedToQuestion { get; set; }
        public DateTime? DateCatAdded { get; set; }
        public DateTime? CatDeletedAt { get; set; }
    }
}