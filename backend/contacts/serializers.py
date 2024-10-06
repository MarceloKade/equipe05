from rest_framework import serializers
from .models import Contact
import re

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

    def validate_name(self, value):
        if not value:
            raise serializers.ValidationError("O nome não pode ser nulo.")
        return value

    def validate_email(self, value):
        email_regex = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        if not re.match(email_regex, value):
            raise serializers.ValidationError("Formato de email inválido.")
        return value

    def validate_message(self, value):
        if not value:
            raise serializers.ValidationError("A mensagem não pode ser nula.")
        return value
