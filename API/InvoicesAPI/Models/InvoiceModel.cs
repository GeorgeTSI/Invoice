namespace InvoicesAPI.Models
{
    public class InvoiceModel
    {
        public int Id { get; set; }
        public int Date { get; set; }
        public int Status { get; set; }
        public int Amount { get; set; }
    }
}
