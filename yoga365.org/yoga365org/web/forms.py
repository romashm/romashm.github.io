from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from .models import Video

class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ["username", "password1", "password2"]
        
class DocumentForm(forms.ModelForm):
    class Meta:
        model = Video
        fields = ('description', 'theme', 'preview', 'video', )