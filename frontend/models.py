from django.db import models
from django.core.exceptions import ValidationError
from django.urls import reverse
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField
 
class Events(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255,null=True,blank=True)
    training = models.TextField(max_length=255,null=True,blank=True)
    owner= models.ForeignKey(User,related_name="leads", on_delete=models.CASCADE, null=True)
    style = models.TextField(max_length=255,null=True,blank=True)
    tablica = ArrayField(models.CharField(max_length=255), null=True, blank=True)
    break_training = ArrayField(models.CharField(max_length=255), null=True, blank=True)
    day= models.DateField(null=True)
    def __str__(self):
        return self.name

