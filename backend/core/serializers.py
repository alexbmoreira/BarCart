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
    creator_fname = serializers.CharField(read_only=True, source='creator.first_name')
    creator_lname = serializers.CharField(read_only=True, source='creator.last_name')
    creator_username = serializers.CharField(read_only=True, source='creator.username')

    class Meta:
        model = Drink
        fields = ['id', 'name', 'creator', 'creator_fname', 'creator_lname', 'creator_username', 'instructions', 'ingredients']
