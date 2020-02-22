from rest_framework import serializers
from .models import Events
from django.contrib.auth.models import User, Group

class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model= Events
        fields='__all__'

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']