using System.Collections.Generic;
using PotatoTradingWebApi.Controllers;
using PotatoTradingWebApi.Models;
using Xunit;


namespace PotatoTradingWebApi.Tests
{
    public class TestProductController
    {
        [Fact]
        public void Test1()
        {
            var testProducts = GetTestProducts();
            //var controller = new ProductController();

        }


        private List<Product> GetTestProducts()
        {
            var testProducts = new List<Product>();
            testProducts.Add(new Product { ProductId = 1, VarietyName= "Demo1"});
            testProducts.Add(new Product { ProductId = 2, VarietyName= "Demo2"});
            testProducts.Add(new Product { ProductId = 3, VarietyName= "Demo3"});
            testProducts.Add(new Product { ProductId = 4, VarietyName= "Demo4"});
            return testProducts;
        }
    }
}
