BACKEND=cd backend &&
FRONTEND=cd frontend &&

install-b:
	$(BACKEND) pip install -r requirements.txt

install-f:
	$(FRONTEND) npm install

run-b:
	$(BACKEND) python manage.py runserver

run-f:
	$(FRONTEND) npm run start

migrate:
	$(BACKEND) python manage.py makemigrations $(app) && python manage.py migrate $(app)

populate:
	$(BACKEND) python manage.py populate

test:
	$(BACKEND) python manage.py test $(app)

lint-b:
	scripts/lint.sh

lint-f:
	$(FRONTEND) npm run lint

win-lint:
	$(BACKEND) python -m flake8 --config=.flake8
