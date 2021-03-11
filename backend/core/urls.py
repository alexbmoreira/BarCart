from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import DrinkViewSet, IngredientViewSet

router = DefaultRouter()
router.register('ingredients', IngredientViewSet)
router.register('drinks', DrinkViewSet)

urlpatterns = [
    path('', include(router.urls))
]
