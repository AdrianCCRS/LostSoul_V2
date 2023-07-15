from django.db import models
from profiles.models import Profile

# Create your models here.

#Modelo de comentario
class Comments(models.Model):
    comment_author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    body = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)
    