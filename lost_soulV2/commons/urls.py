from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'), #Inicio
    path("community/", views.community, name="community"), #Pestaña de comunidad
    path('contact/', views.contact, name='contact'), #Pestaña de contacto
]