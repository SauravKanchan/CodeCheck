from django.shortcuts import render,HttpResponse,render_to_response
from .models import *
from django.views.generic import ListView,DetailView
from compiler.compiler import HackerRankAPI
from django.conf import settings
import json
import operator
from userprofile.models import Profile
from django.core.mail import send_mail


def leaderboard(request):
    context = {}
    l = {}
    profiles = Profile.objects.all()
    for profile in profiles:
        l[profile] = profile.points
    leaderboard = sorted(l.items(), key=operator.itemgetter(1))
    leaderboard.reverse()
    return render(request,"leaderboard.html",{"leaderboard":leaderboard})

def track(request,id):
    questions = Question.objects.all()
    t = Track.objects.get(id=id)
    questions = questions.filter(track=t)
    context={"questions":questions}
    return render(request,"tracks.html",context)

def all_tracks(request):
    context={}
    track = Track.objects.all()
    context['track']=track
    return render(request,"all_tracks.html",context)

class QuestionList(ListView):
    model = Question


class QuestionDetail(DetailView):

    model = Question

    def get_context_data(self, **kwargs):

        context = super(QuestionDetail, self).get_context_data(**kwargs)

        return context

def test(request):
    if request.method == "POST":
        compiler = HackerRankAPI(api_key= settings.API_KEY)
        source = request.POST.get("source")
        lang = request.POST.get("lang")
        question_id = request.POST.get("id")
        question = Question.objects.get(id=question_id)
        testcases = [question.inputs]
        try:
            result = compiler.run({'source': source,'lang': lang,'testcases':testcases})
            try:
                output =result.output[0]
            except:
                output=None
            time = result.time
            memory = result.memory
            message = result.message
            if not output:
                output = message.replace("\n","<br>")
        except Exception as e:
            for i in range(10):print(e)
            output = settings.ERROR_MESSAGE
        if question.test(output,request.user):
            output = settings.CORECT_SUBMISSION_MESSAGE
        elif output:
            output = settings.INCORECT_SUBMISSION_MESSAGE+"<br>"+output.replace("\n","<br>")
        else:
            output = settings.INCORECT_SUBMISSION_MESSAGE
        return HttpResponse(json.dumps({'output': output}), content_type="application/json")
    else:
        return render_to_response('code_editor.html', locals())
