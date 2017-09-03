from django.shortcuts import render,render_to_response,HttpResponse
from .compiler import HackerRankAPI
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
            try:
                output =result.output[0].replace("\n","<br>")
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
        return HttpResponse(json.dumps({'output': output}), content_type="application/json")
    else:
        return render_to_response('code_editor.html', locals())

