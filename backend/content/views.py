from django.shortcuts import render
from django.template.loader import render_to_string
from .models import Room
from django.http.response import HttpResponse
import json

def index(request):
    room = Room.objects.all()
    context = []
    for r in room:
      context.append(r.name)
    return HttpResponse(json.dumps(context))
    # result = {
    #   'html1': render_to_string('room1.html', context)
    # }
    # return render(request, 'index.html', context)

def room(request, room=None):
  print(room)
  try:
    room = Room.objects.get(name=room)
    print(room)
    context = {
      'name': room.name,
      'html1': room.html1,
      'html2': room.html2,
      'html3': room.html3,
    }
    return HttpResponse(json.dumps(context))
  except:
    return HttpResponse(json.dumps({}))
    
