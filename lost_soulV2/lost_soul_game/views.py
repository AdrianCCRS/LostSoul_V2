from profiles.models import Profile
from lost_soul_game.forms import NewCommentForm
from .models import Comments
from django.shortcuts import get_object_or_404, render, redirect
import json

#Pestaña del juego
def game(request):
    if request.method == "POST":
        #CREACION COMENTARIOS
        comment_form = NewCommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.comment_author = request.user.profile
            comment.save()
            return redirect('game')
        else:
            context={'comment_form': comment_form}
            return render(request, 'game.html', context)
        
    else:
        comments_list = Comments.objects.all()
        comment_form = NewCommentForm()
        context = {'comments_list':comments_list, 'comment_form':NewCommentForm()}
        return render(request, "game.html", context)

#Eliminar comentario
def delete_comment(request, comment_id):
    comment = get_object_or_404(Comments, id=comment_id)
    if request.method == "POST" and request.user.profile == comment.comment_author:
        comment.delete()
    return redirect(request.META.get('HTTP_REFERER',))

#Guardar max_score
def save_score(request):
    if request.method == 'POST':
        score_data = json.loads(request.body) #Obtener el json que me manda el juego
        score = score_data.get('score') #Obtener el score del json
        if score is not None:
            user = request.user
            new_max_score = int(score)
            if(new_max_score > user.profile.max_score):
                profile = Profile.objects.get(user=user)
                profile.max_score = new_max_score
                profile.save()                
