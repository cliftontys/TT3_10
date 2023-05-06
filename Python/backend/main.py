from flask import Flask#, request
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
# from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy

from routes.bank import route

app = Flask(__name__)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password@127.0.0.1/bank'
db = SQLAlchemy(app)

db.create_all()



db.init_app(app)

app.register_blueprint(route, url_prefix="/claims")

# Start app in testing mode
if __name__ == "__main__":
    app.run(debug = True) # Dev mode