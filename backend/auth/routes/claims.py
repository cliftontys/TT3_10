from flask import Blueprint
from controllers.claims import *

claimsRoute = Blueprint('claims', __name__)


claimsRoute.route('/', strict_slashes=False, methods = ['POST'])(put)
claimsRoute.route('/', strict_slashes=False, methods = ['GET'])(get)
claimsRoute.route('/<int:id>', strict_slashes=False, methods = ['PATCH'])(patch)
claimsRoute.route('/<int:id>', strict_slashes=False, methods = ['DELETE'])(delete)

