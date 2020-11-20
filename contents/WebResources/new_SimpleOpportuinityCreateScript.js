/*
* This Sample Code is provided for the purpose of illustration only and is not intended to be used in a production environment.  
* THIS SAMPLE CODE AND ANY RELATED INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, 
* INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.  We grant You 
* a nonexclusive, royalty-free right to use and modify the Sample Code and to reproduce and distribute the object code form of t
* he Sample Code, provided that You agree: (i) to not use Our name, logo, or trademarks to market Your software product in which 
* the Sample Code is embedded; (ii) to include a valid copyright notice on Your software product in which the Sample Code is 
* embedded; and (iii) to indemnify, hold harmless, and defend Us and Our suppliers from and against any claims or lawsuits, 
* including attorneys� fees, that arise or result from the use or distribution of the Sample Code.
* 
* Please note: None of the conditions outlined in the disclaimer above will supersede the terms and conditions contained within 
* the Premier Customer Services Description.
* 
* Extended from CRM SDK References: 
* https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
* https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openalertdialog 
*/

// Open an HTML Page
"use strict";
var openOppHtmlPage = function () {
    var  pageInput = {
            pageType: "webresource",
            webresourceName: "new_SimpleOpportunityCreate.html",
            //data: 
        };

    var navigationOptions = {
        target: 2,
        width: 680,
        height: 370,
        position: 1 
    };

    Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
        function success() {
            // opened new html sucessfully
        },

        function error(e) {
            Xrm.Navigation.openAlertDialog("Problem Opening the HTML Page");
        });
}
