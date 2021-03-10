BACKEND=cd backend &&

install-b:
	$(BACKEND) pip install -r requirements.txt

run-b:
	$(BACKEND) python manage.py runserver

migrate:
	$(BACKEND) python manage.py makemigrations $(app) && python manage.py migrate $(app)

populate:
	$(BACKEND) python manage.py populate

lint:
	scripts/lint.sh