from django.conf import settings
from django.urls import path
from . import views
from .views import ShowProfilePageView, UserEditView, PasswordsChangeView, EditProfilePageView


urlpatterns = [
    path('registro/', views.registro, name='registro'),
    path('edit_profile/', UserEditView.as_view(), name='edit_profile'),
    path('password/', PasswordsChangeView.as_view(template_name='registration/change_password.html'), name='change_password'),
    path('password_success', views.password_success, name='password_success'),
    path('<int:pk>/profile/', ShowProfilePageView.as_view(), name='show_profile_page'),
    path('<int:pk>/edit_profile_page/', EditProfilePageView.as_view(), name='edit_profile_page'),
]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
