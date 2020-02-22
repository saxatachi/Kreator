# Generated by Django 2.2.5 on 2020-02-10 16:46

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0006_events_tab'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='events',
            name='tab',
        ),
        migrations.AddField(
            model_name='events',
            name='tags',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=15), blank=True, null=True, size=None),
        ),
    ]
