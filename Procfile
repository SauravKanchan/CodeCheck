release: python manage.py migrate
web: python manage.py compilescss; python manage.py collectstatic --ignore=*.scss --no-input; gunicorn codecheck.wsgi --log-file -

