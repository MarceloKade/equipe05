from rest_framework import serializers
from .models import Register

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields = ['id', 'name', 'lastname', 'country_code', 'whatsapp', 'email', 'area_interest', 'language', 'availability', 'shift']

    def validate_name(self, value):
        if not value.isalpha():
            raise serializers.ValidationError("O nome deve conter apenas letras.")
        return value

    def validate_lastname(self, value):
        if not value.isalpha():
            raise serializers.ValidationError("O sobrenome deve conter apenas letras.")
        return value

    def validate_country_code(self, value):
        if not value.startswith('+') or not value[1:].isdigit():
            raise serializers.ValidationError("O código do país deve começar com + seguido por apenas números.")
        if len(value) < 2 or len(value) > 4:
            raise serializers.ValidationError("O código do país deve ter entre 2 a 4 caracteres.")
        return value

    def validate_whatsapp(self, value):
        if not value.isdigit():
            raise serializers.ValidationError("O WhatsApp deve conter apenas números.")
        if len(value) < 10 or len(value) > 15:
            raise serializers.ValidationError("O WhatsApp deve ter entre 10 a 15 dígitos.")
        return value

    def validate(self, data):
        country_code = data.get('country_code')
        whatsapp = data.get('whatsapp')
        data['whatsapp'] = f"{country_code}{whatsapp}"
        return data
