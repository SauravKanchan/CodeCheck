# -*- coding: utf-8 -*-
"""

@author: Saurav Kanchan

"""
from django.conf.urls import url,include
from .views import *
from django.contrib.auth import views as auth_views

urlpatterns = [
    url('accounts/profile/',profile,name='profile'),
    url(r'^login/$', auth_views.login, name='login'),
    url(r'^logout/$', auth_views.logout, name='logout'),
    url(r'^signup/$', signup, name='signup'),

]
