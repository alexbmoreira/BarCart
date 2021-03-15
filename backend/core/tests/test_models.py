from django.test import TestCase

from ..models import Drink, DrinkIngredient, Ingredient


class IngredientTests(TestCase):

    def test_NameToLowerCase(self):
        # Arrange
        name = "Vodka"
        ingredient = Ingredient(name=name)

        # Act
        ingredient.save()

        # Assert
        self.assertEqual(ingredient.name, "vodka")
