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
        serializer = IngredientSerializer(ingredients, many=True)
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

    def post(self, request):
        drink = request.data
        drink['creator'] = request.user.id
        serializer = DrinkSerializer(data=drink)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        drink = get_object_or_404(Drink, id=request.data['id'], creator=request.user)
        drink.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class DrinkDetailView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, drink_id):
        drink = get_object_or_404(Drink, id=drink_id)
        serializer = DrinkSerializer(drink)
        return Response(serializer.data)
