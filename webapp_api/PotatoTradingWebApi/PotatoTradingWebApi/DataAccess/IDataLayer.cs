using System.Collections.Generic;
using PotatoTradingWebApi.Models;

namespace PotatoTradingWebApi.DataAccess
{
    public interface IDataLayer
    {
        IEnumerable<Product> GetProducts();
    }
}