# Generated by Django 4.0.3 on 2022-03-31 04:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0001_initial'),
        ('movies', '0009_alter_movie_release_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='category_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='category.category'),
        ),
    ]