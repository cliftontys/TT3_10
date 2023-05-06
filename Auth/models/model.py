from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class BankModel(db.Model):
    ID = db.Column(db.Integer, primary_key = True)
    Name = db.Column(db.String(80), nullable = False)
    Balance = db.Column(db.Integer, nullable = False)
    Bank = db.Column(db.String(4), nullable = False)

    def json(self):
        return {
            "ID" : self.ID,
            "Name" : self.Name,
            "Balance" : self.Balance,
            "Bank" : self.Bank
        }
