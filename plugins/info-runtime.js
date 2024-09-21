module.exports = {
   run: async (m, {
}) => {
  m.reply(`📡 Bot uptime: ${Func.toDate(process.uptime() * 1000)}`.trim())
},
  help: ['runtime'],
  tags: ['info'],
  command: ['runtime','uptime']
}