console.log('pop extension work');
//this will use the same port
//but different name
const btn = document.querySelector('#button');
console.log('button- ',button)
const toggle = document.querySelector('#extension-checkebox');
console.log('toggel- ',toggle)
const port = chrome.runtime.connect({name: "pop"});
console.log('my port- ',port)

port.postMessage({eventName:'extension-toggle',toggle});

port.onMessage.addListener(function(response){
 console.log('REsponse ',response)
})
