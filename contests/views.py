from django.shortcuts import render
from .models import Contest
# Create your views here.
def contests(requests):
    context={}
    contests = Contest.objects.all()
    context['contests'] = contests
    return render(requests,"contests.html",context)

def contest(requests,id):
    pass