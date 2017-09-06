# -*- coding: utf-8 -*-
"""

@author: Saurav Kanchan

"""
from django.conf.urls import url,include
from .views import *
urlpatterns = [

    url(r'^(?P<id>\d+)/',contest,name="contest_detail"),
    url(r'^$',contests,name="contests"),
]
