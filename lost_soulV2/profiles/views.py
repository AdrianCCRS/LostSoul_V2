from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import generic
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from .models import Profile
from django.contrib.auth.views import PasswordChangeView
from django.contrib import messages
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.template import loader
from django.contrib.auth import login

from .forms import EditProfileForm, NewUserForm, PasswordChangingForm
from django.contrib.auth.decorators import user_passes_test

@method_decorator(login_required, name='dispatch')
class UserEditView(generic.UpdateView):
    form_class = EditProfileForm
    template_name = 'registration/edit_profile.html'
    success_url = reverse_lazy('index')

    def get_object(self):
        return self.request.user

def is_user_not_authenticated(user):
    return not user.is_authenticated

@user_passes_test(is_user_not_authenticated, login_url='index')
def registro(request):
    if request.method == "POST":
        form = NewUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request,user)
            messages.success(request, "Registro Exitoso")
            return redirect('index')
        else:
            return render(request, 'register.html', {'register_form': form})
    else:
        form = NewUserForm()
        context = {"register_form":form}
        template = loader.get_template("register.html")
        return HttpResponse(template.render(context,request))

class PasswordsChangeView(PasswordChangeView):
    form_class = PasswordChangingForm
    success_url = reverse_lazy('password_success')


def password_success(request):
    return render(request, 'registration/password_success.html', {})