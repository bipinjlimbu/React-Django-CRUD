from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import Student
from ..serializers import StudentSerializer
from rest_framework import status

@api_view(['GET', 'POST'])
def student_view(request):
    if request.method == 'GET':
        students = Student.objects.all().order_by('roll')
        serializer = StudentSerializer(students, many=True)
        return Response({'data': serializer.data}, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'Success': 'Student created successfully','data': serializer.data}, status=status.HTTP_201_CREATED)
        else:
            return Response({'Error': 'Failed to create student','errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET', 'PUT', 'DELETE'])
def student_detail_view(request, student_id):
    if request.method == 'GET':
        try:
            student = Student.objects.get(id=student_id)
            serializer = StudentSerializer(student)
            return Response({'data': serializer.data}, status=status.HTTP_200_OK)
        except Student.DoesNotExist:
            return Response({'Error': 'Student not found'}, status=status.HTTP_404_NOT_FOUND)
        
    elif request.method == 'PUT':
        try:
            student = Student.objects.get(id=student_id)
            serializer = StudentSerializer(student, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'Success': 'Student updated successfully','data': serializer.data}, status=status.HTTP_200_OK)
            else:
                return Response({'Error': 'Failed to update student','errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Student.DoesNotExist:
            return Response({'Error': 'Student not found'}, status=status.HTTP_404_NOT_FOUND)
        
    elif request.method == 'DELETE':
        try:
            student = Student.objects.get(id=student_id)
            student.delete()
            return Response({'Success': 'Student deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        except Student.DoesNotExist:
            return Response({'Error': 'Student not found'}, status=status.HTTP_404_NOT_FOUND)