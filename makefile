install-b:
	cd backend && pip install -r requirements.txt

run-b:
	cd backend && python manage.py runserver

migrate:
	cd backend && python manage.py makemigrations $(app) && python manage.py migrate $(app)