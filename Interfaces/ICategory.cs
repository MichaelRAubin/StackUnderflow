using System;

namespace StackUnderflow.Interfaces
{
    public interface ICategory
    {
        string Id { get; set; }
        string Name { get; set; }

        DateTime? DateCatAdded { get; set; }
        DateTime? CatDeletedAt { get; set; }
    }
}