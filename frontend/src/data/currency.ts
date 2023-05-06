export type Currency = {
  CurrencyID: string;
  ExchangeRate: number;
};

const currencies: Currency[] = [
  {
    CurrencyID: "CNY",
    ExchangeRate: 0.206,
  },
  {
    CurrencyID: "HKD",
    ExchangeRate: 0.17,
  },
  {
    CurrencyID: "IDR",
    ExchangeRate: 0.000093,
  },
  {
    CurrencyID: "INR",
    ExchangeRate: 0.018,
  },
  {
    CurrencyID: "JPY",
    ExchangeRate: 0.012,
  },
  {
    CurrencyID: "KHR",
    ExchangeRate: 0.00025,
  },
  {
    CurrencyID: "KRW",
    ExchangeRate: 0.0011,
  },
  {
    CurrencyID: "SGD",
    ExchangeRate: 1,
  },
  {
    CurrencyID: "TWD",
    ExchangeRate: 0.045,
  },
  {
    CurrencyID: "VND",
    ExchangeRate: 0.000044,
  },
];

export default currencies;
