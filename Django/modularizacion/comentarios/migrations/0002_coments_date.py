# Generated by Django 4.1.4 on 2023-01-01 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comentarios', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='coments',
            name='date',
            field=models.DateField(null=True),
        ),
    ]
