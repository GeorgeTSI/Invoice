using InvoicesAPI.Data;
using InvoicesAPI.Models;

namespace InvoicesAPI.Repositories
{
    public class InvoiceRepository: IInvoiceRepository
    {
        private readonly Connections _conn;

        public InvoiceRepository(Connections conn)
        {
            _conn = conn;
        }

        public async Task<IEnumerable<InvoiceModel>> GetInvoices()
        {
            string sql = "Get_Invoices";

            return await new DapperActions().DapperQuery<InvoiceModel>(_conn.localDB, sql);
        }

        public async Task<IEnumerable<InvoiceModel>> AddInvoice(InvoiceModel model)
        {
            string sql = "Add_Invoice";
            object _param = new
            {
                Date = model.Date,
                Status = model.Status,
                Amount = model.Amount
            };

            return await new DapperActions().DapperQuery<InvoiceModel>(_conn.localDB, sql, _param);
        }

        public async Task<IEnumerable<InvoiceModel>> UpdateInvoice(InvoiceUpModel model)
        {
            string sql = "Update_Invoice";
            object _param = new
            {
                Id = model.Id,
                Amount = model.Amount
            };

            return await new DapperActions().DapperQuery<InvoiceModel>(_conn.localDB, sql, _param);
        }

    }
}
