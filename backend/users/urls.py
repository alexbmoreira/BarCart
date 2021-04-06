from django.urls import path

from .views import (DrinkLikeView, OnHandIngredientView, OnTapDrinkView,
                    ProfileDetailView, UserDrinksView)

profile_detail = ProfileDetailView.as_view()
drink_like = DrinkLikeView.as_view()
on_hand_ingredient = OnHandIngredientView.as_view()
on_tap_drinks = OnTapDrinkView.as_view()
user_drinks = UserDrinksView.as_view()

urlpatterns = [
    path('profiles/user/', profile_detail, name='profile_detail'),
    path('profiles/<int:user_id>/', profile_detail, name='profile_detail'),
    path('likes/', drink_like, name='drink_like'),
    path('onhand/', on_hand_ingredient, name='on_hand_ingredient'),
    path('ontap/', on_tap_drinks, name='on_tap_drinks'),
    path('drinks/', user_drinks, name='user_drinks'),
]
