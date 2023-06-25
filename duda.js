


/// BY ALIZINDEV \\\\

require('./configuracao')

const { 
BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent,
proto, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
downloadContentFromMessage,
areJidsSameUser, 
delay,
getContentType 
} = require('@adiwajshing/baileys')


///// FUNÇÕES \\\\\
const fs = require('fs')

const util = require('util')

const chalk = require('chalk')

const { exec, spawn, execSync } = require("child_process")

const yts = require('yt-search');

const { Youtube } = require('ytdownloader');

const axios = require('axios')

const path = require('path')

const os = require('os')

const moment = require('moment-timezone')

const speed = require('performance-now')

const { performance } = require('perf_hooks')

const { Primbon } = require('scrape-primbon')

var gerarnick = require('./BANCO DE DADOS/gerarnick.js')

const primbon = new Primbon()

const { 
smsg, 
formatp, 
tanggal, 
formatDate, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom
} = require('./BANCO DE DADOS/myfunc')




//====== FUNÇÕES E ETC ======== ////
const { 
color, 
bgcolor 
} = require('./BANCO DE DADOS/funções/color')

//// BANGP \\
const bancht = JSON.parse(fs.readFileSync('./BANCO DE DADOS/banchat.json'));
 
 
 
banChats = global.banChats 

banChatss = global.banChatss

