from django.urls import path
from . import views

urlpatterns = [
    path('getblogs', views.getBlogs),
    path('gedata', views.getData),

    path('addblog', views.addblog)

    
]