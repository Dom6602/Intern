// Create the HTML elements
var html = document.createElement("html");
var head = document.createElement("head");
var title = document.createElement("title");
var body = document.createElement("body");
var h1 = document.createElement("h1");
var paragraph = document.createElement("p");
var link = document.createElement("a");

// Set the text content for the elements
title.textContent = "Simple HTML Page using HTML DOM";
h1.textContent = "Welcome";
paragraph.textContent = "This is a simple HTML page created using pure JavaScript.";
link.textContent = "Link";
h1.style.textAlign ="center"
paragraph.style.textAlign ="center"

// Set the href attribute for the link
link.setAttribute("href", "darkdevil00.000webhostapp.com");

// Append the elements to their respective parent elements
head.appendChild(title);
body.appendChild(h1);
body.appendChild(paragraph);
body.appendChild(link);

// Append the head and body elements to the HTML element
html.appendChild(head);
html.appendChild(body);

// Set the created HTML element as the document's root element
document.documentElement = html;

// Append the HTML element to the document's body
document.body.appendChild(html);
