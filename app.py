import os
from flask import (
    Flask, flash, render_template, redirect,
    request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")


mongo = PyMongo(app)


@app.route("/")
def get_home():
    users = mongo.db.users.find()
    return render_template("index.html", users=users)


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # check if user exists in our db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            flash("That username already exists, please choose different name")
            return redirect(url_for("register"))

        register = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password")),
            "email_address": request.form.get("email").lower(),
            "pronoun": request.form.get("pronouns"),
            "address": request.form.get("autocomplete"),
            "tech_skills": request.form.get("skills"),
            "date": request.form.get("date"),
            "friends": request.form.get("friends"),
            "about_me": request.form.get("about"),
        }
        mongo.db.users.insert_one(register)

        # put the new user into 'session' cookie
        session["user"] = request.form.get("username").lower()
        flash("Registration Successful!")
        # once logged, redirect user to home,
        # using session cookie
        return redirect(url_for("get_home", username=session["user"]))

    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # check if username exists and if it does, store it in a variable
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            # ensure hashed password matches the user input
            if check_password_hash(
                    existing_user["password"], request.form.get("password")):
                session["user"] = request.form.get("username").lower()
                flash("Welcome, {}".format(request.form.get("username")))
                return redirect(url_for(
                        "get_home", username=session["user"]))
            else:
                # invalid password match - we do not want to let them know
                # exactly which they have wrong as that would make it easier to
                # brute force entries
                flash(
                    "Incorrect username/password, please try again")
                return redirect(url_for("login"))

        else:
            # if username doesn't exist
            flash(
                "Incorrect username/password, please try again")
            return redirect(url_for("login"))

    return render_template("login.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
