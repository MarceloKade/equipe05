from django.urls import path
from .views import usuario_create, newsletter_create, entre_em_contato_create

urlpatterns = [
    path('usuarios/', usuario_create, name='usuario-create'),
    path('newsletter/', newsletter_create, name='newsletter-create'),
    path('contato/', entre_em_contato_create, name='contato-create'),
]


