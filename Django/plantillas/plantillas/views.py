from django.http import HttpResponse
from django.shortcuts import render
def simple(request):
    return render(request,'simple.html',{})

def dinamico(request,name):
    categorias=['code','diseño','marketing']
    context = {'name':name,'categorias':categorias}
    return render(request,'dinamico.html',context)