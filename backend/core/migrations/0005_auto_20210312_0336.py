# Generated by Django 3.1.6 on 2021-03-12 03:36

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('core', '0004_drink_creator'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='drink',
            unique_together={('creator', 'name')},
        ),
    ]
