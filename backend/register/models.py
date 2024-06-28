from django.core.validators import RegexValidator, EmailValidator
from django.db import models

class Register(models.Model):

    AREA_INTEREST_CHOICES = [
        ('backend', 'Backend'),
        ('frontend', 'Frontend'),
        ('fullstack', 'Fullstack'),
        ('mobile', 'Mobile'),
        ('qa', 'QA'),
        ('ux/ui', 'UX/UI'),
        ('database', 'Database'),
    ]

    LANGUAGE_CHOICES = [
        ('python', 'Python'),
        ('java', 'Java'),
        ('c', 'C'),
        ('c++', 'C++'),
        ('c#', 'C#'),
        ('javascript', 'Javascript'),
        ('typescript', 'Typescript'),
        ('php', 'PHP'),
        ('ruby', 'Ruby'),
        ('go', 'Go'),
        ('scala', 'Scala'),
        ('swift', 'Swift'),
        ('kotlin', 'Kotlin'),
    ]

    SHIFT_CHOICES = [
        ('morning', 'Morning'),
        ('afternoon', 'Afternoon'),
        ('evening', 'Evening'),
    ]


    name = models.CharField(
        max_length=30, 
        validators=[RegexValidator(r'^[a-zA-Z]*$', 'Apenas letras são permitidas')]
    )
    lastname = models.CharField(
        max_length=30, 
        validators=[RegexValidator(r'^[a-zA-Z]*$', 'Apenas letras são permitidas')]
    )
    country_code = models.CharField(
        max_length=4, 
        default=+55,
        validators=[RegexValidator(r'^\+\d{1,3}$', 'O código do país deve estar no formato +[código]')]
    )
    whatsapp = models.CharField(
        max_length=15, 
        validators=[RegexValidator(r'^\d{10,15}$', 'O número do WhatsApp deve conter entre 10 a 15 dígitos')]
    )
    email = models.EmailField(validators=[EmailValidator()])
    area_interest = models.CharField(
        max_length=15, 
        choices=AREA_INTEREST_CHOICES
    )
    language = models.CharField(
        max_length=15, 
        choices=LANGUAGE_CHOICES
    )
    availability = models.DateField()
    shift = models.CharField(
        max_length=10, 
        choices=SHIFT_CHOICES
    )

    def __str__(self):
        return f'{self.name} {self.lastname}'