from django.contrib import admin
from .models import Blogpost, Author

# Register your models here.
admin.site.register(Author)
admin.site.register(Blogpost)