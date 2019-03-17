using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PotatoTradingWebApi.Models
{
    public class PotatoContext: DbContext
    {
        public PotatoContext()
        {
        }

        public PotatoContext(DbContextOptions<PotatoContext> options)
            : base(options)
        { }

        public DbSet<Product> Products { get; set; }
        public DbSet<StorageCompany> StorageCompanies{ get; set; }
    }
}
