const list = [
  { name: "Rodolfo", vip: true },
  { name: "Bruno", vip: false },
  { name: "Carlos", vip: true },
  { name: "sebastião", vip: true },
  { name: "Hugo", vip: false },
  { name: "Flavio", vip: false },
  { name: "Gabriel", vip: true },
  { name: "Pedro", vip: true },
];

const newList = list.map((user) => {
  return {
    name: user.name,
    braceletColor: user.vip ? "Black" : "Green",
  };
});

//console.log(newList)

const students = [
  { name: "Rodolfo", testGrade: 7 },
  { name: "Carlos", testGrade: 4 },
  { name: "Sebastião", testGrade: 8 },
  { name: "Hugo", testGrade: 9 },
  { name: "Flavio", testGrade: 3 },
  { name: "Gabriel", testGrade: 2 },
  { name: "Pedro", testGrade: 10 },
];

const studentsApproved = students.map((approved) => {
  return {
    name: approved.name,
    approvedTest: approved.testGrade >= 5 ? "Approved" : "disapproved",
  };
});

//console.log(studentsApproved)

const cart = [
  { productName: "Abóbora", pricePerKg: 5, kg: 1 }, // 5 reais
  { productName: "Pepino", pricePerKg: 3.55, kg: 1.3 }, // 4,615 reais
  { productName: "Limão", pricePerKg: 1.2, kg: 2 }, // 2,40 reais
  { productName: "Abacate", pricePerKg: 5.4, kg: 1.67 }, // 9,018 reais
  { productName: "MOrango", pricePerKg: 11.9, kg: 3 }, // 35,70 reais
];

const amountCart = cart.reduce((acc, value) => {
  return acc + value.pricePerKg * value.kg;
}, 0);

// console.log(amountCart)

// Adicionar 10% de valor de mercado a todas as companhias -> MAP
// Filtar somente companhias fundadas abaixo de 1990 -> FILTER
// Somar o valor de mercado das restante -> REDUCE

const campanies = [
  {
    name: "Samsung",
    marketValue: 50,
    CEO: "Kim Hyun Suk",
    foundedOn: 1938,
  },
  {
    name: "Microsoft",
    marketValue: 415,
    CEO: "Satya Nadella",
    foundedOn: 1975,
  },
  {
    name: "Intel",
    marketValue: 117,
    CEO: "Brian Krzanich",
    foundedOn: 1968,
  },
  {
    name: "Facebook",
    marketValue: 383,
    CEO: "Mark Zuckerberg",
    foundedOn: 2004,
  },
  {
    name: "Spotify",
    marketValue: 30,
    CEO: "Daniel Ek",
    foundedOn: 2006,
  },
  {
    name: "Apple",
    marketValue: 845,
    CEO: "Tim Cook",
    foundedOn: 1976,
  },
];

const addPercentage = (company) => {
  const current = 0.1;
  company.marketValue = company.marketValue * current + company.marketValue;
  return company;
};

const filterCompanies = (company) => company.foundedOn < 1990;

const amountMarketCompanies = (acc, company) => acc + company.marketValue;

const marketNewValue = campanies
.map(addPercentage)
.filter(filterCompanies)
.reduce(amountMarketCompanies, 0);

//console.log(marketNewValue)

/*
const marketNewValue = campanies
.map((company) => {
  const current = 0.1;
  company.marketValue = company.marketValue * current + company.marketValue;
  return company;
})
.filter((company) => company.foundedOn < 1990)
.reduce((acc, company) => acc + company.marketValue, 0);

console.log(marketNewValue) */


const removePercentage = (company) => {
  const percentage = 0.1;
  company.marketValue = company.marketValue / percentage + company.marketValue;
  return company;
};

const filterCompaniesOld = (company) => company.foundedOn > 1980;

const amountCompanies = (acc, company) => acc + company.marketValue;

const valueMarket = campanies
  .map(removePercentage)
  .filter(filterCompaniesOld)
  .reduce(amountCompanies, 0);
console.log(valueMarket);