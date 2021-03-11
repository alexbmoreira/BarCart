from django.urls import path

from .views import DrinkLikeView, ProfileDetailView

profile_detail = ProfileDetailView.as_view()
drink_like = DrinkLikeView.as_view()

urlpatterns = [
    path("profiles/<int:user_id>/", profile_detail, name="profile_detail"),
    path("likes/", drink_like, name="drink_like"),
]
