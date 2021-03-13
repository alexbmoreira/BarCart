from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (DrinkDetailView, DrinkListView, DrinkPopularView,
                    IngredientDetailView, IngredientListView)

drink_detail = DrinkDetailView.as_view()
drink_list = DrinkListView.as_view()
drink_popular = DrinkPopularView.as_view()
ingredient_detail = IngredientDetailView.as_view()
ingredient_list = IngredientListView.as_view()

urlpatterns = [
    path("drinks/", drink_list, name="drink_list"),
    path("drinks/<int:drink_id>/", drink_detail, name="drink_detail"),
    path("drinks/search/<str:search>/", drink_list, name="drink_list_search"),
    path("drinks/popular/", drink_popular, name="drink_popular"),
    path("ingredients/", ingredient_list, name="ingredient_list"),
    path("ingredients/<int:ingredient_id>/", ingredient_detail, name="ingredient_detail"),
    path("ingredients/search/<str:search>/", ingredient_list, name="ingredient_list_search"),
]
