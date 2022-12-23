from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'task', views.TaskViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('', views.app, name="app"),
    path('home', views.app, name="app"),
    path('task/create', views.app, name="app"),
    path("task/edit/<str:id>", views.app, name="app"),
    path("task/<str:id>", views.app, name="app")
]
