from flask import Flask#, request
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
# from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

from routes.auth import route

app = Flask(__name__)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:TYSclifton@1116@127.0.0.1/bank'
db = SQLAlchemy(app)

jwt = JWTManager(app)

# Do only once, else replace table
db.create_all()



db.init_app(app)

app.register_blueprint(route, url_prefix="/")

# Start app in testing mode
if __name__ == "__main__":
    app.run(debug = True) # Dev mode