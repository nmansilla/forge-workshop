# Forge Workshop

## Introduction

This workshop will help you get started with Forge so you can customise and extend Atlassian products either for your own use, or for selling in the [Atlassian Marketplace](marketplace.atlassian.com).

![setup visualisation](/images/overview.png | width=300)


## Setup

<img align="right" width="100" src="/images/setup-steps.png">

During this section, you will be performing the following setup steps:

![setup visualisation](/images/setup-steps.png | width=300)


### Create an Atlassian account

You need an Atlassian account in order to develop Forge apps. If you don't have an Atlassian account already, you can create one by visiting https://id.atlassian.com/ and clicking the Create an account link.


### Setup developer basics

If you haven't already, you'll probably want to install the following development tools:

1. [Git](https://git-scm.com/)
2. A Javascript friendly IDE such as [Visual Studio Code](https://code.visualstudio.com/).


### Setup Docker

To setup Docker, follow the instructions in [A.SetupDocker.md](/A.SetupDocker.md).


### Setup Node.js

To setup Node.js, follow the instructions in [B.SetupNode.md](/B.SetupNode.md).


### Setup the Forge CLI

To setup the Forge CLI, follow the instructions in [C.SetupTheForgeCLI.md](/C.SetupTheForgeCLI.md).


### Create an Atlassian cloud developer site

Creating an Atlassian cloud developer site allows you to install and test your app with Confluence and Jira products set up for you. You can install your app to multiple Atlassian sites however, app data won't be shared between separate Atlassian sites, products, or Forge environments.

1. Go to http://go.atlassian.com/cloud-dev and create a site using the email address associated with your Atlassian account.
2. Once your site is ready, log in and complete the setup wizard.


## Jira Hello World

Now that you have a Forge development environment, it's time to create your first app. 

1. In a terminal or shell, change to a directory that you want your Forge app to be located under.
2. Run `forge create`.

![forge create command](/images/hw-forge-create.png | width=500)




