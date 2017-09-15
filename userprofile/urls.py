# -*- coding: utf-8 -*-
"""

@author: Saurav Kanchan

"""
from django.conf.urls import url,include
from .views import *
from django.contrib.auth import views as auth_views
from django.views.generic import TemplateView

urlpatterns = [
    url('accounts/profiles/(?P<id>\d+)',profiles,name='general_profile'),
    url('accounts/profile/',profile,name='profile'),
    url('^$',home,name='home'),

]
