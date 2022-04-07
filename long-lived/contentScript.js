console.log('this is content script working ');

var port = chrome.runtime.connect({name: "knockknock"});//open the connection with name knockknock  

port.postMessage({joke: "Knock knock"});

port.onMessage.addListener(function(msg) {
    
    console.log('#cs - message received  ',msg);
    console.log('#cs - message received  ',msg);

  if (msg.question === "Who's there?")
    port.postMessage({answer: "Madame"});
  else if (msg.question === "Madame who?")
    port.postMessage({answer: "Madame... Bovary"});
});