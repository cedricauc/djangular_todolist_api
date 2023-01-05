## Todolist API

A simple web application in the form of a todolist that he can edit without having to log in

**This project cover the following topics:**
- a front-end (in the form of a JavaScript project)
- proposing an addition of a task containing: a title, a description, an address, an item. A task can be checked, which indicates that it is complete
- a back-end which will receive the stream and store the information in the todolist database
- a database that will store the tasks

## Install

At the root of the project, run the commands
```python
pip install virtualenv
python -m venv env
./env/Scripts/activate
pip install -r requirements.txt
```

## Run

Commands to start the Django server
```python
python manage.py runserver
```

Commands to run the tests
```python
pytest
```
