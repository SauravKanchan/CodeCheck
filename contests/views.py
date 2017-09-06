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
    cont = Contest.objects.get(id=id)
    context['contest']=contest
    return render(request,"contest_detail.html",context)


