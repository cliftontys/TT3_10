from flask import Flask#, request
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
# from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from models.model import db
from routes.auth import authRoute



app = Flask(__name__)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:techtrek3_10@127.0.0.1:3306/expenseclaimsdata'

app.config["JWT_SECRET_KEY"] = "super-secret"
jwt = JWTManager(app)

# Do only once, else replace table
# db.create_all()



db.init_app(app)

app.register_blueprint(authRoute, url_prefix="/")

# Start app in testing mode
if __name__ == "__main__":
    app.run(debug = True) # Dev mode