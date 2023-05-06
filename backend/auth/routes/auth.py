from flask import Blueprint
from controllers.auth import login; 

authRoute = Blueprint('auth', __name__); 


authRoute.route('/', strict_slashes=False, methods=['POST'])(login)