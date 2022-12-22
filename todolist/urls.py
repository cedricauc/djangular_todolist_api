from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskViewSet)

urlpatterns = [
    path('', views.home, name="home"),
    path('api/v1/', include(router.urls))
]