let os = require("os"),
   speed = require("performance-now"),
   {
 spawn,
 exec, 
 execSync 
 } = require("child_process")
module.exports = {
   run: async (m, {
}) => {
   let timestamp = speed()
   let latensi = speed() - timestamp
   exec(`neofetch --stdout`, (error, stdout, stderr, json) => {
   let child = stdout.toString("utf-8")
   let ssd = child.replace(/Memory:/, "Ram:")
   m.reply(`*CPU*: ${ssd}\n*Speed*: *${latensi.toFixed(4)} MS*\n*Memory:* *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*\n*OS:* *${os.version()}*\n*Platform:* *${os.platform()}*\n*Hostname:* *${os.hostname()}*`)
  })
},
  help: ['os'],
  tags: ['info'],
  command: ['os']
}