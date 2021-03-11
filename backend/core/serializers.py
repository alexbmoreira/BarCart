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
    author_name = serializers.CharField(read_only=True, source='author.first_name')
    author_username = serializers.CharField(read_only=True, source='author.username')

    class Meta:
        model = Drink
        fields = ['name', 'author', 'author_name', 'author_username', 'instructions', 'ingredients']
