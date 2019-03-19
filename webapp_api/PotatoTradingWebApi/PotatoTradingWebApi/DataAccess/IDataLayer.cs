using System;
using System.Collections.Generic;
using PotatoTradingWebApi.Models;

namespace PotatoTradingWebApi.DataAccess
{
    public interface IDataLayer
    {
        IEnumerable<Product> GetProducts();
        IEnumerable<String> GetProductNames();
        IEnumerable<String> GetStorageCompanies();
        //IEnumerable<StorageCompany> GetStorageCompanies();
        int SetNewPrice(FormInfo forminfo);

    }
}