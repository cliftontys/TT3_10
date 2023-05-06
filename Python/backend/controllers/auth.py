from models.model import Claims, db
from flask import request, jsonify
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with

# Making sure that the request parsed fits the below guidelines
put_args = reqparse.RequestParser()
# currently no good error message, only 500
#put_args.add_argument("Name", type=str, help = "Customer name is required", required = True) 
#put_args.add_argument("ID", type=str, help = "Customer acocunt ID", required = True)
#put_args.add_argument("Balance", type=str, help = "Customer balance", required = True)
#put_args.add_argument("Bank", type=str, help = "POSB or DBS")
put_args.add_argument("ClaimID", type=int, help = "ClaimID is required", required = True) 
put_args.add_argument("ProjectID", type=int, help = "ProjectID is required", required = True) 
put_args.add_argument("CurrencyID", type=str, help = "Currency ID is required", required = True)
put_args.add_argument("EmployeeID", type=int, help = "Employee ID is required", required = True)
put_args.add_argument("ExpenseDate", type=int, help = "Expense Date is required", required = True)
put_args.add_argument("Amount", type=float, help = "Amount is required", required = True)
put_args.add_argument("Purpose", type=str, help = "Purpose is required", required = True)
put_args.add_argument("DepartmentCode", type=int, help = "Key in Department Code if available")

update_args = reqparse.RequestParser()
#update_args.add_argument("Name", type=str, help = "Customer name is required")
#update_args.add_argument("ID", type=str, help = "Customer acocunt ID")
#update_args.add_argument("Balance", type=str, help = "Customer balance")
#update_args.add_argument("Bank", type=str, help = "POSB or DBS")
update_args.add_argument("ClaimID", type=int, help = "ClaimID is required", required = True) 
update_args.add_argument("ProjectID", type=int, help = "ProjectID is required", required = True) 
update_args.add_argument("CurrencyID", type=str, help = "Currency ID is required", required = True)
update_args.add_argument("EmployeeID", type=int, help = "Employee ID is required", required = True)
update_args.add_argument("ExpenseDate", type=int, help = "Expense Date is required", required = True)
update_args.add_argument("Amount", type=float, help = "Amount is required", required = True)
update_args.add_argument("Purpose", type=str, help = "Purpose is required", required = True)
update_args.add_argument("DepartmentCode", type=int, help = "Key in Department Code if available")

'''resource_fields = {
    'ID' : fields.Integer,
    "Name" : fields.String,
    "Balance" : fields.Integer,
    "Bank" : fields.String
}'''

# @marshal_with(resource_fields)
def get(id):
        # Store query results
        result = Claims.query.filter_by(ClaimID = id)

        if not result:
            abort(409, message = "Client's claim could not be found")
        return jsonify(
             {
                  "code": 200,
                  "body": [row.json() for row in result]
             }
        )

# @marshal_with(resource_fields)
def put(id):
    # Get arguments from put_args as defined above, where missing fields will have error
    args = put_args.parse_args()
    Client = Claims(ClaimID = args['ClaimID'], ProjectID = args['ProjectID'], CurrencyID = args['CurrencyID'],
                        EmployeeID = args['EmployeeID'], ExpenseDate = args['ExpenseDate'],
                        Amount = args['Amount'], Purpose = args['Purpose'], DepartmentCode = args['DepartmentCode'])
    
    # Check if field already exists
    result = Claims.query.filter_by(ClaimID = args['ClaimID']).first()
    if result:
        abort(409, message = "Claim already exists")

    # Add object to staging
    db.session.add(Client)
    # Commit permanently
    db.session.commit()

    return Client, 201 # 201 means created, by default 201 is okay!

def patch(id):
        args = update_args.parse_args()
        result = Claims.query.filter_by(ClaimID = id).first()
        if not result:
            abort(404, message = "Cannot update a claim that does not exist")

        if args['ProjectID']:
            result.name = args["ProjectID"]
        
        if args['CurrencyID']:
            result.bank = args["CurrencyID"]
        
        if args['EmployeeID']:
            result.balance = args["EmployeeID"]
        
        if args['ExpenseDate']:
            result.balance = args["ExpenseDate"]
        
        if args['Amount']:
            result.balance = args["Amount"]
        
        if args['Purpose']:
            result.balance = args["Purpose"]
        
        if args['DepartmentCode']:
            result.balance = args["DepartmentCode"]

        db.session.commit()

        return result, 201

def delete(id):
        args = put_args.parse_args()

        # Check if field already exists
        result = Claims.query.get(id)
        if not result:
            abort(409, message = "Claim does not exist")
        
        db.session.delete(result)
        db.session.commit()
        return "Claim deleted", 201 # 201 means created, by default 201 is okay!
    