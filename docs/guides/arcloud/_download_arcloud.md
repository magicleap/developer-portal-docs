### Download ARCloud Public Release from [Github](https://github.com/magicleap/arcloud/releases)

```shell
LATEST_RELEASE=$(curl -L -s -H 'Accept: application/json' https://github.com/magicleap/arcloud/releases/latest)
LATEST_VERSION=$(echo $LATEST_RELEASE | sed -e 's/.*"tag_name":"\([^"]*\)".*/\1/')
ARTIFACT_URL="https://github.com/magicleap/arcloud/archive/refs/tags/$LATEST_VERSION.tar.gz"
wget -c $ARTIFACT_URL -O - | tar -xz
```

```shell
cd arcloud-$LATEST_VERSION
```

### Configure Environment

```shell
export REGISTRY_SERVER="quay.io"
export REGISTRY_USERNAME="<username>"
export REGISTRY_PASSWORD="<password>"
```

```shell
export NAMESPACE="arcloud"
```
