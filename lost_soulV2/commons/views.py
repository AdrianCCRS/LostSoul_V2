from django.http import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.template import loader
from lost_soul_game.models import Comments
from lost_soul_game.forms import NewCommentForm
from profiles.models import Profile


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

def community(request):
    if request.method == "POST":
        comment_form = NewCommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.comment_author = request.user.profile
            comment.save()
            return redirect('community')
        else:
            return render(request, 'community.html', {'comment_form': comment_form})

    else:
        # Obtener la lista de perfiles ordenados por max_score de mayor a menor
        profiles_list = Profile.objects.order_by('-max_score')

        # Tomar los primeros 10 perfiles de la lista ordenada
        top_10_profiles = profiles_list[:10]

        comments_list = Comments.objects.all()
        comment_form = NewCommentForm()
        context = {'comments_list':comments_list, 'comment_form':NewCommentForm(), 'top_profiles': top_10_profiles}

        # Renderizar la plantilla "community.html" con el contexto
        return render(request, "community.html", context)


