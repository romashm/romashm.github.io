from django.urls import path

from .views import *

urlpatterns = [
    path('', index, name='Begin'),
    path('signin/', signin, name='signin'),
    path('signup/', signup, name='signup'),
    path('home/', home, name='Home'),
    path('logout/', signout, name="logout"),
    path('admin_panel/', admin_panel, name='admin_panel'),
    path('admin_panel/<int:slug>', admin_panel, name='admin_panel-delete'),
    path('curses/', curses, name="curses"),
    path('profile/', profile, name="profile")
]
