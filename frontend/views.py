from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.models import User
from .forms import UserRegistrationForm
from .models import Events
from django.http import JsonResponse
from rest_framework import viewsets,permissions
from .models import Events
from .serializers import EventsSerializer
import datetime
import json
from django.views import View
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import UserSerializer, GroupSerializer
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework.viewsets import GenericViewSet
from django.views import View
from django.views.generic.base import TemplateView





# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = User.objects.all().order_by('-date_joined')
#     serializer_class = UserSerializer


# class GroupViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer

# class Proba(View):
#     template_name='index.html'
#     def jebanie(self,request):
#         widok="jebac disa"
# 
#        return render(request , self.template_name,{'widok':'widok'})

def proba(request):
    return render(request,'index.html')
def index(request):
    return render(request,'frontend/main.html')
def index3(request):
    return render(request,'index.html')
def register(request):
    if request.method =='POST':
        user_form=UserRegistrationForm(request.POST)
        if user_form.is_valid():
            new_user=user_form.save(commit=False)
            new_user.set_password(user_form.cleaned_data['password'])
            new_user.save()
            return render(request,'registration/register_done.html',{'new_user':new_user})
    else:
        user_form=UserRegistrationForm()
    return render(request,'registration/register.html',{'user_form':user_form})        
class EventsView(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    permissions_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class=EventsSerializer
    def get_queryset(self):
        return self.request.user.leads.all()
    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)
    


@login_required
def index2(request):
    url=''
    return HttpResponseRedirect(url)
    
