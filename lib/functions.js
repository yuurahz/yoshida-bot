const axios = require('axios'),
  fetch = require('node-fetch'),
  crypto = require('crypto'),
  qs = require('qs'),
  chalk = require("chalk"),
  cheerio = require('cheerio'),
  fs = require('fs'),
  path = require('path'),
  mime = require('mime-types'),
  FormData = require('form-data'),
  Jimp = require('jimp'),
  { fromBuffer } = require('file-type'),
  { read, MIME_JPEG, RESIZE_BILINEAR, AUTO } = require('jimp'),
  { tmpdir } = require('os'),
  { Writable } = require('stream')
  
module.exports = class Function {
 
  randomarray = async (array) => {
   return array[Math.floor(Math.random() * array.length)]
   }

  generateSerpApiUrl = (data) => {
  const params = new URLSearchParams(data)
  const url = `https://serpapi.com/search.json?${params.toString()}`
  try {
    const response = fetch(url)
    if (!response.ok) {
      throw new Error("Request failed")
    }
    const result = response.json()
    return result
   } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`)
   }
  }
   
  generateRandomString = (length) => {
    const characters = 'abcdef0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
    }

  generateRandomNumberString = (length) => {
    const characters = '0123456789';
    let result = ''
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  generateRandomUserAgent = () => {
  const androidVersions = [
    "4.0.3",
    "4.1.1",
    "4.2.2",
    "4.3",
    "4.4",
    "5.0.2",
    "5.1",
    "6.0",
    "7.0",
    "8.0",
    "9.0",
    "10.0",
    "11.0",
  ]
  const deviceModels = [
    "M2004J19C",
    "S2020X3",
    "Xiaomi4S",
    "RedmiNote9",
    "SamsungS21",
    "GooglePixel5",
  ]
  const buildVersions = [
    "RP1A.200720.011",
    "RP1A.210505.003",
    "RP1A.210812.016",
    "QKQ1.200114.002",
    "RQ2A.210505.003",
  ]
  const selectedModel =
    deviceModels[Math.floor(Math.random() * deviceModels.length)]
  const selectedBuild =
    buildVersions[Math.floor(Math.random() * buildVersions.length)]
  const chromeVersion =
    "Chrome/" +
    (Math.floor(Math.random() * 80) + 1) +
    "." +
    (Math.floor(Math.random() * 999) + 1) +
    "." +
    (Math.floor(Math.random() * 9999) + 1)
  const userAgent = `Mozilla/5.0 (Linux; Android ${androidVersions[Math.floor(Math.random() * androidVersions.length)]}; ${selectedModel} Build/${selectedBuild}) AppleWebKit/537.36 (KHTML, like Gecko) ${chromeVersion} Mobile Safari/537.36 WhatsApp/1.${Math.floor(Math.random() * 9) + 1}.${Math.floor(Math.random() * 9) + 1}`
  return userAgent
  }

  generateRandomIP = () => {
  const octet = () => Math.floor(Math.random() * 256)
  return `${octet()}.${octet()}.${octet()}.${octet()}`
  }

  generateUUIDv4 = () => {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.randomBytes(1)[0] & 15 >> c / 4).toString(16)
   )
  }

  randomBytes = (length) => {
  return crypto.randomBytes(length)
  }

  generateMessageID = () => {
  return Func.randomBytes(10).toString("hex").toUpperCase()
  }
   
  getRandom = (ext) => {
   return `${Math.floor(Math.random() * 10000)}${ext}`
   }
    
  ebinary = (binary) => {
    return binary.split(' ')
      .map(bin => String.fromCharCode(parseInt(bin, 2)))
     .join('')
    }

  binary = (text) => {
    return text.split('')
     .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ')
   }

  delay = time => new Promise(res => setTimeout(res, time))

  ucword = (str) => {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
      return $1.toUpperCase()
    })
  }

  isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
  }

  isNumber = (input) => {
    if (typeof input !== 'string') {
      return false
    }
    const regex = /^[0-9]+$/
    return regex.test(input)
  }

  fetchJson = async (url, options = {}) => {
    try {
      const result = await (await fetch(url, {
        headers: options
      })).json()
      return result
    } catch (e) {
      return ({
        status: false,
        msg: `System cannot detect JSON!`
      })
    }
  }

  formatNumber = (integer) => {
    let numb = parseInt(integer)
    return Number(numb).toLocaleString().replace(/,/g, '.')
  }

  h2k = (integer) => {
    let numb = parseInt(integer)
    return new Intl.NumberFormat('en-US', {
      notation: 'compact'
    }).format(numb)
  }

  randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getBuffer = async (url, options) => {
    try {
      options ? options : {}
      const res = await axios({
        method: "get",
        url,
        headers: {
          'DNT': 1,
          'Upgrade-Insecure-Request': 1
        },
        ...options,
        responseType: 'arraybuffer'
      })
      return res.data
    } catch (e) {
      console.log(`Error : ${e}`)
    }
  }

  fetchBuffer = async (file, options = {}) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (this.isUrl(file)) {
          let buff = await (await axios.get(file, {
            responseType: "arraybuffer",
            headers: options
          })).data
          resolve(buff)
        } else {
          let buff = fs.readFileSync(file)
          resolve(buff)
        }
      } catch (e) {
        return ({
          status: false,
          msg: `System cannot detect Buffer!`
        })
      }
    })
  }

  texted = (type, text) => {
    switch (type) {
    case 'dot':
        return '- ' + text
        break 
    case 'gray':
        return '> ' + text
        break
    case 'glow':
        return '`' + text + '`'
        break
      case 'bold':
        return '*' + text + '*'
        break
      case 'italic':
        return '_' + text + '_'
        break
      case 'monospace':
        return '```' + text + '```'
    }
  }

  example = (usedPrefix, command, args) => {
    return `${this.texted('glow', 'Wrong Input')}\n${this.texted('italic', 'Example')} : ${usedPrefix + command} ${args}`
  }

  toTime = (ms) => {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
  }

  filename = (extension) => {
    return `${Math.floor(Math.random() * 10000)}.${extension}`
  }
  
  clockString = (ms) => {
   let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000);
   let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24;
   let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
   let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
   return [d, " Day ", h, " hours ", m, " Minutes ", s, " Second "]
    .map((v) => v.toString().padStart(2, "0"))
    .join("")
  }

  uuid = () => {
    var dt = new Date().getTime()
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      var y = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid
  }

  random = (list) => {
    return list[Math.floor(Math.random() * list.length)]
  }
  
  formatBytes = (bytes) => {
    if (bytes === 0) {
        return '0 B';
    }
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
  }

  formatSize = (size) => {
    function round(value, precision) {
      var multiplier = Math.pow(10, precision || 0)
      return Math.round(value * multiplier) / multiplier
    }
    var megaByte = 1024 * 1024
    var gigaByte = 1024 * megaByte
    var teraByte = 1024 * gigaByte
    if (size < 1024) {
      return size + ' B'
    } else if (size < megaByte) {
      return round(size / 1024, 1) + ' KB'
    } else if (size < gigaByte) {
      return round(size / megaByte, 1) + ' MB'
    } else if (size < teraByte) {
      return round(size / gigaByte, 1) + ' GB'
    } else {
      return round(size / teraByte, 1) + ' TB'
    }
    return ''
  }

  getFile = (source, filename, referer) => {
    return new Promise(async (resolve) => {
      try {
        if (Buffer.isBuffer(source)) {
          let ext, mime
          try {
            mime = await (await fromBuffer(source)).mime
            ext = await (await fromBuffer(source)).ext
          } catch {
            mime = require('mime-types').lookup(filename ? filename.split`.`[filename.split`.`.length - 1] : 'txt')
            ext = require('mime-types').extension(mime)
          }
          let extension = filename ? filename.split`.`[filename.split`.`.length - 1] :
            ext
          let size = Buffer.byteLength(source)
          let filepath = tmpdir() + '/' + (Func.uuid() + '.' + ext)
          let file = fs.writeFileSync(filepath, source)
          let name = filename || path.basename(filepath)
          let data = {
            status: true,
            file: filepath,
            filename: name,
            mime: mime,
            extension: ext,
            size: await Func.getSize(size),
            bytes: size,
          }
          return resolve(data)
        } else if (source.startsWith('./')) {
          let ext, mime
          try {
            mime = await (await fromBuffer(source)).mime
            ext = await (await fromBuffer(source)).ext
          } catch {
            mime = require('mime-types').lookup(filename ? filename.split`.`[filename.split`.`.length - 1] : 'txt')
            ext = require('mime-types').extension(mime)
          }
          let extension = filename ? filename.split`.`[filename.split`.`.length - 1] : ext
          let size = fs.statSync(source).size
          let data = {
            status: true,
            file: source,
            filename: path.basename(source),
            mime: mime,
            extension: ext,
            size: await Func.getSize(size),
            bytes: size,
          }
          return resolve(data)
        } else {
          axios.get(source, {
            responseType: 'stream',
            headers: {
              Referer: referer || ''
            },
          }).then(async (response) => {
            let extension = filename ? filename.split`.`[filename.split`.`.length - 1] : mime.extension(response.headers['content-type'])
            let file = fs.createWriteStream(`${tmpdir()}/${Func.uuid() + "." + extension}`)
            let name = filename || path.basename(file.path)
            response.data.pipe(file)
            file.on('finish', async () => {
              let data = {
                status: true,
                file: file.path,
                filename: name,
                mime: mime.lookup(file.path),
                extension: extension,
                size: await Func.getSize(response.headers["content-length"] ? response.headers["content-length"] : 0),
                bytes: response.headers["content-length"] ?
                  response.headers["content-length"] : 0,
              }
              resolve(data)
              file.close()
            })
          })
        }
      } catch (e) {
        console.log(e)
        resolve({
          status: false,
        })
      }
    })
  }

  getSize = async (str) => {
    if (!isNaN(str)) return this.formatSize(str)
    let header = await (await axios.get(str)).headers
    return this.formatSize(header['content-length'])
  }

  sizeLimit = (str, max) => {
    let data
    if (str.match('G') || str.match('GB') || str.match('T') || str.match('TB')) return data = {
      oversize: true
    }
    if (str.match('M') || str.match('MB')) {
      let first = str.replace(/MB|M|G|T/g, '').trim()
      if (isNaN(first)) return data = {
        oversize: true
      }
      if (first > max) return data = {
        oversize: true
      }
      return data = {
        oversize: false
      }
    } else {
      return data = {
        oversize: false
      }
    }
  }

  jsonFormat = (obj) => {
    try {
      let print = (obj && (obj.constructor.name == 'Object' || obj.constructor.name == 'Array')) ? require('util').format(JSON.stringify(obj, null, 2)) : require('util').format(obj)
      return print
    } catch {
      return require('util').format(obj)
    }
  }

  toDate = (ms) => {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    if (days == 0 && hours == 0 && minutes == 0) {
      return "Recently"
    } else {
      return days + "Day " + hours + "Hour " + minutes + "Minute"
    }
  }

  timeFormat = (value) => {
    const sec = parseInt(value, 10)
    let hours = Math.floor(sec / 3600)
    let minutes = Math.floor((sec - (hours * 3600)) / 60)
    let seconds = sec - (hours * 3600) - (minutes * 60)
    if (hours < 10) hours = '0' + hours
    if (minutes < 10) minutes = '0' + minutes
    if (seconds < 10) seconds = '0' + seconds
    if (hours == parseInt('00')) return minutes + ':' + seconds
    return hours + ':' + minutes + ':' + seconds
  }

  makeId = (length) => {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  jsonRandom = (file) => {
    let json = JSON.parse(fs.readFileSync(file))
    return json[Math.floor(Math.random() * json.length)]
  }

  reSize = async (buffer, x, z) => {
    return new Promise(async (resolve, reject) => {
      var buff = await read(buffer)
      var ab = await buff.resize(x, z).getBufferAsync(MIME_JPEG)
      resolve(ab)
    })
  }

  shortlink = async (url) => {
    let isurl = /https?:\/\//.test(url)
    return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url))).data : ''
  }

  generateProfilePicture = async (buffer) => {
    const jimp = await Jimp.read(buffer)
    const min = jimp.getWidth()
    const max = jimp.getHeight()
    const cropped = jimp.crop(0, 0, min, max)
    return {
      img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
      preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
    }
  }

  removeItem = (arr, value) => {
    let index = arr.indexOf(value)
    if (index > -1) arr.splice(index, 1)
    return arr
  }

  Styles = (text, style = 1) => {
   const xStr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
   const yStr = Object.freeze({
   1: ['ᴀ', 'ʙ', 'ᴄ', 'ᴅ', 'ᴇ', 'ꜰ', 'ɢ', 'ʜ', 'ɪ', 'ᴊ', 'ᴋ', 'ʟ', 'ᴍ', 'ɴ', 'ᴏ', 'ᴘ', 'q', 'ʀ', 'ꜱ', 'ᴛ', 'ᴜ', 'ᴠ', 'ᴡ', 'x', 'ʏ', 'ᴢ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
   2: ['𝑎', '𝑏', '𝑐', '𝑑', '𝑒', '𝑓', '𝑔', 'ℎ', '𝑖', '𝑗', '𝑘', '𝑙', '𝑚', '𝑛', '𝑜', '𝑝', '𝑞', '𝑟', '𝑠', '𝑡', '𝑢', '𝑣', '𝑤', '𝑥', '𝑦', '𝑧', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
   3: ['𝐚', '𝐛', '𝐜', '𝐝', '𝐞', '𝐟', '𝐠', '𝐡', '𝐢', '𝐣', '𝐤', '𝐥', '𝐦', '𝐧', '𝐨', '𝐩', '𝐪', '𝐫', '𝐬', '𝐭', '𝐮', '𝐯', '𝐰', '𝐱', '𝐲', '𝐳', '𝟏', '𝟐', '𝟑', '𝟒', '𝟓', '𝟔', '𝟕', '𝟖', '𝟗', '𝟎'],
   4: ['𝒂', '𝒃', '𝒄', '𝒅', '𝒆', '𝒇', '𝒈', '𝒉', '𝒊', '𝒋', '𝒌', '𝒍', '𝒎', '𝒏', '𝒐', '𝒑', '𝒒', '𝒓', '𝒔', '𝒕', '𝒖', '𝒗', '𝒘', '𝒙', '𝒚', '𝒛', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
   5: ['𝗮', '𝗯', '𝗰', '𝗱', '𝗲', '𝗳', '𝗴', '𝗵', '𝗶', '𝗷', '𝗸', '𝗹', '𝗺', '𝗻', '𝗼', '𝗽', '𝗾', '𝗿', '𝘀', '𝘁', '𝘂', '𝘃', '𝘄', '𝘅', '𝘆', '𝘇', '𝟭', '𝟮', '𝟯', '𝟰', '𝟱', '𝟲', '𝟳', '𝟴', '𝟵', '𝟬'],
   6: ['ᵃ', 'ᵇ', 'ᶜ', 'ᵈ', 'ᵉ', 'ᶠ', 'ᵍ', 'ʰ', 'ⁱ', 'ʲ', 'ᵏ', 'ˡ', 'ᵐ', 'ⁿ', 'ᵒ', 'ᵖ', 'ᵠ', 'ʳ', 'ˢ', 'ᵗ', 'ᵘ', 'ᵛ', 'ʷ', 'ˣ', 'ʸ', 'ᶻ', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹', '⁰'],
   7: ['ᗩ', 'ᗷ', 'ᑕ', 'ᗪ', 'ᗴ', 'ᖴ', 'ᘜ', 'ᕼ', 'I', 'ᒍ', 'K', 'ᒪ', 'ᗰ', 'ᑎ', 'O', 'ᑭ', 'ᑫ', 'ᖇ', 'Տ', 'T', 'ᑌ', 'ᐯ', 'ᗯ', '᙭', 'Y', 'ᘔ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
   8: ['𝙖', '𝙗', '𝙘', '𝙙', '𝙚', '𝙛', '𝙜', '𝙝', '𝙞', '𝙟', '𝙠', '𝙡', '𝙢', '𝙣', '𝙤', '𝙥', '𝙦', '𝙧', '𝙨', '𝙩', '𝙪', '𝙫', '𝙬', '𝙭', '𝙮', '𝙯', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
   9: ['𝘢', '𝘣', '𝘤', '𝘥', '𝘦', '𝘧', '𝘨', '𝘩', '𝘪', '𝘫', '𝘬', '𝘭', '𝘮', '𝘯', '𝘰', '𝘱', '𝘲', '𝘳', '𝘴', '𝘵', '𝘶', '𝘷', '𝘸', '𝘹', '𝘺', '𝘻', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
   10: ['𝖺', '𝖻', '𝖼', '𝖽', '𝖾', '𝖿', '𝗀', '𝗁', '𝗂', '𝗃', '𝗄', '𝗅', '𝗆', '𝗇', '𝗈', '𝗉', '𝗊', '𝗋', '𝗌', '𝗍', '𝗎', '𝗏', '𝗐', '𝗑', '𝗒', '𝗓', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
   11: ['Ⓐ︎', 'Ⓑ', '︎Ⓒ', '︎Ⓓ︎', 'Ⓔ︎', 'Ⓕ︎', 'Ⓖ︎', 'Ⓗ︎', 'Ⓘ︎', 'Ⓙ︎', 'Ⓚ︎', 'Ⓛ︎', 'Ⓜ︎', 'Ⓝ︎', 'Ⓞ︎', 'Ⓟ', '︎Ⓠ︎', 'Ⓡ︎', 'Ⓢ', '︎Ⓣ︎', 'Ⓤ︎', 'Ⓥ︎', 'Ⓦ︎', 'Ⓧ︎', 'Ⓨ︎', 'Ⓩ︎', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
   12: ['🅐︎', '🅑︎', '🅒', '︎🅓︎', '🅔︎', '🅕︎', '🅖︎', '🅗', '︎🅘︎', '🅙︎', '🅚', '︎🅛︎', '🅜', '︎🅝︎', '🅞', '︎🅟', '︎🅠︎', '🅡︎', '🅢', '︎🅣', '︎🅤', '︎🅥︎', '🅦︎', '🅧︎', '🅨︎', '🅩︎', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
   13: ['卂', '乃', '匚', 'ᗪ', '乇', '千', 'ᘜ', '卄', '|', 'ﾌ', 'Ҝ', 'ㄥ', '爪', '几', 'ㄖ', '卩', 'Ҩ', '尺', '丂', 'ㄒ', 'ㄩ', 'ᐯ', '山', '乂', 'ㄚ', '乙', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
   14: ['ⓐ', 'ⓑ', 'ⓒ', 'ⓓ', 'ⓔ', 'ⓕ', 'ⓖ', 'ⓗ', 'ⓘ', 'ⓙ', 'ⓚ', 'ⓛ', 'ⓜ', 'ⓝ', 'ⓞ', 'ⓟ', 'ⓠ', 'ⓡ', 'ⓢ', 'ⓣ', 'ⓤ', 'ⓥ', 'ⓦ', 'ⓧ', 'ⓨ', 'ⓩ', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⓪'],
   15: ['𝚊', '𝚋', '𝚌', '𝚍', '𝚎', '𝚏', '𝚐', '𝚑', '𝚒', '𝚓', '𝚔', '𝚕', '𝚖', '𝚗', '𝚘', '𝚙', '𝚚', '𝚛', '𝚜', '𝚝', '𝚞', '𝚟', '𝚠', '𝚡', '𝚢', '𝚣', '𝟷', '𝟸', '𝟹', '𝟺', '𝟻', '𝟼', '𝟽', '𝟾', '𝟿', '𝟶'],
   16: ['a͢', 'b͢', 'c͢', 'd͢', 'e͢', 'f͢', 'g͢', 'h͢', 'i͢', 'j͢', 'k͢', 'l͢', 'm͢', 'n͢', 'o͢', 'p͢', 'q', '͢r', '͢s͢', 't', '͢u', '͢v͢', 'w͢', 'x͢', 'y', '͢z', '͢1͢', '2͢', '3', '͢4͢', '5͢', '6͢', '7͢', '8͢', '9͢', '0͢'],
   17: ['𝕒', '𝕓', '𝕔', '𝕕', '𝕖', '𝕗', '𝕘', '𝕙', '𝕚', '𝕛', '𝕜', '𝕝', '𝕞', '𝕟', '𝕠', '𝕡', '𝕢', '𝕣', '𝕤', '𝕥', '𝕦', '𝕧', '𝕨', '𝕩', '𝕪', '𝕫', '𝟙', '𝟚', '𝟛', '𝟜', '𝟝', '𝟞', '𝟟', '𝟠', '𝟡', '𝟘'],
   18: ['【a】', '【b】', '【c】', '【d】', '【e】', '【f】', '【g】', '【h】', '【i】', '【j】', '【k】', '【l】', '【m】', '【n】', '【o】', '【p】', '【q】', '【r】', '【s】', '【t】', '【u】', '【v】', '【w】', '【x】', '【y】', '【z】', '【1】', '【2】', '【3】', '【4】', '【5】', '【6】', '【7】', '【8】', '【9】', '【0】'],
   19: ['ａ', 'ｂ', 'ｃ', 'ｄ', 'ｅ', 'ｆ', 'ｇ', 'ｈ', 'ｉ', 'ｊ', 'ｋ', 'ｌ', 'ｍ', 'ｎ', 'ｏ', 'ｐ', 'ｑ', 'ｒ', 'ｓ', 'ｔ', 'ｕ', 'ｖ', 'ｗ', 'ｘ', 'ｙ', 'ｚ', '１', '２', '３', '４', '５', '６', '７', '８', '９', '０'],
   20: ['『a』', '『b』', '『c』', '『d』', '『e』', '『f』', '『g』', '『h』', '『i』', '『j』', '『k』', '『l』', '『m』', '『n』', '『o』', '『p』', '『q』', '『r』', '『s』', '『t』', '『u』', '『v』', '『w』', '『x』', '『y』', '『z』', '『1』', '『2』', '『3』', '『4』', '『5』', '『6』', '『7』', '『8』', '『9』', '『0』'],
   })
  const replacer = []
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style][i]
    })
  )
  const str = text.toLowerCase().split("")
  const output = []
  str.map((v) => {
    const find = replacer.find((x) => x.original == v)
    find ? output.push(find.convert) : output.push(v)
  })
  return output.join("")
  }

  arrayJoin = (arr) => {
    var construct = []
    for (const i = 0; i < arr.length; i++) construct = construct.concat(arr[i])
    return construct
  }
  
  formatmoney = (angka) => {
  let suffixes = [
    "",
    " K",
    " M",
    " B",
    " T",
    " Q"
  ]
  let suffixIndex = Math.floor(Math.log10(angka) / 3)
  let suffix = suffixes[suffixIndex]
  let scaledmoney = angka / Math.pow(10, suffixIndex * 3)
  return scaledmoney.toFixed(2) + suffix
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update Functions"))
  delete require.cache[file]
  require(file)
})