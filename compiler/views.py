from django.shortcuts import render
# from .forms import TemplateAdminForm
def code_editor(request):
    # form=TemplateAdminForm()
    context={}
    return render(request,'code_editor.html',context)

def result(request):
    context = {}
    if request.methode=="POST":
        pass
    return render(request,'result.html',context)