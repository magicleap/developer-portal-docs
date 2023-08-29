:::caution
When running on Linux/MacOS using VirtualBox from a user account, ports below `1024` will not be forwarded by default
due to [lack of permissions][vbox-nat-limitations].
:::

The **VirtualBox** binary has the `setuid` bit set, so setting capabilities on it will not work. Instead, it provides an
override which allows forwarding the privileged ports.

When running **VirtualBox** in headless mode, set the following environment variable before starting the virtual machine:

```shell
export VBOX_HARD_CAP_NET_BIND_SERVICE=1
```

When using the graphical interface, add the above line to one of your user profile files (`~/.profile`,
`~/.bash_profile` or `~/.zprofile` depending on your configuration), so it is set on login. Make sure to log out and log
in again for the changes to take effect.

Alternatively, install `socat` and run it from the `root` account to forward traffic on these ports to the virtual
machine:

- When using an IP address and/or HTTP, only:

  ```shell
  sudo socat TCP-LISTEN:80,fork TCP:localhost:8080
  ```

- When using a domain with a TLS certificate:

  ```shell
  sudo socat TCP-LISTEN:443,fork TCP:localhost:8443
  ```

:::note
Make sure the `socat` process is running while you are using the image.
:::

[vbox-nat-limitations]: https://www.virtualbox.org/manual/ch06.html#nat-limitations

