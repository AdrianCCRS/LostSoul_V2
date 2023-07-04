from profiles.models import Profile
from lost_soul_game.forms import NewCommentForm
from .models import Comments
from .forms import SetMaxScoreForm
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
    return redirect('index')

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


import json

def save_score(request):
    if request.method == 'POST':
        # Parse the JSON data from the request body
        score_data = json.loads(request.body)
        score = score_data.get('score')

        if score is not None:
            # Do something with the score data, e.g., save it to the database
            # Your processing logic here...
            user = request.user
            new_max_score = int(score)  # Convert score to an integer if needed
            if(new_max_score > user.profile.max_score):
                profile = Profile.objects.get(user=user)
                profile.max_score = new_max_score
                profile.save()
                # Optionally, send a response back to the JavaScript code
            return JsonResponse({'status': 'success', 'message': 'Score saved successfully.'})




# Assuming you have the user object and the new max score value
def update_max_score(user, new_max_score):
    # Get the Profile object associated with the user
    try:
        profile = Profile.objects.get(user=user)
    except Profile.DoesNotExist:
        # Handle the case when the user does not have a profile
        # You may create a new profile for the user if desired
        return

    # Update the max_score field
    profile.max_score = new_max_score
    profile.save()
