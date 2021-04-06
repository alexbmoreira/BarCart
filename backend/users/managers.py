from core.models import Drink
from django.db import models


class ProfileManager(models.Manager):

    def get_on_tap(self, profile):
        likes = profile.user.drinklike_set.all()
        on_hand = [oh_i.ingredient for oh_i in profile.user.onhandingredient_set.all().prefetch_related('ingredient')]

        on_tap = []
        for drink_like in likes:
            add = True
            drink_ingredients = Drink.objects.get(id=drink_like.drink.id).drinkingredient_set.all()
            for d_i in drink_ingredients:
                if d_i.ingredient not in on_hand:
                    add = False
            if add:
                on_tap.append(drink_like.drink.id)

        return Drink.objects.filter(id__in=on_tap)
