# Generated by Django 4.0 on 2022-02-16 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backendapp', '0004_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.TextField(blank=True, null=True),
        ),
    ]