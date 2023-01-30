from django.shortcuts import render
from .models import Tarea
from .forms import TareaForms
# Create your views here.
def index(request):
    return render(request,'tareas/index.html',{})

from django.shortcuts import render,redirect
from .models import *
from .forms import *
from django.contrib import messages
# Create your views here.
def index(request):
    tareas = Tarea.objects.filter(titulo__contains=request.GET.get('search',''))   #Primero el valor de la busqueda, luego el valor por defecto el cual es vacío
    context={
        'tareas': tareas
    }
    return render(request,'tareas/index.html',context)

def add(request):
    if (request.method == "GET"):
        form = TareaForms()
        context={
            'form':form
        }
        return render(request,'tareas/create.html',context)
    if (request.method == "POST"):
        form = TareaForms(request.POST)
        if form.is_valid():
            form.save()
            context = {
                'form':form
            }
        return redirect(to='tarea')
            

def view(request,id):
    tarea=Tarea.objects.get(id=id)
    context={
        'tarea':tarea
    }
    return render(request,'tareas/detail.html',context)

def edit(request,id):
    tarea=Tarea.objects.get(id=id)

    if (request.method == "GET"):
        form = TareaForms(instance=tarea)
        context={
        'form':form,
        'id':id
        }
        return render(request,'tareas/update.html',context)

    if (request.method == "POST"):
        form = TareaForms(data=request.POST,instance=tarea)
        if form.is_valid():
            form.save()
            context={
            'form':form,
            'id':id
            }
            messages.success(request,"Editado correctamente")
            return render(request,'tareas/update.html',context)
            #return redirect(to="contact")

def delete(request,id):
    contact = Tarea.objects.get(id=id)
    contact.delete()
    return redirect(to="tarea")
    
