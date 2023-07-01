from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm



class NewUserForm(UserCreationForm):
    email = forms.EmailField(required=True)
    remember_me = forms.BooleanField(
        required=False,
        initial=True,  
        widget=forms.CheckboxInput(attrs={'class': 'form-check-input'})
    )
    class Meta:
        model = User
        fields = ("username", "email", "password1", "password2")
		
    def __init__(self, *args, **kwargs):
        super(NewUserForm, self).__init__(*args, **kwargs)
        self.fields['username'].widget.attrs['class'] = 'form-control'
        self.fields['password1'].widget.attrs['class'] = 'form-control'
        self.fields['password2'].widget.attrs['class'] = 'form-control'

    def save(self, commit=True):
        user = super(NewUserForm, self).save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user

