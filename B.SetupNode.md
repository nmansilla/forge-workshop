
# Setting up Docker and Node.js

## Install Docker

Forge requires Docker version 17.03 or later. To download Docker, visit [get Docker](https://docs.docker.com/get-docker/).

Once Docker is installed and running, check your Docker version by running the following in a shell/terminal window:

```
docker --version
```

### Docker on Linux

Forge documentation doesn't include the sudo command when calling Docker. You should read [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/) for more important security considerations and steps to configure your system.

### Docker on Windows 10

It is recommended you use the latest Docker Desktop WSL 2 backend since this avoids file system issues when working with the Forge CLI. See the [Windows 10 requirements](https://docs.microsoft.com/en-us/windows/wsl/install-win10#requirements) for installing and running Windows Subsystem for Linux 2.

If you must use the legacy Hyper-V backend, you need to configure file sharing in the resources settings. Add the parent path that will contain all of your Forge apps to avoid needing to add each app. For example:

```
C:\Users\mia\forge-apps
```

See the Docker [Resources](https://docs.docker.com/docker-for-windows/#resources) page for more detail.

## Install Node.js

Forge development requires a fully supported [LTS release](https://nodejs.org/en/about/releases/) of Node.js installed.

### Install Node.js on macOS

Forge developers on macOS are encouraged to use Node Version Manager (nvm) to configure the environment:

1. Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).
2. Select the latest Node.js LTS release by running the following in the terminal:

```
nvm install --lts
nvm use --lts
```

### Install Node.js on Linux

Forge developers on Linux should use the OS package manager and Node Version Manager (nvm) to configure the environment.

1. Install Node.js via package manager. See the [Node.js package manager](https://nodejs.org/en/download/package-manager/) documentation for a list of supported platforms.
2. Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).
3. Select the latest Node.js LTS release by running the following in the terminal:

```
nvm install --lts
nvm use --lts
```

### Install Node.js on Windows 10

To install an [LTS release](https://nodejs.org/en/about/releases/) of Node.js on Windows 10:

1. Download the LTS installer from [Node.js](https://nodejs.org/en/download/).
2. Install the package.

