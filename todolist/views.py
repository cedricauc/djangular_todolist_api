from django.shortcuts import render
from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    """
     A viewset for viewing and editing task instances.
     """
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


def app(request, id=None):
    return render(request, "index.html", {})


def error_404_view(request, exception):
    return render(request, 'index.html', {})
