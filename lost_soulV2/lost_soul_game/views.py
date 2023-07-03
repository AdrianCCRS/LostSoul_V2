from .models import Comments
from django.contrib import messages
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.template import loader


# Create your views here.
def game(request):

    comments_list = Comments.objects.all()
    
    template = loader.get_template("game.html")
    context = {'comments_list':comments_list}
    return HttpResponse(template.render(context,request))