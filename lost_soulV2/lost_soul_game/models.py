from django.db import models
from profiles.models import Profile

# Create your models here.
class Comments(models.Model):
    comment_author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    body = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return '%s - %s' % (self.comment_author, self.body)