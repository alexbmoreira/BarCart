from django.contrib.auth.models import User
from django.test import TestCase

from ..models import Ingredient
from ..serializers import DrinkSerializer, IngredientSerializer


class IngredientSerializerTests(TestCase):

    def test_CreateValid(self):
        # Arrange
        i = {
            'name': 'vodka'
        }
        serializer = IngredientSerializer(data=i)

        # Act
        serializer.is_valid()
        ingredient = serializer.save()

        # Assert
        self.assertIsNotNone(ingredient)
        self.assertEqual(ingredient.name, 'vodka')

    def test_CreateInvalid(self):
        # Arrange
        i = {
            'name': ''
        }
        serializer = IngredientSerializer(data=i)

        # Act
        serializer.is_valid()
        errors = serializer.errors

        # Assert
        self.assertIsNotNone(errors['name'])


class DrinkSerializerTests(TestCase):

    def test_CreateValid(self):
        # Arrange
        user = User.objects.create_user(username='username', first_name='user', last_name='name')
        i = Ingredient.objects.create(name='vodka')
        d = {
            'name': 'Vodka Drink',
            'creator': user.id,
            'creator_fname': user.first_name,
            'creator_lname': user.last_name,
            'creator_username': user.username,
            'instructions': 'Make vodka drink',
            'ingredients': [
                {'ingredient': i.id, 'quantity': 5, 'units': 'oz'},
            ],
            'popularity': 0
        }
        serializer = DrinkSerializer(data=d)

        # Act
        serializer.is_valid()
        drink = serializer.save()

        # Assert
        self.assertIsNotNone(drink)
        drink_ingredients = drink.drinkingredient_set.all()
        self.assertEqual(drink_ingredients.count(), 1)
        self.assertEqual(drink_ingredients.first().ingredient_id, i.id)
        self.assertEqual(drink_ingredients.first().drink.id, drink.id)
        self.assertEqual(drink_ingredients.first().quantity, 5)
        self.assertEqual(drink_ingredients.first().units, 'oz')

    def test_CreateInvalid_NoName(self):
        # Arrange
        user = User.objects.create_user(username='username', first_name='user', last_name='name')
        i = Ingredient.objects.create(name='vodka')
        d = {
            'name': '',
            'creator': user.id,
            'creator_fname': user.first_name,
            'creator_lname': user.last_name,
            'creator_username': user.username,
            'instructions': 'Make vodka drink',
            'ingredients': [
                {'ingredient': i.id, 'quantity': 5, 'units': 'oz'},
            ],
            'popularity': 0
        }
        serializer = DrinkSerializer(data=d)

        # Act
        serializer.is_valid()
        errors = serializer.errors

        # Assert
        self.assertIsNotNone(errors['name'])

    def test_CreateInvalid_NoIngredient(self):
        # Arrange
        user = User.objects.create_user(username='username', first_name='user', last_name='name')
        d = {
            'name': '',
            'creator': user.id,
            'creator_fname': user.first_name,
            'creator_lname': user.last_name,
            'creator_username': user.username,
            'instructions': 'Make vodka drink',
            'popularity': 0
        }
        serializer = DrinkSerializer(data=d)

        # Act
        serializer.is_valid()
        errors = serializer.errors

        # Assert
        self.assertIsNotNone(errors['ingredients'])
