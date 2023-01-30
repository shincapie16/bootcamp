from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from datetime import date
# Create your views here.
def created(request):
    reporter=Reporter(first_name="santi",last_name='hini',email='santi@hotmalil.com')
    reporter.save()
    art1 = Article(headline="lalalala",pub_date=date(2022,5,5), reporter=reporter)
    art1.save()
    art2 = Article(headline="lsfs",pub_date=date(2022,4,1), reporter=reporter)
    art2.save()
    art3 = Article(headline="jeje",pub_date=date(2022,1,3), reporter=reporter)
    art3.save()
    resultado=reporter.article_set.all() #obtiene todos, .count los cuenta
    return HttpResponse(resultado)