# from rest_framework import Response
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse # http response

# after creating the serialzer, we now import the Blog model and the serializers
from blog.models import Author, Blogpost 
from .serializers import AuthorSerializer, BlogpostSerializer

# api view dec
# @csrf_exempt
@api_view(['GET'])
def getData(request):
    person = {
        'name': 'Dennis',
        'age': 35
    }
    return Response(person)

# works
@api_view(['GET'])
def getBlogs(request):
    items = Blogpost.objects.all()
    serializer = BlogpostSerializer(items, many=True) # its true because we wanna return alot, if it were one, it would be false
    return Response(serializer.data)

# works
@api_view(['GET'])
def getBlog(request, id):
    item = Blogpost.objects.get(pk=id)
    # response = json.dumps({
    #     'title': item.title,
    #     'description' : item.description,
    #     'created' : item.created,
    #     'image': item.image,
    #     'author': item.author
    #     }, indent=4, sort_keys=True, default=str)
    # return HttpResponse(response, content_type='text/json')
    serializer = BlogpostSerializer(item, many=False)
    return Response(serializer.data)

# works
@api_view(['GET'])
def getAuthor(request, id):
    item = Author.objects.get(pk=id)
    serializer = AuthorSerializer(item, many=False)
    return Response(serializer.data)

