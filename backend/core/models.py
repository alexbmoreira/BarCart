from django.db import models
from django.contrib.auth.models import User

class Ingredient(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.name = self.name.lower()
        super().save(*args, **kwargs)

class Recipe(models.Model):
    name = models.CharField(max_length=100)
    instructions = models.TextField(blank=True, default="")
    ingredients = models.ManyToManyField(
        Ingredient, through="RecipeIngredient"
    )

    def __str__(self):
        return self.name


class RecipeIngredient(models.Model):
    ounce = 'oz'
    tsp = 'tsp'
    tbsp = 'tbsp'

    UNITS = [
        (ounce, "oz"),
        (tsp, "tsp"),
        (tbsp, "tbsp"),
    ]
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    quantity = models.FloatField()
    units = models.CharField(choices=UNITS, max_length=20)

    class Meta:
        unique_together = ["ingredient", "recipe"]

    def __str__(self):
        return (
            f"{self.quantity} {self.units} "
            f"of {self.ingredient} for {self.recipe}"
        )
