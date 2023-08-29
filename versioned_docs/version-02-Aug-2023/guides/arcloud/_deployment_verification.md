Once the AR Cloud deployment completes, the deployment script will print out the cluster information similar to:

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

## Log in to the Enterprise Console

1. Open the **Enterprise Console** URL (`http://<DOMAIN>/`) in a browser
1. Enter the credentials for **Enterprise Web** provided by the deployment script
1. Verify the successful login

