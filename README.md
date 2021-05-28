# BarCart

## Running the app

### Set up a virtual environment

Use venv, pyenv, or anything similar to create and activate a virtual environment.

```shell
source ../.venv/bin/activate
```
> Or wherever your virtual environment is located

### Installing dependencies

**Backend:**
```shell
make install-b
```

**Frontend:**
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

```shell
python backend/manage.py createsuperuser
```

### Filling the database

To use the app we'll have to fill it with some test data.

```shell
make populate
```

### Running the dev servers

**Backend:**
```shell
make run-b
```
> Server will be running on port 8000

**Frontend:**
```shell
make run-f
```

### Setting up ngrok

ngrok needs to be active in order to communicate from your device to the backend server running on `localhost:8000`.
> Note: ngrok needs to be restarted every 8 hours if using a free version.

Start ngrok:

```shell
ngrok http 8000
```

Add ngrok to `ALLOWED_HOSTS` through the `.env` file (Don't include `http://`).

```shell
NGROK_HOST='<ngrok URL>'
```

Update `baseURL` via `frontend/.env`.

```shell
NGROK_HOST=<ngrok URL>
```

After making these changes, you'll have to clear the cache the first time you run the frontend.

```shell
make run-f-clean
```

You can run normally after this until the ngrok URL expires again.

### Linting

**Backend:**
```shell
make lint-b
```

**Frontend:**
```shell
make lint-f
```

**Backend (Windows):**
```shell
make win-lint
```
> This command is untested

### Running tests

```shell
make test
```

## Local Setup

After setting the app up you'll have to configure some local settings:

### Backend environment variables

In the `.backend` folder, add a `.env` file and put in some variables for `SECRET_KEY` and `DEBUG`.

```shell
SECRET_KEY='secretkey'
DEBUG=True
```

### ESLint on save

> Must be using VSCode.

Install the [ESLint extension for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to `.vscode/settings.json`:

```json
{   
    ...

    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "eslint.validate": [
      "javascript",
      "javascriptreact",
    ],
    "eslint.workingDirectories": [
      "./frontend"
    ]

    ...
}
```

### Preventing commits to master

In order to stop commits directly to master you'll have to add a pre-commit hook to your local git repository.

To do this, simply run the following commands in order:

```shell
cp ./scripts/pre-commit.sh .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```
> Note: the last line is not required on Windows
