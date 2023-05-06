from flask import Blueprint
from controllers.bank import *

route = Blueprint('crud', __name__)


route.route('/', methods = ['POST'])(put)
route.route('/<int:id>', methods = ['GET'])(get)
route.route('/<int:id>', methods = ['PATCH'])(patch)
route.route('/<int:id>', methods = ['DELETE'])(delete)