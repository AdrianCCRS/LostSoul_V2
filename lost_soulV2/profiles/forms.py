from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, PasswordChangeForm
from .models import Profile
class NewUserForm(UserCreationForm):
    email = forms.EmailField(required=True, widget=forms.EmailInput(attrs={'class': 'form-control'}))
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
    
class EditProfileForm(UserChangeForm):
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class': 'form-control'}))
    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    password1 = forms.CharField(label="Contraseña", widget=forms.PasswordInput(attrs={'class': 'form-control'}))
    password2 = forms.CharField(label="Confirmar Contraseña", widget=forms.PasswordInput(attrs={'class': 'form-control'}))

    class Meta:
        model = User
        fields = ("username", "email", 'password1', 'password2')
		
class PasswordChangingForm(PasswordChangeForm):
    old_password = forms.CharField(label="Contraseña Antigua", widget=forms.PasswordInput(attrs={'class': 'form-control', type: 'password'}))
    new_password1 = forms.CharField(label="Nueva Contraseña", widget=forms.PasswordInput(attrs={'class': 'form-control', type: 'password'}))
    new_password2 = forms.CharField(label="Confirmar Nueva Contraseña", widget=forms.PasswordInput(attrs={'class': 'form-control', type: 'password'}))

    class Meta:
        model = User
        fields = ("old_password", 'new_password1', 'new_password2')
		

