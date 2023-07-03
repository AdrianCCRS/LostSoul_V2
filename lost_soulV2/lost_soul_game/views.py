from lost_soul_game.forms import NewCommentForm
from .models import Comments
from django.contrib import messages
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render, redirect
from django.template import loader


# Create your views here.
def game(request):
    if request.method == "POST":
        comment_form = NewCommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.comment_author = request.user.profile
            comment.save()
            messages.success(request, "Comentario agregado correctamente")
            return redirect('game')
        else:
            return render(request, 'game.html', {'comment_form': comment_form})
    else:
        comments_list = Comments.objects.all()
        comment_form = NewCommentForm()
        template = loader.get_template("game.html")
        context = {'comments_list':comments_list, 'comment_form':NewCommentForm()}
        return HttpResponse(template.render(context,request))

def delete_comment(request, comment_id):
    comment = get_object_or_404(Comments, id=comment_id)
    if request.method == "POST" and request.user.profile == comment.comment_author:
        comment.delete()
        messages.success(request, "Comentario eliminado correctamente")
    return redirect('game')