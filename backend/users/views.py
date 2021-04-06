from core.serializers import DrinkSerializer, IngredientSerializer
from core.models import Drink
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import DrinkLike, OnHandIngredient, Profile
from .serializers import (DrinkLikeSerializer, OnHandIngredientSerializer,
                          ProfileSerializer)


class ProfileDetailView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, user_id):
        profile = get_object_or_404(Profile, user__id=user_id)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)


class OnHandIngredientView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        oh_ings = request.user.onhandingredient_set.select_related('ingredient')
        serializer = IngredientSerializer([oh_ing.ingredient for oh_ing in oh_ings], many=True)
        return Response(serializer.data)

    def post(self, request):
        ingredients = [dict(ingredient, **{'user': request.user.id}) for ingredient in request.data]
        serializer = OnHandIngredientSerializer(data=ingredients, many=True)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        for ingredient in request.data:
            ing = get_object_or_404(OnHandIngredient, ingredient__id=ingredient['ingredient'], user=request.user)
            ing.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class DrinkLikeView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        drink_likes = request.user.drinklike_set.select_related('drink')
        serializer = DrinkSerializer([drink.drink for drink in drink_likes], many=True)
        return Response(serializer.data)

    def post(self, request):
        like = request.data
        like['user'] = request.user.id
        serializer = DrinkLikeSerializer(data=like)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        unlike = get_object_or_404(DrinkLike, drink__id=request.data['drink'], user=request.user)
        unlike.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class OnTapDrinkView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        on_tap = request.user.ontapdrink_set.select_related('drink')
        serializer = DrinkSerializer([drink.drink for drink in on_tap], many=True)
        return Response(serializer.data)


class UserDrinksView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        drinks = request.user.drink_set.all()
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
