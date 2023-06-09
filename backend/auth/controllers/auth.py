from flask import Flask, request, jsonify
from models.model import db
from models.model import Employee
from flask_jwt_extended import create_access_token
import json


def login():

    '''
        Example of response received in front end
        {
            "code":200,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2OTQ2Njg4MCwianRpIjoiOTdiYTM5YzEtOWM1Ni00YzkyLWExNmUtOWI3MThmNWQxMzRmIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjY5NDY2ODgwLCJleHAiOjE2Njk3MjYwODAsImlkIjoxLCJuYW1lIjoiSmFja3kiLCJ1c2VybmFtZSI6InVzZXIxMDEifQ.LBmzSv7LHiby2plop9ufQEolGPmCIabz8W_eFVel6nU"
        }
        Example of decoded token 
        {
            "fresh": false,
            "iat": 1669466880,
            "jti": "97ba39c1-9c56-4c92-a16e-9b718f5d134f",
            "type": "access",
            "sub": 1,
            "nbf": 1669466880,
            "exp": 1669726080,
            "id": 1,
            "name": "Jacky",
            "username": "user101"
        }
    '''
    try:
        ID = request.json.get("ID", None)
        password = request.json.get("Password", None)
        print(ID)
        existingUser = Employee.query.filter( (Employee.EmployeeID == ID) & (Employee.Password == password) ).first(); 

        if not existingUser:
            return jsonify(
                {
                    "code": 404,
                    "message": "User not found."
                }
            ), 404

        # additional_claims = {"EmployeeID": existingUser.EmployeeID,"SupervisorID": existingUser.SupervisorID , "FirstName":existingUser.FirstName, 
        # "LastName":existingUser.LastName}

        access_token = create_access_token(
            identity=existingUser.EmployeeID)#, additional_claims=additional_claims)

        return jsonify({
            "code": 200,
            "token": access_token
        })

    except Exception as e:
        print(e)
        return jsonify(
            {
                "code": 500,
                "message": "Server Error"
            }
        ), 500