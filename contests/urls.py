# -*- coding: utf-8 -*-
"""

@author: Saurav Kanchan

"""
from django.conf.urls import url,include
from .views import *
urlpatterns = [
    url(r'^$',contests,name="contests"),
    url(r'^(?P<id>\d+)',contest,name="contest"),
    url(r'^practice/',include('practice.urls')),

]
