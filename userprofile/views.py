from django.contrib.auth import login, authenticate,logout
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.shortcuts import HttpResponseRedirect
from django.contrib import messages
from practice.models import Record
from .models import Profile
from django.contrib.auth.models import User
from contests.models import Contest
from practice.models import Track

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('alltracks')
    else:
        form = UserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})

def profile(requests):
    context = {}
    user = requests.user
    context['name']=user.username
    solved = Record.objects.all().filter(user=user)
    profile = Profile.objects.get_or_create(user=user)[0]
    context['solved'] = solved
    context['personal'] = True
    context['points'] = profile.points

    return render(requests,'profile.html',context)

def profiles(requests,id):
    context = {}
    user = User.objects.get(id=id)
    context['name']=user.username
    solved = Record.objects.all().filter(user=user)
    profile = Profile.objects.get_or_create(user=user)[0]
    context['solved'] = solved
    context['points'] = profile.points
    context['personal']= context['name'] == requests.user.username
    return render(requests,'profile.html',context)



def logout_view(request):
    logout(request)
    messages.add_message(request, messages.SUCCESS, 'Successfully Logged Out')
    return HttpResponseRedirect('/login/')

def home(request):
    context={}
    contests = Contest.objects.all()
    live = []
    upcoming = []
    for contest in contests:
        if len(live+upcoming)>4:break
        if contest.status(request.user) == 1:
            live.append(contest)
        elif contest.status(request.user) == 0:
            upcoming.append(contest)
    if len(live)!=0:
        context['live_contests'] = live
    if len(upcoming)!=0:
        context['upcoming_contests'] = upcoming
    context['contests'] = contests

    track = Track.objects.all()[:3]
    context['track'] = track
    for i in range(100):print(live,upcoming)

    return render(request,'home.html',context)