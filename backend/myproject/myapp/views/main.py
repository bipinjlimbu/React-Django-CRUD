from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import Student
from ..serializers import StudentSerializer
from rest_framework import status

@api_view(['POST'])
def student_view(request):
    if request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'Success': 'Student created successfully','data': serializer.data}, status=status.HTTP_201_CREATED)
        else:
            return Response({'Error': 'Failed to create student','errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)