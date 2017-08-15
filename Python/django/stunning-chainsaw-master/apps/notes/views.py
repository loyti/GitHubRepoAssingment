from django.shortcuts import render, redirect
from .models import Note

# Create your views here.
def index(request):
    notes = Note.objects.all()

    context = {
        'notes': notes,
    }
    return render(request, 'notes/index.html', context)

def create(request):
    #should have validated that they were POSTing and there was a title with some length..
    print request.POST
    Note.objects.create(title=request.POST['title'])
    return redirect('/')

def create_ajax(request):
    #should have validated that they were POSTing and there was a title with some length..
    print request.POST
    Note.objects.create(title=request.POST['title'])

    context = {
        'notes': Note.objects.all(),
    }
    return render(request, 'notes/notesblock.html', context)

def delete(request, note_id):
    try:
        Note.objects.get(id=note_id).delete()
    except:
        pass
    return redirect('/')

def delete_ajax(request, note_id):
    try:
        Note.objects.get(id=note_id).delete()
    except:
        pass
    context = {
        'notes': Note.objects.all(),
    }
    return render(request, 'notes/notesblock.html', context)

def add_description(request, note_id):
    # "Note" that this get will fail if the id doesn't exist.
    note = Note.objects.get(id=note_id)
    print note
    note.description = request.POST['description']
    print note.description
    note.save()
    return redirect('/')

def add_description_ajax(request, note_id):
    # "Note" that this get will fail if the id doesn't exist.
    note = Note.objects.get(id=note_id)
    note.description = request.POST['description']
    note.save()

    context = {
        'notes': Note.objects.all(),
    }
    return render(request, 'notes/notesblock.html', context)
