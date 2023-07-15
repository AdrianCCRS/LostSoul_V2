from django import forms
from profiles.models import Profile
from django.contrib.auth.models import User
from .models import Comments
from django.db import models

#Nuevo comentario
class NewCommentForm(forms.ModelForm):
    class Meta:
        model = Comments
        fields = ["body"]

#Modificar max_score
class SetMaxScoreForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ["max_score"]
        user = models.OneToOneField(User, on_delete=models.CASCADE)	