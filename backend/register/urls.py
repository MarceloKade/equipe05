from django.urls import path, include
from rest_framework import routers
from .views import registerViewSet

router = routers.DefaultRouter()
router.register('register', registerViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
