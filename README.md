# RUPG-Master (Random-User-Page-Generator)

## Introduction

In this client-side project, we used external API's to generate a page of a random user.

![Alt text](/images/generate_button.png?raw=true "Optional Title")

# Features

- Display details of a random user using external API's.
  The details of the user are:

  - name
  - address
  - profile picture
  - Favorite Kanye west quote
  - Favorite pokemon
  - About section, which is nonsence about meat.

- LocalStorage: We allowed the user to save one or more random users in the local storage, and then display it again:

save button -> save to local storage
![Alt text](/images/save_button.png?raw=true "Optional Title")

load users button -> load from Local storage
![Alt text](/images/load_button.png?raw=true "Optional Title")

## Design

- We used type script to create a class for the user.
- We used seperate files for each API call for clean code purposes.
- Asynchronous code - using async-await method we called to external API's, which led to event-loop mechanizm of JavaScript.
- MVC - used this design pattern for simplicity. We have one render function inside renderer.ts to render all the page.
- Handlebars - to do seperation of concerns from HTML and JS.
