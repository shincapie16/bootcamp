from django.db import models
from datetime import date
# Create your models here.
class Contacto(models.Model):
    nombre = models.CharField(max_length=30,blank=False,null=False)
    apellido = models.CharField(max_length=30,blank=True,null=True)
    email = models.EmailField(blank=True,null=True)
    telefono_1 = models.CharField(max_length=12,blank=False,null=False)
    telefono_2 = models.CharField(max_length=12,blank=True,null=True)
    fecha_inclusion = models.DateField(default=date.today)

    def __str__(self):
        return self.nombre