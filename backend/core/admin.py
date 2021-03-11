from django.contrib import admin

from .models import Drink, DrinkIngredient, Ingredient

admin.site.register(Ingredient)
admin.site.register(Drink)
admin.site.register(DrinkIngredient)
