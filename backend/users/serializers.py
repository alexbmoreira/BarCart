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
    on_tap = serializers.SerializerMethodField()

    class Meta:
        model = Profile
        fields = ['user_id', 'username', 'first_name', 'last_name', 'bio', 'drinks', 'likes', 'on_hand', 'on_tap']

    def get_on_tap(self, obj):
        on_tap = Profile.objects.get_on_tap(obj)
        return DrinkSerializer(on_tap, many=True).data

        # likes = obj.user.drinklike_set.all().values('drink')
        # on_hand = obj.user.onhandingredient_set.all().values('ingredient')

        # on_tap = []
        # for drink in likes:
        #     add = True
        #     for ingredient in Drink.objects.get(id=drink['drink']).drinkingredient_set.all().values('ingredient'):
        #         if ingredient not in on_hand:
        #             add = False
        #     if add:
        #         on_tap.append(drink['drink'])

        # on_tap_q = Drink.objects.filter(id__in=on_tap)

        # return DrinkSerializer(on_tap_q, many=True).data
