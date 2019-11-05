[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcodeformuenster%2Fmuenster-dashboard.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcodeformuenster%2Fmuenster-dashboard?ref=badge_shield)

## Run development environment locally

```bash
export COMPOSE_PROJECT_NAME="muenster-dashboard"
export ELASTICSEARCH_URL_PREFIX="http://localhost:9200/mein-ms2-"
export BUILD="--build"

sudo --preserve-env docker-compose up $BUILD
```

If you want to start React in developer mode open another terminal:

```bash
sudo docker container stop muenster-dashboard_dashboard_1
export REACT_APP_ELASTICSEARCH_URL_PREFIX="http://localhost:9200/mein-ms2-"
npm start
```

For further development check [https://www.figma.com/file/ZUv4Nc6aiqAwHoh1walbEZ/mein-ms?node-id=48%3A4](figma project).
Feel free to add design suggestions or to implement what is already given.
### Debugging

If "npm start" fails because of this error:

    Error: ENOSPC: System limit for number of file watchers reached, watch '/home/thomas/git/familien-dashboard/public'

Then you should try:
```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

### Debug kibana index content

* Show indexes: https://elasticsearch.codeformuenster.org/mein-ms-places/_cat/indices
* Show content of mein-ms-places index: https://elasticsearch.codeformuenster.org/mein-ms-places/_search
* Show only events: https://elasticsearch.codeformuenster.org/mein-ms-places/_search?q=type:event

For offline debugging, exchange `elasticsearch.codeformuenster.org` with `localhost:9200`.


## Data import

For importing the data open a new terminal:

If you don't provide a mapquest key, *no events will be imported*.
Get a mapquest key here (registration is quick and easy): https://developer.mapquest.com/user/me/apps

```bash
export COMPOSE_PROJECT_NAME="muenster-dashboard"
export ELASTICSEARCH_URL_PREFIX="http://elasticsearch:9200/mein-ms2-"
export BUILD="--build"
export MAPQUEST_KEY="<your mapquest key here>"

cd import-scripts
sudo --preserve-env ./import.sh
```
