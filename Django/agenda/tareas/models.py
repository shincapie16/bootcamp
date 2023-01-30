from django.db import models
from datetime import date

# Create your models here.
class Tarea(models.Model):
    titulo = models.CharField(max_length=40,blank=False,null=False)
    descripcion = models.TextField(blank=True,null=True)
    fecha_inicio = models.DateField(default=date.today)
    fecha_fin = models.DateField(blank=True,null=True)

    def __str__(self):
        return self.titulo
