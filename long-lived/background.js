console.log('this is background ');

chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name === "knockknock");
    console.log('port name ',port.name);
    port.onMessage.addListener(function(msg) {
        console.log('#wk- message received  ',msg);
      if (msg.joke === "Knock knock")
        port.postMessage({question: "Who's there?"});
      else if (msg.answer === "Madame")
        port.postMessage({question: "Madame who?"});
      else if (msg.answer === "Madame... Bovary")
        port.postMessage({question: "I don't get it."});
    });
    port.onDisconnect.addListener(function(port) {
      console.log('port was disconnected ',port)
    })
  });