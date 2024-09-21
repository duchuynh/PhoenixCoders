from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Routes
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    first_name = data.get('firstName')
    last_name = data.get('lastName')

    # 
    
    # Example response
    return jsonify({"message": "Login successful", "user_id": 1}), 200

@app.route('/api/onboarding', methods=['POST'])
def onboarding():
    data = request.get_json()
    cuisines = data.get('cuisines')
    restrictions = data.get('restrictions')
    skill_level = data.get('skill_level')
    
    # Perform logic to save this data, e.g., updating the User model
    # Assuming you have the current user's ID or other identifying information
    
    return jsonify({"message": "Onboarding data received"}), 200

if __name__ == '__main__':
    app.run(debug=True)