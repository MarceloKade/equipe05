from rest_framework import serializers
from .models import EntreEmContato, Usuario, AreaDeInteresse, Turno, Linguagem, Newsletter

class NewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newsletter
        fields = '__all__'

class EntreEmContatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntreEmContato
        fields = '__all__'

class AreaDeInteresseSerializer(serializers.ModelSerializer):
    class Meta:
        model = AreaDeInteresse
        fields = ['nome', 'selecionada']

class TurnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turno
        fields = ['nome', 'selecionado']

class LinguagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Linguagem
        fields = ['nome', 'selecionada']

class UsuarioSerializer(serializers.ModelSerializer):
    area_de_interesse = AreaDeInteresseSerializer()
    turno = TurnoSerializer()
    linguagem = LinguagemSerializer()

    class Meta:
        model = Usuario
        fields = ['nome', 'sobrenome', 'email', 'whatsapp', 'disponibilidade', 'area_de_interesse', 'turno', 'linguagem']

    def validate_email(self, value):
        if '@' not in value:
            raise serializers.ValidationError("O e-mail deve ser válido.")
        return value

    def create(self, validated_data):
        area_de_interesse_data = validated_data.pop('area_de_interesse')
        turno_data = validated_data.pop('turno')
        linguagem_data = validated_data.pop('linguagem')

        # Criar os objetos de área de interesse, turno e linguagem
        area_de_interesse, _ = AreaDeInteresse.objects.get_or_create(**area_de_interesse_data)
        turno, _ = Turno.objects.get_or_create(**turno_data)
        linguagem, _ = Linguagem.objects.get_or_create(**linguagem_data)

        # Criar o objeto do usuário
        usuario = Usuario.objects.create(
            **validated_data,
            area_de_interesse=area_de_interesse,
            turno=turno,
            linguagem=linguagem
        )

        return usuario
