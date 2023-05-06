from flask import Blueprint, render_template, request, flash, redirect, url_for
from models.model import Employees
from werkzeug.security import generate_password_hash, check_password_hash
from . import db   ##means from __init__.py import db
from flask_login import login_user, login_required, logout_user, current_user


auth = Blueprint('auth', __name__)

app = Flask(__name__)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:TYSclifton@1116@127.0.0.1/bank'
db = SQLAlchemy(app)


# Do only once, else replace table
db.create_all()



db.init_app(app)



@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        EmployeeID  = request.form.get('EmployeeID')
        Password = request.form.get('Password')

        user = Employees.query.filter_by(EmployeeID=EmployeeID).first()
        if user:
            if check_password_hash(user.Password, Password):
                flash('Logged in successfully!', category='success')
                login_user(user, remember=True)
                return redirect(url_for('views.home'))
            else:
                flash('Incorrect password, try again.', category='error')
        else:
            flash('Employee ID does not exist.', category='error')

    return render_template("login.html", user=current_user)


@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))

# Start app in testing mode
if __name__ == "__main__":
    app.run(debug = True) # Dev mode