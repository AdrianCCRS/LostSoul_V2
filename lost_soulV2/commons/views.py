from django.contrib import messages
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.template import loader
from django.contrib.auth import login

from .forms import NewUserForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.decorators import user_passes_test

# Create your views here.
def index(request):
    # Guardar la URL actual en la sesión
    request.session['previous_url'] = request.get_full_path()

    template = 'index.html'
    context = {}
    return render(request, template, context)

def contact(request):
    template = loader.get_template("contact.html")
    context = {}
    return HttpResponse(template.render(context,request))

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
        messages.error(request,"No fue posible el Registro. Información Invalida")
    form = NewUserForm()
    context = {"register_form":form}
    template = loader.get_template("register.html")
    return HttpResponse(template.render(context,request))


