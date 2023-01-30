from .models import *
from django.forms import ModelForm
class ContactoForms(ModelForm):

    class Meta:
        model = Contacto
        exclude = ('fecha_inclusion',)