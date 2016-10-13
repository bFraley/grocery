from django.conf.urls import include, url
from rest_framework import routers

from groceryapp.viewsets import GroceryItemViewSet

router = routers.DefaultRouter()
router.register(r'groceryapp', GroceryItemViewSet)

urlpatterns = [
    url(r'^', include(router.urls)), 
]