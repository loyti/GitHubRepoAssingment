from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^notes$', views.create),
    url(r'^notes/(?P<note_id>\d+)/delete$', views.delete),
    url(r'^notes/(?P<note_id>\d+)/desc$', views.add_description),

    #ajax routes:

    url(r'^notes/ajax$', views.create_ajax),
    url(r'^notes/(?P<note_id>\d+)/delete/ajax$', views.delete_ajax),
    url(r'^notes/(?P<note_id>\d+)/desc/ajax$', views.add_description_ajax),

]
