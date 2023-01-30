from .models import *
from django.forms import ModelForm
from django import forms
class TareaForms(ModelForm):
    class Meta:
        model = Tarea
        fields = '__all__'
        exclude = ('fecha_inicio',)
        widgets = {
            'fecha_fin': forms.widgets.DateInput(attrs={'type': 'date'})
        }
        labels = {
            'fecha_fin': ('Posible Fecha de Finalizacion'),
        }