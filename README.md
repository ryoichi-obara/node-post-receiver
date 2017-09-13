# node-post-receiver

A Node.js server receives POST request and save data to file.

* For mock use
* For IoT (Local logging under disconnection)
* etc

## Installation

```command
git clone git@github.com:ryoichi-obara/node-post-receiver.git
cd node-post-receiver

npm install
node index.js
```

## Usage

```command
curl -H 'Accept: application/json' -H "Content-type: application/json" -H 'X-Node-Post-Receiver-Token: foobar' -d '{"jsonData":[{"category":"sample","count":1,"debug":true}]}' http://localhost:3000/
```
