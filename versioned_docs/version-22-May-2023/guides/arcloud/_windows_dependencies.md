#### Install the Windows Subsystem for Linux

:::caution WSL 2 Notice
All following installation instructions are assumed to be running inside an activated Windows Subsystem for Linux 2 environment (Debian or Ubuntu). See the following information about installing WSL 2:

[Install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install).
:::

```shell
wsl --install -d Ubuntu
```

Launch the shell of the default WSL distribution:

```shell
wsl
```

:::note WSL Performance
Disk IO from mounted paths such as `/mnt/c` are known to be very slow, for this reason it is recommended to execute commands from the User's home directory.
:::

