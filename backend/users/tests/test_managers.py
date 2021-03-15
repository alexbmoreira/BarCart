from core.models import Drink, DrinkIngredient, Ingredient
from django.contrib.auth.models import User
from django.test import TestCase

from ..models import DrinkLike, OnHandIngredient, Profile


class ProfileManagerTests(TestCase):

    def test_OneDrinkInList(self):
        # Arrange
        u = User.objects.create(username='username')

        d = Drink.objects.create(creator=u, name='Vodka Drink')
        i = Ingredient.objects.create(name='vodka')
        DrinkIngredient.objects.create(ingredient=i, drink=d, quantity=5, units='oz')

        OnHandIngredient.objects.create(user=u, ingredient=i)
        DrinkLike.objects.create(user=u, drink=d)

        # Act
        on_tap = Profile.objects.get_on_tap(profile=u.profile)

        # Assert
        self.assertEqual(on_tap.count(), 1)
        self.assertEqual(on_tap.first(), d)

    def test_NoDrinkInList_DrinkNotLiked(self):
        # Arrange
        u = User.objects.create(username='username')

        d = Drink.objects.create(creator=u, name='Vodka Drink')
        i = Ingredient.objects.create(name='vodka')
        DrinkIngredient.objects.create(ingredient=i, drink=d, quantity=5, units='oz')

        OnHandIngredient.objects.create(user=u, ingredient=i)

        # Act
        on_tap = Profile.objects.get_on_tap(profile=u.profile)

        # Assert
        self.assertEqual(on_tap.count(), 0)

    def test_NoDrinkInList_NoMatchingIngredient(self):
        # Arrange
        u = User.objects.create(username='username')

        d = Drink.objects.create(creator=u, name='Vodka Drink')
        i = Ingredient.objects.create(name='vodka')
        oh_i = Ingredient.objects.create(name='whiskey')
        DrinkIngredient.objects.create(ingredient=i, drink=d, quantity=5, units='oz')

        OnHandIngredient.objects.create(user=u, ingredient=oh_i)

        # Act
        on_tap = Profile.objects.get_on_tap(profile=u.profile)

        # Assert
        self.assertEqual(on_tap.count(), 0)
