from django.urls import path
from . import views

urlpatterns = [
    path('game/', views.game, name='game'),
    path('delete_comment/<int:comment_id>/', views.delete_comment, name='delete_comment'),
]