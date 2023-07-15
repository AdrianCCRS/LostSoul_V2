from django.shortcuts import redirect, render
from lost_soul_game.models import Comments
from lost_soul_game.forms import NewCommentForm
from profiles.models import Profile

# Create your views here.
#Inde
def index(request):
    template = 'index.html'
    context = {}
    return render(request, template, context)

#Contacto
def contact(request):
    context = {}
    return render(request, 'contact.html', context)

#Comunidad
def community(request):
    if request.method == "POST":
        comment_form = NewCommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.comment_author = request.user.profile #Asignar el autor del comentario
            comment.save()
            return redirect('community')
        else:
            context = {'comment_form': comment_form}
            return render(request, 'community.html', context)

    else:
        #RANKING
        # Obtener la lista de perfiles ordenados por max_score de mayor a menor
        profiles_list = Profile.objects.order_by('-max_score')
        # Tomar los primeros 10 perfiles de la lista ordenada
        top_10_profiles = profiles_list[:10]

        #COMENTARIOS
        comments_list = Comments.objects.all()
        comment_form = NewCommentForm()

        #CONTEXTO
        context = {'comments_list':comments_list, 'comment_form':NewCommentForm(), 'top_profiles': top_10_profiles}

        return render(request, "community.html", context)


