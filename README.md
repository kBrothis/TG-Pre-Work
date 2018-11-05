# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

When I hit the link, my computer (the client) is requesting information from the server to deliver to my browser. My browser connects to the server and the server provides my browser with the information to display.

## From start to finish how does that data reach you to be rendered in the browser?

When I put the URL into my browser, my browser looks up the URL's IP address on the Domain Name System to find the server where the information is housed on. Once my browser is able to contact the IP address, the server will retrieve the requested document and return an HTTP response. The response contains the document and success status.

## What code is rendered in the browser?

HTML

## What is the server-side code’s main function?

The server-side code's main function is to decide which content to return to the browser when it receive's a request. (i.e. validating submitted data, retrieving data from databases, sending the correct data to the client, etc.)

## What is the client-side code’s main function?

The client-side code's main function is to improve the appearance and behavior of the rendered page.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?
one

## How many instances of the server-side code are available at any given time?
There's really no limit to the number of instances that are available in the server-side code. It just depends on what the server-side code permits for the client to see/retrieve.

## What is runtime?

Runtime is period in which a program is running. It starts when the program is executed and ends when the program is closed.

## How many instances of the the databases connected to the server application are created?
As many as the number of times the database is accessed by a client. Single instances are used the most.
