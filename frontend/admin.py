# -*- coding: utf-8 -*-
from __future__ import unicode_literals
 
from django.contrib import admin
from .models import Events
import datetime
import calendar
from django.urls import reverse
from calendar import HTMLCalendar
from django.utils.safestring import mark_safe
 
# Register your models here.
 
admin.site.register(Events)