from rest_framework import viewsets
from .models import register
from .serializers import registerSerializer

class registerViewSet(viewsets.ModelViewSet):
    queryset = register.objects.all()
    serializer_class = registerSerializer
