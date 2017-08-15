from django.shortcuts import render, redirect, HttpResponse
from .models import User, Quote
from django.contrib import messages
import bcrypt

# Create your views here.

def index(request):
    #---------------------------------------------
    #------     show user home page         ------
    #---------------------------------------------
    return render(request, 'main/index.html')

def login(request):
    #---------------------------------------------
    #--- if existing user provide login access ---
    #------ and send to user dashboard      ------
    #---------------------------------------------
    if 'user_id' in request.session:
        return redirect('/')
    return render(request, 'main/quotes.html')


def create_user(request):
    #---------------------------------------------
    #------------- make a new user ---------------
    #---------------------------------------------
    if request.method == 'POST':

        # validate all form data
        errors = User.objects.user_validator(request.POST)

        # populate messages with errors or specifics if true
        if len(errors):
            for error in errors:
                messages.error(request, error)
            return redirect('/')
        else:
        # if errors FREE
            try:
                # does email already exist in database
                check_email = User.objects.get(email = request.POST['email'])
                messages.error(request, 'Please try another email input.')
                return redirect('/')
            except:
                # hash password
                hash_it = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())

                # insert user into database
                user = User(user_name=request.POST['user_name'], alias=request.POST['alias'],email=request.POST['email'],password=hash_it)
                user.save()
                messages.success(request, 'You have successfully registered')
    return redirect('/')

def quotes(request):
    if 'user_id' not in request.session:
        messages.error(request, 'You are not logged in.')
        return redirect('/')

    users = User.objects.all()
    current_user = User.objects.get(id=request.session['user_id'])
    user = User.objects.get(id=request.session['user_id'])

    favs = user.fav_quotes.all()
    # if the quote is not selected as a fav by the user remove from main list
    quotes = Quote.objects.exclude(id__in=favs).order_by('-created_at')


    context = {
        'current_user_id' : request.session['user_id'],
        'user' : user,
        'favs' : favs,
        'quotes': quotes,
    }

    return render(request, 'main/quotes.html', context)

def user(request, user_id):
    if 'user_id' not in request.session:
        messages.error(request, 'You are not logged in.')
        return redirect('/')

    owner = User.objects.get(id=user_id)

    quotes = owner.quotes.all().order_by('-created_at')

    context = {
        'user' : owner,
        'quotes': quotes,
    }
    return render(request, 'main/user.html', context)

def logout(request):
    request.session.clear()
    return redirect('/')

def signin(request):
    if request.method == 'POST':
        try:
            get_email = User.objects.get(email = request.POST['email'])
            if bcrypt.checkpw(request.POST['password'].encode(), get_email.password.encode()):
                request.session['user_id'] = get_email.id

                current_user = User.objects.get(id=request.session['user_id'])

                return redirect('/quotes')

        except:
            messages.error(request, 'Your information is incorrect. Please try again.')
    return redirect('/signin')


def new_quote(request):
    if request.method == 'POST':
        errors = Quote.objects.quote_validator(request.POST)

        # populate messages with errors if true
        if len(errors):
            for error in errors:
                messages.error(request, error)
            return redirect('/quotes')

        user = User.objects.get(id=request.session['user_id'])
        quote = Quote(author=request.POST['author'],content=request.POST['content'],user=user)
        quote.save()
        messages.success(request,'Successfully posted your quote.')
    return redirect('/quotes')

def addFav(request, quote_id):
    if request.method == 'POST':
        user = User.objects.get(id=request.session['user_id'])
        quote = Quote.objects.get(id=quote_id)
        quote.user_favs.add(user)
        quote.save()
    return redirect('/quotes')

def unFav(request, quote_id):
    if request.method == 'POST':
        user = User.objects.get(id=request.session['user_id'])
        quote = Quote.objects.get(id=quote_id)
        user.fav_quotes.remove(quote)
    return redirect('/quotes')
