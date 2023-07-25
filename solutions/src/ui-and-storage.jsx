import ForgeUI, { render, ProjectPage, Fragment, Text, useState, useAction, useProductContext, Heading } from '@forge/ui';
import api, { route } from '@forge/api';
import { Form, Select, Option } from "@forge/ui";
import {Macro, Table, Head, Cell, Row } from '@forge/ui';
import { storage, startsWith } from '@forge/api';

const Issue = props => {
  return (
    // 1. Components - An element that describes part of your app’s interface. Example - Text, Heading, Table.
    <Fragment>
      <Text>Issue key: {props.issueKey}</Text>
      <Text>Issue summary: {props.summary}</Text>
    </Fragment>
  );
};

const TodoApp = (props) => (
  <Table>
    <Head>
      <Cell>
        <Text>Name</Text>
      </Cell>
      <Cell>
        <Text>Status</Text>
      </Cell>
    </Head>
    {props.data.results.map(todo => (
      <Row>
        <Cell>
          <Text>{todo.value.name}</Text>
        </Cell>
        <Cell>
          <Text>{todo.value.status}</Text>
        </Cell>
      </Row>
    ))}
  </Table>
);

const App = () => {

   const [formState, setFormState] = useState(undefined);
   const context = useProductContext();
   const projectKey = context.platformContext.projectKey;

   // 2. Hooks - Special functions that enable you to update and use the state of your app. 
   //            The state is a value that the component remembers and can be updated. Example - useState().

   const [issues] = useState(async () => {
       return await getIssues(projectKey);
   });

   const [todoData] = useState(async () => await fetchStoredData(context.contentId));

    const onSubmitFunction = async (formData) => {
        const issueData = await getIssue(formData.selectedIssue);
        setFormState(issueData)
    };

    return (
        <Fragment>
            <Heading size="large">Customise UI using UI Kit</Heading>
            <Heading size="large"></Heading>
            <Heading size="medium">Issue list:</Heading>
            <Heading size="small"></Heading>

            {issues.map(issue =>
              <Issue issueKey={issue.key} summary={issue.summary} />
            )}

            {/* 3. Event handler - functions that describe what to do when the user interacts with them. Example - onSubmit */}

            <Form onSubmit={onSubmitFunction}>
                <Select label="Select issue" name="selectedIssue" isRequired={true}>
                
                {/* *** CHALLENGE 1 - Customise UI *** */}
                {/* =================== */}
                
                {/* TASK - Add the 'Option' UI element whose value will be individual issue key. */}
                {/* HINT - https://developer.atlassian.com/platform/forge/ui-kit-components/form/#select */}

                    {issues.map(issue =>
                        <Option label={issue.key} value={issue.key} />
                    )}

                {/* =================== */}
                {/* *** END OF CHALLENGE *** */}

                </Select>
            </Form>
            
            <Heading size="small"></Heading>
            {formState && <Issue issueKey={formState.key} summary={formState.fields.summary} />}
            
            <Heading size="large">Todo app using Storage API</Heading>
            <Heading size="large"></Heading>

            <Macro app={<TodoApp data={todoData}/>} />
        </Fragment>
    );
};


export const run = render(
  <ProjectPage>
      <App />
  </ProjectPage>
);


// *** HELPERS ***

const fetchStoredData = async (contentId) => {

	await storage.set('todo-1', {name: 'Get groceries', status: 'In Progress'});
	await storage.set('todo-2', {name: 'Pay bills', status: 'Completed'});
  await storage.set('book-1', {name: 'Harry Potter', status: 'To read'});

  // const data = await storage.query().getMany()

  // *** CHALLENGE 3 - Storage API ***
  // ===================

  // TASK - Using Storage API, fetch values only of 'todo' type. That means, values where 'key' starts with 'todo'.
  // HINT - https://developer.atlassian.com/platform/forge/runtime-reference/storage-api-query/

  const data = await storage.query().where('key', startsWith('todo')).getMany();

  // ===================
  // *** END OF CHALLENGE ***
  
  console.log("Storage API Data - " + JSON.stringify(data));
  
  return data;

};

const getIssue = async (issueKey) => {
  
  // *** CHALLENGE 1 - Customise UI ***
  // ===================

  // TASK - Add the API to get an issue.
  // HINT - https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-get

    const issueData = await api.asUser().requestJira(route`/rest/api/3/issue/${issueKey}`, {
        headers: {
            'Accept': 'application/json'
        }
    });

    const responseData = await issueData.json();

    console.log("getIssue data - " + JSON.stringify(responseData))

    return responseData;
}

const getIssues = async (projectKey) => {
    const returnData = new Array();
    const issueData = await api.asUser().requestJira(route`/rest/api/3/search?jql=project=${projectKey}`, {
        headers: {
            'Accept': 'application/json'
        }
    });

    const responseData = await issueData.json();

    responseData.issues.forEach(element => {
        returnData.push({key: element.key, summary: element.fields.summary});
    });

    console.log("getIssues data - " + JSON.stringify(returnData))

    return returnData;
}


