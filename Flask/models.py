# from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    cuisines = db.Column(db.String(200))  # Change to list
    restrictions = db.Column(db.String(200))  # Change to list form comma-separated string
    skill_level = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "cuisines": self.cuisines.split(',') if self.cuisines else [],
            "restrictions": self.restrictions.split(',') if self.restrictions else [],
            "skill_level": self.skill_level
        }