The example is intended to be an implementation of JavaScript Snippet based usage for Application Insights
	Reference: https://docs.microsoft.com/en-us/azure/azure-monitor/app/javascript#snippet-based-setup

The solution adds an "Opp Wizard" button to the Opportunity UCI entity ribbon. 
The button opens a simple custom HTML page for creating a opportunity. 
There are a couple monitoring methods implemented on the HTML Page

IMPORTANT: Line 12 of web resource new_AppInsightsSnippet.js will need to be modified by adding instrumentationKey from your application insights resource -> https://docs.microsoft.com/en-us/azure/azure-monitor/app/create-new-resource

Reference :
              https://docs.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#trackevent
              Calls to TrackEvent show up in the "customEvents" table

              https://docs.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#tracktrace
              Calls to TrackTrace show up in the "traces" table

              https://docs.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#trackexception
              calls to trackException show up in the "exceptions" table.
