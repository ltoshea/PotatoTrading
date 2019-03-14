from flask import render_template
from app import app
from app.forms import InfoForm

# ...

@app.route('/')
@app.route('/index')
def index():
    form = InfoForm()
    return render_template('info_form.html', form=form)