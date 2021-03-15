from django.contrib.auth.models import User
from django.test import TestCase

from ..models import Drink


class DrinkManagerTests(TestCase):

    def test_OrderByPopularity(self):
        # Arrange
        u = User.objects.create(username='username')
        d1 = Drink.objects.create(creator=u, name='Vodka Drink', popularity=0)
        d2 = Drink.objects.create(creator=u, name='Scotch Drink', popularity=2)
        d3 = Drink.objects.create(creator=u, name='Whiskey Drink', popularity=1)

        # Act
        popular = Drink.objects.by_popularity()

        # Assert
        self.assertEqual(popular[0], d2)
        self.assertEqual(popular[2], d1)
        self.assertEqual(popular[1], d3)
