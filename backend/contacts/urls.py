from django.contrib import admin
from django.urls import path

from .views import contact_create, contact_list_view

urlpatterns = [
    path('api/contacts/', contact_create, name='contact-create'),
    path('contacts/', contact_list_view, name='contact-list'),
]