module.exports = duda = async (duda, m, messages, store) => {
try {
const info = messages ? messages[0]: messages[1]
const mek = messages ? messages[0]: messages[1]
const m = messages ? messages[0]: messages[1]
if (!info.message) return 
if (info.key && info.key.remoteJid == 'status@broadcast') return

const altpdf = Object.keys(info.message)
const from = m.key.remoteJid
const content = JSON.stringify(info.message)
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''


global.db = JSON.parse(fs.readFileSync('./BANCO DE DADOS/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
...(global.db || {})
}
let dudinha = db.game.dudinha = []
let dudinha2 = db.game.dudinha2 = []
let dudinha3 = db.game.dudinha3 = []
let dudinha4 = db.game.dudinha4 = []
let dudinha5 = db.game.dudinha5 = []
let dudinha6 = db.game.lontong = []
let dudinha6_duda = db.game.dudinha6_duda = []
let dudinha7 = db.game.dudinha7 = []
let dudinha8 = db.game.dudinha8 = []
let dudinha9 = db.game.dudinha9 = []
let dudinha10 = db.others.dudinha10 = []


/// FUNÇÕES DE ANTIS/EXPORTAÇÃO \\
const antifake = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antifake.json'))
const welkom = JSON.parse(fs.readFileSync('./BANCO DE DADOS/grupos/bemvindo.json'));
const adeuscara = JSON.parse(fs.readFileSync('./BANCO DE DADOS/grupos/adeus.json'));







/////// PUXADINHA DI CRIAA PARA O MENU \\\\\
const { menu } = require("./menu/menu.js")


const antilinkhard = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antilinkhard.json'))



var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

//=================================\\



const isGroup = from.endsWith('@g.us')
const isAdeusCara = m.isGroup ? adeuscara.includes(from) : false
const isWelkom = m.isGroup ? welkom.includes(from) : false
const isAntifake = m.isGroup ? antifake.includes(from) : false
const bemvindojson = JSON.parse(fs.readFileSync('./BANCO DE DADOS/grupos/bvmsg.json'));
const groupoid = []
for (let obj of bemvindojson) {
groupoid.push(obj.id)
}

if (m.isGroup && !JSON.stringify(bemvindojson).includes(from)) {

bemvindojson.push({
 id: from,
mensagembv: 'Bem Vindo!'
})
fs.writeFileSync('./BANCO DE DADOS/grupos/bvmsg.json', JSON.stringify(bemvindojson, null, 2) + '\n')
 }

var budy = (typeof m.text == 'string' ? m.text : '')
 
 
 




 
 
 //////// FUNÇÃO DO NOME / NÚMERO / ETC \\\\\\\\
NomeDoBot = global.NomeDoBot
NickDono = global.NomeDoDono
NumeroDoDono = global.NumeroDoDonoA
 
 //// FUNÇÃO DO LINK DO GRUPO QUE O BOT ESTA.
/* const LinkDoGrupo = await duda.groupInviteCode(from)*/
 
 
 /// FUNÇÃO PREFIXO
var prefixo = global.prefixo;
 
var prefix = global.prefixo;
 
///// FUNÇÃO DE VERIFICAÇÃO ( RECONHECENDO O PREFIXO ))
const isCmd = body.startsWith(prefixo) || body.startsWith(prefix) 
 
 
/// FUNÇÃO DE CMD \\
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
 
 
 //FUNÇÕES DE REQUIRE ( QUERY )
const args = body.trim().split(/ +/).slice(1)
 
 // FUNÇÃO TESTE \\
 
const isBot = info.key.fromMe ? true : false

 //// FIMM \\
/// FUNÇÃO DO NOME / NUMERO / DONO / LOGO DA FOTO DO MENU / SENDER
const pushname = m.pushName || "DUDA-BASE"

const logo = global.menu


//// AI MN, POR GENTILEZA MRM... DEIXA OS CRÉDITOS 🫶🏾
/// MUDA NADA AKI NÃO, POR GENTILEZA!\\\
// Contato do dono
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'FN:ALIZIN-DEV\n' // Nome completo
+ 'ORG: EQUIPE: NAIPE;\n' // A organização do contato
+ 'TEL;type=CELL;type=VOICE;waid=5521989701174:+55 21 98970 1174\n'
+ 'END:VCARD' // Fim do ctt

///// BOMM USO COM A BASE AI MN \\\\\
//// FÉ, FÉ, FÉ \\\\\\
 
const nome = m.pushName || "DUDA-BASE"

const NumeroDoDonoA = await duda.decodeJid(global.NumeroDoDonoA)

const NomeBot = await duda.decodeJid(global.NomeDoBot)

const nomeDono = await duda.decodeJid(global.name)

const NumeroDoBot = await duda.decodeJid(duda.user.id)

const dono = global.NumeroDoDonoA
const Dono = [ ...global.NumeroDoDonoA].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

const itsMe = m.sender == NumeroDoBot ? true : false

const text = q = args.join(" ")

const texto = q = args.join(" ")

const quoted = m.quoted ? m.quoted : m

const sender = m.isGroup ? info.key.participant : info.key.remoteJid


///DATA HORAS E ETC/// 
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const dataa = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')


const mensagemm = m.type == 'audioMessage' ? 'Áudio' : m.type == 'stickerMessage' ? 'Figurinha' : m.type == 'imageMessage' ? 'Imagem' : m.type == 'videoMessage' ? 'Vídeo' : m.type == 'documentMessage' ? 'Documento' : m.type == 'contactMessage' ? 'Contato' : m.type == 'viewOnceMessage' ? 'Visualização única': m.type == 'locationMessage' ? 'Localização' : 'Mensagem'

 const mime = (quoted.msg || quoted).mimetype || ''

const isMedia = /image|video|sticker|audio/.test(mime)


 const groupMetadata = m.isGroup ? await duda.groupMetadata(m.chat).catch(e => {}) : ''

 const groupName = m.isGroup ? groupMetadata.subject : ''
 
 const NomeGrupo = m.isGroup ? groupMetadata.subject : ''

 const participants = m.isGroup ? await groupMetadata.participants : ''
 
 const participantes = m.isGroup ? await groupMetadata.participants : ''

 const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
 
 const PrecisaSerAdm = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''

 const groupNumeroDoDonoA = m.isGroup ? groupMetadata.NumeroDoDonoA : ''
 
 const GrupoDoNumeroDoDono = m.isGroup ? groupMetadata.NumeroDoDonoA : ''

const isBotAdmins = m.isGroup ? groupAdmins.includes(NumeroDoBot) : false

const BotPrecisaSerAdm = m.isGroup ? groupAdmins.includes(NumeroDoBot) : false

const isBotGroupAdmins = m.isGroup ? groupAdmins.includes(NumeroDoBot) : false

const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

const VcPrecisaSerAdm = m.isGroup ? groupAdmins.includes(m.sender) : false
 
 const groupDesc = m.isGroup ? groupMetadata.desc : ''
 
 const DescricaoDoGrupo = m.isGroup ? groupMetadata.desc : ''
 
 const groupMembers = m.isGroup ? groupMetadata.participants : ''
 
 const MembrosDoGrupo = m.isGroup ? groupMetadata.participants : ''
 
 const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? duda.sendMessage(from, {text: teks.trim(), mentions: memberr}) : duda.sendMessage(from, {text: teks.trim(), mentions: memberr})
}

const mencionar = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? duda.sendMessage(from, {text: teks.trim(), mentions: memberr}) : duda.sendMessage(from, {text: teks.trim(), mentions: memberr})
}

const antilinkgp = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antilinkgp.json'))


//======================================\\
const isBanchat = m.isGroup ? bancht.includes(from) : false

const isAntilinkHard = isGroup ? antilinkhard.includes(from) : false

const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false

async function AntilinkHardF() {
if(isUrl(budy2) && isAntilinkHard && isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(command == "tiktok" || command == 'tiktok2' || command == "facebook" || command == "instagram" || command == "tiktok" || command == "twitter" || command == "ytmp3" || command == "ytmp4" || command == "play") return
var linkgpp = await duda.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return reply('link do nosso grupo, não irei remover.. ')
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(type === "listResponseMessage") return
if(budy2.includes(`${linkgpp}`)) return 
reply('*link detectado, porém usuário é admin*')
}

if(isUrl(budy2) && isAntilinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(command == "tiktok" || command == "facebook" || command == 'tiktok2' || command == "instagram" || command == "tiktok" || command == "twitter" || command == "ytmp3" || command == "ytmp4" || command == "play") return
var linkgpp = await duda.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return reply('link do nosso grupo, não irei remover.. ')
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(type === "listResponseMessage") return
if(!JSON.stringify(groupMembers).includes(sender)) return
duda.sendMessage(from, { delete: {
remoteJid: from,
fromMe: false,
id: info.key.id,
participant: sender }})
duda.groupParticipantsUpdate(from, [sender], 'remove')
}
} 
AntilinkHardF()

if(isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
if(!isAntilinkgp) return
if(!isUrl(body)) return 
if(budy2.includes("chat.whatsapp.com/")){
if(!budy2.includes("chat.whatsapp.com/")) return
if(isBot) return 
var linkgpp = await duda.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('link do nosso grupo, não irei remover.. ')
if(isGroupAdmins) return reply("Você é adm, não removerei você..")
if(!JSON.stringify(groupMembers).includes(sender)) return
duda.sendMessage(from, { delete: {
remoteJid: from,
fromMe: false,
id: info.key.id,
participant: sender }})
duda.groupParticipantsUpdate(from, [sender], 'remove')
}
}

//BAN CHATS/GRUPOS
if (isBanchat && !isGroupAdmins && !Dono){
if (!isGroupAdmins && !Dono) return
if (budy2.startsWith('unbangp')){
if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido, ou seja não estou ouvindo ninguém`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./BANCO DE DADOS/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}

// Consts isQuoted
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
if (isImage) typeMessage = 'Image'
else if (isVideo) typeMessage = 'Video'
else if (isAudio) typeMessage = 'Audio'
else if (isSticker) typeMessage = 'Sticker'
else if (isContact) typeMessage = 'Contact'
else if (isLocation) typeMessage = 'Location'
else if (isProduct) typeMessage = 'Product'
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const pfvDeus = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "557999398421-1625944593@g.us" } : {}) }, message: { "liveLocationMessage": { "caption": `Usuário: ${pushname}` } } }


const reply = (texto) => {
duda.sendMessage(from, { text: texto }, {quoted: pfvDeus}).catch(e => {
console.log(e)
})
}

const enviar = (texto) => {
duda.sendMessage(from, { text: texto }, {quoted: pfvDeus}).catch(e => {
console.log(e)
})
}

const mandar = (texto) => {
duda.sendMessage(from, { text: texto }, {quoted: pfvDeus}).catch(e => {
console.log(e)
})
}

if (!duda.public) {
if (!m.key.fromMe) return
}



mess = {
aguarde: '*Pisa no freio aí amigo, tô enfiando já, ops enviando rsrs!*',
pronto: '【✔】Sucesso!【✔】',
formatoErrado: '【✘】Formato incorreto!! Por favor, leia o menu!【✘】',
error: {
naoSticker: '【✘】Isso não é uma figurinha【✘】',
url: '【✘】Erro no url【✘】',
},
somente: {
grupo: '『❗』Somente em grupos!『❗』',
dono: '【✘】Somente para o meu criador!【✘】',
adm: '『❗』Somente para Adms!『❗』',
botadm: '『❗』Eu preciso ter adm pra executar esse comando.『❗』',
}
}

msg = {
espera: '*Pisa no freio aí amigo, tô enfiando já, ops enviando rsrs!*',
gp: '『❗』Eu so posso executar esse comando em grupos.『❗』',
dono: 'Somente meu criador pode usar esse comando.',
adm: '『❗』Esse comando é so para adms『❗』',
botadm: '『❗』Eu preciso ter adm pra executar esse comando 『❗』'
}





// PÚBLICO E PRIVADO
if (!duda.public) {
if (!m.key.fromMe) return
}

//===============INTERAÇÃO NO TERMUX=====================
// ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙽𝙾 𝙿𝚅❗
if (!m.isGroup && isCmd) console.log( '\n ⠀╭══════⊷ ', color('[♦️] 𝐌𝜮𝐍𝐒𝜟𝐆𝜮𝐌 𝐍𝚯 𝐏𝐑𝐈𝐕𝜟𝐃𝚯 [♦️]','red'), '━━━━━━━━━━━━➪','\n',
color(' ➽ 𝐍𝐈𝐂𝐊 :','magenta'),color(pushname,'cyan'),'\n',
color(' ➽ 𝐂𝚯𝐌𝜟𝐍𝐃𝚯 :','magenta'),color(comando,'cyan'),'\n',
color(' ➽ 𝐇𝚯𝐑𝜟 :','magenta'),color(hora,'cyan'),'\n',
color(' ➽ 𝐃𝜟𝐓𝜟 :','magenta'),color(dataa,'cyan'),'\n',color(' ╰━━━━━━━━━━⊷ ','white'),color ('[♦️] 𝐃𝐔𝐃𝜟 𝐁𝚯𝐓 𝐌𝐃 [♦️] ','red'), '━━━━━━━━━━━━➪')

// ❗𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙽𝙾 𝙿𝚅❗
if (!isCmd && !m.isGroup) console.log( '\n ⠀╭══════⊷ ', color('[♦️] 𝐌𝜮𝐍𝐒𝜟𝐆𝜮𝐌 𝐍𝚯 𝐏𝐑𝐈𝐕𝜟𝐃𝚯 [♦️]','red'), '━━━━━━━━━━━━➪','\n',
color(' ➽ 𝐍𝐈𝐂𝐊 :','magenta'),color(pushname,'cyan'),'\n',
color(' ➽ 𝐌𝜮𝐍𝐒𝐆 :','magenta'),color(budy,'cyan'),'\n',
color(' ➽ 𝐇𝚯𝐑𝜟 :','magenta'),color(hora,'cyan'),'\n',
color(' ➽ 𝐃𝜟𝐓𝜟 :','magenta'),color(dataa,'cyan'),'\n',color(' ╰━━━━━━━━━━⊷ ','white'),color ('[♦️] 𝐃𝐔𝐃𝜟 𝐁𝚯𝐓 𝐌𝐃 [♦️] ','red'), '━━━━━━━━━━━━➪')

// ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾❗
if (isCmd && m.isGroup) console.log( '\n ⠀╭══════⊷ ', color('[♦️] 𝐌𝜮𝐍𝐒𝜟𝐆𝜮𝐌 𝜮𝐌 𝐆𝐑𝐔𝐏𝚯 [♦️]','red'), '━━━━━━━━━━━━➪','\n',
color(' ➽ 𝐆𝐑𝐔𝐏𝚯 :','magenta'),color(groupName,'cyan'),'\n',
color(' ➽ 𝐍𝐈𝐂𝐊 :','magenta'),color(pushname,'cyan'),'\n',
color(' ➽ 𝐂𝚯𝐌𝜟𝐍𝐃𝚯 :','magenta'),color(comando,'cyan'),'\n',
color(' ➽ 𝐇𝚯𝐑𝜟 :','magenta'),color(hora,'cyan'),'\n',
color(' ➽ 𝐃𝜟𝐓𝜟 :','magenta'),color(dataa,'cyan'),'\n',color(' ╰━━━━━━━━━━⊷ ','white'),color ('[♦️] 𝐃𝐔𝐃𝜟 𝐁𝚯𝐓 𝐌𝐃 [♦️] ','red'), '━━━━━━━━━━━━➪')

// ❗𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾❗
if (!isCmd && m.isGroup) console.log( '\n ⠀╭══════⊷ ', color('[♦️] 𝐌𝜮𝐍𝐒𝜟𝐆𝜮𝐌 𝜮𝐌 𝐆𝐑𝐔𝐏𝚯 [♦️]','red'), '━━━━━━━━━━━━➪','\n',
color(' ➽ 𝐆𝐑𝐔𝐏𝚯 :','magenta'),color(groupName,'cyan'),'\n',
color(' ➽ 𝐍𝐈𝐂𝐊 :','magenta'),color(pushname,'cyan'),'\n',
color(' ➽ 𝐌𝜮𝐍𝐒𝐆 :','magenta'),color(budy,'cyan'),'\n',
color(' ➽ 𝐇𝚯𝐑𝜟 :','magenta'),color(hora,'cyan'),'\n',
color(' ➽ 𝐃𝜟𝐓𝜟 :','magenta'),color(dataa,'cyan'),'\n',color(' ╰━━━━━━━━━━⊷ ','white'),color ('[♦️] 𝐃𝐔𝐃𝜟 𝐁𝚯𝐓 𝐌𝐃 [♦️] ','red'), '━━━━━━━━━━━━➪')


// RESPOSTA DO COMANDO COM MÍDIA 
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: duda.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, duda.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
duda.ev.emit('messages.upsert', msg)
}


switch(comando) {
//////// COMEÇO DOS PREFIXOS AKI TROPAA \\\\\\\\
//////// COMEÇO DOS PREFIXOS AKI TROPAA \\\\\\\\
//////// COMEÇO DOS PREFIXOS AKI TROPAA \\\\\\\\
//////// COMEÇO DOS PREFIXOS AKI TROPAA \\\\\\\




case 'help':// BY ALIZINDEV 
case 'cmds':// BY ALIZINDEV 
case 'comandos':// BY ALIZINDEV 
case 'menu':// BY ALIZINDEV 
FotoDaDudaBot = await getBuffer(`${logo}`) 
await duda.sendMessage(from, {image: FotoDaDudaBot, caption: menu(pushname, sender, data, hora, prefixo)}, {quoted: info})
break 




case 'bemvindo':// BY ALIZINDEV 
case 'welcome':// BY ALIZINDEV 
case 'varbemvindo':// BY ALIZINDEV 
if (!m.isGroup) return reply('Só em Grupo')
if (!isGroupAdmins) return reply('Você Não é Adm')
if (!isBotGroupAdmins) return reply('preciso ser adm')
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ja esta ativo')
welkom.push(from)
fs.writeFileSync('./BANCO DE DADOS/grupos/bemvindo.json', JSON.stringify(welkom))
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isWelkom) return reply('Ja esta Desativado')
pesquisar = from
processo = welkom.indexOf(pesquisar)
while (processo >= 0) {
welkom.splice(processo, 1)
processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./BANCO DE DADOS/grupos/bemvindo.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'bangp':// BY ALIZINDEV 
if (!m.isGroup) return reply(`So Em Grupos ${pushname}`)
if (!Dono) return reply(`so dono ${pushname}`)
if (isBanchat) return reply(`Este grupo ja está banido`)
bancht.push(from)
fs.writeFileSync('./BANCO DE DADOS/banchat.json', JSON.stringify(bancht))
reply(`Grupo banido com sucesso`)
break

case 'unbangp':// BY ALIZINDEV 
if (!isGroup) return reply(`So Em Grupos ${pushname}`)
if (!Dono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(`so dono ${pushname}`)
let cur = bancht.indexOf(from)
bancht.splice(cur, 1)
fs.writeFileSync('./BANCO DE DADOS/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
break


case 'autoban':// BY ALIZINDEV 
if (!m.isGroup) return reply('Você Não é Adm')
if (!isGroupAdmins && !Dono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if(isAdeusCara) return reply("Já está ativado.")
var ind = dbids.indexOf(from)
if(isAdeusCara) {
adeuscara[ind].actived = true
} else {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
}
fs.writeFileSync('./BANCO DE DADOS/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Ativou com sucesso o recurso de autoban neste grupo✔️`)
} else if (Number(args[0]) === 0) {
if(!isAdeusCara) return reply("Já está Desativado.")
var ind = dbids.indexOf(from)
if(isAdeusCara) {
adeuscara[ind].actived = false
} else {
adeuscara.push({
groupId: from,
actived: false,
number: []
})
}
fs.writeFileSync('./BANCO DE DADOS/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Desativou com sucesso o recurso de autoban neste grupo✔️`)
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'marcar':// BY ALIZINDEV 
if (!m.isGroup) return enviar('so em grupos')
if (!groupAdmins) return enviar('so adm')
try {
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*</>* @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
} catch(e) {
console.log(e)
enviar('erro...')
}
break

case 'admins':// BY ALIZINDEV 
case 'listadmins':// BY ALIZINDEV 
case 'listaadmins':// BY ALIZINDEV 
if (!m.isGroup) return enviar('so em grupos')
teks = `Lista de administradores do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break


case 'toimg':// BY ALIZINDEV 
if (!isQuotedSticker) return enviar('Marca uma fig, seu animal')
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
try {
duda.sendMessage(from, {image: buff}, {quoted: info})
} catch(e) {
console.log(e)
enviar('erro...')
}
break

case 'sticker': case 's': case 'stickergif': case 'sgif': {// BY ALIZINDEV 
if (/image/.test(mime)) {
media = await quoted.download()
let encmedia = await duda.sendImageAsSticker(from, media, m, { packname: global.author, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 40) return reply('Máximo 40 segundo!')
media = await quoted.download()
let encmedia = await duda.sendVideoAsSticker(from, media, m, { packname: global.author, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else {
reply(`Enviar imagem/vídeo com legenda ${prefixo + comando}\nDuração Video 1/40 segundo`)
}
}
break


case 'perfil':// BY ALIZINDEV 
try {
bla = fs.readFileSync('./BANCO DE DADOS/audios/criatura.mp3')
duda.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
ppimg = await duda.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = `${logo}`
}
const LetrasDoCmd = `
🥀🎭 Seu perfil 🎃💫

🧑‍💻 Nome: ${pushname}
🛸 Número: ${m.sender.split('@')[0]}
📅 Data: ${data}
🕗 Horário: ${hora}
♨️ Celular: ${info.key.id.length > 21 ? 'Android 🗿' : info.key.id.substring(0, 2) == '3A' ? 'IOS 😑' : 'WhatsApp web 😅'}`
SuaFtAleatoria = await getBuffer(ppimg)
duda.sendMessage(from, {image: SuaFtAleatoria, caption: LetrasDoCmd}, {quoted: info})
break

case 'suporte':// BY ALIZINDEV 
case 'dono':// BY ALIZINDEV 
case 'criador':// BY ALIZINDEV 
case 'creator':// BY ALIZINDEV 
case 'owner':// BY ALIZINDEV 
await delay(5000)
try {
duda.sendMessage(from, { contacts: { displayName: `ALIZIN-DEV`, contacts: [{ vcard }]
}})
} catch(e) {
console.log(e)
enviar('erro...')
}
break

case 'ping':// BY ALIZINDEV 
enviar(`Velocidade de resposta ${latensi.toFixed(4)} segundos`)
break

case 'sair':// BY ALIZINDEV 
if (!m.isGroup) return enviar('so para grupo')
if (!Dono) return enviar('so para dono')
enviar('Bye,Bye meus amigos amigos 😔👍🏾')
try {
await duda.groupLeave(from)
} catch(e) {
console.log(e)
enviar('erro...')
}
break

case 'executar':// BY ALIZINDEV 
if (!Dono) return enviar('so para dono')
if (args.length < 1) return enviar('Vou executar oq?')
try {
ev = body.slice(comando.length + 2)
JSON.stringify(eval(ev.replace('await', '')))
} catch(e) {
enviar(e)
console.log(e)
}
break

case 'gplink':// BY ALIZINDEV 
if (!m.isGroup) return enviar('so para grupo')
if (!groupAdmins) return enviar('So ADM Po')
if (!isBotGroupAdmins) return enviar('preciso ser ADM')
const link = await duda.groupInviteCode(from)
enviar(`Link do grupo : https://chat.whatsapp.com/${link}`)
break

case 'resetarlink':// BY ALIZINDEV 
if (!m.isGroup) return enviar('so para grupo')
if (!groupAdmins) return enviar('So ADM Po')
if (!isBotGroupAdmins) return enviar('preciso ser ADM')
try {
await duda.groupRevokeInvite(from)
enviar('Link de convite resetado com sucesso ✓')
} catch(e) {
console.log(e)
enviar('erro...')
}
break

case 'gp':// BY ALIZINDEV 
case 'grupo':// BY ALIZINDEV 
if (!m.isGroup) return enviar('so para grupo')
if (!groupAdmins) return enviar('So ADM Po')
if (!isBotGroupAdmins) return enviar('preciso ser ADM')
try {
if (!q) return reply(`EXEMPLE: ${prefixo}Abrir ou ${prefixo}Fechar`)
if (q == 'abrir') {
await duda.groupSettingUpdate(from, 'not_announcement')
enviar('Grupo aberto com sucesso')
}
if (q == 'fechar') {
await duda.groupSettingUpdate(from, 'announcement')
enviar('Grupo fechado com sucesso')
}
if (q == 'livrar') {
await duda.groupSettingUpdate(from, 'unlocked')
enviar('Grupo livre com sucesso')
}
if (q == 'limitar') {
await duda.groupSettingUpdate(from, 'locked')
enviar('Grupo limitado com sucesso')
}
} catch(e) {
console.log(e)
enviar('erro...')
}
break

case 'infogp':// BY ALIZINDEV 
if (!m.isGroup) return enviar('so para grupo')
if (!isBotGroupAdmins) return enviar('preciso ser ADM')
enviar(`
👻 Nome : ${groupName}
☔ Descrição : ${groupDesc}
🧭 Id : ${from}
📅 Data : ${data}
🕗 Horário : ${hora}
`)
break

case 'mudardk':// BY ALIZINDEV 
if (!m.isGroup) return enviar('so para grupo')
if (!groupAdmins) return enviar('So ADM Po')
if (!isBotGroupAdmins) return enviar('preciso ser ADM')
try {
await duda.groupUpdateDescription(from, `${q}`)
enviar('Descrição alterada com sucesso ✓')
} catch(e) {
console.log(e)
enviar('erro...')
}
break

case 'mudarnm':// BY ALIZINDEV 
if (!m.isGroup) return enviar('so para grupo')
if (!groupAdmins) return enviar('So ADM Po')
if (!isBotGroupAdmins) return enviar('preciso ser ADM')
try {
await duda.groupUpdateSubject(from, `${q}`)
enviar('Nome alterado com sucesso ✓')
} catch(e) {
console.log(e)
enviar('erro...')
}
break

case 'rebaixar':// BY ALIZINDEV 
if (!m.isGroup) return enviar('so para grupo')
if (!groupAdmins) return enviar('So ADM Po')
if (q < 1) return enviar('Digite o número, animal')
if (!isBotGroupAdmins) return enviar('preciso ser ADM')
try {
duda.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], 'demote')
enviar(`${q} Foi rebaixado a membro comum com sucesso ✓`)
} catch(e) {
console.log(e)
enviar('erro...')
}
break

case 'promover':// BY ALIZINDEV 
if (!isGroup) return enviar('so para grupo')
if (!groupAdmins) return enviar('So ADM Po')
if (q < 1) return enviar('Cade o número, mongolóide')
if (!isBotGroupAdmins) return enviar('preciso ser ADM')
try {
duda.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], 'promote')
enviar(`${q} Foi promovido a adm com sucesso ✓`)
} catch(e) {
console.log(e)
enviar('erro...')
}
break

