from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from models import db, User  # Import db and models

app = Flask(__name__)

# Configure SQLite for local database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///local.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database and Flask-Migrate
db.init_app(app)
migrate = Migrate(app, db)

CORS(app)

# Routes
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400
    first_name = data.get('firstName')
    last_name = data.get('lastName')

    if not first_name or not last_name:
        return jsonify({"error": "Missing first name or last name"}), 400

    # Create a new user and save to the database
    user = User(first_name=first_name, last_name=last_name, skill_level=0)
    db.session.add(user)
    db.session.commit()

    # Return the user ID
    return jsonify({"message": "Login successful", "user_id": user.id}), 200

@app.route('/api/onboarding', methods=['POST'])
def onboarding():
    data = request.get_json()
    user_id = data.get('user_id')
    cuisines = data.get('cuisines')
    restrictions = data.get('restrictions')
    skill_level = data.get('skill_level')

    # Retrieve user from the database
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    # Update the user's data
    user.cuisines = cuisines
    user.restrictions = restrictions
    user.skill_level = skill_level
    db.session.commit()

    return jsonify({"message": "Onboarding data received"}), 200

@app.route('/api/user/<int:user_id>', methods=['GET'])
def get_user_data(user_id):
    # Fetch the user data from the database
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    return jsonify(user.to_dict()), 200

if __name__ == '__main__':
    app.run(debug=True)