from models.model import Claims, db
from flask import request, jsonify
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with

from flask_jwt_extended import create_access_token
from flask_jwt_extended import JWTManager
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
import json

# Making sure that the request parsed fits the below guidelines
put_args = reqparse.RequestParser()
# currently no good error message, only 500
put_args.add_argument("ClaimID", type=int, help = "ClaimID is required", required = True) 
put_args.add_argument("ProjectID", type=int, help = "ProjectID is required", required = True) 
put_args.add_argument("CurrencyID", type=str, help = "Currency ID is required", required = True)
put_args.add_argument("EmployeeID", type=int, help = "Employee ID is required", required = True)
put_args.add_argument("ExpenseDate", type=int, help = "Expense Date is required", required = True)
put_args.add_argument("Amount", type=float, help = "Amount is required", required = True)
put_args.add_argument("Purpose", type=str, help = "Purpose is required", required = True)
put_args.add_argument("DepartmentCode", type=int, help = "Key in Department Code if available")

update_args = reqparse.RequestParser()
update_args.add_argument("ClaimID", type=int, help = "ClaimID is required", required = True) 
update_args.add_argument("ProjectID", type=int, help = "ProjectID is required", required = True) 
update_args.add_argument("CurrencyID", type=str, help = "Currency ID is required", required = True)
update_args.add_argument("EmployeeID", type=int, help = "Employee ID is required", required = True)
update_args.add_argument("ExpenseDate", type=int, help = "Expense Date is required", required = True)
update_args.add_argument("Amount", type=float, help = "Amount is required", required = True)
update_args.add_argument("Purpose", type=str, help = "Purpose is required", required = True)
update_args.add_argument("DepartmentCode", type=int, help = "Key in Department Code if available")

@ jwt_required
def get(id):
        
        currUserId = get_jwt_identity()

        if (id != currUserId):
            return jsonify(
                {
                    "code": 401,
                    "message": "Unauthorized"
                }
        ), 500
        # Store query results
        else:
             result = Claims.query.filter_by(ClaimID = id)

        if not result:
            return jsonify(
             {
                  "code": 404,
                  "body": "Claim not found"
             }
            )
        return jsonify(
             {
                  "code": 200,
                  "body": [row.json() for row in result]
             }
        )

# @marshal_with(resource_fields)
@ jwt_required
def put(id):

        currUserId = get_jwt_identity()

        if (id == currUserId):
            abort(409, message = "Claim already exists")

        # Get arguments from put_args as defined above, where missing fields will have error
        args = put_args.parse_args()
        Client = Claims(ClaimID = args['ClaimID'], ProjectID = args['ProjectID'], CurrencyID = args['CurrencyID'],
            EmployeeID = args['EmployeeID'], ExpenseDate = args['ExpenseDate'],
            Amount = args['Amount'], Purpose = args['Purpose'], DepartmentCode = args['DepartmentCode'])
    

        # Add object to staging
        db.session.add(Client)
        # Commit permanently
        db.session.commit()

        return 201, Client

@ jwt_required
def patch(id):
        currUserId = get_jwt_identity()

        if (id != currUserId):
            abort(404, message = "Cannot update a claim that does not exist")
        
        result = Claims.query.filter_by(ClaimID = id)

        args = update_args.parse_args()

        if args['ProjectID']:
            result.projectid = args["ProjectID"]
        
        if args['CurrencyID']:
            result.currencyid = args["CurrencyID"]
        
        if args['EmployeeID']:
            result.employeeid = args["EmployeeID"]
        
        if args['ExpenseDate']:
            result.expensedate = args["ExpenseDate"]
        
        if args['Amount']:
            result.amount = args["Amount"]
        
        if args['Purpose']:
            result.purpose = args["Purpose"]
        
        if args['DepartmentCode']:
            result.deptcode = args["DepartmentCode"]

        db.session.commit()

        return 201, result

@ jwt_required
def delete(id):
        
        currUserId = get_jwt_identity()

        if (id != currUserId):
            abort(409, message = "Claim does not exist")

        result = Claims.query.filter_by(ClaimID = id)
        db.session.delete(result)
        db.session.commit()

        message = 'Claim deleted successfully'
        
        return 201, message