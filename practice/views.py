from django.shortcuts import render,HttpResponse,render_to_response
from .models import Question
from django.views.generic import ListView,DetailView
from compiler.compiler import HackerRankAPI
from django.conf import settings
import json

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
