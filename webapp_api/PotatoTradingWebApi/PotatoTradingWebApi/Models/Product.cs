using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PotatoTradingWebApi.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        public string VarietyName { get; set; }
        public string Country { get; set; }
        public string ShapeOfTuber { get; set; }
        public string ColourOfSkin { get; set; }
        public string ColourOfFlesh { get; set; }
        public string DepthOfEyes { get; set; }
        public string SmoothnessOfSkin { get; set; }
        public string ColourOfBaseOfLightsprout { get; set; }
        public string Maturity { get; set; }
        public string HeightOfPlants { get; set; }
        public string FrequencyOfBerries { get; set; }
    }
}
