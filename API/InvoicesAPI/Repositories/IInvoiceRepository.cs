using InvoicesAPI.Models;

namespace InvoicesAPI.Repositories
{
    public interface IInvoiceRepository
    {
        Task<IEnumerable<InvoiceModel>> GetInvoices();

        Task<IEnumerable<InvoiceModel>> AddInvoice(InvoiceModel model);

        Task<IEnumerable<InvoiceModel>> UpdateInvoice(InvoiceUpModel model);
    }
}
