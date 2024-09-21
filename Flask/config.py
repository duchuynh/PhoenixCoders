import os

class Config:
    # Flask settings
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_default_secret_key')

    # SQLAlchemy settings
    SQLALCHEMY_DATABASE_URI = (
        f"mysql+pymysql://{os.getenv('DB_USERNAME', 'your_db_username')}:"
        f"{os.getenv('DB_PASSWORD', 'your_db_password')}@"
        f"{os.getenv('DB_HOST', 'your_db_host')}/"
        f"{os.getenv('DB_NAME', 'your_db_name')}"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable tracking modifications to save resources

    # Other configurations
    # Add any other configuration settings here