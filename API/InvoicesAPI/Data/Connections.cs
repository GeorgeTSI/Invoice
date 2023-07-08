using System.Data;
using System.Data.SqlClient;

namespace InvoicesAPI.Data
{
    public class Connections
    {
        private readonly IConfiguration _config;

        public Connections(IConfiguration configuration)
        {
            _config = configuration;
        }

        public IDbConnection localDB
        {
            get
            {
                return new SqlConnection(_config.GetConnectionString("localDB"));
            }
        }


    }
}
