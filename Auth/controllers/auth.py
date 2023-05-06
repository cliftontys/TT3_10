from models.model import BankModel, db
from flask import request, jsonify
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with

# Making sure that the request parsed fits the below guidelines
put_args = reqparse.RequestParser()
# currently no good error message, only 500
put_args.add_argument("ID", type=str, help = "Customer acocunt ID", required = True)



update_args = reqparse.RequestParser()
update_args.add_argument("Name", type=str, help = "Customer name is required")
update_args.add_argument("ID", type=str, help = "Customer acocunt ID")
update_args.add_argument("Balance", type=str, help = "Customer balance")
update_args.add_argument("Bank", type=str, help = "POSB or DBS")

resource_fields = {
    'ID' : fields.Integer,
    "Name" : fields.String,
    "Balance" : fields.Integer,
    "Bank" : fields.String
}

# @marshal_with(resource_fields)
def get(id):
        # Store query results
        result = BankModel.query.filter_by(ID = id)

        if not result:
            abort(409, message = "Client's account could not be found")
        return jsonify(
             {
                  "code": 200,
                  "data": [row.json() for row in result]
             }
        )

# @marshal_with(resource_fields)
def put(id):
    # Get arguments from put_args as defined above, where missing fields will have error
    args = put_args.parse_args()
    Client = BankModel(ID = args['ID'], Name = args['Name'],
                        Balance = args['Balance'], Bank = args['Bank'])
    
    # Check if field already exists
    result = BankModel.query.filter_by(ID = args['ID']).first()
    if result:
        abort(409, message = "Bank account already exists")

    # Add object to staging
    db.session.add(Client)
    # Commit permanently
    db.session.commit()

    return Client, 201 # 201 means created, by default 201 is okay!

def patch(id):
        args = update_args.parse_args()
        result = BankModel.query.filter_by(ID = id).first()
        if not result:
            abort(404, message = "Cannot update an account that does not exist")

        if args['Name']:
            result.name = args["Name"]
        
        if args['Bank']:
            result.bank = args["Bank"]
        
        if args['Balance']:
            result.balance = args["Balance"]

        db.session.commit()

        return result, 201

def delete(id):
        args = put_args.parse_args()

        # Check if field already exists
        result = BankModel.query.get(id)
        if not result:
            abort(409, message = "Bank account does not exist")
        
        db.session.delete(result)
        db.session.commit()
        return "Customer deleted", 201 # 201 means created, by default 201 is okay!
    