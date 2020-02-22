from django.urls import path, include
from . import views
from django.views.generic import TemplateView
from django.contrib.auth import views as authviews
from rest_framework import routers
from django.urls import include, path
from rest_framework.authtoken import views as authviews2
router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)
router.register(r'events', views.EventsView)


urlpatterns = [
    path('',views.index,name='index'),
    path('router/', include(router.urls),name='index3'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    #path('login/',authviews.LoginView.as_view(),name='login'),
    #path('register/',views.register,name='register'),
    path('calendar/',views.index3,name='index3'),
    # path('api-token-auth/',authviews2.obtain_auth_token,name='api-token-auth'),
    path('api/',include(router.urls)),
    path('proba/',views.proba,name='proba'),
    
    
    
]
