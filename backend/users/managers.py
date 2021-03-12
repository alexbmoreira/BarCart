from core.models import Drink
from django.db import models


class ProfileManager(models.Manager):

    def get_on_tap(self, profile):
        likes = profile.user.drinklike_set.all().values('drink')
        on_hand = profile.user.onhandingredient_set.all().values('ingredient')

        on_tap = []
        for drink in likes:
            add = True
            drink_ingredients = Drink.objects.get(id=drink['drink']).drinkingredient_set.all().values('ingredient')
            for ingredient in drink_ingredients:
                if ingredient not in on_hand:
                    add = False
            if add:
                on_tap.append(drink['drink'])

        return Drink.objects.filter(id__in=on_tap)
