from django.shortcuts import render, redirect, HttpResponse
from .models import User, Post, Comment
from django.contrib import messages
import bcrypt

# Create your views here.

# page renders
def landing(request):
    return render(request, 'dash_app/landing.html')

def login(request):
    if 'user_id' in request.session:
        return redirect('/dashboard')
    return render(request, 'dash_app/login.html')

def register(request):
    if 'user_id' in request.session:
        return redirect('/dashboard')
    return render(request, 'dash_app/registration.html')

def dashboard(request):
    if 'user_id' not in request.session:
        messages.error(request, 'You are not logged in.')
        return redirect('/')

    users = User.objects.all()

    current_user = User.objects.get(id=request.session['user_id'])


    context = {
        'current_user_id' : request.session['user_id'],
        'users'           : users,
        'isAdmin'         : request.session['isAdmin']
    }

    return render(request, 'dash_app/dashboard.html', context)

def add_user(request):
    if 'user_id' not in request.session:
        messages.error(request, 'You are not logged in.')
        return redirect('/')

    if request.session['isAdmin'] == False:
        return redirect('/dashboard')

    context = {
        'current_user_id' : request.session['user_id'],
    }

    return render(request, 'dash_app/add_user.html', context)

def edit_user(request):
    if 'user_id' not in request.session:
        messages.error(request, 'You are not logged in.')
        return redirect('/')

    user = User.objects.get(id=request.session['user_id'])

    context = {
        'current_user_id' : request.session['user_id'],
        'user'            : user,
    }

    return render(request, 'dash_app/edit_user.html', context)

def edit_user_admin(request, user_id):
    if 'user_id' not in request.session:
        messages.error(request, 'You are not logged in.')
        return redirect('/')

    if request.session['isAdmin'] == False:
        return redirect('/dashboard')

    user = User.objects.get(id=user_id)

    context = {
        'current_user_id' : request.session['user_id'],
        'user'            : user,
    }

    return render(request, 'dash_app/admin_edit_user.html', context)

def profile(request, user_id):
    if 'user_id' not in request.session:
        messages.error(request, 'You are not logged in.')
        return redirect('/')

    owner = User.objects.get(id=user_id)

    posts = owner.posts_wall.all().order_by('-created_at')

    context = {
        'current_user_id' : request.session['user_id'],
        'user' : owner,
        'posts': posts,
    }

    return render(request, 'dash_app/profile.html', context)

def warning(request, user_id):
    if 'user_id' not in request.session:
        messages.error(request, 'You are not logged in.')
        return redirect('/')

    if request.session['isAdmin'] == False:
        return redirect('/dashboard')

    user = User.objects.get(id=user_id)

    context = {
        'current_user_id' : request.session['user_id'],
        'user_to_delete'  : user.id,
        'user'            : user
    }

    return render(request, 'dash_app/warning.html', context)

# ---------------
# form processing

def logoff(request):
    request.session.clear()
    return redirect('/')

def signin(request):
    if request.method == 'POST':
        try:
            get_email = User.objects.get(email = request.POST['email'])
            if bcrypt.checkpw(request.POST['password'].encode(), get_email.password.encode()):
                request.session['user_id'] = get_email.id

                current_user = User.objects.get(id=request.session['user_id'])

                # checks if current user is admin
                if current_user.user_level == 9:
                    request.session['isAdmin'] = True
                else:
                    request.session['isAdmin'] = False

                return redirect('/dashboard')
        except:
            messages.error(request, 'Your Login information does not match our database. Please try again.')
    return redirect('/signin')

