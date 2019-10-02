var h1 = document.getElementsByTagName("H1")[0];   // Get the first <h1> element in the document
var select = document.querySelector('#main')	   // Get the element with the ID
var select = document.getElementById('main')	   // Same as query Selector but focus is on the ID
var att = document.createAttribute("class");       // Create a "class" attribute
att.value = "democlass";                           // Set the value of the class attribute
h1.setAttributeNode(att);                          // Add an attribute to <h1>