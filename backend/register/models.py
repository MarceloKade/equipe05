from django.db import models

class register(models.Model):

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


    name = models.CharField(max_length=30)
    lastname = models.CharField(max_length=30)
    whatsapp = models.CharField(max_length=20)
    email = models.EmailField()
    area_interest = models.CharField(max_length=15, choices=AREA_INTEREST_CHOICES)
    language = models.CharField(max_length=15, choices=LANGUAGE_CHOICES)
    availability = models.DateField()
    shift = models.CharField(max_length=10, choices=SHIFT_CHOICES)

    def __str__(self):
        return f'{self.name} {self.lastname}'
