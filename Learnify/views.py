from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.contrib import messages  # ADD THIS LINE

try:
    from enquery.models import UserProfile, Contact  # ADD Contact HERE
except:
    UserProfile = None
    Contact = None  # ADD THIS LINE

def get_user_profile(request):
    """Helper function to get user profile"""
    if request.user.is_authenticated and UserProfile:
        try:
            return UserProfile.objects.get(user=request.user)
        except:
            return None
    return None

def login_view(request):
    if request.user.is_authenticated:
        return redirect('home')
    
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        try:
            user = User.objects.get(email=email)
            user = authenticate(request, username=user.username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                return render(request, 'login.html', {'error': 'Invalid credentials'})
        except User.DoesNotExist:
            return render(request, 'login.html', {'error': 'User does not exist'})
    
    return render(request, 'login.html')

def register_view(request):
    if request.user.is_authenticated:
        return redirect('home')
    
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        
        if password != confirm_password:
            return render(request, 'register.html', {'error': 'Passwords do not match'})
        
        if User.objects.filter(email=email).exists():
            return render(request, 'register.html', {'error': 'Email already exists'})
        
        user = User.objects.create_user(username=email, email=email, password=password, first_name=name)
        user.save()
        
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
    
    return render(request, 'register.html')

def logout_view(request):
    logout(request)
    return redirect('login')

@login_required
def home(request):
    user_profile = get_user_profile(request)
    return render(request, 'home.html', {'user_profile': user_profile})

@login_required
def about(request):
    user_profile = get_user_profile(request)
    return render(request, 'about.html', {'user_profile': user_profile})

@login_required
def contact(request):
    user_profile = get_user_profile(request)
    
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('number')  # Note: form me 'number' name hai
        message = request.POST.get('msg')
        
        # Validate form data
        if not all([name, email, phone, message]):
            messages.error(request, 'Please fill all fields!')
            return render(request, 'contact.html', {'user_profile': user_profile})
        
        # Save to database
        if Contact:
            try:
                contact_entry = Contact(
                    name=name,
                    email=email,
                    number=phone,  # Note: model me 'number' field hai
                    message=message
                )
                contact_entry.save()
                messages.success(request, 'Your message has been sent successfully!')
                return redirect('contact')
            except Exception as e:
                messages.error(request, f'Error saving message: {e}')
        else:
            messages.error(request, 'Contact feature is not available at the moment.')
    
    return render(request, 'contact.html', {'user_profile': user_profile})

@login_required
def courses(request):
    user_profile = get_user_profile(request)
    return render(request, 'course.html', {'user_profile': user_profile})

@login_required
def teachers(request):
    user_profile = get_user_profile(request)
    return render(request, 'teachers.html', {'user_profile': user_profile})

@login_required
def profile(request):
    user_profile = get_user_profile(request)
    context = {'user_profile': user_profile}
    return render(request, 'profile.html', context)

@login_required
def update(request):
    user_profile = get_user_profile(request)
    
    if request.method == 'POST':
        # User details update
        request.user.first_name = request.POST.get('name', '').split()[0] if request.POST.get('name') else ''
        request.user.last_name = ' '.join(request.POST.get('name', '').split()[1:]) if request.POST.get('name') else ''
        request.user.email = request.POST.get('email', '')
        request.user.save()
        
        # Password change logic
        old_password = request.POST.get('old_password')
        new_password = request.POST.get('new_password')
        confirm_password = request.POST.get('confirm_password')
        
        if old_password and new_password and confirm_password:
            if new_password == confirm_password:
                if request.user.check_password(old_password):
                    request.user.set_password(new_password)
                    request.user.save()
                    # Re-authenticate user after password change
                    user = authenticate(username=request.user.username, password=new_password)
                    if user:
                        login(request, user)
        
        # Profile picture update
        if UserProfile and 'image' in request.FILES:
            if user_profile:
                user_profile.profile_picture = request.FILES['image']
                user_profile.save()
            else:
                UserProfile.objects.create(user=request.user, profile_picture=request.FILES['image'])
        
        return redirect('profile')
    
    return render(request, 'update.html', {'user_profile': user_profile})

@login_required
def teacher_profile(request):
    user_profile = get_user_profile(request)
    return render(request, 'teacher-profile.html', {'user_profile': user_profile})

@login_required
def playlist(request):
    user_profile = get_user_profile(request)
    return render(request, 'playlist.html', {'user_profile': user_profile})

@login_required
def watch(request):
    user_profile = get_user_profile(request)
    return render(request, 'watch.html', {'user_profile': user_profile})

@login_required
def test(request):
    user_profile = get_user_profile(request)
    return render(request, 'test.html', {'user_profile': user_profile})

@login_required
def certificate(request):
    user_profile = get_user_profile(request)
    return render(request, 'certificate.html', {'user_profile': user_profile})