# -*- coding: utf-8 -*-
"""

@author: Saurav Kanchan

"""
from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^$',code_editor,name="compiler")
]
