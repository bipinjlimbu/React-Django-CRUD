from django.urls import path
from .views.main import student_view, student_detail_view

urlpatterns = [
    path('students/', student_view, name='student_view'),
    path('students/<int:student_id>/', student_detail_view, name='student_detail_view'),
]