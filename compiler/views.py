from django.shortcuts import render
from .models import Question
from django.views.generic import ListView,DetailView

def code_editor(request):
    # form=TemplateAdminForm()
    context={}
    return render(request,'code_editor.html',context)

def result(request):
    q=Question.objects.all()
    t=[]
    for i in q:
        t.append(i.testcases)
    context = {"testcases":t}
    # if request.methode=="POST":
    #     pass
    return render(request,'result.html',context)


class QuestionList(ListView):
    model = Question


class QuestionDetail(DetailView):

    model = Question

    def get_context_data(self, **kwargs):

        context = super(QuestionDetail, self).get_context_data(**kwargs)

        return context