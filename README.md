# bitburner
Welcome to my collection of bitburner scripts

I made this repo because I am bored :p thought I could automate some of the stuff on this weird game xd

Game: https://store.steampowered.com/app/1812820/Bitburner/

```
While a very basic programming background is recommended, it is not required to play the game!

Write scripts in JavaScript to automate your gameplay
Hack through a network of servers to train your abilities and earn money
Solve real programming questions to hone your skills and earn rewards
Improve your character with 100+ Augmentations
Trade in the stock market and write automated trading scripts
Interact with various gameplay mechanics to increase your stats and earn money
Explore the world and discover different companies, locations, and factions
Mini-games
Unlock secret perma-upgrades
Continuing development!
```

This game is kinda interesting, it teaches u the fundamentals of javascript to some sort of degree.
It's not a fully in-depth editor like visual studio code but it's an RPG continious game.

It's not for everybody but it's fun to mess around on and make scripts. So here's what I spent like less than an hour on doing.
Making this repo. Making the scripts and setting up the commands to automate everything.

This repo can be used for more in-depth research and automation when it comes to this game.

I hope I see the SneakyHub development community submit some pull requests and help grow this repo!
I would love to see the community interact with a project like this. Just for fun :p 



# Base Script

!!! WARNING !!!
This script is what you'll need to modify before using the clone.js file! If you execute the clone.js file before editing the base.js file then you've messed up!

File Name: base.js
```
export async function main(ns) {
    while(true) {
    await ns.weaken('iron-gym');
    await ns.hack('iron-gym');
    await ns.hack('iron-gym');
    await ns.hack('iron-gym');
    await ns.hack('iron-gym');
    await ns.hack('iron-gym');
    }
}
```


# Clone ing (cant spell) lol

!!! WARNING !!!
You need to modify the base.js file.. 
When you modify the file just change the name of the place u are attacking before running the cloner...
Creates 10 clones of the base script

File Name: clone.js
```js
cp base.js base1.js
cp base.js base2.js
cp base.js base3.js
cp base.js base4.js
cp base.js base5.js
cp base.js base6.js
cp base.js base7.js
cp base.js base8.js
cp base.js base9.js
cp base.js base10.js
```

# Run scripts

!!! WARNING !!!
You will notice not all the scripts will run due to the memory of the victim not being able to hold all of these scripts.

File Name: run.js
```js
run base.js; run base2.js; run base3.js; run base4.js; run base5.js; run base6.js; run base7.js; run base8.js; run base9.js; run base10.js
```

# wget

!!! WARNING !!!
When running this script in your bitburner terminal you'll be straight away given the nano editing screen for the base.js file..
Please change " iron-gym " to the target of your choosing. Then go ahead and execute the clone.js file then once you have cloned those files. Execute the run.js file.

CMD's

run clone.js
run run.js

```
wget https://raw.githubusercontent.com/SneakyHub/bitburner/main/base.js base.js; wget https://raw.githubusercontent.com/SneakyHub/bitburner/main/clone.js clone.js; wget https://raw.githubusercontent.com/SneakyHub/bitburner/main/run.js run.js; nano base.js
```
