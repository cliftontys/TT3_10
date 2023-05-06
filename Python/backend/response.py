# This test script sends the requests via script to test CRUD operations
import requests

BASE = "http://127.0.0.1:5000/"

# The get url is defined in main to be a get method in the crud class

#response = requests.get(BASE +  "get/clifton") # if there exists a resource that has a /get/<string> then clifton automatically gets parsed in as string


response = requests.patch(BASE +  "crud/1", {"ID":1, "Name":"lifton", "Balance":0, "Bank":"DBS"}) # /put will send a put request of the data defined here

print(response)
input() # after the put request, input
response = requests.get(BASE +  "crud/1")
print(response)