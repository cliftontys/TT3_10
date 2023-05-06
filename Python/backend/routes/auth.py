from flask import Blueprint
from controllers.auth import *

route = Blueprint('auth', __name__)


route.route('/', methods = ['POST'])(put)
# route.route('/', methods = ['GET'])(get)
# route.route('/<int:id>', methods = ['PATCH'])(patch)
# route.route('/<int:id>', methods = ['DELETE'])(delete)