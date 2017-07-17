from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
	session = request.session
	session['first_name'] = session.get['first_name']
	session['last_name'] = session.get['last_name']
	context = {
		'first_name' : session.form['first_name'],
		'last_name' : session.form['last_name'],
		'location' : session.form['location'],
		'favLang' : session.form['favLang'],
	}

	return render(request, 'survey/index.html', context)

def postSurvey(request):
	session = request.session
	if "session" not in request.session:
		redirect('/')
	elif request.method == "POST":
		form = form(request.POST)
		session['first_name'] = session.get['first_name']
        	session['last_name'] = session.get['last_name']
		session['location'] = session.get['location']
		sessoin['favLang'] = session.get['favLang']
		context = {
                	'first_name' : session.form['first_name'],
                	'last_name' : session.form['last_name'],
                	'location' : session.form['location'],
			'favLang' : session.form['favLang'],
		}
		return redirect('/surveyView')

def surveyView(request):
	session = request.session
	context = {
                'first_name' : session.form['first_name'],
                'last_name' : session.form['last_name'],
                'location' : session.form['location'],
                'favLang' : session.form['favLang'],
        }
	return render(request, 'survey/viewSurvey.html', context)
