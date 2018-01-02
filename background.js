//var eventList = ['onBeforeNavigate', 'onCreatedNavigationTarget', 'onCommitted'];


const kindleUrl = "https://read.amazon.com/";
var currentTabQueryInfo = {
  active: true,
  currentWindow: true
};

chrome.webNavigation.onCommitted.addListener(function(data) {
    if (typeof data){
      let frame = data;
      if (frame.transitionType === "link" || frame.transitionType === "typed"){
        console.log(frame);
        chrome.tabs.query(currentTabQueryInfo, function (tab) {
          chrome.tabs.update(tab.id, {url: kindleUrl});
        });
      }
        
    }
}, {url: [{hostSuffix: 'facebook.com'},
          {hostSuffix: 'google.com.au'}]});

// chrome.webNavigation['onCommitted'].addListener(function(data) {
//   if (typeof data){
//     let frame = data;
//     console.log(frame.transitionType, frame.url);
//     // Check trasitionType (should be a user initiated event)
//     if (frame.transitionType === "link" || frame.transitionType === "typed"){
      
//       // Check the URL for one of the social sites that should trigger the redirect
//       if (frame.url.includes("facebook.com")) {
//         chrome.tabs.query(currentTabQueryInfo, (tabs) => {
//           var tab = tabs[0];
//           var url = tab.url;
//           callback(url);
//         });
//       }
//         window.load("https://read.amazon.com/");
//     }
//     //console.log(chrome.i18n.getMessage('inHandler'), e, data);
//   }
    
//   else
//     console.error(chrome.i18n.getMessage('inHandlerError'), e);
// });