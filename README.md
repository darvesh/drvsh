# Memochō

A lightweight pastebin/hastebin alternative with no hard frontend JS dependency. Fork of [mkr/bin](https://github.com/MKRhere/bin).

## Starting the app

You know the drill:

```shell
https://github.com/solooo7/memocho
cd bin
npm install
```

Start the app with the ENV variables:
+ `BIN_MONGO_CSTRING`: your Mongo connection string.
+ `BIN_PORT`: port on which `bin` should listen to.

```shell
BIN_MONGO_CSTRING=mongodb://localhost:27017/bin-store \
	BIN_PORT=4000 \
	npm start
```

## Running in Docker

Memochō supports running inside Docker through the provided Dockerfile. To build the image:

```shell
docker build -t mojurasu/memocho:latest --build-arg PORT=4000 --build-arg MONGO_CSTRING=mongodb://localhost:27017/bin-store .
```

Then run it as you would any other image:

```shell
docker run mojurasu/memocho:latest
```

## Customising `Memochō`

To customise your self-hosted version of `Memochō`, you can add these two files to `/custom` at the root directory:

```txt
└─ custom
	├─ style.css
	└─ addon.js
```

## A boring note about JavaScript

I wrote `mkr/bin` because as much as I love JavaScript, I found the heavy clientside JavaScript dependency in hastebin undesirable. I tried to avoid using clientside JavaScript as much as possible, and `mkr/bin` will work completely fine on JavaScript disabled browsers. The only things that will not work are keybindings and small things that you can live without. `mkr/bin` also sends nothing back to my server except the data you want to store. I don't process or store anything else on the server. Settings such as toggling the sidebar is stored on the clientside, so if you clear or if you don't persist your localStorage, you'll see that the sidebar will reappear every time you reload. I will not also accept any PR that creates hard JS dependency for the client. Cheers!
