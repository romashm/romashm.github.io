from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, logout, login
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import CreateUserForm, DocumentForm
from .models import Video
import os

# Create your views here.
def index(request):
    return render(request, 'index.html')

@csrf_exempt
def signin(request):
    form = CreateUserForm()
    if request.method == "POST":
        user = authenticate(request, username = request.POST.get('username'), password = request.POST.get('password1'))

        if user is not None:
            login(request, user)
            return redirect("Home")
        else: messages.info(request, "Неверный логин или пароль.")
    return render(request, 'signin.html', {
        'form': form
    })

@csrf_exempt
def signup(request):
    form = CreateUserForm()
    if request.method == "POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("signin")
        else: messages.error(request, """
            Пароль должен содержать буквы A-Z, a-z, а также цифры 0-9.
        """)
    return render(request, 'signup.html', {
        'form': form
    })
    
@csrf_exempt
@login_required(login_url='signin')
def home(request):
    list = []
    for i in Video.objects.all(): list.append(i.theme)
    if request.method == "POST":
        pass
    
    return render(request, 'home.html', {
        'form': Video.objects.all(),
        'theme': set(list),
    })
    
@csrf_exempt
def admin_panel(request, slug=None):
    form = DocumentForm()  
    if request.method == 'POST':
        if 'upload' in request.POST:
            form = DocumentForm(request.POST, request.FILES)
            if form.is_valid():
                form.save()
                return redirect('admin_panel')
        elif 'delete' in request.POST:
            os.remove(f'/var/www/u2130262/data/www/yoga365.org/yoga365org/media/{Video.objects.get(id=slug).preview}')
            os.remove(f'/var/www/u2130262/data/www/yoga365.org/yoga365org/media/{Video.objects.get(id=slug).video}')
            Video.objects.filter(id=slug).delete()
            return redirect('admin_panel')
        
    return render(request, 'admin.html', {
        'form': form,
        'Video': Video.objects.all(),
    })
    
@csrf_exempt
def curses(request):
    if request.method == "POST":
        length = len(request.POST.get("lesson_id"))
        integers, obj = [], []
        i = 0 
        while i < length:
            s_int = ''  
            while i < length and '0' <= request.POST.get("lesson_id")[i] <= '9':
                s_int += request.POST.get("lesson_id")[i]
                i += 1
            i += 1
            if s_int != '':
                integers.append(int(s_int))
                
        for inte in integers:
            obj.append(Video.objects.get(id=inte))
            

        return render(request, 'curses.html', {
            'form': obj,
            'int': integers
        })
        
        
    return render(request, 'curses.html')

@csrf_exempt
def profile(request):
    return render(request, 'profile.html')
    
@csrf_exempt
def signout(request):
    logout(request)
    return redirect("signin")
