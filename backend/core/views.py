from django.shortcuts import get_object_or_404, render
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Drink, Ingredient
from .serializers import DrinkSerializer, IngredientSerializer


class IngredientListView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, search=''):
        if search != '':
            ingredients = Ingredient.objects.filter(name__icontains=search)
        else:
            ingredients = Ingredient.objects.all()
        serializer = IngredientSerializer(ingredients.order_by('name'), many=True)
        return Response(serializer.data)


class IngredientDetailView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, ingredient_id):
        ingredient = get_object_or_404(Ingredient, id=ingredient_id)
        serializer = IngredientSerializer(ingredient)
        return Response(serializer.data)


class DrinkListView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, search=''):
        if search != '':
            drinks = Drink.objects.filter(name__icontains=search)
        else:
            drinks = Drink.objects.all()
        serializer = DrinkSerializer(drinks, many=True)
        return Response(serializer.data)


class DrinkPopularView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        drinks = Drink.objects.by_popularity()[:6]
        serializer = DrinkSerializer(drinks, many=True)
        return Response(serializer.data)


class DrinkDetailView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, drink_id):
        drink = get_object_or_404(Drink, id=drink_id)
        serializer = DrinkSerializer(drink)
        return Response(serializer.data)
