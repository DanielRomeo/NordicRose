
#!/usr/bin/env bash
# exit on error
set -o errexit

# Access Django settings module from Render environment variable
DJANGO_SETTINGS_MODULE=${DJANGO_SETTINGS_MODULE}

source ./venv/bin/activate

pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --no-input

python manage.py collectstatic --no-input
python manage.py migrate