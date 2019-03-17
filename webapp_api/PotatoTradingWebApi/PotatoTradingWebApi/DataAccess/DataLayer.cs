using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using PotatoTradingWebApi.Models;

namespace PotatoTradingWebApi.DataAccess
{
    public class DataLayer : IDataLayer
    {
        private readonly PotatoContext _db;

        public DataLayer(PotatoContext context)
        {
            _db = context;
        }


        public IEnumerable<Product> GetProducts()
        {
            var query = from p in _db.Product
                orderby p.ProductId
                select p;
            Console.WriteLine(query);
            return query;
            
        }
    }
}
