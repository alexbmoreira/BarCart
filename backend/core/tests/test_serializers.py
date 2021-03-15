from django.contrib.auth.models import User
from django.test import TestCase

from ..serializers import IngredientSerializer


class IngredientSerializerTests(TestCase):

    def test_CreateValid(self):
        # Arrange
        ingredient = {
            'name': 'vodka'
        }
        serializer = IngredientSerializer(data=ingredient)

        # Act
        serializer.is_valid()
        ing = serializer.save()

        # Assert
        self.assertIsNotNone(ing)
        self.assertEqual(ing.name, 'vodka')

    def test_CreateInvalid(self):
        # Arrange
        ingredient = {
            'name': ''
        }
        serializer = IngredientSerializer(data=ingredient)

        # Act
        serializer.is_valid()
        errors = serializer.errors

        # Assert
        self.assertIsNotNone(errors['name'])
