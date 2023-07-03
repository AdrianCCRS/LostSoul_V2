from django.contrib import messages
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.template import loader


# Create your views here.
def game(request):
    template = loader.get_template("game.html")
    context = {}
    return HttpResponse(template.render(context,request))