from django.urls import path
from . import views
urlpatterns = [
    path('',views.index,name="tarea"),
    path('view/<int:id>/',views.view,name="view_tarea"),
    path('edit/<int:id>/',views.edit,name="edit_tarea"),
    path('delete/<int:id>/',views.delete,name="delete_tarea"),
    path('add/',views.add,name="add_tarea")
]