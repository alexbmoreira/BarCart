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
