# Generated by Django 3.1.6 on 2021-03-11 20:43

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('core', '0004_drink_creator'),
        ('users', '0002_ingredient'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Ingredient',
            new_name='IngredientOnHand',
        ),
    ]
