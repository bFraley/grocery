from django.conf.urls import include, url
from rest_framework import routers

from groceryapp.viewsets import GroceryViewset

router = routers.DefaultRouter()
router.register(r'groceryapp', GroceryViewSet)

urlpatterns = [
    url(r'^', include(router.urls)), 
]