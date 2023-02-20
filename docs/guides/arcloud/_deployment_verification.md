Once the ARCloud deployment completes, the deployment script will print out a cluster information similar to:

```shell showLineNumbers
------------------------------
Cluster Installation (arcloud)
------------------------------

Enterprise Web:
--------------

http://<DOMAIN>/

Username: aradmin
Password: <base64-encoded string>

Keycloak:
---------

http://<DOMAIN>/auth/

Username: admin
Password: <base64-encoded string>

MinIO:
------

kubectl -n arcloud port-forward svc/minio 8082:81
http://127.0.0.1:8082/

Username: <base64-encoded string>
Password: <base64-encoded string>

PostgreSQL:
------

kubectl -n arcloud port-forward svc/postgresql 5432:5432
psql -h 127.0.0.1 -p 5432 -U postgres -W

Username: postgres
Password: <base64-encoded string>

Network:
--------
NAMESPACE      NAME                   TYPE           CLUSTER-IP        EXTERNAL-IP PORT(S)                                                        AGE
istio-system   istio-ingressgateway   LoadBalancer   <IPv4>   <IPv4>   80:31456/TCP,443:32737/TCP,15021:31254/TCP,1883:30231/TCP,8883:32740/TCP    1d
```

## Log in to the Enterprise Console Web View

1. Open the **Enterprise Web** url (`http://<DOMAIN>/`) in a browser
2. Enter the provided credentials for **Enterprise Web**
3. Verify the successful login

## Register a ML2 device

### Web

Perform the following from the web-based console:

1. Log in to the **Enterprise Web** view
2. Select **Devices** from the top-right menu options
3. Select **Devices** from the dropdown menu options
4. Click the **Configure Device** button

### ML2

Perform the following from within your ML2 device:

1. Open **Settings** / **Setup ARCloud**
2. Scan the displayed QR code

**Enterprise Web** should list the registered device.
