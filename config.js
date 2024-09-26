// message 
global.mess = {
 blocked: '`Command Blocked`\n\nFitur Tersebut Sedang Maintenance!',
 wait: 'Wait...',
 invalid: 'Url invalid!',
 wrong: 'Format salah!',
 done: 'Success',
 eror: 'Something wrong, please try again later (⁠｡⁠ŏ⁠﹏⁠ŏ⁠)',
 premium: 'Fitur khusus pengguna premium.',
 admin: 'Fitur khusus admin.',
 botAdmin: 'Bot harus menjadi admin untuk menggunakan fitur ini.',
 owner: 'Fitur khusus owner.',
 mod: 'Fitur khusus moderator.',
 group: 'Fitur khusus digunakan didalam grup.',
 private: 'Fitur khusus private chat.',
 register: 'Mohon daftar terlebih dahulu untuk menggunakan fitur ini.',
 game: 'Fitur game belum di aktifkan.',
 rpg: 'Fitur RPG belum di aktifkan saat ini.',
 restrict: 'Udah off',
 unreg: '`Only For Registered User`\n\nSilahkan Mendaftar Terlebih Dahulu Agar Mendapatkan Pengalaman Lebih Menarik Dalam Berinteraksi Dengan Bot (⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧\n\nKetik: `.register` untuk memulai pendaftaran\nAtau\nKetik: `.verify` untuk daftar otomatis',
 nsfw: '[⚠️] Fitur Nsfw Belum Diaktifkan Saat Ini!',
 gconly: 'Akses Ditolak❗\n\n*Harap Join Group Resmi Bot Terlebih Dahulu, Atau Kamu Bisa Upgrade Premium Supaya Bisa Akses Bot Di Private Chat (⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧*\n\nLink Group: https://chat.whatsapp.com/HnoKcpzYsKE5y0thEM060h\n\n> Jika Sudah Join Silahkan Gunakan Bot Kembali (ʘᴗʘ✿)'     
}
   
// bot setting 
global.bot = {
 name: 'Yoshida',
 fullName: 'Hirofumi Yoshida',
 number: 62856400229695,
 self: false,
 autoRestartLimitAndBalance: true
}

// creator bot
global.owner = {
 name: 'Adi',
 number: 62882007855266,
 jid: '62882007855266@s.whatsapp.net',
 ig: 'https://instagram.com/',
 fb: 'https://www.facebook.com/',
 gh: 'https://github.com/'
}

// sticker 
global.stick = {
 pack: 'Yoshida',
 auth: 'wabot'
}

// option setting
global.set = {
 wm: `Yoshida Wabot ${require('./package.json').version} Version`,
 footer: '© Yoshida WhatsApp Botz',
 idch: '@newsletter',
 idgc: '@g.us',
 thumb: 'https://telegra.ph/file/db5bc3f43b8320be112a7.jpg',
 gc: 'https://chat.whatsapp.com/HnoKcpzYsKE5y0thEM060h',
 ch: 'https://whatsapp.com/channel/0029VaBB5zLF1YlNMoA6YD0b'
}

// maximum options
global.max = {
 warn: 3,
 download: 1000,
 ram_usage: 2100000000,
 upload: 80,
 multiplier: 1000
}

// user limit
global.limit = {
  premium: 'Unlimited',
  free: 100
}

// to make it easier to use
const { Function, Scraper, Converter } = new (require('@yoshx/func"))

global.Func = Functions
global.scrap = Scraper
global.converter = Converter 


// function reload file
const fs = require('fs')
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update config.js"))
  delete require.cache[file]
  require(file)
})