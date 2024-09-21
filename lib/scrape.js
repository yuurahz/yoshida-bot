const cheerio = require('cheerio'),
 fetch = require('node-fetch'),
 axios = require('axios'),
 fs = require('fs'),
 _url = require('url'),
 chalk = require('chalk')

module.exports = class Scraper {
      
  uploadPomf2 = async (media) => {
  return new Promise(async (resolve, reject) => {
    const formData = new FormData()
    formData.append('files[]', media, { 
      filename: new Date() * 1 + '.jpg' 
    });
    await axios.post('https://pomf2.lain.la/upload.php', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    })
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      resolve(e?.response)
    })
  })
 }

  uploader = async (buffer) => {
    return new Promise(async (resolve) => {
      try {
        const { ext } = await fromBuffer(buffer)
        const form = new FormData()
        form.append('file', buffer, 'tmp.' + ext)
        const json = await (await axios.post("https://tmpfiles.org/api/v1/upload", form, {
          headers: {
            "accept": "*/*",
            "accept-language": "id-ID , id; q=O. 9 , en- US ; q=0.8, en q=0.7",
            "content-type": "multipart/form-data",
            "origin": "https://tmpfiles.orgi",
            "referer": "https://tmpfiles.org/",
            "sec-ch-ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "Android",
            "sec-fetch-dest": "empty",
            "sec-fetch-mcde": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent": "Mozilla/5.0 (Linux; Android 6.0.1; SM-J500G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Mobile Safari/537.36",
            "x-requested-with": "XMLHttpRequest",
            ...form.getHeaders()
          }
        })).data
        if (json.status != 'success') return resolve({
          developer: creator,
          status: false,
          msg: 'Failed to uploaded'
        })
        resolve({
          developer: creator,
          status: true,
          data: {
            url: json.data.url.replace('https://tmpfiles.org/', 'https://tmpfiles.org/dl/')
          }
        })
      } catch (e) {
        console.log(e)
        resolve({
          developer: creator,
          status: false,
          msg: e.message
        })
      }
    })
  }
  
   uploadImage = async (str) => {
    return new Promise(async resolve => {
      try {
        const parse = await (await axios.get('https://imgbb.com', {
          headers: {
            "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; SM-J500G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Mobile Safari/537.36"
          }
        }))
        const token = parse.data.match(/PF\.obj\.config\.auth_token="([^"]*)/)[1]
        const cookie = parse.headers['set-cookie'].join(', ')
        const file = Buffer.isBuffer(str) ? str : str.startsWith('http') ? await (await axios.get(str, {
          responseType: 'arraybuffer'
        })).data : str
        const { ext } = await fromBuffer(Buffer.from(file))
        let form = new FormData
        form.append('source', Buffer.from(file), 'image.' + ext)
        form.append('type', 'file')
        form.append('action', 'upload')
        form.append('timestamp', (new Date() * 1))
        form.append('auth_token', token)
        const json = await (await axios.post('https://imgbb.com/json', form, {
          headers: {
            "Accept": "*/*",
            "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; SM-J500G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Mobile Safari/537.36",
            "Origin": "https://imgbb.com",
            "Referer": "https://imgbb.com/upload",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            cookie,
            ...form.getHeaders()
          }
        })).data
        if (json.status_code != 200) return resolve({
          developer: creator,
          status: false,
          msg: `Failed to Upload!`
        })
        resolve({
          developer: creator,
          status: true,
          original: json,
          data: {
            url: json.image.display_url
          }
        })
      } catch (e) {
        console.log(e)
        resolve({
          developer: creator,
          status: false,
          msg: e.message
        })
      }
    })
   }
  
  uploaderV2 = async (input) => {
    return new Promise(async resolve => {
      try {
        const image = Buffer.isBuffer(input) ? input : input.startsWith('http') ? await (await axios.get(input, {
          responseType: 'arraybuffer'
        })).data : input
        let form = new FormData
        form.append('source', Buffer.from(image), 'image.jpg')
        form.append('type', 'file')
        form.append('action', 'upload')
        form.append('timestamp', (new Date() * 1))
        form.append('auth_token', '3b0ead89f86c3bd199478b2e14afd7123d97507f')
        form.append('nsfw', 0)
        const json = await (await axios.post('https://freeimage.host/json', form, {
          headers: {
            "Accept": "*/*",
            "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; SM-J500G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Mobile Safari/537.36",
            "Origin": "https://freeimage.host",
            "Referer": "https://freeimage.host/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "sec-ch-ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
            "sec-ch-ua-platform": "Android",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            ...form.getHeaders()
          }
        })).data
        if (json.status_code != 200) return resolve({
          creator: creator,
          status: false,
          msg: `Failed to Upload!`
        })
        resolve({
          creator: creator,
          status: true,
          original: json,
          data: {
            url: json.image.url
          }
        })
      } catch (e) {
        console.log(e)
        resolve({
          creator: creator,
          status: false,
          msg: e.message
        })
      }
    })
  }
 }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})