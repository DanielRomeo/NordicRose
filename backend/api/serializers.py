from rest_framework import serializers
from blog.models import Item  # import the models from the blog

class ItemSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'