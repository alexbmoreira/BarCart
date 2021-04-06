from django.urls import path

from .views import (DrinkLikeView, OnHandIngredientView, ProfileDetailView,
                    UserDrinksView)

profile_detail = ProfileDetailView.as_view()
drink_like = DrinkLikeView.as_view()
on_hand_ingredient = OnHandIngredientView.as_view()
user_drinks = UserDrinksView.as_view()

urlpatterns = [
    path('profiles/<int:user_id>/', profile_detail, name='profile_detail'),
    path('likes/', drink_like, name='drink_like'),
    path('onhand/', on_hand_ingredient, name='on_hand_ingredient'),
    path('drinks/', user_drinks, name='user_drinks'),
]
