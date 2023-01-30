from django.http import HttpResponse

def saludo(request):
    return HttpResponse("Hola Mundo")
def despedida(request):
    return HttpResponse("bai")

def adulto(request,edad):
    if edad >= 18:
        return HttpResponse("eres mayor de edad")
    else:
        return HttpResponse("no lo eres")