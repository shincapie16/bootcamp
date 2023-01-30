from django.shortcuts import render
from django.http import HttpResponse
from .models import *
# Create your views here.
def test(request):
    return HttpResponse("Hola")

def create(request):
#   comment= Comment(name="Santi",score=5,comment="Comentariosiu")  #crear un objeto
    #comment.save()
    comment= Comment.objects.create(name="sewy")
    return HttpResponse("Hola")
def delete(request):
    #comment = Comment.objects.get(id=1)
    #comment.delete()
    Comment.objects.filter(id=2).delete()       #de forma directa
    return HttpResponse("borrado")