from django.urls import path
from .views.main import student_view

urlpatterns = [
    path('students/', student_view, name='student_view'),
]