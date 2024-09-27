### YOSHIDA-BOT (Base)

> - This script is 100% free, which uses the api from [Yoshida-APIs](https://api.yoshida.my.id)
> - Using the module from [@yoshx/func](https://github.com/Adixshnzz/Func)

### Set in .env
```
DATABASE_URL = '' // your mongodb database 
```


### Plugins run command 
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

### Plugins Event
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

---------

### The features we provide
- AI: OpenAI, BlackBox, Bard, Bing, AI Character, To Anime, etc.
- Anime: Animeinfo, Mangainfo, Random Anime Pfp, Anime Couple Pfp, etc.
- Downloader: Instagram, TikTok, Facebook, Danbooru, Gitclones, Mediafire, Pixiv, etc.
- Tools: Lookup, Photo Enhancer, Encryption, Short Url, Temp Mail, Translate, etc.
- Sticker: Sticker Maker, Sticker to Video, Gif To Sticker, Watermark a Sticker, etc.
- Group: Ban Chat, Kick Member, Hidetags, Welcome & Bye, Demote, Promote, Invite, etc.
- Anonymous: Start, Leave, Next
- Owner: Broadcasts, Add & Delete Premium Users, Get Plugin, Cheat, Session, Randompicks for giveaway, Verify & Unverify Users, etc.
- Youtube: Play Audio, Youtube Video & Audio, Youtube Shorts, etc.
- Internet: Google Image Search, Weather & Earthquake Information, Random Facts, Random Jokes, Spotify Search, Yandex, etc.
- Game: Bomb, Werewolf, etc.

Wanna see all the bot commands? lookout our main bot [here](https://wa.me/62856400229695?text=.menu)
> Will be increased every time it get new updates

### Requirements

- [x] Apikey
- [x] Tempat Run

> The requirements above are the minimum requirements to running the bot. Upgrade it higher for better experience

Jika Mengalami Kesulitan Hubungi kontak Owner:
[Owner](https://wa.me/6282375933838)

---------

### 📮 S&K
1. Not For Sale
2. Don't forget give star this repo
3. Don't use this repository wrong!
4. If you have problem chat me in owner number

---------

## ✨ Big Thanks To
- My God
- My Parent
- All Creator Bot


## Customer Support
 [![nando](https://github.com/rifnd.png?size=100)](https://github.com/rifnd) | [![Adi](https://github.com/Adixshnzz.png?size=100)](https://github.com/Adixshnzz) | [![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
----|----|----
[Nando](https://github.com/rifnd) | [Adi](https://github.com/Adixshnzz) | [Nurutomo](https://github.com/Nurutomo)
 Inspiration | Developer | Original Base

## Donate
- [Saweria](https://saweria.co/Adisptro)