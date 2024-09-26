### YOSHIDA-BOT (Base)

> - This script is 100% free, which uses the api from [Yoshida-APIs](https://api.yoshida.my.id)
> - Using the module from [@yoshx/func](https://github.com/Adixshnzz/Func)

### Set in .env
```
DATABASE_URL = '' // your mongodb database 
```

### Plugins 1
```Javascript
let handler = async(m, {
  conn,
  usedPrefix,
  command,
  args,
  text,
  users,
  isOwner,
  isPrem
}) => {
  try {
    // Create your imagination
  } catch {
    console.log(e)
    return conn.reply(m.chat, Func.jsonFormat(e), m)
  }
}
handler.help = ['command'] // display in the menu
handler.use = 'example' // display example in the menu
handler.tags = ['category'] // category
handler.command = /^(command)$/i // command
handler.group = Boolean // for group
handler.limit = Boolean // use limit
handler.game = Boolean // game mode
handler.rpg = Boolean // rpg mode
handler.owner = Boolean // for owner
handler.admin = Boolean // for admin
handler.botAdmin = Boolean // bot must be an admin
handler.premium = Boolean // premium only
handler.private = Boolean // private chat only
```

### Plugins Event 1
```Javascript
let handler = (m) => m
handler.before = async (m, {
  conn
}) {
  try {
    // Create your imagination
  } catch (error) {
    console.log(error)
  }
  return true
}
module.exports = handler
```

### Plugins 2
```Javascript
module.exports = {
   run: async (m, {
      conn,
      text,
      participants
   }) => {
      try {
         // your code
      } catch (e) {
         console.log(e)
         return conn.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   help: ['command'],
   use: 'example',
   tags: ['category'],
   command: /^(command)$/i,
   group: Boolean,
   admin: Boolean
}
```

### Plugins Event 2
```Javascript
module.exports = {
   async before(m, {
      conn,
      body,
      isOwner
   }) {
      try {
         // your code
      } catch (e) {
         console.log(e)
         return conn.reply(m.chat, Func.jsonFormat(e), m)
      }
      return true
   }
}
```

### Install and run
```
clone this repo
cd repo
$ npm install
$ npm start
```

## Install & Run use PM2

```
$ npm install pm2 -g
$ npm install
$ pm2 start index.js && pm2 save && pm2 logs
```

## For Heroku Buildpack

```
heroku/nodejs
```
```
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
```
```
https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git
```

### Thanks To [![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo) | [![Nando](https://github.com/rifnd.png?size=100)](https://github.com/rifnd)
----|----|----|----|----
[Yoshida](https://api.yoshida.my.id) | [Nurutomo](https://github.com/Nurutomo) | [Nando](https://github.com/rifnd) |
APIs Provider | Author / Creator | Inspiration