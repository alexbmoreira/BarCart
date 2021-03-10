from django.contrib import admin

from .models import Ingredient, Drink, DrinkIngredient

admin.site.register(Ingredient)
admin.site.register(Drink)
admin.site.register(DrinkIngredient)
