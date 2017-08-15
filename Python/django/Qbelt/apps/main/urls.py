from django.conf.urls import url
from . import views

urlpatterns = [
    # Home page
    url(r'^$', views.index),
    url(r'^main$', views.index),
    url(r'^login$', views.signin),
    url(r'^register$', views.create_user),

    # Quotable Quotes
    url(r'^quotes$', views.quotes),
    url(r'^new_quote$', views.new_quote),
    url(r'^logout$', views.logout),
    url(r'^addFav/(?P<quote_id>\d+)$', views.addFav),
    url(r'^unFav/(?P<quote_id>\d+)$', views.unFav),

    # User Profile information
    url(r'^user/(?P<user_id>\d+)$', views.user),

]
