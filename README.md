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

  So in order how you should do this is simple 

  1. git clone <this repo>, and run 'npm install' inside the new folder created
  2. Read the 00-moves_rewrite.js or 00-pokedex_rewrite.js, these simply convert and array of objects in JSON and creates a new arrays of custom objects and automatically create a JSON file upon completion. ***IF, you do not have any errors***
  3.  To run simple run the command 'node <insert your rewrite script here>
      - The 01 .js files are a bit more complex however the basics on what I am doing here are the same.
  4. Learn the 01-<whatever>.js files, Im taking the objects we created from the OG files to the 00 files and now I am adding upon my already new modeled object data but, now I bring in an API call to really scrap for data.
  5. If you get this far you will notice when you run the 00-pokedex_rewrite.js there are alot of console.log statements. No this is not on accident.
      - For some reason when you make the API request on their website and get their data it is different then what was coming in on my API request. 
      - It is a slim but very possible chance they updated their API while I was doing this because for a couple hour my code works then shit just got wild.
      - Basically I am missing a bunch of MOVES! so I wanted to see what different ways pokemon could learn moves so I could figure out how to update my data model.
      - Now that I see my errors I am going to create the 01-moves_rewrite.js and scrap there API for everything I can find and fill in moves after 619.

---

#### Updates

  Date: March 15th, 2022

  Added the 99-pokedex and moves, this is reserved for hard coding information until I can figure out how I want to store the data. I will be frequently updating these two files specifically. And will soon add abilities.

  Date: June 6th, 2022

  Updated the Pokemon moves for each Pokemon to use bare amount of lines to store every move and which games and generation. In cooperation with the Moves.json these two DBs can get you all the info you want if you backend server has the correct functionality. Will soon make the abilities json. Added a Sword and Shield TRs json which is just an object that lets sword and shield move key value pair have the record instead of the machine.

  Date: June 8th, 2022

  Deleted the hard_rewrites as it will no longer be neccessary everything will always be coded instead of manual. Removed freeCodeCampCheerio example as it was there for the 02-web_scrapper which is just another rewrite. In next update I will remove all jsons that are not the most current build as you can run the specific code file if you wish to see old json builds. 

---  

#### Future Goals

  - [ ] Install yarn for package management since fs and node fetch require specific versions in order to run properly on any device.
  - [ ] Create a TemTem json converter from the free api and just mirror it for now then make a moves just like the pokemon one and have two dbs working in relation.
  - [ ] Put the fetcher inside a different file and make it so it cant be used with any api not just this one. Get rid of repetitive code.

---

#### If you made it this far, yes I am still here

  This model can be used for anything, maybe you want a temtem API or database *cough* Im coming for you next mofo *cough*. But the concept seemed very useful to me. You can basically take and object even if it is just one and convert it into a better modeled object then before without the possiblity of you FaT FinG_eRinG_ it, ya know what im saying dawg.