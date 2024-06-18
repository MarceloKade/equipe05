from rest_framework import serializers
from .models import register

class registerSerializer(serializers.ModelSerializer):
    class Meta:
        model = register
        fields = '__all__'
