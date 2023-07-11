
# Setting up Docker

Forge requires Docker version 17.03 or later. To download Docker, visit [get Docker](https://docs.docker.com/get-docker/).

Once Docker is installed and running, check your Docker version by running the following in a shell/terminal window:

```
docker --version
```

## Install Docker on Linux

Forge documentation doesn't include the sudo command when calling Docker. You should read [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/) for more important security considerations and steps to configure your system.

## Install Docker on Windows 10

It is recommended you use the latest Docker Desktop WSL 2 backend since this avoids file system issues when working with the Forge CLI. See the [Windows 10 requirements](https://docs.microsoft.com/en-us/windows/wsl/install-win10#requirements) for installing and running Windows Subsystem for Linux 2.

If you must use the legacy Hyper-V backend, you need to configure file sharing in the resources settings. Add the parent path that will contain all of your Forge apps to avoid needing to add each app. For example:

```
C:\Users\mia\forge-apps
```

See the Docker [Resources](https://docs.docker.com/docker-for-windows/#resources) page for more detail.