case 'seradm':// BY ALIZINDEV 
if (!m.isGroup) return enviar('so para grupo')
if (!Dono) return enviar('so para dono')
if (!isBotGroupAdmins) return enviar('preciso ser ADM')
try {
duda.groupParticipantsUpdate(from, [`${sender}`], 'promote')
enviar('Okay, mestre agora você e adm ✓')
} catch(e) {
console.log(e)
enviar('erro...')
}
break

case 'sermembro':// BY ALIZINDEV 
if (!m.isGroup) return enviar('so para grupo')
if (!Dono) return enviar('so para dono')
if (!isBotGroupAdmins) return enviar('preciso ser ADM')
try {
duda.groupParticipantsUpdate(from, [`${sender}`], 'demote')
enviar('Okay, mestre agora você e um membro ✓')
} catch(e) {
console.log(e)
enviar('erro...')
}
break



case 'ban': // BY ALIZINDEV 
case 'kick':// BY ALIZINDEV 
case 'b':// BY ALIZINDEV 
{
if (!m.isGroup) return reply('so em grupo')
if (!isGroupAdmins) return reply('so adm')
if (!isBotGroupAdmins) return reply('preciso ser adm')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Responda a mensagem ou marque as pessoas que você quer remover do grupo')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if(m.sender.includes(mentioned)) return reply("😑")
if(NumeroDoBot.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(NumeroDoDonoA.includes(mentioned)) return reply('Não posso remover meu dono 😑')
let responseb = await duda.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") duda.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned, m.sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "406") duda.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned, m.sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "404") duda.sendMessage(from, {text: `@${mentioned.split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned, m.sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else duda.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [m.sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.includes(m.sender)) return reply("😑")
if(mentioned.includes(NumeroDoDonoA)) return reply("Não pode remover meu dono 😠")
if(mentioned.includes(NumeroDoBot)) return reply("😑")
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`Vai banir todo mundo mesmo?`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await duda.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
duda.sendMessage(from, {text: `${sexocomrato} participantes removido do grupo`, mentions: [m.sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else {
let responseb3 = await duda.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") duda.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned[0], m.sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "406") duda.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned[0], m.sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "404") duda.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned[0], m.sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else duda.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [m.sender], contextInfo:{forwardingScore:999, isForwarded:true}})
}
}
}
break
case 'antifake': // BY ALIZINDEV 
case 'varfake': // BY ALIZINDEV
if (!m.isGroup) return m.reply('Só em Grupo')
if (!isGroupAdmins) return m.reply('Você Não é Adm')
if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
if (args.length < 1) return m.reply('Ative pressione 1, Desativar pressione 0')
if (Number(args[0]) === 1) {
if (isAntifake) return m.reply(`O recurso de  Anti fake já está Ativado neste grupo: ${groupName}`)
if (isAntifake) return m.reply('*O recurso de Anti fake já estava ativo antes*')
antifake.push(m.chat)
fs.writeFileSync('./BANCO DE DADOS/antis/antifake.json', JSON.stringify(antifake))
reply(`Antifake foi ativado com sucesso neste grupo - : ${groupName}`)
} else if (Number(args[0]) === 0) {
if (!isAntifake) return reply(`O recurso de  Anti fake já está Desativado neste grupo.`)
antifake.splice(m.chat, 1)
fs.writeFileSync('./BANCO DE DADOS/antis/antifake.json', JSON.stringify(antifake))
reply(`Antifake foi Desativado com sucesso neste grupo - : ${groupName}`)
} else {
reply('「* Adicionar parâmetro 1 ou 0 ')
}
break
case 'sair':
case 'sairgp':
if(m.isGroup && !Dono) return reply("Este comando só o bot ou o dono pode executar..")
try {
duda.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'gerarnick':{ // BY ALIZINDEV 
if (!q) return reply(`Exemple\n${prefix+command} AlizinDev`)
let lizink_res = await fetchJson(`https://alizindev-api.onrender.com/api/tools/styletext?text=${q}&apikey=fc54fc77`)
let lizinn = lizink_res.result
let alizinnk =`*NICKS*\n\n`
for (let x of lizinn){
alizinnk +=`RESULTADO : ${x.result}\n\n`
}
reply(alizinnk)
}
break

case 'play': // BY ALIZINDEV 
try {
if( args.length < 1) return m.reply('*E o texto animal*')
m.reply('*🔍Procurando Música aguarde🔎*')
alizinnk = body.slice(6)
anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=brizaloka&query=${alizinnk}`)
Alizin = anu.resultados[0]
const MsgEncontrada = `*✅ Música encontrada ✅*\n*Titulo: ${Alizin.title}*\n*Link: ${Alizin.link}*\n*Duração: ${Alizin.duration} segs*\n*Views: ${Alizin.views}segs*\n*Canal:${Alizin.channel.name}*`
buff = await getBuffer(Alizin.thumbnail)
await duda.sendMessage(m.chat, {image: buff, caption: MsgEncontrada}, {quoted: pfvDeus})

/// JAJA MANDA
m.reply('*⬇️ Baixando Música ⬇️*')
try {
anumusic = await new Youtube().ytmp3(Alizin.link)
buffmusic = await getBuffer(anumusic.dl_link)
duda.sendMessage(m.chat, {audio: buffmusic, mimetype: 'audio/mp4'}, {quoted: pfvDeus})
}
catch (e){
console.log(e)
m.reply('*❌ Falha ao baixar áudio ❌*')
}
} catch (e){
console.log(e)
m.reply('Error tente com play')
}
break

case 'antilink':// BY ALIZINDEV 
if(!isGroup) return reply('so em grupo')
if (!isGroupAdmins) return reply('so adm po')
if (!isBotGroupAdmins) return reply('preciso ser adm')
if (args.length < 1) return reply(`ativar: 1 , desativar: 0\nEXEMPLE: ${prefixo}antilink 1`)
if (Number(args[0]) === 1) {
if (isAntilinkHard) return reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./BANCO DE DADOS/antis/antilinkhard.json', JSON.stringify(antilinkhard))
reply('-> Você ativou com sucesso o antilink neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntilinkHard) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./BANCO DE DADOS/antis/antilinkhard.json', JSON.stringify(antilinkhard))
reply('-> Você desativou com sucesso o antilink neste grupo✔️')
} else {
reply(`Para ligar
Digite: ${prefixo + command} 1

Para desligar:
Digite: ${prefixo + command} 0`)
}
break



default:

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if (budy2.includes("duda")){
if(info.key.fromMe) return 
reply("DUDA - BASE - SOLA")
}

if (budy === `${prefixo}`) {
duda.sendMessage(from, {text: `Se desejar visualizar o menu, por favor, digite ${prefixo}menu` }, {quoted: info })
} else if (budy.startsWith(`${prefixo}`)) {
duda.sendMessage(from, {text: `Esse Cmd Não Existe, Olhe O Menu Novamente, Humano.` }, {quoted: info })}

if (budy.startsWith('=>')) {
if (!Dono) return m.reply(mess.dono)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!Dono) return m.reply(mess.dono)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (AlizinErro) {
await m.reply(String(AlizinErro))
}
}

if (budy.startsWith('$')) {
if (!Dono) return m.reply(mess.dono)
exec(budy.slice(2), (AlizinErro, stdout) => {
if(AlizinErro) return m.reply(AlizinErro)
if (stdout) return m.reply(stdout)
})
}

 

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if ([''].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
duda.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (AlizinErro) {
m.reply(util.format(AlizinErro))
console.log(AlizinErro)
}
}


