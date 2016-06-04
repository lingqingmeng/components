
angular.module('treemap',[]).directive('heatMap', function() {
  return {
    restrict: 'C',
    replace: true,
    scope: {
      infor: '='
    },
    controller: function ($scope, $element, $attrs) {
     
    },
    template: '<div id="holder" style="margin: 0 auto"></div>',
    link: function(scope,element,attrs){
       var data = {
    "Southern Asia": {
        "Afghanistan": {
            "population": 26023100,
            "area": 652230,
            "reg": "Asia",
            "subregion": "Southern Asia"
        },
        "Bangladesh": {
            "population": 157486000,
            "area": 147570,
            "reg": "Asia",
            "subregion": "Southern Asia"
        },
        "Bhutan": {
            "population": 755030,
            "area": 38394,
            "reg": "Asia",
            "subregion": "Southern Asia"
        },
        "India": {
            "population": 1263930000,
            "area": 3287590,
            "reg": "Asia",
            "subregion": "Southern Asia"
        },
        "Iran": {
            "population": 77966400,
            "area": 1648195,
            "reg": "Asia",
            "subregion": "Southern Asia"
        },
        "Maldives": {
            "population": 341256,
            "area": 300,
            "reg": "Asia",
            "subregion": "Southern Asia"
        },
        "Nepal": {
            "population": 27646053,
            "area": 147181,
            "reg": "Asia",
            "subregion": "Southern Asia"
        },
        "Pakistan": {
            "population": 188410000,
            "area": 881912,
            "reg": "Asia",
            "subregion": "Southern Asia"
        },
        "Sri Lanka": {
            "population": 20277597,
            "area": 65610,
            "reg": "Asia",
            "subregion": "Southern Asia"
        }
    },
    "Western Asia": {
        "Armenia": {
            "population": 3009800,
            "area": 29743,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Azerbaijan": {
            "population": 9552500,
            "area": 86600,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Bahrain": {
            "population": 1316500,
            "area": 765,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Georgia": {
            "population": 4490500,
            "area": 69700,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Iraq": {
            "population": 36004552,
            "area": 438317,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Israel": {
            "population": 8268400,
            "area": 20770,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Jordan": {
            "population": 6666960,
            "area": 89342,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Kuwait": {
            "population": 3268431,
            "area": 17818,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Lebanon": {
            "population": 4104000,
            "area": 10452,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Oman": {
            "population": 4089076,
            "area": 309500,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Palestine": {
            "population": 4550368,
            "area": 1,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Qatar": {
            "population": 2269672,
            "area": 11586,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Saudi Arabia": {
            "population": 30770375,
            "area": 2149690,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Syria": {
            "population": 22964324,
            "area": 185180,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Turkey": {
            "population": 76667864,
            "area": 783562,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "United Arab Emirates": {
            "population": 9446000,
            "area": 83600,
            "reg": "Asia",
            "subregion": "Western Asia"
        },
        "Yemen": {
            "population": 25956000,
            "area": 527968,
            "reg": "Asia",
            "subregion": "Western Asia"
        }
    },
    "South-Eastern Asia": {
        "Brunei": {
            "population": 393372,
            "area": 5765,
            "reg": "Asia",
            "subregion": "South-Eastern Asia"
        },
        "Cambodia": {
            "population": 15184116,
            "area": 181035,
            "reg": "Asia",
            "subregion": "South-Eastern Asia"
        },
        "Indonesia": {
            "population": 252164800,
            "area": 1904569,
            "reg": "Asia",
            "subregion": "South-Eastern Asia"
        },
        "Laos": {
            "population": 6693300,
            "area": 236800,
            "reg": "Asia",
            "subregion": "South-Eastern Asia"
        },
        "Malaysia": {
            "population": 30430500,
            "area": 330803,
            "reg": "Asia",
            "subregion": "South-Eastern Asia"
        },
        "Myanmar": {
            "population": 61120000,
            "area": 676578,
            "reg": "Asia",
            "subregion": "South-Eastern Asia"
        },
        "Philippines": {
            "population": 100697400,
            "area": 342353,
            "reg": "Asia",
            "subregion": "South-Eastern Asia"
        },
        "Singapore": {
            "population": 5469700,
            "area": 710,
            "reg": "Asia",
            "subregion": "South-Eastern Asia"
        },
        "Thailand": {
            "population": 64871000,
            "area": 513120,
            "reg": "Asia",
            "subregion": "South-Eastern Asia"
        },
        "East Timor": {
            "population": 1172390,
            "area": 14874,
            "reg": "Asia",
            "subregion": "South-Eastern Asia"
        },
        "Vietnam": {
            "population": 89708900,
            "area": 331212,
            "reg": "Asia",
            "subregion": "South-Eastern Asia"
        }
    },
    "Eastern Asia": {
        "China": {
            "population": 1367110000,
            "area": 9640011,
            "reg": "Asia",
            "subregion": "Eastern Asia"
        },
        "Hong Kong": {
            "population": 7234800,
            "area": 1104,
            "reg": "Asia",
            "subregion": "Eastern Asia"
        },
        "Japan": {
            "population": 127080000,
            "area": 377930,
            "reg": "Asia",
            "subregion": "Eastern Asia"
        },
        "Macau": {
            "population": 631000,
            "area": 30,
            "reg": "Asia",
            "subregion": "Eastern Asia"
        },
        "Mongolia": {
            "population": 2987733,
            "area": 1564110,
            "reg": "Asia",
            "subregion": "Eastern Asia"
        },
        "North Korea": {
            "population": 25027000,
            "area": 120538,
            "reg": "Asia",
            "subregion": "Eastern Asia"
        },
        "South Korea": {
            "population": 50423955,
            "area": 100210,
            "reg": "Asia",
            "subregion": "Eastern Asia"
        },
        "Taiwan": {
            "population": 23424615,
            "area": 36193,
            "reg": "Asia",
            "subregion": "Eastern Asia"
        }
    },
    "Central Asia": {
        "Kazakhstan": {
            "population": 17377800,
            "area": 2724900,
            "reg": "Asia",
            "subregion": "Central Asia"
        },
        "Kyrgyzstan": {
            "population": 5776570,
            "area": 199951,
            "reg": "Asia",
            "subregion": "Central Asia"
        },
        "Tajikistan": {
            "population": 8161000,
            "area": 143100,
            "reg": "Asia",
            "subregion": "Central Asia"
        },
        "Turkmenistan": {
            "population": 5838064,
            "area": 488100,
            "reg": "Asia",
            "subregion": "Central Asia"
        },
        "Uzbekistan": {
            "population": 30492800,
            "area": 447400,
            "reg": "Asia",
            "subregion": "Central Asia"
        }
    },
    "Northern Europe": {
        "Åland Islands": {
            "population": 28875,
            "area": 1580,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "Denmark": {
            "population": 5655750,
            "area": 43094,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "Estonia": {
            "population": 1315819,
            "area": 45227,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "Faroe Islands": {
            "population": 48605,
            "area": 1393,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "Finland": {
            "population": 5470437,
            "area": 338424,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "Guernsey": {
            "population": 63085,
            "area": 78,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "Iceland": {
            "population": 328170,
            "area": 103000,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "Republic of Ireland": {
            "population": 6378000,
            "area": 70273,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "Isle of Man": {
            "population": 84497,
            "area": 572,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "Jersey": {
            "population": 99000,
            "area": 116,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "Latvia": {
            "population": 1991800,
            "area": 64559,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "Lithuania": {
            "population": 2927310,
            "area": 65300,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "Norway": {
            "population": 5156450,
            "area": 323802,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "Svalbard and Jan Mayen": {
            "population": 2562,
            "area": 1,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "Sweden": {
            "population": 9737521,
            "area": 450295,
            "reg": "Europe",
            "subregion": "Northern Europe"
        },
        "United Kingdom": {
            "population": 64105654,
            "area": 242900,
            "reg": "Europe",
            "subregion": "Northern Europe"
        }
    },
    "Southern Europe": {
        "Albania": {
            "population": 2895947,
            "area": 28748,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "Andorra": {
            "population": 76098,
            "area": 468,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "Bosnia and Herzegovina": {
            "population": 3791622,
            "area": 51209,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "Croatia": {
            "population": 4267558,
            "area": 56594,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "Cyprus": {
            "population": 858000,
            "area": 9251,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "Gibraltar": {
            "population": 30001,
            "area": 6,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "Greece": {
            "population": 10992589,
            "area": 131990,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "Italy": {
            "population": 60769102,
            "area": 301336,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "Republic of Macedonia": {
            "population": 2058539,
            "area": 25713,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "Malta": {
            "population": 416055,
            "area": 316,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "Montenegro": {
            "population": 620029,
            "area": 13812,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "Portugal": {
            "population": 10477800,
            "area": 92090,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "San Marino": {
            "population": 32743,
            "area": 61,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "Serbia": {
            "population": 7146759,
            "area": 88361,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "Slovenia": {
            "population": 2064966,
            "area": 20273,
            "reg": "Europe",
            "subregion": "Southern Europe"
        },
        "Spain": {
            "population": 46507760,
            "area": 505992,
            "reg": "Europe",
            "subregion": "Southern Europe"
        }
    },
    "Western Europe": {
        "Austria": {
            "population": 8527230,
            "area": 83871,
            "reg": "Europe",
            "subregion": "Western Europe"
        },
        "Belgium": {
            "population": 11225469,
            "area": 30528,
            "reg": "Europe",
            "subregion": "Western Europe"
        },
        "France": {
            "population": 66078000,
            "area": 640679,
            "reg": "Europe",
            "subregion": "Western Europe"
        },
        "Germany": {
            "population": 80783000,
            "area": 357114,
            "reg": "Europe",
            "subregion": "Western Europe"
        },
        "Liechtenstein": {
            "population": 37132,
            "area": 160,
            "reg": "Europe",
            "subregion": "Western Europe"
        },
        "Luxembourg": {
            "population": 549700,
            "area": 2586,
            "reg": "Europe",
            "subregion": "Western Europe"
        },
        "Monaco": {
            "population": 36950,
            "area": 2.02,
            "reg": "Europe",
            "subregion": "Western Europe"
        },
        "Netherlands": {
            "population": 16881000,
            "area": 41850,
            "reg": "Europe",
            "subregion": "Western Europe"
        },
        "Switzerland": {
            "population": 8183800,
            "area": 41284,
            "reg": "Europe",
            "subregion": "Western Europe"
        }
    },
    "Eastern Europe": {
        "Belarus": {
            "population": 9475100,
            "area": 207600,
            "reg": "Europe",
            "subregion": "Eastern Europe"
        },
        "Bulgaria": {
            "population": 7245677,
            "area": 110879,
            "reg": "Europe",
            "subregion": "Eastern Europe"
        },
        "Czech Republic": {
            "population": 10521600,
            "area": 78865,
            "reg": "Europe",
            "subregion": "Eastern Europe"
        },
        "Hungary": {
            "population": 9879000,
            "area": 93028,
            "reg": "Europe",
            "subregion": "Eastern Europe"
        },
        "Moldova": {
            "population": 3557600,
            "area": 33846,
            "reg": "Europe",
            "subregion": "Eastern Europe"
        },
        "Poland": {
            "population": 38496000,
            "area": 312679,
            "reg": "Europe",
            "subregion": "Eastern Europe"
        },
        "Republic of Kosovo": {
            "population": 1733842,
            "area": 10908,
            "reg": "Europe",
            "subregion": "Eastern Europe"
        },
        "Romania": {
            "population": 19942642,
            "area": 238391,
            "reg": "Europe",
            "subregion": "Eastern Europe"
        },
        "Russia": {
            "population": 146233000,
            "area": 17124442,
            "reg": "Europe",
            "subregion": "Eastern Europe"
        },
        "Slovakia": {
            "population": 5415949,
            "area": 49037,
            "reg": "Europe",
            "subregion": "Eastern Europe"
        },
        "Ukraine": {
            "population": 42973696,
            "area": 603700,
            "reg": "Europe",
            "subregion": "Eastern Europe"
        }
    },
    "Northern Africa": {
        "Algeria": {
            "population": 38700000,
            "area": 2381741,
            "reg": "Africa",
            "subregion": "Northern Africa"
        },
        "Egypt": {
            "population": 87668100,
            "area": 1002450,
            "reg": "Africa",
            "subregion": "Northern Africa"
        },
        "Libya": {
            "population": 6253000,
            "area": 1759540,
            "reg": "Africa",
            "subregion": "Northern Africa"
        },
        "Morocco": {
            "population": 33465000,
            "area": 446550,
            "reg": "Africa",
            "subregion": "Northern Africa"
        },
        "Sudan": {
            "population": 37289406,
            "area": 1886068,
            "reg": "Africa",
            "subregion": "Northern Africa"
        },
        "Tunisia": {
            "population": 10982754,
            "area": 163610,
            "reg": "Africa",
            "subregion": "Northern Africa"
        },
        "Western Sahara": {
            "population": 586000,
            "area": 266000,
            "reg": "Africa",
            "subregion": "Northern Africa"
        }
    },
    "Middle Africa": {
        "Angola": {
            "population": 24383301,
            "area": 1246700,
            "reg": "Africa",
            "subregion": "Middle Africa"
        },
        "Cameroon": {
            "population": 20386799,
            "area": 475442,
            "reg": "Africa",
            "subregion": "Middle Africa"
        },
        "Central African Republic": {
            "population": 4709000,
            "area": 622984,
            "reg": "Africa",
            "subregion": "Middle Africa"
        },
        "Chad": {
            "population": 13211000,
            "area": 1284000,
            "reg": "Africa",
            "subregion": "Middle Africa"
        },
        "Republic of the Congo": {
            "population": 4559000,
            "area": 342000,
            "reg": "Africa",
            "subregion": "Middle Africa"
        },
        "Democratic Republic of the Congo": {
            "population": 69360000,
            "area": 2344858,
            "reg": "Africa",
            "subregion": "Middle Africa"
        },
        "Equatorial Guinea": {
            "population": 1430000,
            "area": 28051,
            "reg": "Africa",
            "subregion": "Middle Africa"
        },
        "Gabon": {
            "population": 1711000,
            "area": 267668,
            "reg": "Africa",
            "subregion": "Middle Africa"
        },
        "São Tomé and Príncipe": {
            "population": 187356,
            "area": 964,
            "reg": "Africa",
            "subregion": "Middle Africa"
        },
        "South Sudan": {
            "population": 11384393,
            "area": 619745,
            "reg": "Africa",
            "subregion": "Middle Africa"
        }
    },
    "Western Africa": {
        "Benin": {
            "population": 9988068,
            "area": 112622,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Burkina Faso": {
            "population": 17322796,
            "area": 272967,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Cape Verde": {
            "population": 518467,
            "area": 4033,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "The Gambia": {
            "population": 1882450,
            "area": 11295,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Ghana": {
            "population": 27043093,
            "area": 238533,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Guinea": {
            "population": 10628972,
            "area": 245857,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Guinea-Bissau": {
            "population": 1746000,
            "area": 36125,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Ivory Coast": {
            "population": 23821000,
            "area": 322463,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Liberia": {
            "population": 4397000,
            "area": 111369,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Mali": {
            "population": 15768000,
            "area": 1240192,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Mauritania": {
            "population": 3545620,
            "area": 1030700,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Niger": {
            "population": 17138707,
            "area": 1267000,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Nigeria": {
            "population": 178517000,
            "area": 923768,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Saint Helena": {
            "population": 4255,
            "area": 1,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Senegal": {
            "population": 13508715,
            "area": 196722,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Sierra Leone": {
            "population": 6205000,
            "area": 71740,
            "reg": "Africa",
            "subregion": "Western Africa"
        },
        "Togo": {
            "population": 6993000,
            "area": 56785,
            "reg": "Africa",
            "subregion": "Western Africa"
        }
    },
    "Southern Africa": {
        "Botswana": {
            "population": 2024904,
            "area": 582000,
            "reg": "Africa",
            "subregion": "Southern Africa"
        },
        "Lesotho": {
            "population": 2098000,
            "area": 30355,
            "reg": "Africa",
            "subregion": "Southern Africa"
        },
        "Namibia": {
            "population": 2113077,
            "area": 825615,
            "reg": "Africa",
            "subregion": "Southern Africa"
        },
        "South Africa": {
            "population": 54002000,
            "area": 1221037,
            "reg": "Africa",
            "subregion": "Southern Africa"
        },
        "Swaziland": {
            "population": 1106189,
            "area": 17364,
            "reg": "Africa",
            "subregion": "Southern Africa"
        }
    },
    "Eastern Africa": {
        "British Indian Ocean Territory": {
            "population": 3000,
            "area": 60,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Burundi": {
            "population": 9530434,
            "area": 27834,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Comoros": {
            "population": 763952,
            "area": 1862,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Djibouti": {
            "population": 886000,
            "area": 23200,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Eritrea": {
            "population": 6536000,
            "area": 117600,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Ethiopia": {
            "population": 87952991,
            "area": 1104300,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Kenya": {
            "population": 41800000,
            "area": 580367,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Madagascar": {
            "population": 21842167,
            "area": 587041,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Malawi": {
            "population": 15805239,
            "area": 118484,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Mauritius": {
            "population": 1261208,
            "area": 2040,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Mayotte": {
            "population": 212645,
            "area": 1,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Mozambique": {
            "population": 25041922,
            "area": 801590,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Réunion": {
            "population": 840974,
            "area": 1,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Rwanda": {
            "population": 10996891,
            "area": 26338,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Seychelles": {
            "population": 89949,
            "area": 452,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Somalia": {
            "population": 10806000,
            "area": 637657,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Tanzania": {
            "population": 47421786,
            "area": 945087,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Uganda": {
            "population": 34856813,
            "area": 241550,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Zambia": {
            "population": 15023315,
            "area": 752612,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        },
        "Zimbabwe": {
            "population": 13061239,
            "area": 390757,
            "reg": "Africa",
            "subregion": "Eastern Africa"
        }
    },
    "Polynesia": {
        "American Samoa": {
            "population": 55519,
            "area": 199,
            "reg": "Oceania",
            "subregion": "Polynesia"
        },
        "Cook Islands": {
            "population": 14974,
            "area": 236,
            "reg": "Oceania",
            "subregion": "Polynesia"
        },
        "French Polynesia": {
            "population": 268270,
            "area": 4167,
            "reg": "Oceania",
            "subregion": "Polynesia"
        },
        "Niue": {
            "population": 1613,
            "area": 260,
            "reg": "Oceania",
            "subregion": "Polynesia"
        },
        "Pitcairn Islands": {
            "population": 56,
            "area": 47,
            "reg": "Oceania",
            "subregion": "Polynesia"
        },
        "Samoa": {
            "population": 187820,
            "area": 2842,
            "reg": "Oceania",
            "subregion": "Polynesia"
        },
        "Tokelau": {
            "population": 1411,
            "area": 12,
            "reg": "Oceania",
            "subregion": "Polynesia"
        },
        "Tonga": {
            "population": 103252,
            "area": 747,
            "reg": "Oceania",
            "subregion": "Polynesia"
        },
        "Tuvalu": {
            "population": 11323,
            "area": 26,
            "reg": "Oceania",
            "subregion": "Polynesia"
        },
        "Wallis and Futuna": {
            "population": 13135,
            "area": 142,
            "reg": "Oceania",
            "subregion": "Polynesia"
        }
    },
    "Australia and New Zealand": {
        "Australia": {
            "population": 23696900,
            "area": 7692024,
            "reg": "Oceania",
            "subregion": "Australia and New Zealand"
        },
        "Christmas Island": {
            "population": 2072,
            "area": 135,
            "reg": "Oceania",
            "subregion": "Australia and New Zealand"
        },
        "Cocos (Keeling) Islands": {
            "population": 550,
            "area": 14,
            "reg": "Oceania",
            "subregion": "Australia and New Zealand"
        },
        "New Zealand": {
            "population": 4547900,
            "area": 270467,
            "reg": "Oceania",
            "subregion": "Australia and New Zealand"
        },
        "Norfolk Island": {
            "population": 2302,
            "area": 36,
            "reg": "Oceania",
            "subregion": "Australia and New Zealand"
        }
    },
    "Melanesia": {
        "Fiji": {
            "population": 859178,
            "area": 18272,
            "reg": "Oceania",
            "subregion": "Melanesia"
        },
        "New Caledonia": {
            "population": 268767,
            "area": 18575,
            "reg": "Oceania",
            "subregion": "Melanesia"
        },
        "Papua New Guinea": {
            "population": 7398500,
            "area": 462840,
            "reg": "Oceania",
            "subregion": "Melanesia"
        },
        "Solomon Islands": {
            "population": 581344,
            "area": 28896,
            "reg": "Oceania",
            "subregion": "Melanesia"
        },
        "Vanuatu": {
            "population": 264652,
            "area": 12189,
            "reg": "Oceania",
            "subregion": "Melanesia"
        }
    },
    "Micronesia": {
        "Guam": {
            "population": 159358,
            "area": 549,
            "reg": "Oceania",
            "subregion": "Micronesia"
        },
        "Kiribati": {
            "population": 106461,
            "area": 811,
            "reg": "Oceania",
            "subregion": "Micronesia"
        },
        "Marshall Islands": {
            "population": 56086,
            "area": 181,
            "reg": "Oceania",
            "subregion": "Micronesia"
        },
        "Federated States of Micronesia": {
            "population": 101351,
            "area": 702,
            "reg": "Oceania",
            "subregion": "Micronesia"
        },
        "Nauru": {
            "population": 10084,
            "area": 21,
            "reg": "Oceania",
            "subregion": "Micronesia"
        },
        "Northern Mariana Islands": {
            "population": 53883,
            "area": 464,
            "reg": "Oceania",
            "subregion": "Micronesia"
        },
        "Palau": {
            "population": 20901,
            "area": 459,
            "reg": "Oceania",
            "subregion": "Micronesia"
        }
    },
    "Caribbean": {
        "Anguilla": {
            "population": 13452,
            "area": 91,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Antigua and Barbuda": {
            "population": 86295,
            "area": 442,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Aruba": {
            "population": 101484,
            "area": 180,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "The Bahamas": {
            "population": 319031,
            "area": 13943,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Barbados": {
            "population": 285000,
            "area": 430,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Bonaire": {
            "population": 17408,
            "area": 294,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "British Virgin Islands": {
            "population": 29537,
            "area": 151,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Cayman Islands": {
            "population": 55456,
            "area": 264,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Cuba": {
            "population": 11210064,
            "area": 109884,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Curaçao": {
            "population": 150563,
            "area": 444,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Dominica": {
            "population": 71293,
            "area": 751,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Dominican Republic": {
            "population": 10378267,
            "area": 48671,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Grenada": {
            "population": 103328,
            "area": 344,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Guadeloupe": {
            "population": 405739,
            "area": 1,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Haiti": {
            "population": 10745665,
            "area": 27750,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Jamaica": {
            "population": 2717991,
            "area": 10991,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Martinique": {
            "population": 386486,
            "area": 1,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Montserrat": {
            "population": 4922,
            "area": 102,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Puerto Rico": {
            "population": 3615086,
            "area": 8870,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Saint Barthélemy": {
            "population": 8938,
            "area": 21,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Saint Kitts and Nevis": {
            "population": 55000,
            "area": 261,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Saint Lucia": {
            "population": 184000,
            "area": 616,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Saint Martin": {
            "population": 36979,
            "area": 53,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Saint Vincent and the Grenadines": {
            "population": 109000,
            "area": 389,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Sint Maarten": {
            "population": 37429,
            "area": 34,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Trinidad and Tobago": {
            "population": 1328019,
            "area": 5130,
            "reg": "Americas",
            "subregion": "Caribbean"
        },
        "Turks and Caicos Islands": {
            "population": 31458,
            "area": 948,
            "reg": "Americas",
            "subregion": "Caribbean"
        }
    },
    "South America": {
        "Argentina": {
            "population": 42669500,
            "area": 2780400,
            "reg": "Americas",
            "subregion": "South America"
        },
        "Bolivia": {
            "population": 10027254,
            "area": 1098581,
            "reg": "Americas",
            "subregion": "South America"
        },
        "Brazil": {
            "population": 203586000,
            "area": 8515767,
            "reg": "Americas",
            "subregion": "South America"
        },
        "Chile": {
            "population": 17819054,
            "area": 756102,
            "reg": "Americas",
            "subregion": "South America"
        },
        "Colombia": {
            "population": 47907800,
            "area": 1141748,
            "reg": "Americas",
            "subregion": "South America"
        },
        "Ecuador": {
            "population": 15888900,
            "area": 276841,
            "reg": "Americas",
            "subregion": "South America"
        },
        "Falkland Islands": {
            "population": 3000,
            "area": 12173,
            "reg": "Americas",
            "subregion": "South America"
        },
        "French Guiana": {
            "population": 237549,
            "area": 1,
            "reg": "Americas",
            "subregion": "South America"
        },
        "Guyana": {
            "population": 784894,
            "area": 214969,
            "reg": "Americas",
            "subregion": "South America"
        },
        "Paraguay": {
            "population": 6893727,
            "area": 406752,
            "reg": "Americas",
            "subregion": "South America"
        },
        "Peru": {
            "population": 30814175,
            "area": 1285216,
            "reg": "Americas",
            "subregion": "South America"
        },
        "South Georgia": {
            "population": 30,
            "area": 1,
            "reg": "Americas",
            "subregion": "South America"
        },
        "Suriname": {
            "population": 534189,
            "area": 163820,
            "reg": "Americas",
            "subregion": "South America"
        },
        "Uruguay": {
            "population": 3404189,
            "area": 181034,
            "reg": "Americas",
            "subregion": "South America"
        },
        "Venezuela": {
            "population": 30206307,
            "area": 916445,
            "reg": "Americas",
            "subregion": "South America"
        }
    },
    "Central America": {
        "Belize": {
            "population": 349728,
            "area": 22966,
            "reg": "Americas",
            "subregion": "Central America"
        },
        "Costa Rica": {
            "population": 4713168,
            "area": 51100,
            "reg": "Americas",
            "subregion": "Central America"
        },
        "El Salvador": {
            "population": 6401240,
            "area": 21041,
            "reg": "Americas",
            "subregion": "Central America"
        },
        "Guatemala": {
            "population": 15806675,
            "area": 108889,
            "reg": "Americas",
            "subregion": "Central America"
        },
        "Honduras": {
            "population": 8725111,
            "area": 112492,
            "reg": "Americas",
            "subregion": "Central America"
        },
        "Mexico": {
            "population": 119713203,
            "area": 1964375,
            "reg": "Americas",
            "subregion": "Central America"
        },
        "Nicaragua": {
            "population": 6134270,
            "area": 130373,
            "reg": "Americas",
            "subregion": "Central America"
        },
        "Panama": {
            "population": 3713312,
            "area": 75417,
            "reg": "Americas",
            "subregion": "Central America"
        }
    },
    "Northern America": {
        "Bermuda": {
            "population": 64237,
            "area": 54,
            "reg": "Americas",
            "subregion": "Northern America"
        },
        "United States Minor Outlying Islands": {
            "population": 300,
            "area": 1,
            "reg": "Americas",
            "subregion": "Northern America"
        },
        "Canada": {
            "population": 35540419,
            "area": 9984670,
            "reg": "Americas",
            "subregion": "Northern America"
        },
        "Greenland": {
            "population": 56295,
            "area": 2166086,
            "reg": "Americas",
            "subregion": "Northern America"
        },
        "Saint Pierre and Miquelon": {
            "population": 6081,
            "area": 242,
            "reg": "Americas",
            "subregion": "Northern America"
        },
        "United States": {
            "population": 319259000,
            "area": 9629091,
            "reg": "Americas",
            "subregion": "Northern America"
        }
    }
};  
      var points = [],
    region_p,
    region_val,
    region_i,
    country_p,
    country_i,
    cause_p,
    cause_i,
    cause_name = [];
  //cause_name['population'] = 'Population';
  cause_name['area'] = 'Area';
  region_i = 0;
  for (var region in data) {
    region_val = 0;
    region_p = {
      id: "id_" + region_i,
      name: region,
      color: Highcharts.getOptions().colors[region_i]
    };
    country_i = 0;
    for (var country in data[region]) {
      country_p = {
        id: region_p.id + "_" + country_i,
        name: country,
        parent: region_p.id
      };
      points.push(country_p);
      cause_i = 0;
      for (var cause in data[region][country]) {
                if ((cause == 'reg') || (cause =='population') ||(cause == 'subregion')){
                    
                } else {
                    cause_p = {
          id: country_p.id + "_" + cause_i,
          name: cause_name[cause],
          parent: country_p.id,
          value: Math.round(+data[region][country][cause])
        };
        region_val += cause_p.value;
        points.push(cause_p);
        cause_i++;
                }
        
      }
      country_i++;
    }
        console.log("points",points);
    region_p.value = Math.round(region_val / country_i);
    points.push(region_p);
    region_i++;
  }
  var chart = new Highcharts.Chart({
    chart: {
      renderTo: 'holder'
    },
    series: [{
      turboThreshold: 0,
      type: "treemap",
      layoutAlgorithm: 'squarified',
      allowDrillToNode: true,
      dataLabels: {
        enabled: false
      },
      levelIsConstant: false,
      levels: [{
        level: 1,
        dataLabels: {
          enabled: true
        },
        borderWidth: 3
      }],
      data: points
    }],
    subtitle: {
      text: 'Click points to drill down.'
    },
    title: {
      text: 'Region area tree map'
    }
  });
    


      //watch exists within link function
      // scope.$watch("infor", function (newValue) {
        
      //   //data = newValue;
      //   console.log('data in watch',newValue);
      //   setIdPoints(newValue);
      //   //console.log('updatedPoints',updatedPoints);
      //   //console.log("points in watch",points);
      //   //chart.series[0].setData(updatedPoints, true);
      // }, true);
      //end link
    }
  }
})