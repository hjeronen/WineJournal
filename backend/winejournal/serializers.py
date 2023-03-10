from rest_framework import serializers
from .models import Wine

class WineSerializer(serializers.ModelSerializer):

    class Meta:
        model = Wine
        fields = (
            'id',
            'category',
            'wine_type',
            'name',
            'grape',
            'description',
            'rating',
            'price'
        )