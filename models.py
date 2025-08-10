from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from datetime import datetime

db = SQLAlchemy()

#Table des utilisateurs (admins)
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(50), default='admin')

#Table des vols
class Flight(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    departure = db.Column(db.String(100), nullable=False)
    destination = db.Column(db.String(100), nullable=False)
    date = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)
    seats = db.Column(db.Integer, nullable=False)

#Table des offres
class Offer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    valid_until = db.Column(db.String(50), nullable=False)

#Table des visiteurs
class Visitor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ip_address = db.Column(db.String(150))
    page = db.Column(db.String(100))
    visit_time = db.Column(db.DateTime, default=datetime.utcnow)