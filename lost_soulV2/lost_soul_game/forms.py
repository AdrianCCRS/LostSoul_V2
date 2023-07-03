from django import forms
from profiles.models import Profile
from .models import Comments
from django.db import models

class NewCommentForm(forms.ModelForm):
    class Meta:
        model = Comments
        fields = ["body"]