from django.shortcuts import render
from .models import Question
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