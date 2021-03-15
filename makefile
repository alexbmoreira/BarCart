BACKEND=cd backend &&
FRONTEND=cd frontend &&

install-b:
	$(BACKEND) pip install -r requirements.txt

install-f:
	$(FRONTEND) npm install

run-b:
	$(BACKEND) python manage.py runserver

run-ios:
	$(FRONTEND) npm run ios

run-android:
	$(FRONTEND) npm run android

migrate:
	$(BACKEND) python manage.py makemigrations $(app) && python manage.py migrate $(app)

populate:
	$(BACKEND) python manage.py populate

test:
	$(BACKEND) python manage.py test $(app)

lint:
	scripts/lint.sh