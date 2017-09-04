from django.db import models
from django.contrib.auth.models import User
import json

class Track(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title

from django.conf import settings

class Question(models.Model):
    track = models.ForeignKey(Track,on_delete=models.CASCADE)
    title = models.CharField(max_length=400)
    description = models.TextField(max_length=1000,null=True)
    testcases = models.TextField(max_length=100)
    testcases_output = models.TextField(max_length=100,default="")
    explanation = models.TextField(max_length=1000,blank=True,null=True)
    inputs = models.TextField(max_length=50000)
    output = models.TextField(max_length=10000)
    points = models.PositiveIntegerField(default=settings.DEFAULT_POINTS)
    right_count = models.PositiveIntegerField(default=0)
    wrong_count = models.PositiveIntegerField(default=0)


    def total_submission(self):
        return self.wrong_count+self.right_count

    def get_percentage_correct(self):
        try:
            return (self.right_count*100)/(self.wrong_count+self.right_count)
        except ZeroDivisionError:
            return 0
    def get_percentage_wrong(self):
        return 100-self.get_percentage_correct()

    def test(self,output,user):
        if output.lstrip().rstrip()==self.output.lstrip().rstrip().replace("\r",""):
            if Record.objects.filter(user=user,question=self).exists():
                pass
                for i in range(10):print("already exists")
            else:
                self.right_count += 1
                self.save()
                Record.objects.create(user = user,question=self)
                user.profile.add_points(self.points)
            return True
        else:
            self.wrong_count+=1
            self.save()
            return False

    def __str__(self):
        return self.title

class Record(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name="user")
    question = models.ForeignKey(Question,on_delete=models.CASCADE,related_name="question")

    def __str__(self):
        return str(self.user) +"--"+str(self.question)
