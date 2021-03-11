from core.serializers import DrinkSerializer
from django.contrib.auth.models import User
from rest_framework import serializers

from .models import DrinkLike, Profile


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']


class ProfileSerializer(serializers.ModelSerializer):
    user_id = serializers.ReadOnlyField(source='user.id')
    username = serializers.ReadOnlyField(source='user.username')
    first_name = serializers.ReadOnlyField(source='user.first_name')
    last_name = serializers.ReadOnlyField(source='user.last_name')

    # drinks = DrinkSerializer(many=True, source='drink_set.all')

    class Meta:
        model = Profile
        fields = ['user_id', 'username', 'first_name', 'last_name', 'bio']