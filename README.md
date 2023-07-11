# Forge Workshop

## Introduction

<img align="right" width="500" alt="An illustration of an overview of the Forge workshop" src="/images/overview.png">

This workshop will help you get started with Forge so you can customise and extend Atlassian products either for your own use, or for selling in the [Atlassian Marketplace](marketplace.atlassian.com).

<br clear="both"/>


## Setup

<img align="right" width="500" alt="An illustration of the setup steps of the Forge workshop" src="/images/setup-steps.png">

During this section, you will be performing the following setup steps:

<br clear="both"/>


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

<p align="center">
  <img width="500" alt="A screenshot of the forge create command" src="/images/hw-forge-create.png">
</p>

3. Enter a name for your app using the convention of lower case letters and dashes.
4. Select the `UI Kit 2 (Preview)` as the category.
5. Select `jira-issue-panel` as the template.

<p align="center">
  <img width="500" alt="A screenshot of the forge create command" src="/images/hw-forge-create-2.png">
</p>

6. Wait for the app to be created. 
7. Change into your app's directory. e.g. `cd forge-workshop-hello`
8. Run `npm install`.
9. If prompted, run `npm audit fix` to fix vulnerabiolities.
10. Run `forge deploy` to deploy the app.

<p align="center">
  <img width="500" alt="A screenshot of the forge deploy command" src="/images/hw-forge-deploy.png">
</p>

11. Run `forge install` to install the app. 
12. Select Jira as the product.
13. Enter the URL of your Atlassian developer site which you created previously.

<p align="center">
  <img width="500" alt="A screenshot of the forge install command" src="/images/hw-forge-install.png">
</p>

14. Enter `y` when asked if **Are you sure you want to continue installing the app?**.
15. Visit your Atlassian developer site in a browser.
16. If you haven;t got any projects, create one by selecting *Create project* from the *Projects* menu.
17. If you don't have any issues in your project, create one by clicking the *Create* button.
18. Visit an issue in your project.
19. Select your app's issue panel from the menu and check it renders as follows:

<p align="center">
  <img width="900" alt="A scrren recording of the app issue panel selection" src="/images/hw-open-issue-panel.gif">
</p>



## Developer Console

TBD

