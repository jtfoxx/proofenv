# Generated by Django 3.0.5 on 2020-04-24 08:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20200424_0742'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='day',
            field=models.IntegerField(),
        ),
    ]
