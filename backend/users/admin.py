from django.contrib import admin

from .models import DrinkLike, OnHandIngredient, Profile

admin.site.register(DrinkLike)
admin.site.register(Profile)
admin.site.register(OnHandIngredient)
