using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PotatoTradingWebApi.Models;

namespace PotatoTradingWebApi.DataAccess
{
    public class DataLayer : IDataLayer
    {
        private readonly PotatoContext _db;
        private readonly ILogger<DataLayer> _logger;

        public DataLayer(PotatoContext context, ILogger<DataLayer> logger)
        {
            _db = context;
            _logger = logger;
        }


        public IEnumerable<Product> GetProducts()
        {
            _logger.LogInformation("Fetching Products From Database");
            var query = from p in _db.Product
                orderby p.ProductId
                select p;
            return query;
            
        }

        public IEnumerable<String> GetProductNames()
        {
            _logger.LogInformation("Fetching Product Names From Database");
            var query = from p in _db.Product
                orderby p.VarietyName
                select p.VarietyName;
            return query;

        }


        public IEnumerable<StorageCompany> GetStorageCompanies()
        {
            _logger.LogInformation("Fetching Storage Companies From Database");
            var query = from r in _db.StorageCompany
                orderby r.Name
                select r;
            return query;

        }

        public int SetNewPrice(FormInfo forminfo)
        {
            //string varietyParam = "Accord";
            //int feeParam = 9999;
            //string brokerParam = "StorageKings";

            string varietyParam = forminfo.variety;
            float feeParam = forminfo.fee;
            string brokerParam = forminfo.storageCompany;

            _logger.LogInformation("Saving Product Info from form");
            var query = _db.Database.ExecuteSqlCommand("Exec dbo.SaveNewPrices 	@variety, @fee, @broker",
                varietyParam, feeParam, brokerParam);
            return query;
        }
    }
}
