from django.shortcuts import render
from .models import Question
from django.views.generic import ListView,DetailView

class QuestionList(ListView):
    model = Question


class QuestionDetail(DetailView):

    model = Question

    def get_context_data(self, **kwargs):

        context = super(QuestionDetail, self).get_context_data(**kwargs)

        return context