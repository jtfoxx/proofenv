# Generated by Django 3.0.5 on 2020-05-15 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_auto_20200515_1506'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(default='', max_length=128),
            preserve_default=False,
        ),
    ]
