namespace StackUnderflow.Models
{
    public class Cataction
    {
        public string Id { get; set; }
        public string CategoryId { get; set; }
        public string QuestionId { get; set; }
        public bool AddedToQuestion { get; set; }
        public string Action { get; set; }
    }
}