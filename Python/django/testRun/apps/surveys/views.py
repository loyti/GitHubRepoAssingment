from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages

# Create your views here.
def index(request):
	request.session['sessionCounter'] = request.session.get('sessionCounter', 0)
	
	return render(request, 'surveys/index.html')

def postSurvey(request):
	errors = []
	if request.method == "POST":
		if request.POST['first_name'] == "":
			errors.append("Please provide your First Name")
		if request.POST['last_name'] == "":
			errors.append("Please provide your Last Name")
		if request.POST['email'] == "":
			errors.append("Please provide your Email")

		if len(errors) > 0: 
			for error in errors: 
				messages.error(request, error)
			return redirect('/surveys')
		else: 
			request.session['first_name'] = request.POST['first_name']
			request.session['last_name'] = request.POST['last_name']
                	request.session['email'] = request.POST['email']
                	request.session['location'] = request.POST['location']
                	request.session['favLang'] = request.POST['favLang']
                	request.session['comments'] = request.POST['comments']
			messages.success(request, "Success")
			request.session['sessionCounter'] += 1
			return redirect('/surveys/surveyView')

def surveyView(request):
	context = {
                'first_name' : request.session['first_name'],
                'last_name' : request.session['last_name'],
		'email' : request.session['email'],
                'location' : request.session['location'],
                'favLang' : request.session['favLang'],
		'comments' : request.session['comments'],
		'sessionCounter' : request.session['sessionCounter'],
        }
	return render(request, 'surveys/viewSurvey.html', context)
