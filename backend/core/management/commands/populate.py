from django.core.management.base import BaseCommand
from core.models import Ingredient
from ._ingredients import data


class Command(BaseCommand):
    help = "Populate the Ingredients table"

    def handle(self, *args, **options):
        ingredients = []
        for ingredient in data["ingredients"]:
            try:
                ingredients.append(Ingredient(**ingredient))
            except Exception as e:
                print(e)

        Ingredient.objects.bulk_create(ingredients)