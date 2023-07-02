from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader


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


