from django.shortcuts import render
from django.http import HttpResponse

def forms(request):

    return render(request,'forms.html',{})

def goals(request):
    if request.method != "GET":
        return HttpResponse('cagaste')
       
    name= request.GET['name']

    return render(request,'success.html',{'name':name})

def postforms(request):

    return render(request,'postforms.html',{})

def postgoals(request):
    if request.method != "POST":
        return HttpResponse('cagaste')
       
    info= request.POST['info']

    return render(request,'postsuccess.html',{'info':info})