from flask import Flask#, request
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
# from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy

from routes.bank import route

app = Flask(__name__)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password@127.0.0.1/bank'
db = SQLAlchemy(app)

# class BankModel(db.Model):
#     ID = db.Column(db.Integer, primary_key = True)
#     Name = db.Column(db.String(80), nullable = False)
#     Balance = db.Column(db.Integer, nullable = False)
#     Bank = db.Column(db.String(4), nullable = False)

#     def __repr__(self):
#         return f"Client(ID = {ID}, Name = {Name}, Balance = {Balance}, Bank = {Bank})"

# Do only once, else replace table
db.create_all()

# # Making sure that the request parsed fits the below guidelines
# put_args = reqparse.RequestParser()
# # currently no good error message, only 500
# put_args.add_argument("Name", type=str, help = "Customer name is required", required = True) 
# put_args.add_argument("ID", type=str, help = "Customer acocunt ID", required = True)
# put_args.add_argument("Balance", type=str, help = "Customer balance", required = True)
# put_args.add_argument("Bank", type=str, help = "POSB or DBS")


# update_args = reqparse.RequestParser()
# update_args.add_argument("Name", type=str, help = "Customer name is required")
# update_args.add_argument("ID", type=str, help = "Customer acocunt ID")
# update_args.add_argument("Balance", type=str, help = "Customer balance")
# update_args.add_argument("Bank", type=str, help = "POSB or DBS")

# Serialise the result into something readable along with marshall with
# resource_fields = {
#     'ID' : fields.Integer,
#     "Name" : fields.String,
#     "Balance" : fields.Integer,
#     "Bank" : fields.String
# }

# # Crud methods are defined in this class
# class crud(Resource):
#     #/crud/id to see the user info
#     @marshal_with(resource_fields)
#     def get(self, id):
#         # Store query results
#         result = BankModel.query.filter_by(ID = id).first()

#         if not result:
#             abort(409, message = "Client's account could not be found")
#         return result
    
    
#     @marshal_with(resource_fields)
#     def put(self, id):
#         # Get arguments from put_args as defined above, where missing fields will have error
#         args = put_args.parse_args()
#         Client = BankModel(ID = args['ID'], Name = args['Name'],
#                            Balance = args['Balance'], Bank = args['Bank'])
        
#         # Check if field already exists
#         result = BankModel.query.filter_by(ID = args['ID']).first()
#         if result:
#             abort(409, message = "Bank account already exists")

#         # Add object to staging
#         db.session.add(Client)
#         # Commit permanently
#         db.session.commit()

#         return Client, 201 # 201 means created, by default 201 is okay!
    
#     def patch(self, id):
#         args = update_args.parse_args()
#         result = BankModel.query.filter_by(ID = id).first()
#         if not result:
#             abort(404, message = "Cannot update an account that does not exist")

#         if args['Name']:
#             result.name = args["Name"]
        
#         if args['Bank']:
#             result.bank = args["Bank"]
        
#         if args['Balance']:
#             result.balance = args["Balance"]

#         db.session.commit()

#         return result, 201

        
    
#     def delete(self, id):
#         args = put_args.parse_args()

#         # Check if field already exists
#         result = BankModel.query.get(id)
#         if not result:
#             abort(409, message = "Bank account does not exist")
        
#         db.session.delete(result)
#         db.session.commit()
#         return "Customer deleted", 201 # 201 means created, by default 201 is okay!
    
# In the request url, the id will be used in certain functions above
# api.add_resource(crud, "/crud/<int:id>")

db.init_app(app)

app.register_blueprint(route, url_prefix="/claims")

# Start app in testing mode
if __name__ == "__main__":
    app.run(debug = True) # Dev mode