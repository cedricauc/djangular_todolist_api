import pytest
from django.shortcuts import resolve_url
from django.test import Client
from todolist.models import Task


@pytest.mark.django_db
def test_task_saved_correctly():
    t = Task(
        title="Le titre de la tâche",
        description="La description de la tâche",
        address="L'adresse du destinataire de la tâche",
        item="L'item rattaché à la tâche",
        complete=False
    )
    t.save()

    saved = Task.objects.get(title="Le titre de la tâche")
    assert saved == t


@pytest.mark.django_db
def test_task_create_route():
    client = Client()

    credentials = {
        'title':'Le titre de la tâche',
        'description':'La description de la tâche',
        'address':'L\'adresse du destinataire de la tâche',
        'item':'L\'item rattaché à la tâche',
    }

    response = client.post(resolve_url('/api/v1/task'), credentials)

    assert response.status_code == 301

