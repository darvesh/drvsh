<img src="https://img.techpowerup.org/201116/drvsh.png" alt="logo"/>

> A lightweight pastebin/hastebin alternative with no hard frontend JS dependency. Fork of [mojurasu/memocho](https://github.com/mojurasu/memocho) which is a fork of [mkr/bin](https://github.com/MKRhere/bin).

<br/>

## Features
* Minimal
* Short and readable ID

<br/>

## API
### Create New Snippet
 
`POST /c`
```bash
curl -X POST -H "content-type:plain/text" -d "console.log('Hello World');"  localhost:1998/c
```

### Get snippet

`GET /:id/raw`

Returns raw string.

<br/>

## Starting the app

```shell
https://github.com/darvesh/drvsh
cd bin
npm install
```

```bash
cp example.config.js config.js
```

Fill in these ENV variables in `config.js`:
+ `BIN_MONGO_CSTRING`: your Mongo connection string.
+ `BIN_PORT`: port on which `bin` should listen to.
+ `URL`: https://your-domain.com

<br/>

## Running in Docker

drvsh supports running inside Docker through the provided Dockerfile. To build the image:

```shell
docker build -t darvesh/drvsh:latest --build-arg PORT=4000 --build-arg MONGO_CSTRING=mongodb://localhost:27017/bin-store .
```

Then run it as you would any other image:

```shell
docker run darvesh/drvsh:latest
```

<br/>

## Customising `drvsh`

To customise your self-hosted version of `drvsh`, you can add these two files to `/custom` at the root directory:

```txt
└─ custom
	├─ style.css
	└─ addon.js
```
