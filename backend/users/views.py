from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ProfileSerializer, DrinkLikeSerializer
from .models import Profile


class ProfileDetailView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, user_id):
        profile = get_object_or_404(Profile, user__id=user_id)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)


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

