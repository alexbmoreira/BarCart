from django.contrib.auth.models import User
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from .models import OnHandIngredient, OnTapDrink, Profile


@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):

    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


@receiver(post_save, sender=OnHandIngredient)
def save_on_hand(sender, instance, **kwargs):
    for drink in Profile.objects.get_on_tap(instance.user.profile):
        try:
            OnTapDrink.objects.create(user=instance.user, drink=drink)
        except Exception as e:
            print(e)


@receiver(post_delete, sender=OnHandIngredient)
def delete_on_hand(sender, instance, **kwargs):
    for drink in instance.user.ontapdrink_set.all():
        ingredients = drink.drink.drinkingredient_set.prefetch_related('ingredient')
        if instance.ingredient in [ing.ingredient for ing in ingredients]:
            drink.delete()
