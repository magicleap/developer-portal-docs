:::note Linux Notice
Unless otherwise specified, these instructions are assumed to be running inside a Linux environment with the following
commands available:

* `curl`
* `sed`
* `envsubst`
* `ssh`
* `docker`
* `kubectl`
* `helm`

In case you are running **Windows**, see the following information about installing WSL 2:

[Install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install).

In case you are running **MacOS**, make sure to adjust `sed` calls that modify files in-place and add an empty string after
the `-i` flag:

```shell
sed -i '' 's/from/to/' file
```
:::
