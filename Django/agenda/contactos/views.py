from django.shortcuts import render,redirect
from .models import *
from .forms import *
from django.contrib import messages
# Create your views here.
def index(request):
    contacts = Contacto.objects.filter(nombre__contains=request.GET.get('search',''))   #Primero el valor de la busqueda, luego el valor por defecto el cual es vacío
    context={
        'contacts': contacts
    }
    return render(request,'contactos/index.html',context)

def add(request):
    if (request.method == "GET"):
        form = ContactoForms()
        context={
            'form':form
        }
        return render(request,'contactos/create.html',context)
    if (request.method == "POST"):
        form = ContactoForms(request.POST)
        if form.is_valid():
            form.save()
            context = {
                'form':form
            }
        return redirect(to='contact')
            

def view(request,id):
    contact=Contacto.objects.get(id=id)
    context={
        'contact':contact
    }
    return render(request,'contactos/detail.html',context)

def edit(request,id):
    contact=Contacto.objects.get(id=id)

    if (request.method == "GET"):
        form = ContactoForms(instance=contact)
        context={
        'form':form,
        'id':id
        }
        return render(request,'contactos/update.html',context)

    if (request.method == "POST"):
        form = ContactoForms(data=request.POST,instance=contact)
        if form.is_valid():
            form.save()
            context={
            'form':form,
            'id':id
            }
            messages.success(request,"Editado correctamente")
            return render(request,'contactos/update.html',context)
            #return redirect(to="contact")

def delete(request,id):
    contact = Contacto.objects.get(id=id)
    contact.delete()
    return redirect(to="contact")
    
