# Generated by Django 5.0.6 on 2024-10-17 18:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("contacts", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="areadeinteresse",
            old_name="backend",
            new_name="selecionada",
        ),
        migrations.RenameField(
            model_name="linguagem",
            old_name="csharp",
            new_name="selecionada",
        ),
        migrations.RenameField(
            model_name="turno",
            old_name="diurno",
            new_name="selecionado",
        ),
        migrations.RemoveField(
            model_name="areadeinteresse",
            name="banco_de_dados",
        ),
        migrations.RemoveField(
            model_name="areadeinteresse",
            name="frontend",
        ),
        migrations.RemoveField(
            model_name="areadeinteresse",
            name="ui_ux_designer",
        ),
        migrations.RemoveField(
            model_name="linguagem",
            name="java",
        ),
        migrations.RemoveField(
            model_name="linguagem",
            name="javascript",
        ),
        migrations.RemoveField(
            model_name="linguagem",
            name="python",
        ),
        migrations.RemoveField(
            model_name="turno",
            name="matutino",
        ),
        migrations.RemoveField(
            model_name="turno",
            name="noturno",
        ),
        migrations.AddField(
            model_name="areadeinteresse",
            name="nome",
            field=models.CharField(default="Backend", max_length=50),
        ),
        migrations.AddField(
            model_name="linguagem",
            name="nome",
            field=models.CharField(default="Python", max_length=50),
        ),
        migrations.AddField(
            model_name="turno",
            name="nome",
            field=models.CharField(default="Matutino", max_length=50),
        ),
    ]
