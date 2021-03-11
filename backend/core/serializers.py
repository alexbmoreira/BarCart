from rest_framework import serializers

from .models import Drink, DrinkIngredient, Ingredient


class IngredientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredient
        fields = ['id', 'name']


class DrinkIngredientSerializer(serializers.ModelSerializer):

    name = serializers.StringRelatedField(source='ingredient')

    class Meta:
        model = DrinkIngredient
        fields = ['name', 'ingredient', 'quantity', 'units']


class DrinkSerializer(serializers.ModelSerializer):

    ingredients = DrinkIngredientSerializer(source='drinkingredient_set', many=True)

    class Meta:
        model = Drink
        fields = ['name', 'instructions', 'ingredients']
