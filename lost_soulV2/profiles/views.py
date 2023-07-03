from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import generic
from django.contrib.auth.hashers import check_password
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from profiles.models import Profile
from django.contrib.auth.views import PasswordChangeView
from django.contrib import messages
from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.template import loader
from django.contrib.auth import login

from .forms import EditProfileForm, NewUserForm, PasswordChangingForm, CreateProfileForm
from django.contrib.auth.decorators import user_passes_test

@method_decorator(login_required, name='dispatch')
class UserEditView(generic.UpdateView):
    form_class = EditProfileForm
    template_name = 'registration/edit_profile.html'
    
    success_url = reverse_lazy('index')

    def get_object(self):
        return self.request.user

    def form_valid(self, form):

        # Verificar si la contraseña ingresada es igual a la contraseña actual del usuario
        password = form.cleaned_data['password1']
        user = self.request.user
        if check_password(password, user.password):
            messages.success(self.request, 'Los cambios se han guardado correctamente.')
        else:
            messages.error(self.request, 'La contraseña ingresada no es correcta. Inténtalo de nuevo.')
            return self.form_invalid(form)

        return super().form_valid(form)

def is_user_not_authenticated(user):
    return not user.is_authenticated

@user_passes_test(is_user_not_authenticated, login_url='index')
def registro(request):
    if request.method == "POST":
        form = NewUserForm(request.POST)
        form_profle = CreateProfileForm(request.POST, request.FILES)

        if form.is_valid() and form_profle.is_valid():
            user = form.save()
            form_profle.instance.user = user
            form_profle.save()
            login(request,user)
            messages.success(request, "Registro Exitoso")
            return redirect('index')
        else:
            return render(request, 'register.html', {'register_form': form, 'form_profile': form_profle})
    else:
        form = NewUserForm()
        form_profle = CreateProfileForm()
        context = {"register_form":form, "form_profile":form_profle}
        template = loader.get_template("register.html")
        return HttpResponse(template.render(context,request))

class PasswordsChangeView(PasswordChangeView):
    form_class = PasswordChangingForm
    success_url = reverse_lazy('password_success')

def password_success(request):
    return render(request, 'registration/password_success.html', {})

class ShowProfilePageView(generic.DetailView):
    model = Profile
    template_name = 'registration/user_profile.html'

    def get_context_data(self, *args, **kwargs):
        context = super(ShowProfilePageView, self).get_context_data(*args, **kwargs)
        
        page_user = get_object_or_404(Profile, id=self.kwargs['pk'])

        context["page_user"] = page_user
        return context

class EditProfilePageView(generic.UpdateView):
    model = Profile
    template_name = 'registration/edit_profile_page.html'
    fields = ['public_username', 'avatar','bio']
    success_url = reverse_lazy('index')