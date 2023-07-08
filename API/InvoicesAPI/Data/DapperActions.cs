using Dapper;
using System.Data;

namespace InvoicesAPI.Data
{
    public class DapperActions
    {
        public async Task<IEnumerable<T>> DapperQuery<T>(IDbConnection connection, string sql, object param = null, CommandType? commandType = CommandType.StoredProcedure, IDbTransaction transaction = null)
        {
            using (IDbConnection conn = connection)
            {
                return await conn.QueryAsync<T>(sql, param, commandType: commandType, transaction: transaction);
            }
        }

        public async Task<T> DapperQueryFirst<T>(IDbConnection connection, string sql, object param = null, CommandType? commandType = CommandType.StoredProcedure, IDbTransaction transaction = null)
        {
            using (IDbConnection conn = connection)
            {
                return await conn.QueryFirstOrDefaultAsync<T>(sql, param, commandType: commandType, transaction: transaction);
            }
        }

        public async Task DapperExecute(IDbConnection connection, string sql, object param = null, CommandType? commandType = CommandType.StoredProcedure, IDbTransaction transaction = null)
        {
            using (IDbConnection conn = connection)
            {
                await conn.ExecuteAsync(sql, param, commandType: commandType, transaction: transaction);
            }
        }

    }
}
