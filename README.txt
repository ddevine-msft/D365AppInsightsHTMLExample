DESCRIPTION
=============
The is intended to be an example implementation of JavaScript Snippet based usage for Application Insights
	Reference: https://docs.microsoft.com/en-us/azure/azure-monitor/app/javascript#snippet-based-setup

The solution creates a Model Drive App named “App Insights Example App”. 
The App has only Opportunity Entity with a customized with "Opp Wizard" button. 
The "Opp Wizard" button opens a simple custom HTML Web Resource page used to create a new Opportunity record. 
Application Insights TrackEvent and TrackTrace monitoring methods implemented on the HTML Page.

IMPORTANT CHANGE NEEDED: 
Line 12 of WebResources\new_AppInsightsSnippet.js will need to be updating "YOUR_INSTRUMENTATION_KEY_GOES_HERE" with the instrumentationKey from your application insights resource -> https://docs.microsoft.com/en-us/azure/azure-monitor/app/create-new-resource

CONTENTS
=============
/solutions - Managed and unmanaged solutions with the example
/contents  - Extracted solution SolutionPackager 
		Reference: https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/compress-extract-solution-file-solutionpackager
/queries   - Examples queries for viewing results in app insights for TrackEvent, TrackTrace and Exceptions


Reference :
              https://docs.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#trackevent
              Calls to TrackEvent show up in the "customEvents" table

              https://docs.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#tracktrace
              Calls to TrackTrace show up in the "traces" table

              https://docs.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#trackexception
              calls to TrackException show up in the "exceptions" table.
