# Generated by Django 2.2.5 on 2020-02-10 16:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0007_auto_20200210_1746'),
    ]

    operations = [
        migrations.RenameField(
            model_name='events',
            old_name='tags',
            new_name='tablica',
        ),
    ]
