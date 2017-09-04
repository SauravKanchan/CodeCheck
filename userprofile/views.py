from django.contrib.auth import login, authenticate,logout
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.shortcuts import HttpResponseRedirect
from django.contrib import messages


def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('question-list')
    else:
        form = UserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})

def profile(requests):
    context = {'name':requests.user.username}
    return render(requests,'profile.html',context)

def logout_view(request):
    logout(request)
    messages.add_message(request, messages.SUCCESS, 'Successfully Logged Out')
    return HttpResponseRedirect('/login/')