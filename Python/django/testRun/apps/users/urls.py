from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
        url(r'^$', views.index),     # This line has changed!
	url(r'^login$', views.login),
	url(r'^register$', views.register),
	url(r'^new$', views.new),
	url(r'^users/(?P<id>\d+)$', views.show),
	url(r'^create_post$', views.create_post),
]
