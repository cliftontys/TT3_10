# from flask_sqlalchemy import SQLAlchemy

# db = SQLAlchemy()

# class BankModel(db.Model):
#     ID = db.Column(db.Integer, primary_key = True)
#     Name = db.Column(db.String(80), nullable = False)
#     Balance = db.Column(db.Integer, nullable = False)
#     Bank = db.Column(db.String(4), nullable = False)

#     def json(self):
#         return {
#             "ID" : self.ID,
#             "Name" : self.Name,
#             "Balance" : self.Balance,
#             "Bank" : self.Bank
#         }

from flask_login import UserMixin
from sqlalchemy.sql import func
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Claims(db.Model):
    ClaimID = db.Column(db.Integer, primary_key=True)
    ProjectID = db.Column(db.Integer)
    EmployeeID = db.Column(db.Integer)
    CurrencyID = db.Column(db.Integer, db.ForeignKey('currency.CurrencyID'))
    ExpenseDate = db.Column(db.String(255))
    Amount = db.Column(db.Float)
    Purpose = db.Column(db.String(150))
    ChargeToDefaultDept = db.column(db.Boolean)
    AlternativeDeptCode = db.column(db.String(20))
    Status = db.column(db.String(20))
    LastEditedClaimDate = db.column(db.String(255))

class Currency(db.model):
    CurrencyID = db.column(db.Integer, primary_key = True)
    ExchangeRate = db.column(db.Float)

class Employee(db.Model, UserMixin):
    EmployeeID = db.Column(db.Integer, primary_key=True)
    SupervisorID = db.Column(db.Integer)
    Password = db.Column(db.String(150))
    FirstName = db.Column(db.String(50))
    LastName = db.Column(db.String(50))
    BankAccountNumber = db.Column(db.Integer)


