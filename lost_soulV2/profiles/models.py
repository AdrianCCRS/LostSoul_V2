from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    public_username = models.CharField(max_length=15, null=True, blank=True)
    avatar = models.ImageField(upload_to='profiles/', null=True, blank=True)
    bio = models.TextField(max_length=150)
    max_score = models.IntegerField(default=0)

    def __str__(self):
        return str(self.user)
    
