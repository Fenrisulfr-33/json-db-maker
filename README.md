## JSON to Object to JSON file converter/crator

---

#### What is this?

  - This is a customer program I am writing to help me scrap APIs for data I want.
  - Then I convert that data into a better formatted object for a data modeling class I am taking for MongoDB.
  - Then I plane to upload these jsons into mongoDB and create a clean data model with serverless functions and possibly, an API!

---

#### What can you use this on?

  - An JSON object you wish to pull data from.
    - Maybe you have a list of objects and you want to mimic the data but you want to cut things out or move them into different data types
    - Maybe you want an object to be an array or vice verse.
    - Maybe you just want a clean way to create a list of objects into json without having to do everything manually.

---

#### How do I get started already Jeez?!

Calm down, I know you're excitied like I was

  - The file *og-jsons* were the original JSON files I wanted to convert into something different
  - From there I created associated .js file like 00-moves_rewrite.js to re write the og-moves.json

  So in order how you should do this is simplet 

  1. git clone <this repo>, and run 'npm install' inside the new folder created
  2. Read the 00-moves_rewrite.js or 00-pokedex_rewrite.js, these simply convert and array of objects in JSON and creates a new arrays of custom objects and automatically create a JSON file upon completion. ***IF, you do not have any errors***
  3.  To run simple run the command 'node <insert your rewrite script here>
      - The 01 .js files are a bit more complex however the basics on what I am doing here are the same.
  4. Learn the 01-<whatever>.js files, Im taking the objects we created from the OG files to the 00 files and now I am adding upon my already new modeled object data but, now I bring in an API call to really scrap for data.
  5. If you get this far you will notice when you run the 00-pokedex_rewrite.js there are alot of console.log statements. No this is not on accident.
      - FOr some reason when you make the API request on their website and get their data it is different then what was coming in on my API request. 
      - It is a slim but very possible chance they updated their API while I was doing this because for a couple hour my code works then shit just got wild.
      - Basically I am missing a bunch of MOVES! so I wanted to see what different ways pokemon could learn moves so I could figure out how to update my data model.
      - Now that I see my errors I am going to create the 01-moves_rewrite.js and scrap there API for everything I can find and fill in moves after 619.
  
---  

#### If you made it this far, yes I am still here

  This model can be used for anything, maybe you want a temtem API or database *cough* Im coming for you next mofo *cough*. But the concept seemed very useful to me. You can basically take and object even if it is just one and convert it into a better modeled object then before without the possiblity of you FaT FinG_eRinG_ it, ya know what im saying dawg.