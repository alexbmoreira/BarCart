from core.models import Drink, Ingredient, DrinkIngredient
from django.contrib.auth.models import User
from django.core.management.base import BaseCommand

from ._ingredients import data as ingredient_data
from ._drinks import data as drink_data


class Command(BaseCommand):
    help = 'Populate the Ingredients table'

    def handle(self, *args, **options):
        try:
            self.populate_ingredients()
        except Exception as e:
                print(e)
        try:
            self.populate_drinks()
        except Exception as e:
                print(e)

    def populate_ingredients(self):
        ingredients = []
        for ingredient in ingredient_data['ingredients']:
            try:
                ingredients.append(Ingredient(**ingredient))
            except Exception as e:
                print(e)

        Ingredient.objects.bulk_create(ingredients, ignore_conflicts=True)

    def populate_drinks(self):
        try:
            User.objects.create(username='BarCart', email='barcart@barcart.com')
        except Exception as e:
            print(e)
        barcart_user = User.objects.get(username='BarCart')

        drinks = []
        for drink in drink_data['drinks']:
            try:
                drink['creator'] = barcart_user
                drinks.append(Drink(**drink))
            except Exception as e:
                print(e)

        Drink.objects.bulk_create(drinks, ignore_conflicts=True)
        self.populate_drink_ingredients(barcart_user)

    def populate_drink_ingredients(self, barcart_user):
        drink_ingredients = []
        for drink_ingredient in drink_data['drink_ingredients']:
            try:
                ing = Ingredient.objects.get(name=drink_ingredient['name'])
                drink = Drink.objects.get(name=drink_ingredient['drink'], creator=barcart_user)
                di = DrinkIngredient(
                    ingredient=ing,
                    drink=drink,
                    quantity=drink_ingredient['quantity'],
                    units=drink_ingredient['units'])
                drink_ingredients.append(di)
            except Exception as e:
                print(e)

        DrinkIngredient.objects.bulk_create(drink_ingredients, ignore_conflicts=True)
    
    def create_barcart(self):
        User.objects.create(username='BarCart', email='barcart@barcart.com')
