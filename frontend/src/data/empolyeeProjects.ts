export type EmployeeProject = {
    ProjectID: number;
    EmployeeID: number;
    ProjectName: string;
    ProjectStatus: string;
    ProjectBudget: number;
    ProjectLeadID: number;
}

const employeeProjects: EmployeeProject[] = [
  {
    ProjectID: 10001,
    EmployeeID: 10001,
    ProjectName: "Mobile Banking App",
    ProjectStatus: "In Progress",
    ProjectBudget: 15000,
    ProjectLeadID: 10002,
  },
  {
    ProjectID: 10002,
    EmployeeID: 10003,
    ProjectName: "Online Payment Gateway",
    ProjectStatus: "Completed",
    ProjectBudget: 25000,
    ProjectLeadID: 10004,
  },
  {
    ProjectID: 10003,
    EmployeeID: 10005,
    ProjectName: "ATM Upgrade",
    ProjectStatus: "In Progress",
    ProjectBudget: 18000,
    ProjectLeadID: 10006,
  },
  {
    ProjectID: 10004,
    EmployeeID: 10007,
    ProjectName: "Credit Scoring System",
    ProjectStatus: "Terminated",
    ProjectBudget: 30000,
    ProjectLeadID: 10008,
  },
  {
    ProjectID: 10005,
    EmployeeID: 10009,
    ProjectName: "Core Banking System Migration",
    ProjectStatus: "In Progress",
    ProjectBudget: 20000,
    ProjectLeadID: 10010,
  },
  {
    ProjectID: 10006,
    EmployeeID: 10011,
    ProjectName: "Digital Onboarding Platform",
    ProjectStatus: "Yet To Commence",
    ProjectBudget: 35000,
    ProjectLeadID: 10012,
  },
  {
    ProjectID: 10007,
    EmployeeID: 10013,
    ProjectName: "Trade Finance Automation",
    ProjectStatus: "Completed",
    ProjectBudget: 27000,
    ProjectLeadID: 10014,
  },
  {
    ProjectID: 10008,
    EmployeeID: 10015,
    ProjectName: "Customer Data Management System",
    ProjectStatus: "In Progress",
    ProjectBudget: 19000,
    ProjectLeadID: 10016,
  },
  {
    ProjectID: 10009,
    EmployeeID: 10017,
    ProjectName: "Risk Management Dashboard",
    ProjectStatus: "Terminated",
    ProjectBudget: 32000,
    ProjectLeadID: 10018,
  },
  {
    ProjectID: 10010,
    EmployeeID: 10019,
    ProjectName: "Loan Origination System",
    ProjectStatus: "Yet To Commence",
    ProjectBudget: 40000,
    ProjectLeadID: 10020,
  },
];

export default employeeProjects;