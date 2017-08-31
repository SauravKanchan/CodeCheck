from django.shortcuts import render
# from .forms import TemplateAdminForm
def code_editor(request):
    # form=TemplateAdminForm()
    context={}
    return render(request,'code_editor.html',context)

def result(request):
    context={}
    return render(request,'result.html',context)