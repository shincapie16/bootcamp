from django.urls import path
from . import views
urlpatterns = [
    path('created/',views.created, name="created")
]
