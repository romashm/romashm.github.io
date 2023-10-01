# -*- coding: utf-8 -*-
import os, sys
sys.path.insert(0, '/var/www/u2130262/data/www/yoga365.org/yoga365org/')
sys.path.insert(1, '/var/www/u2130262/data/djangoenv/lib/python3.7/site-packages')
os.environ['DJANGO_SETTINGS_MODULE'] = 'yoga365org.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()