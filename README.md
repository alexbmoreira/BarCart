# BarCart

## Running the app

### Set up a virtual environment

Use venv, pyenv, or anything similar to create and activate a virtual environment.

```shell
source ../.venv/bin/activate
```
> Or wherever your virtual environment is located

### Installing dependencies

*Backend:*
```shell
make install-b
```

*Frontend:*
```shell
make install-fe
```

### Create the database

Make sure [Postgres](https://postgresapp.com/) is installed.

```shell
createdb barcart
```

Then we have to make and migrate.

```shell
make migrate
```

Create a super user to access admin controls

```
python backend/manage.py createsuperuser
```

### Filling the database

To use the app we'll have to fill it with some test data.

```shell
make populate
```

### Running the dev servers

*Backend:*
```shell
make run-b
```
> Server will be running on port 8000

*Frontend:*

Run either of the following to run the app on the expo client on your preferred device:
```shell
make run-ios
make run-android
```
> Server will be running on port 8080

### Linting backend

```shell
make lint
```

### Running tests

```shell
make test
```
