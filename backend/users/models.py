from core.models import Drink, Ingredient
from django.contrib.auth.models import User
from django.db import models

from .managers import ProfileManager


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length=140)

    objects = ProfileManager()

    def __str__(self):
        return self.user.username


class DrinkLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    drink = models.ForeignKey(Drink, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['user', 'drink']


class OnHandIngredient(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['user', 'ingredient']

    def __str__(self):
        return f"{self.ingredient} for {self.user}"


class OnTapDrink(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    drink = models.ForeignKey(Drink, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['user', 'drink']

    def __str__(self):
        return f"{self.drink} on tap for {self.user}"
