# Generated by Django 4.2.7 on 2024-04-18 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_author_blogpost_delete_item'),
    ]

    operations = [
        migrations.AlterField(
            model_name='author',
            name='facebook',
            field=models.URLField(null=True),
        ),
        migrations.AlterField(
            model_name='author',
            name='twitter',
            field=models.URLField(null=True),
        ),
    ]
