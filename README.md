# BarCart

## Running the app

### Set up a virtual environment

Use venv, pyenv, or anything similar to create and activate a virtual environment.

```shell
source ../.venv/bin/activate
```
> Or wherever your virtual environment is located

### Installing dependencies

Backend:
```shell
make install-b
```

<!-- Frontend:
```shell
make install-fe
``` -->

### Create the database

Make sure [Postgres](https://postgresapp.com/) is installed.

```shell
createdb barcart
```

Then we have to make and migrate.

```shell
make migrate
```

### Running the dev servers

Backend:
```shell
make run-b
```
> Server will be running on port 8000

<!-- Frontend:
```shell
make run-frontend
```
> Server will be running on port 8080 -->

### Linting backend

```shell
make lint
```

<!-- ### Running tests

```shell
make test
``` -->
