using System;
using System.Collections.Generic;
using System.Linq;
using PotatoTradingWebApi.Models;

namespace PotatoTradingWebApi.DataAccess
{
    public class DataLayer : IDataLayer
    {
        public IEnumerable<Product> GetProducts()
        {
            using (var db = new PotatoContext())
            {
                var query = from p in db.Products
                    orderby p.ProductId
                    select p;
                Console.WriteLine(query);
                return query;
            }
            
        }
    }
}
