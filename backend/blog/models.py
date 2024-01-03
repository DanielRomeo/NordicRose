from django.db import models

# Create your models here.

class Item(models.Model): # i added this models.Model when compiler complained about irretability
    title = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
