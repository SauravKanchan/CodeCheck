from django.contrib import admin
from .models import *

admin.site.register(Contest)
admin.site.register(ContestQuestion)
admin.site.register(ContestRecord)
admin.site.register(Leaderboard)