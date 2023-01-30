from django.shortcuts import render
from .models import *
# Create your views here.
def queries(request):
    #Obtener todos los autores
    autores=Autor.objects.all()  #.orderby('email') ejemplo
    #filtrado por condicion
    filtrado=Autor.objects.filter(email='johnsondaniel@example.org')
    #filtrado por unico objeto
    autor=Autor.objects.get(id=1)
    #obtener los 10 primeros
    limit=Autor.objects.all()[:10]   #[cuantos me salto: cuantos tomo]
    #filtrar con condicones}
    filtrado2=Autor.objects.filter(id__lte=14) #lte menor o igual, gte >= __contains contiene __exacts: exact
    return render(request,'post/queries.html',{'autores':autores,'filtrado': filtrado,'autor':autor,'limit':limit})
