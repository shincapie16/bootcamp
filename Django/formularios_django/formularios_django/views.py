from django.shortcuts import render
from django.http import HttpResponse
from .forms import * 
def form(request):
    comment_form = CommentForm()
    return render(request,'form.html',{'comment_form': comment_form})

def goal(request):
    if request.method != 'GET':
        return HttpResponse('cagaste')

    return HttpResponse('VUAMOSOSOS')