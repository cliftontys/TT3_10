export type ProjectExpenseClaim = {
  ClaimID: string;
  ProjectID: string;
  EmployeeID: string;
  CurrencyID: string;
  ExpenseDate: string;
  Amount: string;
  Purpose: string;
  ChargeToDefaultDept: string;
  AlternativeDeptCode: string;
  Status: string;
  LastEditedClaimDate: string;
};

const projectExpenseClaims: ProjectExpenseClaim[] = [
  {
    ClaimID: "11147",
    ProjectID: "10001",
    CurrencyID: "SGD",
    EmployeeID: "10011",
    ExpenseDate: "2023-04-29T08:30:00+08:00",
    Amount: "100.5",
    Purpose: "Banking tech",
    ChargeToDefaultDept: "0",
    AlternativeDeptCode: "",
    Status: "Pending",
    LastEditedClaimDate: "2023-04-30T10:00:00+08:00",
  },
  {
    ClaimID: "11148",
    ProjectID: "10002",
    CurrencyID: "IDR",
    EmployeeID: "10015",
    ExpenseDate: "2023-04-28T10:00:00+08:00",
    Amount: "250.75",
    Purpose: "Operations",
    ChargeToDefaultDept: "0",
    AlternativeDeptCode: "",
    Status: "Approved",
    LastEditedClaimDate: "2023-04-30T11:30:00+08:00",
  },
  {
    ClaimID: "11149",
    ProjectID: "10003",
    CurrencyID: "JPY",
    EmployeeID: "10014",
    ExpenseDate: "2023-04-27T13:45:00+08:00",
    Amount: "500.00",
    Purpose: "Banking operations",
    ChargeToDefaultDept: "0",
    AlternativeDeptCode: "",
    Status: "Rejected",
    LastEditedClaimDate: "2023-04-30T12:15:00+08:00",
  },
  {
    ClaimID: "11150",
    ProjectID: "10004",
    CurrencyID: "SGD",
    EmployeeID: "10018",
    ExpenseDate: "2023-04-26T15:30:00+08:00",
    Amount: "175.25",
    Purpose: "Banking tech",
    ChargeToDefaultDept: "1",
    AlternativeDeptCode: "105",
    Status: "Pending",
    LastEditedClaimDate: "2023-04-30T13:00:00+08:00",
  },
  {
    ClaimID: "11151",
    ProjectID: "10005",
    CurrencyID: "KRW",
    EmployeeID: "10020",
    ExpenseDate: "2023-04-25T17:15:00+08:00",
    Amount: "350.00",
    Purpose: "Banking operations",
    ChargeToDefaultDept: "0",
    AlternativeDeptCode: "",
    Status: "Pending",
    LastEditedClaimDate: "2023-04-30T14:30:00+08:00",
  },
  {
    ClaimID: "11152",
    ProjectID: "10006",
    CurrencyID: "IDR",
    EmployeeID: "10012",
    ExpenseDate: "2023-04-24T19:00:00+08:00",
    Amount: "50.00",
    Purpose: "Banking tech",
    ChargeToDefaultDept: "0",
    AlternativeDeptCode: "",
    Status: "Approved",
    LastEditedClaimDate: "2023-04-30T15:45:00+08:00",
  },
  {
    ClaimID: "11164",
    ProjectID: "10004",
    CurrencyID: "SGD",
    EmployeeID: "10011",
    ExpenseDate: "2023-04-29T10:00:00+08:00",
    Amount: "25.0",
    Purpose: "IT support",
    ChargeToDefaultDept: "0",
    AlternativeDeptCode: "",
    Status: "Pending",
    LastEditedClaimDate: "2023-04-29T10:30:00+08:00",
  },
];

export default projectExpenseClaims;