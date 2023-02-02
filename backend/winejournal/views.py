from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WineSerializer
from .models import Wine

class WineView(viewsets.ModelViewSet):
    serializer_class = WineSerializer
    queryset = Wine.objects.all()
