from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, DecimalField, BooleanField, SubmitField
from wtforms.validators import DataRequired

class InfoForm(FlaskForm):
    type_of_potato = SelectField('Potato Type', validators=[DataRequired()])
    fee = DecimalField('Fee', validators=[DataRequired()])
    broker = SelectField('Broker')
    submit = SubmitField('Save')