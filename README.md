# Django Deployment Strategy

## Basic deployment: Ubuntu, NGinx, Gunicorn

> https://gist.github.com/bradtraversy/cfa565b879ff1458dba08f423cb01d71

Shown in the above the environment is setup for only one domain as shown in /etc/systemd/system/gunicorn.service and gunicorn.socket it points the user and path which you want to serve

## Local vs Production settings

> local_settings.py and settings.py

Import local_settings.py in settings.py, put local_settings.py in .gitignore - by default local\* will be skipped and on ImportError exception just pass, see settings.py last line

When deploying make sure to have this added to settings.py

> STATIC_URL = '/static/'\
> STATIC_ROOT = os.path.join(BASE_DIR, 'static')

## Deployment

> source bin/activate
> python3 manage.py collectstatic
> sudo systemctl restart nginx; sudo systemctl restart sendusdeals
> Gunicorn services: /etc/systemd/system/sendusdeals.service
> sud/live_db.py is in .gitignore has to be configured on the server for DB settings

## Deploy script

> ./deploy.sh
> npm run build to compile React
