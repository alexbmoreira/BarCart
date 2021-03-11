from django.db import models
from django.contrib.auth.models import User
from core.models import Drink


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length=140)

    def __str__(self):
        return self.user.username


class DrinkLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    drink = models.ForeignKey(Drink, on_delete=models.CASCADE)

    class Meta:
        unique_together = ["user", "drink"]
