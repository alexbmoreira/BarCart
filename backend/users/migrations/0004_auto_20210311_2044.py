# Generated by Django 3.1.6 on 2021-03-11 20:44

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_drink_creator'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0003_auto_20210311_2043'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='IngredientOnHand',
            new_name='OnHandIngredient',
        ),
    ]