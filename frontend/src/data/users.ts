export type User = {
  EmployeeID: string;
  SupervisorID: string | null;
  DepartmentCode: number;
  FirstName: string;
  LastName: string;
  BankAccountNumber: string;
};

export const dummyUser: User = {
  BankAccountNumber: "1",
  DepartmentCode: 1,
  EmployeeID: "1",
  FirstName: "first name",
  LastName: "last name",
  SupervisorID: null,
};
