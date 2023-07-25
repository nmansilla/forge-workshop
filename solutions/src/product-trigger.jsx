import api, { route } from "@forge/api";


export async function run(event, context) {
	console.log('Hello World from Jira product trigger!');
    console.log('Event - ' + JSON.stringify(event))
    console.log('Context - ' + JSON.stringify(context))
    return true;
}

export async function updateStatus(event, context) {
    // return true

    const issueKey = event.issue.key

    // Get 'in progress' transition
    const response = await api.asApp().requestJira(route`/rest/api/3/issue/${issueKey}/transitions`, {
        headers: {
            'Accept': 'application/json'
        }
    });

    const transitionsData = await response.json()
    
    const inProgressStatusId = transitionsData.transitions.find(transition => transition.name === 'In Progress').id
    
    const bodyData = `{
        "transition": {
            "id": "${inProgressStatusId}"
        }
    }`
    
    // *** CHALLENGE 2 - Triggers ***
    // ===================

    // TASK - Add the API to transition the issue to 'in progress' status
    // HINT - https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-transitions-post

    await api.asApp().requestJira(route`/rest/api/3/issue/${issueKey}/transitions`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: bodyData
    });

    // ===================
    // *** END OF CHALLENGE ***
      
}


