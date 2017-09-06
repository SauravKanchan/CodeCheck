# -*- coding: utf-8 -*-
"""

@author: Saurav Kanchan

"""
from django.shortcuts import HttpResponseRedirect
from django.conf import settings

class AuthRequiredMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.

        response = self.get_response(request)
        url = request.path_info
        if not request.user.is_authenticated() and ((url not in settings.EXCLUDED_URL and ("accounts" not in url) and "/admin/" not in url) or "accounts/profile/" in url):
            return HttpResponseRedirect(settings.LOGIN_URL)

        # Code to be executed for each request/response after
        # the view is called.

        return response
