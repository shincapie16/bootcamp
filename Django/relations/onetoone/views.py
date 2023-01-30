from django.shortcuts import render
from django.http import HttpResponse
from .models import *
# Create your views here.

def create(request):
    place=Place(name="Lugar 1",address="mi casa con cuarta")
    place.save()
    restaurant=Restaurant(place=place,numero_de_empleados=50)
    restaurant.save()
    return HttpResponse(restaurant.place.name)