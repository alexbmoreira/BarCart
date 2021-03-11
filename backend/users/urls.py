from django.urls import path

from .views import ProfileDetailView

profile_detail = ProfileDetailView.as_view()

urlpatterns = [
    path("profiles/<int:user_id>/", profile_detail, name="profile_detail"),
]