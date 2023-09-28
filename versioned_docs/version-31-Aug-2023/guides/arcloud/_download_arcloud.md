Download the AR Cloud Public Release from GitHub:

```shell showLineNumbers
LATEST_RELEASE=$(curl -sSLH 'Accept: application/json' https://github.com/magicleap/arcloud/releases/latest)
LATEST_VERSION=$(echo $LATEST_RELEASE | sed -e 's/.*"tag_name":"\([^"]*\)".*/\1/')
ARTIFACT_URL="https://github.com/magicleap/arcloud/archive/refs/tags/$LATEST_VERSION.tar.gz"
curl -sSLC - $ARTIFACT_URL | tar -xz
```

```shell
cd arcloud-$LATEST_VERSION
```

