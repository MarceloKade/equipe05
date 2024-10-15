from rest_framework import serializers
from .models import Usuario, Newsletter, EntreEmContato
import re

class UsuarioSerializer(serializers.ModelSerializer):
    def validate_email(self, value):
        if '@' not in value:
            raise serializers.ValidationError("O e-mail deve ser válido.")
        return value

    class Meta:
        model = Usuario
        fields = '__all__'

class NewsletterSerializer(serializers.ModelSerializer):
    def validate_email(self, value):
        if '@' not in value:
            raise serializers.ValidationError("O e-mail deve ser válido.")
        return value

    class Meta:
        model = Newsletter
        fields = '__all__'

class EntreEmContatoSerializer(serializers.ModelSerializer):
    def validate_email(self, value):
        if '@' not in value:
            raise serializers.ValidationError("O e-mail deve ser válido.")
        return value

    class Meta:
        model = EntreEmContato
        fields = '__all__'
