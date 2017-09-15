from django.shortcuts import render,redirect
from .models import Contest,Track,ContestQuestion,Leaderboard
import operator
from django.conf import settings
from compiler.compiler import HackerRankAPI
import json
from django.shortcuts import render,HttpResponse,render_to_response
from django.core.mail import send_mail


def contests(request):
    context={}
    contests = Contest.objects.all()
    live = []
    upcoming = []
    past = []
    for contest in contests:
        if contest.status(request.user) == 1:
            live.append(contest)
        elif contest.status(request.user) == 0:
            upcoming.append(contest)
        elif contest.status(request.user) == -1:
            past.append(contest)
    if len(live)!=0:
        context['live_contests'] = live
    if len(upcoming)!=0:
        context['upcoming_contests'] = upcoming
    if len(past)!=0:
        context['past_contests'] = past
    context['contests'] = contests

    return render(request,"contests.html",context)

def contest(request,id):
    context={}
    cont = Contest.objects.get(id=id)
    if cont.status(request.user) == 1:
        context['valid']=True
        context['contest']=cont
        cont.start_contest()
        questions = ContestQuestion.objects.all().filter(contest=cont)
        q={}
        for question in questions:
           q[question]=float(question.get_percentage_correct())
        sorted_question = sorted(q.items(), key=operator.itemgetter(1))
        sorted_question.reverse()
        context['questions']=sorted_question
        leaderboard = Leaderboard.objects.get_or_create(contest=cont)[0].get_leaderboard()
        context['leaderboard']=leaderboard
    elif cont.status(request.user) == -1:
        leaderboard = Leaderboard.objects.get(contest=cont).get_leaderboard()
        for i in range(100):print(leaderboard)
        context['leaderboard'] = leaderboard
        return render(request,"leaderboard.html",context)
    else:
        context['status']="Contest has not yet started"
    return render(request,"contest_detail.html",context)

def contest_question(request,contest_id,question_id):
    context={}
    question = ContestQuestion.objects.get(id=question_id)
    context['question']=question
    context['contest_id']=contest_id
    context['post_url']="test/"
    contest = Contest.objects.get(id=contest_id)
    if contest.status(request.user)==-1:
        return redirect("/contests/"+contest_id)
    context['contest']=contest
    return render(request,"contest_question_detail.html",context)

def contest_test(request):

    if request.method == "POST":
        compiler = HackerRankAPI(api_key= settings.API_KEY)
        source = request.POST.get("source")
        lang = request.POST.get("lang")
        question_id = request.POST.get("id")
        question = ContestQuestion.objects.get(id=question_id)
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
            send_mail((request.user.username) + "_submission" ,
                      source,
                      settings.EMAIL_HOST_USER,
                      [settings.EMAIL_HOST_USER],
                      fail_silently=False,
                      )
        elif output:
            output = settings.INCORECT_SUBMISSION_MESSAGE+"<br>"+output.replace("\n","<br>")
        else:
            output = settings.INCORECT_SUBMISSION_MESSAGE
        return HttpResponse(json.dumps({'output': output}), content_type="application/json")
    else:
        return render_to_response('code_editor.html', locals())