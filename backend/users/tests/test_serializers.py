from core.models import Drink, DrinkIngredient, Ingredient
from django.contrib.auth.models import User
from django.test import TestCase

from ..models import DrinkLike, OnHandIngredient
from ..serializers import DrinkLikeSerializer, OnHandIngredientSerializer


class OnHandIngredientSerializerTests(TestCase):

    def test_CreateValid(self):
        # Arrange
        u = User.objects.create(username='username')
        i = Ingredient.objects.create(name='vodka')
        ohi = {
            'ingredient': i.id,
            'user': u.id
        }
        serializer = OnHandIngredientSerializer(data=ohi)

        # Act
        serializer.is_valid()
        on_hand_ingredient = serializer.save()

        # Assert
        self.assertIsNotNone(on_hand_ingredient)
        self.assertEqual(on_hand_ingredient.ingredient.name, 'vodka')


class DrinkLikeSerializerTests(TestCase):

    def test_CreateValid(self):
        # Arrange
        u = User.objects.create(username='username')
        d = Drink.objects.create(creator=u, name='Vodka Drink')
        dl = {
            'drink': d.id,
            'user': u.id
        }
        serializer = DrinkLikeSerializer(data=dl)

        # Act
        serializer.is_valid()
        drink_like = serializer.save()

        # Assert
        self.assertIsNotNone(drink_like)
        self.assertEqual(drink_like.drink.name, 'Vodka Drink')
    