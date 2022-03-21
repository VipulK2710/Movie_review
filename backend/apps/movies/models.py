from django.db import models
from cloudinary.models import CloudinaryField
# Create your models here.


class Movie(models.Model):
    MY_CHOICES = (
        ('Newly Released', 'Newly Released'),
        ('Coming Soon', 'Coming Soon')
    )

    class Meta(object):
        db_table = 'movies'

    name = models.CharField(
        'name', blank=False, null=False, max_length=50, db_index=True, default='Name of Movies'
    )
    description = models.CharField(
        'description', blank=False, null=False, max_length=500, db_index=True, default="Description"
    )
    image = CloudinaryField(
        'Image', blank=True, null=True
    )
    category_id = models.IntegerField(
        'Name of Category', blank=False, null=False, db_index=True
    )
    trailer_link = models.CharField(
        'Trailer Link', blank=True, null=False, max_length=500, db_index=True
    )
    created_at = models.DateTimeField(
        'Created Time', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Time', blank=True, auto_now=True
    )
