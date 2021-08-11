using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace CitiesAutoComplete.Models
{
        public class City
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Country { get; set; }
            public string SubCountry { get; set; }
            public int GeonameId { get; set; }
        }
}