def create_user(request):
    if request.method == 'POST':

        # validate our form data
        errors = User.objects.the_awesome_validator(request.POST)

        # populate messages with errors if true
        if len(errors):
            for error in errors:
                messages.error(request, error)
            return redirect('/register')
        else:
        # if no errors
            try:
                # check email if it already exists in the database.
                check_email = User.objects.get(email = request.POST['email'])
                messages.error(request, 'This email already exists.')
                return redirect('/register')
            except:
                # hash password
                hash_it = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())

                # if first user in data base assign admin user level
                check_users = User.objects.all()
                if len(check_users) > 0:
                    user_level = 1
                else:
                    user_level = 9

                # insert user into database
                user = User(first_name=request.POST['first_name'], last_name=request.POST['last_name'],email=request.POST['email'],password=hash_it,user_level=user_level)
                user.save()
                messages.success(request, 'You have successfully registered')
    return redirect('/signin')

def admin_create_user(request):
    if request.method == 'POST':

        # validate our form data
        errors = User.objects.the_awesome_validator(request.POST)

        # populate messages with errors if true
        if len(errors):
            for error in errors:
                messages.error(request, error)
            return redirect('/users/new')
        else:
        # if no errors
            try:
                # check email if it already exists in the database.
                check_email = User.objects.get(email = request.POST['email'])
                messages.error(request, 'This email already exists.')
                return redirect('/users/new')
            except:
                # hash password
                hash_it = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())

                # if first user in data base assign admin user level
                check_users = User.objects.all()
                if len(check_users) > 0:
                    user_level = 1
                else:
                    user_level = 9

                # insert user into database
                user = User(first_name=request.POST['first_name'], last_name=request.POST['last_name'],email=request.POST['email'],password=hash_it,user_level=user_level)
                user.save()
                messages.success(request, 'You have successfully added user.')
    return redirect('/dashboard/admin')

def update_user(request, user_id):
    if request.method == 'POST':
        errors = User.objects.the_awesome_validator(request.POST)
        if len(errors):
            for error in errors:
                messages.error(request, error)
            return redirect('/users/edit/'+str(user_id))
        else:
            user = User.objects.get(id=user_id)
            user.email = request.POST['email']
            user.first_name = request.POST['first_name']
            user.last_name = request.POST['last_name']
            user.save()
            messages.success(request,'Successfully updated User information.')

    return redirect('/users/edit/'+str(user_id))

def update_password(request, user_id):
    if request.method == 'POST':
        errors = User.objects.the_awesome_validator(request.POST)
        if len(errors):
            for error in errors:
                messages.error(request, error)
            return redirect('/users/edit/'+str(user_id))
        else:
            user = User.objects.get(id=user_id)
            hash_it = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
            user.password = hash_it
            user.save()
            messages.success(request,'Successfully updated password.')

    return redirect('/users/edit/'+str(user_id))

def update_desc(request, user_id):
    if request.method == 'POST':
        errors = User.objects.the_awesome_validator(request.POST)
        if len(errors):
            for error in errors:
                messages.error(request, error)
            return redirect('/users/edit/'+str(user_id))
        else:
            user = User.objects.get(id=user_id)
            user.desc = request.POST['desc']
            user.save()
            messages.success(request,'Successfully updated description.')
    return redirect('/users/edit/'+str(user_id))

def new_post(request, user_id):
    if request.method == 'POST':
        recipient = User.objects.get(id=request.POST['profile_user'])
        profile_user = request.POST['profile_user']
        poster = User.objects.get(id=user_id)
        post = Post(content=request.POST['new_post'],user=poster,user_wall=recipient)
        post.save()
        messages.success(request,'Successfully posted your message.')
    return redirect('/users/show/'+str(profile_user))

def new_comment(request,user_id):
    if request.method == 'POST':
        commenter = User.objects.get(id=user_id)
        recipient = Post.objects.get(id=request.POST['post_identification'])
        comment = Comment(content=request.POST['new_comment'],post=recipient,user=commenter)
        comment.save()
        messages.success(request,'Successfully posted your comment.')
        profile_user = request.POST['profile_user']

    return redirect('/users/show/'+str(profile_user))

def delete_user(request, user_id):
    user = User.objects.get(id=user_id)
    user.delete()
    return redirect('/dashboard/admin')
