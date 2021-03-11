from django.contrib.auth.models import User
from django.db import models


class Ingredient(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.name = self.name.lower()
        super().save(*args, **kwargs)


class Drink(models.Model):
    name = models.CharField(max_length=100)
    instructions = models.TextField(blank=True, default="")
    ingredients = models.ManyToManyField(Ingredient, through="DrinkIngredient")
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class DrinkIngredient(models.Model):
    ounce = 'oz'
    tsp = 'tsp'
    tbsp = 'tbsp'

    UNITS = [
        (ounce, "oz"),
        (tsp, "tsp"),
        (tbsp, "tbsp"),
    ]
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    drink = models.ForeignKey(Drink, on_delete=models.CASCADE)
    quantity = models.FloatField()
    units = models.CharField(choices=UNITS, max_length=20)

    class Meta:
        unique_together = ["ingredient", "drink"]

    def __str__(self):
        return (
            f"{self.quantity} {self.units} "
            f"of {self.ingredient} for {self.drink}"
        )
