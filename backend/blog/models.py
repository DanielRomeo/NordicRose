from django.db import models

# Create your models here.

class Author(models.Model):
    firstname = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    facebook = models.URLField(max_length=200)
    twitter = models.URLField(max_length=200)
    image = models.ImageField(null=True, blank=True, upload_to="images/")

    def __str__(self) -> str:
        return self.lastname

class Blogpost(models.Model): # i added this models.Model when compiler complained about irretability
    title = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title