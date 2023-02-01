from django.db import models

class Wine(models.Model):
    category = models.CharField(max_length=100)
    wine_type = models.CharField(max_length=100)
    name = models.CharField(max_length=200)
    grape = models.CharField(max_length=200)
    description = models.TextField(default='', blank=True, max_length=200)
    rating = models.DecimalField(default=0.0, max_digits=2, decimal_places=1)
    price = models.DecimalField(default=0.00, max_digits=6, decimal_places=2)

    class Meta:
        db_table = 'wines'
        ordering = ['name']
