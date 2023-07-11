
# Setting up the Forge CLI

## Install the Forge CLI

Install the Forge CLI using npm. You’ll install the CLI globally so that the commands can be run across your system.

1. Install the Forge CLI globally by running:

```
npm install -g @forge/cli
```

2. Verify that the CLI is installed correctly by running:

```
forge --version
```

You should see a version number reported in the terminal. If a version number is not shown then the installation failed. Repeat step 1 and look for errors reported in the terminal.

With the CLI installed, you can view the complete list of Forge commands by running `forge --help`.


## Create an Atlassian API token

The Forge CLI needs to use you Atlassian account credentials to perform operations. This means you need to create an API token as follows:

1. Go to https://id.atlassian.com/manage/api-tokens.
2. Click Create API token.
3. Enter a label to describe your API token. For example, forge-api-token.
4. Click Create.
5. Click Copy to clipboard.
6. Don't close the dialog because you will lose access to the token.


## Log in with an Atlassian API token using keychain or libsecret

### macOS and Linux

On macOS, Forge uses the built in keychain tool. 

On Linux, you'll need to install [libsecret](https://wiki.gnome.org/Projects/Libsecret).

With the API token created and in your clipboard, do the following:

1. Start the process of logging into the Forge CLI by running:

```
forge login
```

2. You'll be asked whether to allow Forge to collect usage analytics data. Answering yes allows Atlassian to monitor and improve Forge's overall performance and reliability. You can also read [Atlassian's Privacy Policy](https://www.atlassian.com/legal/privacy-policy).
3. Enter the email address associated with your Atlassian account.
4. Enter your Atlassian API token.

Once logged into the Forge CLI:

1. Close the dialog showing the API token.


### Windows

Where keychain and libsecret are not supported, you can use the environment variables `FORGE_EMAIL` and `FORGE_API_TOKEN` to store your credentials.

```
read FORGE_EMAIL
# Enter email
read -s FORGE_API_TOKEN
# Enter API token (will not be displayed)
export FORGE_EMAIL FORGE_API_TOKEN
```
