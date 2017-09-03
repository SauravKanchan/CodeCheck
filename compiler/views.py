from django.shortcuts import render,render_to_response,HttpResponse
from .models import Question
from django.views.generic import ListView,DetailView
from hackerrank.HackerRankAPI import HackerRankAPI
from django.conf import settings
import json

def code_editor(request):
    context={}
    return render(request,'code_editor.html',context)

def result(request):
    if request.method == "POST":
        compiler = HackerRankAPI(api_key= settings.API_KEY)
        source = request.POST.get("source")
        lang = request.POST.get("lang")
        testcases = [request.POST.get("testcases")]
        try:
            result = compiler.run({'source': source,'lang': lang,'testcases':testcases})
            output =result.output[0].replace("\n","<br>")
            time = result.time
            memory = result.memory
            message = result.message
            if not output:
                output = message.replace("\n","<br>")
        except:
            output = settings.ERROR_MESSAGE
        return HttpResponse(json.dumps({'output': output}), content_type="application/json")
    else:
        return render_to_response('code_editor.html', locals())

class QuestionList(ListView):
    model = Question


class QuestionDetail(DetailView):

    model = Question

    def get_context_data(self, **kwargs):

        context = super(QuestionDetail, self).get_context_data(**kwargs)

        return context