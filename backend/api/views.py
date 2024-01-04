# from rest_framework import Response
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt

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

@api_view(['GET'])
def getBlogs(request):
    items = Blogpost.objects.all()
    serializer = BlogpostSerializer(items, many=True) # its true because we wanna return alot, if it were one, it would be false
    return Response(serializer.data)

# @api_view(['POST'])
# def addblog(request):
#     serializer = ItemSerialzer(data = request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)