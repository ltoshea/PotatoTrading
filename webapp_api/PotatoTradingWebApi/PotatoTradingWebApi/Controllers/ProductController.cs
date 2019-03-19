using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PotatoTradingWebApi.DataAccess;
using PotatoTradingWebApi.Models;

namespace PotatoTradingWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly IDataLayer _dataLayer;

        public ProductController(ILogger<ProductController> logger, IDataLayer dataLayer)
        {
            _logger = logger;
            _dataLayer = dataLayer;

        }

        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProduct()
        {
            var result = _dataLayer.GetProducts();
            return result.ToList();
        }


        [HttpGet]
        [Route("names")]
        public ActionResult<IEnumerable<String>> GetProductNames()
        {
            var result = _dataLayer.GetProductNames();
            return result.ToList();
        }

        [HttpGet]
        [Route("storage")]
        public ActionResult<IEnumerable<String>> GetStorageCompany()
        {
            var result = _dataLayer.GetStorageCompanies();

            return result.ToList();
        }


        //[HttpGet]
        //[Route("storage")]
        //public ActionResult<IEnumerable<StorageCompany>> GetStorageCompany()
        //{
        //    var result = _dataLayer.GetStorageCompanies();
  
        //    return result.ToList();
        //}

        [HttpPost]
        [Route("newprice")]
        public ActionResult<int> SetNewPrice(FormInfo formInfo)
        {
            var result = _dataLayer.SetNewPrice(formInfo);
            return result;
        }

        //    // POST api/values
        //    [HttpPost]
        //    public void Post([FromBody] string value)
        //    {
        //    }

        //    // PUT api/values/5
        //    [HttpPut("{id}")]
        //    public void Put(int id, [FromBody] string value)
        //    {
        //    }

        //    // DELETE api/values/5
        //    [HttpDelete("{id}")]
        //    public void Delete(int id)
        //    {
        //    }
        //}
    }
}