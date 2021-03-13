from django.db import models


class DrinkManager(models.Manager):

    def by_popularity(self):
        return self.model.objects.order_by('-popularity')
