from core.models import Drink
from django.db import models


class ProfileManager(models.Manager):

    def get_on_tap(self, profile):
        likes = profile.user.drinklike_set.all().values('drink') # List of Drink dicts
        on_hand = profile.user.onhandingredient_set.all().values('ingredient') # List of Ingredient dicts

        on_tap = []
        for drink in likes:
            add = True
            for ingredient in Drink.objects.get(id=drink['drink']).drinkingredient_set.all().values('ingredient'): # List of Ingredient dicts for the drink
                if ingredient not in on_hand:
                    add = False
            if add:
                on_tap.append(drink['drink'])

        return Drink.objects.filter(id__in=on_tap)
