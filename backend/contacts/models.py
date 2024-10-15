from django.db import models

class Usuario(models.Model):
    nome = models.CharField(max_length=50)
    sobrenome = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    whatsapp = models.CharField(max_length=25, blank=True, null=True)
    disponibilidade = models.DateTimeField(null=True, blank=True)
    
    area_de_interesse = models.ForeignKey('AreaDeInteresse', on_delete=models.SET_NULL, null=True)
    turno = models.ForeignKey('Turno', on_delete=models.SET_NULL, null=True)
    linguagem = models.ForeignKey('Linguagem', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f'{self.nome} {self.sobrenome}'

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

class AreaDeInteresse(models.Model):
    backend = models.BooleanField(default=False)
    frontend = models.BooleanField(default=False)
    banco_de_dados = models.BooleanField(default=False)
    ui_ux_designer = models.BooleanField(default=False)

    def __str__(self):
        return ', '.join([key for key, value in self.__dict__.items() if value is True and key != '_state'])

class Turno(models.Model):
    matutino = models.BooleanField(default=False)
    diurno = models.BooleanField(default=False)
    noturno = models.BooleanField(default=False)

    def __str__(self):
        return ', '.join([key for key, value in self.__dict__.items() if value is True and key != '_state'])

class Linguagem(models.Model):
    python = models.BooleanField(default=False)
    javascript = models.BooleanField(default=False)
    java = models.BooleanField(default=False)
    csharp = models.BooleanField(default=False)

    def __str__(self):
        return ', '.join([key for key, value in self.__dict__.items() if value is True and key != '_state'])