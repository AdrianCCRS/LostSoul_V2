# Generated by Django 4.2.1 on 2023-07-03 19:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lost_soul_game', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='name',
            new_name='author',
        ),
    ]