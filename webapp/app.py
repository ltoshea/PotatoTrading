import os
from flask import Flask
from flask import render_template
from webapp.forms import InfoForm

app = Flask(__name__)
SECRET_KEY = os.urandom(32)
WTF_CSRF_SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY
app.config['WTF_CSRF_SECRET_KEY']= WTF_CSRF_SECRET_KEY


@app.route('/')
@app.route('/index')
def index():
    form = InfoForm()
    return render_template('info_form.html', form=form)

if __name__ == '__main__':
    app.run()