from core.serializers import DrinkSerializer
from rest_framework import serializers

from .models import DrinkLike, OnHandIngredient, Profile


class DrinkLikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = DrinkLike
        fields = ("id", "user", "drink")


class OnHandIngredientSerializer(serializers.ModelSerializer):

    class Meta:
        model = OnHandIngredient
        fields = ("id", "user", "ingredient")


class ProfileSerializer(serializers.ModelSerializer):
    user_id = serializers.ReadOnlyField(source='user.id')
    username = serializers.ReadOnlyField(source='user.username')
    first_name = serializers.ReadOnlyField(source='user.first_name')
    last_name = serializers.ReadOnlyField(source='user.last_name')
    drinks = DrinkSerializer(many=True, source='user.drink_set.all')
    likes = DrinkLikeSerializer(many=True, source='user.drinklike_set.all')
    on_hand = OnHandIngredientSerializer(many=True, source='user.onhandingredient_set.all')

    class Meta:
        model = Profile
        fields = ['user_id', 'username', 'first_name', 'last_name', 'bio', 'drinks', 'likes', 'on_hand']
