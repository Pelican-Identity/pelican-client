import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatLongDayTime = (input: string | Date) => {
  const d = new Date(input);

  return d.toLocaleString("en-US", {
    weekday: "short", // Tue
    month: "short", // May
    year: "numeric", // 2026
    day: "numeric", // 6
    hour: "numeric", // 12
    minute: "2-digit", // 30
    hour12: true, // AM / PM
  });
};

export function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export interface ICountryInfo {
  name: string;
  code: string;
  phoneCode: string;
  flag: string;
}

export const countryCodes: ICountryInfo[] = [
  {
    name: "Afghanistan",
    code: "AF",
    phoneCode: "+93",
    flag: "https://flagcdn.com/w320/af.png",
  },
  {
    name: "Albania",
    code: "AL",
    phoneCode: "+355",
    flag: "https://flagcdn.com/w320/al.png",
  },
  {
    name: "Algeria",
    code: "DZ",
    phoneCode: "+213",
    flag: "https://flagcdn.com/w320/dz.png",
  },
  {
    name: "Andorra",
    code: "AD",
    phoneCode: "+376",
    flag: "https://flagcdn.com/w320/ad.png",
  },
  {
    name: "Angola",
    code: "AO",
    phoneCode: "+244",
    flag: "https://flagcdn.com/w320/ao.png",
  },
  {
    name: "Argentina",
    code: "AR",
    phoneCode: "+54",
    flag: "https://flagcdn.com/w320/ar.png",
  },
  {
    name: "Armenia",
    code: "AM",
    phoneCode: "+374",
    flag: "https://flagcdn.com/w320/am.png",
  },
  {
    name: "Australia",
    code: "AU",
    phoneCode: "+61",
    flag: "https://flagcdn.com/w320/au.png",
  },
  {
    name: "Austria",
    code: "AT",
    phoneCode: "+43",
    flag: "https://flagcdn.com/w320/at.png",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    phoneCode: "+994",
    flag: "https://flagcdn.com/w320/az.png",
  },
  {
    name: "Bahamas",
    code: "BS",
    phoneCode: "+1242",
    flag: "https://flagcdn.com/w320/bs.png",
  },
  {
    name: "Bahrain",
    code: "BH",
    phoneCode: "+973",
    flag: "https://flagcdn.com/w320/bh.png",
  },
  {
    name: "Bangladesh",
    code: "BD",
    phoneCode: "+880",
    flag: "https://flagcdn.com/w320/bd.png",
  },
  {
    name: "Barbados",
    code: "BB",
    phoneCode: "+1246",
    flag: "https://flagcdn.com/w320/bb.png",
  },
  {
    name: "Belarus",
    code: "BY",
    phoneCode: "+375",
    flag: "https://flagcdn.com/w320/by.png",
  },
  {
    name: "Belgium",
    code: "BE",
    phoneCode: "+32",
    flag: "https://flagcdn.com/w320/be.png",
  },
  {
    name: "Belize",
    code: "BZ",
    phoneCode: "+501",
    flag: "https://flagcdn.com/w320/bz.png",
  },
  {
    name: "Benin",
    code: "BJ",
    phoneCode: "+229",
    flag: "https://flagcdn.com/w320/bj.png",
  },
  {
    name: "Bhutan",
    code: "BT",
    phoneCode: "+975",
    flag: "https://flagcdn.com/w320/bt.png",
  },
  {
    name: "Bolivia",
    code: "BO",
    phoneCode: "+591",
    flag: "https://flagcdn.com/w320/bo.png",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    phoneCode: "+387",
    flag: "https://flagcdn.com/w320/ba.png",
  },
  {
    name: "Botswana",
    code: "BW",
    phoneCode: "+267",
    flag: "https://flagcdn.com/w320/bw.png",
  },
  {
    name: "Brazil",
    code: "BR",
    phoneCode: "+55",
    flag: "https://flagcdn.com/w320/br.png",
  },
  {
    name: "Brunei",
    code: "BN",
    phoneCode: "+673",
    flag: "https://flagcdn.com/w320/bn.png",
  },
  {
    name: "Bulgaria",
    code: "BG",
    phoneCode: "+359",
    flag: "https://flagcdn.com/w320/bg.png",
  },
  {
    name: "Burkina Faso",
    code: "BF",
    phoneCode: "+226",
    flag: "https://flagcdn.com/w320/bf.png",
  },
  {
    name: "Burundi",
    code: "BI",
    phoneCode: "+257",
    flag: "https://flagcdn.com/w320/bi.png",
  },
  {
    name: "Cambodia",
    code: "KH",
    phoneCode: "+855",
    flag: "https://flagcdn.com/w320/kh.png",
  },
  {
    name: "Cameroon",
    code: "CM",
    phoneCode: "+237",
    flag: "https://flagcdn.com/w320/cm.png",
  },

  {
    name: "Chad",
    code: "TD",
    phoneCode: "+235",
    flag: "https://flagcdn.com/w320/td.png",
  },
  {
    name: "Chile",
    code: "CL",
    phoneCode: "+56",
    flag: "https://flagcdn.com/w320/cl.png",
  },
  {
    name: "China",
    code: "CN",
    phoneCode: "+86",
    flag: "https://flagcdn.com/w320/cn.png",
  },
  {
    name: "Colombia",
    code: "CO",
    phoneCode: "+57",
    flag: "https://flagcdn.com/w320/co.png",
  },
  {
    name: "Costa Rica",
    code: "CR",
    phoneCode: "+506",
    flag: "https://flagcdn.com/w320/cr.png",
  },
  {
    name: "Croatia",
    code: "HR",
    phoneCode: "+385",
    flag: "https://flagcdn.com/w320/hr.png",
  },
  {
    name: "Cuba",
    code: "CU",
    phoneCode: "+53",
    flag: "https://flagcdn.com/w320/cu.png",
  },
  {
    name: "Cyprus",
    code: "CY",
    phoneCode: "+357",
    flag: "https://flagcdn.com/w320/cy.png",
  },
  {
    name: "Czech Republic",
    code: "CZ",
    phoneCode: "+420",
    flag: "https://flagcdn.com/w320/cz.png",
  },
  {
    name: "Denmark",
    code: "DK",
    phoneCode: "+45",
    flag: "https://flagcdn.com/w320/dk.png",
  },
  {
    name: "Ecuador",
    code: "EC",
    phoneCode: "+593",
    flag: "https://flagcdn.com/w320/ec.png",
  },
  {
    name: "Egypt",
    code: "EG",
    phoneCode: "+20",
    flag: "https://flagcdn.com/w320/eg.png",
  },
  {
    name: "Estonia",
    code: "EE",
    phoneCode: "+372",
    flag: "https://flagcdn.com/w320/ee.png",
  },
  {
    name: "Ethiopia",
    code: "ET",
    phoneCode: "+251",
    flag: "https://flagcdn.com/w320/et.png",
  },
  {
    name: "Fiji",
    code: "FJ",
    phoneCode: "+679",
    flag: "https://flagcdn.com/w320/fj.png",
  },
  {
    name: "Finland",
    code: "FI",
    phoneCode: "+358",
    flag: "https://flagcdn.com/w320/fi.png",
  },
  {
    name: "France",
    code: "FR",
    phoneCode: "+33",
    flag: "https://flagcdn.com/w320/fr.png",
  },
  {
    name: "Gabon",
    code: "GA",
    phoneCode: "+241",
    flag: "https://flagcdn.com/w320/ga.png",
  },
  {
    name: "Gambia",
    code: "GM",
    phoneCode: "+220",
    flag: "https://flagcdn.com/w320/gm.png",
  },
  {
    name: "Georgia",
    code: "GE",
    phoneCode: "+995",
    flag: "https://flagcdn.com/w320/ge.png",
  },
  {
    name: "Germany",
    code: "DE",
    phoneCode: "+49",
    flag: "https://flagcdn.com/w320/de.png",
  },
  {
    name: "Ghana",
    code: "GH",
    phoneCode: "+233",
    flag: "https://flagcdn.com/w320/gh.png",
  },
  {
    name: "Greece",
    code: "GR",
    phoneCode: "+30",
    flag: "https://flagcdn.com/w320/gr.png",
  },
  {
    name: "Greenland",
    code: "GL",
    phoneCode: "+299",
    flag: "https://flagcdn.com/w320/gl.png",
  },
  {
    name: "Guatemala",
    code: "GT",
    phoneCode: "+502",
    flag: "https://flagcdn.com/w320/gt.png",
  },
  {
    name: "Guinea",
    code: "GN",
    phoneCode: "+224",
    flag: "https://flagcdn.com/w320/gn.png",
  },
  {
    name: "Haiti",
    code: "HT",
    phoneCode: "+509",
    flag: "https://flagcdn.com/w320/ht.png",
  },
  {
    name: "Honduras",
    code: "HN",
    phoneCode: "+504",
    flag: "https://flagcdn.com/w320/hn.png",
  },
  {
    name: "Hong Kong",
    code: "HK",
    phoneCode: "+852",
    flag: "https://flagcdn.com/w320/hk.png",
  },
  {
    name: "Hungary",
    code: "HU",
    phoneCode: "+36",
    flag: "https://flagcdn.com/w320/hu.png",
  },
  {
    name: "Iceland",
    code: "IS",
    phoneCode: "+354",
    flag: "https://flagcdn.com/w320/is.png",
  },
  {
    name: "India",
    code: "IN",
    phoneCode: "+91",
    flag: "https://flagcdn.com/w320/in.png",
  },
  {
    name: "Indonesia",
    code: "ID",
    phoneCode: "+62",
    flag: "https://flagcdn.com/w320/id.png",
  },
  {
    name: "Iran",
    code: "IR",
    phoneCode: "+98",
    flag: "https://flagcdn.com/w320/ir.png",
  },
  {
    name: "Iraq",
    code: "IQ",
    phoneCode: "+964",
    flag: "https://flagcdn.com/w320/iq.png",
  },
  {
    name: "Ireland",
    code: "IE",
    phoneCode: "+353",
    flag: "https://flagcdn.com/w320/ie.png",
  },
  {
    name: "Israel",
    code: "IL",
    phoneCode: "+972",
    flag: "https://flagcdn.com/w320/il.png",
  },
  {
    name: "Italy",
    code: "IT",
    phoneCode: "+39",
    flag: "https://flagcdn.com/w320/it.png",
  },
  {
    name: "Jamaica",
    code: "JM",
    phoneCode: "+1876",
    flag: "https://flagcdn.com/w320/jm.png",
  },
  {
    name: "Japan",
    code: "JP",
    phoneCode: "+81",
    flag: "https://flagcdn.com/w320/jp.png",
  },
  {
    name: "Jordan",
    code: "JO",
    phoneCode: "+962",
    flag: "https://flagcdn.com/w320/jo.png",
  },

  {
    name: "Kenya",
    code: "KE",
    phoneCode: "+254",
    flag: "https://flagcdn.com/w320/ke.png",
  },
  {
    name: "Kuwait",
    code: "KW",
    phoneCode: "+965",
    flag: "https://flagcdn.com/w320/kw.png",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    phoneCode: "+996",
    flag: "https://flagcdn.com/w320/kg.png",
  },
  {
    name: "Latvia",
    code: "LV",
    phoneCode: "+371",
    flag: "https://flagcdn.com/w320/lv.png",
  },
  {
    name: "Lebanon",
    code: "LB",
    phoneCode: "+961",
    flag: "https://flagcdn.com/w320/lb.png",
  },
  {
    name: "Liberia",
    code: "LR",
    phoneCode: "+231",
    flag: "https://flagcdn.com/w320/lr.png",
  },
  {
    name: "Libya",
    code: "LY",
    phoneCode: "+218",
    flag: "https://flagcdn.com/w320/ly.png",
  },
  {
    name: "Liechtenstein",
    code: "LI",
    phoneCode: "+423",
    flag: "https://flagcdn.com/w320/li.png",
  },
  {
    name: "Lithuania",
    code: "LT",
    phoneCode: "+370",
    flag: "https://flagcdn.com/w320/lt.png",
  },
  {
    name: "Luxembourg",
    code: "LU",
    phoneCode: "+352",
    flag: "https://flagcdn.com/w320/lu.png",
  },
  {
    name: "Madagascar",
    code: "MG",
    phoneCode: "+261",
    flag: "https://flagcdn.com/w320/mg.png",
  },
  {
    name: "Malawi",
    code: "MW",
    phoneCode: "+265",
    flag: "https://flagcdn.com/w320/mw.png",
  },
  {
    name: "Malaysia",
    code: "MY",
    phoneCode: "+60",
    flag: "https://flagcdn.com/w320/my.png",
  },
  {
    name: "Maldives",
    code: "MV",
    phoneCode: "+960",
    flag: "https://flagcdn.com/w320/mv.png",
  },
  {
    name: "Mali",
    code: "ML",
    phoneCode: "+223",
    flag: "https://flagcdn.com/w320/ml.png",
  },
  {
    name: "Malta",
    code: "MT",
    phoneCode: "+356",
    flag: "https://flagcdn.com/w320/mt.png",
  },
  {
    name: "Mexico",
    code: "MX",
    phoneCode: "+52",
    flag: "https://flagcdn.com/w320/mx.png",
  },
  {
    name: "Moldova",
    code: "MD",
    phoneCode: "+373",
    flag: "https://flagcdn.com/w320/md.png",
  },
  {
    name: "Monaco",
    code: "MC",
    phoneCode: "+377",
    flag: "https://flagcdn.com/w320/mc.png",
  },
  {
    name: "Mongolia",
    code: "MN",
    phoneCode: "+976",
    flag: "https://flagcdn.com/w320/mn.png",
  },
  {
    name: "Montenegro",
    code: "ME",
    phoneCode: "+382",
    flag: "https://flagcdn.com/w320/me.png",
  },
  {
    name: "Morocco",
    code: "MA",
    phoneCode: "+212",
    flag: "https://flagcdn.com/w320/ma.png",
  },
  {
    name: "Mozambique",
    code: "MZ",
    phoneCode: "+258",
    flag: "https://flagcdn.com/w320/mz.png",
  },
  {
    name: "Myanmar",
    code: "MM",
    phoneCode: "+95",
    flag: "https://flagcdn.com/w320/mm.png",
  },
  {
    name: "Namibia",
    code: "NA",
    phoneCode: "+264",
    flag: "https://flagcdn.com/w320/na.png",
  },
  {
    name: "Nepal",
    code: "NP",
    phoneCode: "+977",
    flag: "https://flagcdn.com/w320/np.png",
  },
  {
    name: "Netherlands",
    code: "NL",
    phoneCode: "+31",
    flag: "https://flagcdn.com/w320/nl.png",
  },
  {
    name: "New Zealand",
    code: "NZ",
    phoneCode: "+64",
    flag: "https://flagcdn.com/w320/nz.png",
  },
  {
    name: "Nicaragua",
    code: "NI",
    phoneCode: "+505",
    flag: "https://flagcdn.com/w320/ni.png",
  },
  {
    name: "Niger",
    code: "NE",
    phoneCode: "+227",
    flag: "https://flagcdn.com/w320/ne.png",
  },
  {
    name: "Nigeria",
    code: "NG",
    phoneCode: "+234",
    flag: "https://flagcdn.com/w320/ng.png",
  },
  {
    name: "North Korea",
    code: "KP",
    phoneCode: "+850",
    flag: "https://flagcdn.com/w320/kp.png",
  },
  {
    name: "Norway",
    code: "NO",
    phoneCode: "+47",
    flag: "https://flagcdn.com/w320/no.png",
  },
  {
    name: "Oman",
    code: "OM",
    phoneCode: "+968",
    flag: "https://flagcdn.com/w320/om.png",
  },
  {
    name: "Pakistan",
    code: "PK",
    phoneCode: "+92",
    flag: "https://flagcdn.com/w320/pk.png",
  },
  {
    name: "Panama",
    code: "PA",
    phoneCode: "+507",
    flag: "https://flagcdn.com/w320/pa.png",
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    phoneCode: "+675",
    flag: "https://flagcdn.com/w320/pg.png",
  },
  {
    name: "Paraguay",
    code: "PY",
    phoneCode: "+595",
    flag: "https://flagcdn.com/w320/py.png",
  },
  {
    name: "Peru",
    code: "PE",
    phoneCode: "+51",
    flag: "https://flagcdn.com/w320/pe.png",
  },
  {
    name: "Philippines",
    code: "PH",
    phoneCode: "+63",
    flag: "https://flagcdn.com/w320/ph.png",
  },
  {
    name: "Poland",
    code: "PL",
    phoneCode: "+48",
    flag: "https://flagcdn.com/w320/pl.png",
  },
  {
    name: "Portugal",
    code: "PT",
    phoneCode: "+351",
    flag: "https://flagcdn.com/w320/pt.png",
  },
  {
    name: "Qatar",
    code: "QA",
    phoneCode: "+974",
    flag: "https://flagcdn.com/w320/qa.png",
  },
  {
    name: "Romania",
    code: "RO",
    phoneCode: "+40",
    flag: "https://flagcdn.com/w320/ro.png",
  },
  {
    name: "Russia",
    code: "RU",
    phoneCode: "+7",
    flag: "https://flagcdn.com/w320/ru.png",
  },
  {
    name: "Rwanda",
    code: "RW",
    phoneCode: "+250",
    flag: "https://flagcdn.com/w320/rw.png",
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    phoneCode: "+966",
    flag: "https://flagcdn.com/w320/sa.png",
  },
  {
    name: "Senegal",
    code: "SN",
    phoneCode: "+221",
    flag: "https://flagcdn.com/w320/sn.png",
  },
  {
    name: "Serbia",
    code: "RS",
    phoneCode: "+381",
    flag: "https://flagcdn.com/w320/rs.png",
  },
  {
    name: "Singapore",
    code: "SG",
    phoneCode: "+65",
    flag: "https://flagcdn.com/w320/sg.png",
  },
  {
    name: "Slovakia",
    code: "SK",
    phoneCode: "+421",
    flag: "https://flagcdn.com/w320/sk.png",
  },
  {
    name: "Slovenia",
    code: "SI",
    phoneCode: "+386",
    flag: "https://flagcdn.com/w320/si.png",
  },
  {
    name: "Somalia",
    code: "SO",
    phoneCode: "+252",
    flag: "https://flagcdn.com/w320/so.png",
  },
  {
    name: "South Africa",
    code: "ZA",
    phoneCode: "+27",
    flag: "https://flagcdn.com/w320/za.png",
  },
  {
    name: "South Korea",
    code: "KR",
    phoneCode: "+82",
    flag: "https://flagcdn.com/w320/kr.png",
  },
  {
    name: "Spain",
    code: "ES",
    phoneCode: "+34",
    flag: "https://flagcdn.com/w320/es.png",
  },
  {
    name: "Sri Lanka",
    code: "LK",
    phoneCode: "+94",
    flag: "https://flagcdn.com/w320/lk.png",
  },
  {
    name: "Sudan",
    code: "SD",
    phoneCode: "+249",
    flag: "https://flagcdn.com/w320/sd.png",
  },
  {
    name: "Sweden",
    code: "SE",
    phoneCode: "+46",
    flag: "https://flagcdn.com/w320/se.png",
  },
  {
    name: "Switzerland",
    code: "CH",
    phoneCode: "+41",
    flag: "https://flagcdn.com/w320/ch.png",
  },
  {
    name: "Syria",
    code: "SY",
    phoneCode: "+963",
    flag: "https://flagcdn.com/w320/sy.png",
  },
  {
    name: "Taiwan",
    code: "TW",
    phoneCode: "+886",
    flag: "https://flagcdn.com/w320/tw.png",
  },
  {
    name: "Tajikistan",
    code: "TJ",
    phoneCode: "+992",
    flag: "https://flagcdn.com/w320/tj.png",
  },
  {
    name: "Tanzania",
    code: "TZ",
    phoneCode: "+255",
    flag: "https://flagcdn.com/w320/tz.png",
  },
  {
    name: "Thailand",
    code: "TH",
    phoneCode: "+66",
    flag: "https://flagcdn.com/w320/th.png",
  },
  {
    name: "Togo",
    code: "TG",
    phoneCode: "+228",
    flag: "https://flagcdn.com/w320/tg.png",
  },
  {
    name: "Tunisia",
    code: "TN",
    phoneCode: "+216",
    flag: "https://flagcdn.com/w320/tn.png",
  },
  {
    name: "Turkey",
    code: "TR",
    phoneCode: "+90",
    flag: "https://flagcdn.com/w320/tr.png",
  },
  {
    name: "Turkmenistan",
    code: "TM",
    phoneCode: "+993",
    flag: "https://flagcdn.com/w320/tm.png",
  },
  {
    name: "Uganda",
    code: "UG",
    phoneCode: "+256",
    flag: "https://flagcdn.com/w320/ug.png",
  },
  {
    name: "Ukraine",
    code: "UA",
    phoneCode: "+380",
    flag: "https://flagcdn.com/w320/ua.png",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    phoneCode: "+971",
    flag: "https://flagcdn.com/w320/ae.png",
  },
  {
    name: "United Kingdom",
    code: "GB",
    phoneCode: "+44",
    flag: "https://flagcdn.com/w320/gb.png",
  },
  {
    name: "United States",
    code: "US",
    phoneCode: "+1",
    flag: "https://flagcdn.com/w320/us.png",
  },

  {
    name: "Canada",
    code: "CA",
    phoneCode: "+1",
    flag: "https://flagcdn.com/w320/ca.png",
  },
  {
    name: "Uruguay",
    code: "UY",
    phoneCode: "+598",
    flag: "https://flagcdn.com/w320/uy.png",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    phoneCode: "+998",
    flag: "https://flagcdn.com/w320/uz.png",
  },
  {
    name: "Venezuela",
    code: "VE",
    phoneCode: "+58",
    flag: "https://flagcdn.com/w320/ve.png",
  },
  {
    name: "Vietnam",
    code: "VN",
    phoneCode: "+84",
    flag: "https://flagcdn.com/w320/vn.png",
  },
  {
    name: "Yemen",
    code: "YE",
    phoneCode: "+967",
    flag: "https://flagcdn.com/w320/ye.png",
  },
  {
    name: "Zambia",
    code: "ZM",
    phoneCode: "+260",
    flag: "https://flagcdn.com/w320/zm.png",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    phoneCode: "+263",
    flag: "https://flagcdn.com/w320/zw.png",
  },
];

export const apiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
