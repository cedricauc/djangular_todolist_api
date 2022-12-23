from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    address = models.CharField(max_length=255)
    item = models.CharField(max_length=255)
    complete = models.BooleanField(default=False)
