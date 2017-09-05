from django.contrib.auth import login, authenticate,logout
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.shortcuts import HttpResponseRedirect
from django.contrib import messages
from practice.models import Record
from .models import Profile
from django.contrib.auth.models import User


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
    for i in range(100):print(context['name'])
    solved = Record.objects.all().filter(user=user)
    profile = Profile.objects.get_or_create(user=user)[0]
    context['solved'] = solved
    context['points'] = profile.points

    return render(requests,'profile.html',context)

def profiles(requests,id):
    context = {}
    user = User.objects.get(id=id)
    context['name']=user.username
    for i in range(100):print(context['name'])
    solved = Record.objects.all().filter(user=user)
    profile = Profile.objects.get_or_create(user=user)[0]
    context['solved'] = solved
    context['points'] = profile.points

    return render(requests,'profile.html',context)



def logout_view(request):
    logout(request)
    messages.add_message(request, messages.SUCCESS, 'Successfully Logged Out')
    return HttpResponseRedirect('/login/')