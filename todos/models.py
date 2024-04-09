from django.db import models
from django.contrib.gis.db import models as gis_models


class Item(models.Model):
    name = models.CharField(max_length=255)
    # Add other fields here as necessary

    def __str__(self):
        return self.name

    class Meta:
        db_table = "create_item"  # Custom table name


class Location(models.Model):
    name = models.CharField(max_length=255)
    geom = gis_models.PointField()

    def __str__(self):
        return self.name

    class Meta:
        db_table = "locations"  # Custom table name
