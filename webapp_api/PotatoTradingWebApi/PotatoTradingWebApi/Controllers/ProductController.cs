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

        // GET api/product
        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            var result = new List<Product>
            {
                new Product {ProductId = 1, VarietyName = "Accent"},
                new Product {ProductId = 2, VarietyName = "Accord"},

            };
            return result;
        }

        // GET api/product/fromdb
        [HttpGet]
        [Route("fromdb")]
        public ActionResult<IEnumerable<Product>> GetFromDb()
        {
            var result = _dataLayer.GetProducts();
            return result.ToList();
        }
    }
}