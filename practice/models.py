from django.db import models

class Track(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title

from django.conf import settings

class Question(models.Model):
    track = models.ForeignKey(Track,on_delete=models.CASCADE)
    title = models.CharField(max_length=400)
    testcases = models.TextField(max_length=10000)
    testcases_output = models.TextField(max_length=10000,default="")
    inputs = models.TextField(max_length=50000)
    points = models.PositiveIntegerField(default=settings.DEFAULT_POINTS)
    right_count = models.PositiveIntegerField(default=0)
    wrong_count = models.PositiveIntegerField(default=0)
    output = models.TextField(max_length=10000)

    def get_percentage_correct(self):
        return (self.right_count*100)/(self.wrong_count+self.right_count)

    def get_percentage_wrong(self):
        return 100-self.get_percentage_correct()

    def test(self,output):
        if output==self.output:
            self.right_count+=1
            self.save()
            return True
        else:
            self.wrong_count+=1
            self.save()
            return False


    def __str__(self):
        return self.title
