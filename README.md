# Forge Workshop

## Introduction

This workshop will help you get started with Forge so you can customise and extend Atlassian products either for your own use, or for selling in the [Atlassian Marketplace](marketplace.atlassian.com).

<p align="center">
  <img width="500" alt="An illustration of an overview of the Forge workshop" src="/images/overview.png">
</p>


## Setup

During this section, you will be performing the following setup steps:

<p align="center">
  <img width="500" alt="An illustration of the setup steps of the Forge workshop" src="/images/setup-steps.png">
</p>

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

## Fundamentals of Forge

[CLI](https://go.atlassian.com/forge-cli) - Forge CLI is the command line interface for building and deploying Forge apps.

[Jira Modules](https://go.atlassian.com/forge-jira-modules) - Modules describe how Forge apps extend and interact with Atlassian products.

[Permissions](https://go.atlassian.com/forge-permissions) - Permissions controls your app's access to remote resources.

[Manifest](https://developer.atlassian.com/platform/forge/manifest-reference/) - The manifest is a YAML file that describes your Forge app. It includes theÂ modulesÂ your app wants to use, theÂ permissionsÂ required by your app, and other information about your app.

[App Deployment](https://go.atlassian.com/forge-environments) - Forge automatically creates development, staging and production environment to deploy your apps.

[Environment variables](https://go.atlassian.com/forge-environments) - Key-value pairs you can manage via theÂ Forge CLI variables commands for different environments.

[Tunneling](https://developer.atlassian.com/platform/forge/tunneling/) - Tunneling runs your app code locally on your machine via the Forge CLI.


## Jira Hello World

### Creating the app and installing it in Jira

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
  <img width="900" alt="A screen recording of the app issue panel selection" src="/images/hw-open-issue-panel.gif">
</p>


:muscle: You've just created and installed an app in a few minutes. 

:tada: And you didn't need to set up any hosting.


### How does it work?

Your app has two parts:

* Backend functionality that runs on Atlaassian's functions as a service (FaaS)
* A front end that renders the *Issue context panel*.

You can find the code for these two parts here:

<p align="center">
  <img width="300" alt="A screenshot showing where code is in a Forge app" src="/images/hw-code-location.png">
</p>

TBD (more explaining to do)


## Hands-on Coding Sessions

### Exercise #1 - Customising UI

1. [UI kit](https://developer.atlassian.com/platform/forge/ui-kit-components/)
    1. Components help build UI of your app.
    2. Components are described using declarative markup language.
    3. Follows Atlassian Design guidelines out of the box.
2. [Custom UI](https://developer.atlassian.com/platform/forge/custom-ui/iframe/)
    1. Supports custom built UI using iframes
    2. Use your own HTML, CSS, JS, icons, images
    3. Forge hosts your static resources

### Exercise #2 - Triggers

1. [Product trigger](https://developer.atlassian.com/platform/forge/manifest-reference/modules/trigger/) - Product trigger invokes a function when a product event is fired.
    - [Jira events](https://go.atlassian.com/jira-events)
2. [Scheduled trigger](https://developer.atlassian.com/platform/forge/manifest-reference/modules/scheduled-trigger/) - Scheduled trigger repeatedly invokes a function on a scheduled interval.
3. [Web trigger](https://developer.atlassian.com/platform/forge/manifest-reference/modules/web-trigger/#web-trigger) - Web trigger invokes a function as the result of an HTTP request.

### Exercise #3 - Storage

1. [Storage API](https://developer.atlassian.com/platform/forge/storage/) - The app storage API is a key-value storage API, which enables your app to store data for specific Jira or Confluence sites. The app storage API stores data partitioned by product and site, and is accessible only to your app.
2. [Entity Properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/) - Entity properties enable apps to add key-value stores to Jira entities, such as issues or projects. 


## Developer console

TBD (do a little tour of Developer Console features centred around the app we created)

### Useful references

- [Async API](https://developer.atlassian.com/platform/forge/runtime-reference/async-events-api/#async-events-api)
- [Integration with third party APIs](https://go.atlassian.com/forge-giphy)
- [Developer Console](https://developer.atlassian.com/console/myapps/) - All the tools necessary to manage your apps, monitor their performance, check the logs and ability to distribute your app.
- [Debugging](https://developer.atlassian.com/platform/forge/debugging/#debugging) - ***forge tunnel â€”debug***
- [Example Forge apps for Jira](https://developer.atlassian.com/platform/forge/example-apps-jira/)
- [Tutorials and guides](https://developer.atlassian.com/platform/forge/tutorials-and-guides/)

### Useful CLI commands
- Use the `forge deploy` command when you want to persist code changes into the cloud.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.
- Use the `forge upgrade` command to push a new version change to existing installations (ex: when you make changes to manifest, such as permissions/scopes)
- Use the `forge tunnel` command to quickly test code changes in the `DEVELOPMENT` environment (app runs locally is proxied)
