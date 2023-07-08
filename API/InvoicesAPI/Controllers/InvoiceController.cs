using InvoicesAPI.Models;
using InvoicesAPI.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InvoicesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly IInvoiceRepository _repo;

        public InvoiceController(IInvoiceRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("getInvoices")]
        public IActionResult GetInvoices()
        {
            var result = _repo.GetInvoices();
            return Ok(result);
        }

        [HttpPost("addInvoice")]
        public IActionResult AddInvoice(InvoiceModel model)
        {
            return Ok(_repo.AddInvoice(model));
        }

        [HttpPost("updateInvoice")]
        public IActionResult UpdateInvoices(InvoiceUpModel model)
        {
            return Ok(_repo.UpdateInvoice(model));
        }


    }
}
