# Generated by Django 2.2.5 on 2020-02-08 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0002_auto_20200208_1731'),
    ]

    operations = [
        migrations.AddField(
            model_name='events',
            name='style',
            field=models.TextField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='events',
            name='training',
            field=models.TextField(blank=True, max_length=255, null=True),
        ),
    ]
