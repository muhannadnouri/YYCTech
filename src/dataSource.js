// TODO: Convert this into "YYCDataSource", create separate JSON for each Canadian city
const dataSource = [
  {
    key: "1",
    name: "RS Energy Group (Enverus)",
    city: "Calgary",
    province: "AB",
    industry: "Energy"
  },
  {
    key: "2",
    name: "Shareworks by Morgan Stanley (formerly Solium Capital)",
    city: "Calgary",
    province: "AB",
    industry: "Energy"
  },
  {
    key: "3",
    name: "Arcurve",
    city: "Calgary",
    province: "AB",
    industry: "Tech"
  },
  {
    key: "4",
    name: "Hitachi ID Systems",
    city: "Calgary",
    province: "AB",
    industry: "Tech"
  },
  {
    key: "5",
    name: "Computer Modelling Group",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "6",
    name: "SMART Technologies",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "7",
    name: "Synopsys",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "8",
    name: "Benevity",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "9",
    name: "Garmin",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "10",
    name: "Pandell",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "11",
    name: "Shaw Communications",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "12",
    name: "ATB Financial",
    city: "Calgary",
    province: "AB",
    industry: "Banking"
  },
  {
    key: "13",
    name: "Pason Systems",
    city: "Calgary",
    province: "AB",
    industry: "Energy"
  },
  {
    key: "14",
    name: "Nureva",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "15",
    name: "IBM",
    city: "Calgary",
    province: "AB",
    industry: "Tech"
  },
  {
    key: "16",
    name: "NovAtel",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "17",
    name: "PureWeb (formerly Calgary Scientific)",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "18",
    name: "Symend",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "19",
    name: "Clio",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "20",
    name: "Athennian (formerly Paper Interactive)",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "21",
    name: "Showpass",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "22",
    name: "IHS Markit",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "23",
    name: "Robots and Pencils",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "24",
    name: "Critical Mass",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "25",
    name: "XD Analytics (formerly Oral4D)",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "26",
    name: "DevFacto",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "27",
    name: "Aimsio",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "28",
    name: "Arterys",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "29",
    name: "LessThan3",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "30",
    name: "City of Calgary",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "31",
    name: "ActiveDEMAND",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "32",
    name: "GasBuddy",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "33",
    name: "ReWatt Power",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "34",
    name: "Vivarra Interactive",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "35",
    name: "ATTAbotics",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "36",
    name: "Enersoft",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "37",
    name: "Flyht Aerospace",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "38",
    name: "Kent Imaging",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "39",
    name: "Nanalysis",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "40",
    name: "PK Sound",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "41",
    name: "QuirkLogic",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "42",
    name: "Recover Energy",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "43",
    name: "Userful",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "44",
    name: "Veerum",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "45",
    name: "Voltic Labs",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "46",
    name: "Strata Health",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "47",
    name: "MicroMech",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "48",
    name: "4iii Innovations",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "49",
    name: "White Whale Analytics",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "50",
    name: "Chaordix",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "51",
    name: "Avanade",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "51",
    name: "Talus Technologies",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "53",
    name: "Blue Ocean Interactive",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "54",
    name: "Instalogic",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "57",
    name: "QHR Technologies",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "58",
    name: "Calgary Parking Authority",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "59",
    name: "Unity Technologies (formerly Finger Food Studios)",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "60",
    name: "POETA Digital",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "61",
    name: "Aucerna",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "62",
    name: "Lodge Link (Black Diamond Group)",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "63",
    name: "Skymatics",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "64",
    name: "Helcim",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "65",
    name: "Peloton",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "67",
    name: "Peloton Computer Enterprises",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "68",
    name: "P2 Energy Solutions",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "69",
    name: "Newcomp Analytics",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "70",
    name: "Tugboat Logic",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "71",
    name: "AbraControls",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "72",
    name: "Quantifi Solutions",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "73",
    name: "Prodigy Games",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "74",
    name: "AppDirect",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "75",
    name: "Sound QI Solutions",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "76",
    name: "Nude Solutions",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "77",
    name: "Osprey Informatics",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "78",
    name: "Trusted Dispatch",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "79",
    name: "Neura Insurances",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "80",
    name: "Ian Martin Group",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "81",
    name: "Trimble",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "82",
    name: "Autodata Solutions",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "82",
    name: "Baker Hughes",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "83",
    name: "Simmel Technologies Inc",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "84",
    name: "DXC Technology",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "85",
    name: "Wood",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "86",
    name: "Tiller Digital",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "87",
    name: "Brightsquid",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "88",
    name: "Brunel",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "89",
    name: "Verdazo Analytics",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "90",
    name: "URUS Group",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "91",
    name: "SOLV3D",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "92",
    name: "Raven Bay",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "93",
    name: "Emerson Automation Solutions",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "94",
    name: "SafetySync",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "95",
    name: "Harvest Builders / Ventures",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "96",
    name: "Interface Fluidics",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "97",
    name: "Plankk",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "98",
    name: "ZayZoon",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "99",
    name: "Helm",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "100",
    name: "Aventrock Technologies",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "101",
    name: "Bode",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  },
  {
    key: "102",
    name: "eCompliance (Alcumus)",
    city: "Calgary",
    province: "AB",
    industry: "Placeholder"
  }
];

module.exports = {
  dataSource
};
