from flask import Flask, request, jsonify
from flask_cors import CORS
from routes import main_routes

app = Flask(__name__)
CORS(app)

# Register blueprints/routes
app.register_blueprint(main_routes)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    first_name = data.get('firstName')
    last_name = data.get('lastName')

    # 
    
    # Example response
    return jsonify({"message": "Login successful", "user_id": 1}), 200

if __name__ == '__main__':
    app.run(debug=True)