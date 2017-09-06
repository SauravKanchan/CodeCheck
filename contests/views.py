from django.shortcuts import render
from .models import Contest,Track,Question
# Create your views here.
def contests(request):
    context={}
    contests = Contest.objects.all()
    context['contests'] = contests
    return render(request,"contests.html",context)

def contest(request,id):
    context={}
    contests = Contest.objects.all()
    context['contests'] = contests
    return render(request,"contests.html",context)


