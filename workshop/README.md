# DevDay 2023 - Customising Jira with Forge

## Introduction to Forge Platform

Atlassian Forge is a serverless platform that allows developers to focus on building amazing functionalities for Jira without worrying about infrastructure. Atlassian provides robust security measures to protect user data, and Forge offers a variety of ways to customise apps, including UI changes, automations, and data storage.

## Forge Fundamentals

**Environment setup** - [https://go.atlassian.com/forge-getting-started](https://go.atlassian.com/forge-getting-started)

### Create Hello world app:

1. Create a new Forge app from terminal:

```jsx
forge create
```

2. Select template **jira-issue-panel-ui-kit**
3. Deploy the app by running:

```jsx
forge deploy
```

4. Install the app in your site by running:

```jsx
forge install
```

### Fundamentals

[CLI](https://go.atlassian.com/forge-cli) - Forge CLI is the command line interface for building and deploying Forge apps.

[Jira Modules](https://go.atlassian.com/forge-jira-modules) - Modules describe how Forge apps extend and interact with Atlassian products.

[Permissions](https://go.atlassian.com/forge-permissions) - Permissions controls your app's access to remote resources.

[Manifest](https://developer.atlassian.com/platform/forge/manifest-reference/) - The manifest is a YAML file that describes your Forge app. It includes the modules your app wants to use, the permissions required by your app, and other information about your app.

[Debugging](https://developer.atlassian.com/platform/forge/debugging/#debugging) - ***forge tunnel —debug***

[App Deployment](https://go.atlassian.com/forge-environments) - Forge automatically creates development, staging and production environment to deploy your apps.

[Environment variables](https://go.atlassian.com/forge-environments) - Key-value pairs you can manage via the Forge CLI variables commands for different environments.

[Developer Console](https://developer.atlassian.com/console/myapps/) - All the tools necessary to manage your apps, monitor their performance, check the logs and ability to distribute your app.

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

TBD

### Bonus:

- [Async API](https://developer.atlassian.com/platform/forge/runtime-reference/async-events-api/#async-events-api)
- [Integration with third party APIs](https://go.atlassian.com/forge-giphy)

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Develop your app by running `forge tunnel` to proxy invocations locally
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

Thanks for attending the session. Please do share the feedback. 🙂

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.

## Presenter

Anmol Agrawal

Developer Advocate, Atlassian

[https://www.linkedin.com/in/agrawalanmol/](https://www.linkedin.com/in/agrawalanmol/)
