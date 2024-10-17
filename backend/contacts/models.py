from django.db import models
from django.core.exceptions import ValidationError

from django.db import models

class AreaDeInteresse(models.Model):
    nome = models.CharField(max_length=100)
    selecionada = models.BooleanField(default=False)

    def __str__(self):
        return self.nome

class Turno(models.Model):
    nome = models.CharField(max_length=100)
    selecionado = models.BooleanField(default=False)

    def __str__(self):
        return self.nome

class Linguagem(models.Model):
    nome = models.CharField(max_length=100)
    selecionada = models.BooleanField(default=False)

    def __str__(self):
        return self.nome

class Usuario(models.Model):
    nome = models.CharField(max_length=100)
    sobrenome = models.CharField(max_length=100)
    email = models.EmailField()
    whatsapp = models.CharField(max_length=20)
    disponibilidade = models.DateTimeField()
    
    area_de_interesse = models.OneToOneField(AreaDeInteresse, on_delete=models.CASCADE)
    turno = models.OneToOneField(Turno, on_delete=models.CASCADE)
    linguagem = models.OneToOneField(Linguagem, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nome} {self.sobrenome}"

class Newsletter(models.Model):
    email = models.EmailField(max_length=100)

    def __str__(self):
        return self.email

class EntreEmContato(models.Model):
    nome = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    mensagem = models.TextField(max_length=250)

    def __str__(self):
        return f'{self.nome} - {self.email}'

