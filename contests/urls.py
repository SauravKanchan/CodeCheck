# -*- coding: utf-8 -*-
"""

@author: Saurav Kanchan

"""
from django.conf.urls import url,include
from .views import *
urlpatterns = [

    url(r'^(?P<contest_id>\d+)/(?P<question_id>\d+)/', contest_question, name="contest_question"),
    url(r'^(?P<id>\d+)/leaderboard', leaderboard, name="contest_leaderboard"),
    url(r'^(?P<id>\d+)/',contest,name="contest_detail"),
    url(r'^$',contests,name="contests"),
    url(r'^contest_test/',contest_test,name='contest_test'),

]
