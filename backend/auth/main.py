from flask import Flask#, request
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
# from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from models.model import db
from routes.auth import authRoute
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://techtrek3_10:techtrek3_10@techtrek.crjcxyz2pcxm.ap-southeast-2.rds.amazonaws.com:3306/techtrek'


jwt = JWTManager(app)

# Do only once, else replace table
# db.create_all()



db.init_app(app)


app.register_blueprint(authRoute, url_prefix="/")

# Start app in testing mode
if __name__ == "__main__":
    app.run(debug = True) # Dev mode