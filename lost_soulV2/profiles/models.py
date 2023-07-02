from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    username = User.username
    avatar = models.ImageField(upload_to='profiles', null=True, blank=True)
    bio = models.TextField()

    def __str__(self):
        return str(self.user)
    
