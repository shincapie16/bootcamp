from django.urls import path
from . import views
urlpatterns = [
    path('',views.index,name="contact"),
    path('view/<int:id>/',views.view,name="view_contact"),
    path('edit/<int:id>/',views.edit,name="edit_contact"),
    path('delete/<int:id>/',views.delete,name="delete_contact"),
    path('add/',views.add,name="add_contact")

]
