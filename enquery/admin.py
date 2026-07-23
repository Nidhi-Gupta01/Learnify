from django.contrib import admin
from .models import Contact, Course, Video, UserProgress, Certificate
from .models import UserProfile

admin.site.register(UserProfile)

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'number', 'created_at')  # ADD 'number' HERE
    list_filter = ('created_at',)
    search_fields = ('name', 'email', 'number')  # ADD 'number' HERE

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'instructor', 'created_at')
    list_filter = ('created_at', 'instructor')
    search_fields = ('title', 'description')

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('title', 'course', 'order')
    list_filter = ('course',)
    search_fields = ('title', 'course__title')

@admin.register(UserProgress)
class UserProgressAdmin(admin.ModelAdmin):
    list_display = ('user', 'video', 'completed', 'completed_at')
    list_filter = ('completed', 'completed_at')
    search_fields = ('user__username', 'video__title')

@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('user', 'course', 'issued_date')
    list_filter = ('issued_date', 'course')
    search_fields = ('user__username', 'course__title')