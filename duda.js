
/*
👋 Saudações, usuário do bot! Eu sou ALIZIN-DEV, conhecido como { ANONYMOUS }, e estou aqui para apresentar esta versão da DUDA Bot, equipada com comandos simples. Reconheço que nem todos têm recursos para adquirir ou alugar um bot, então esta versão foi criada com esse propósito em mente.

Fique à vontade para personalizar o nome e outras configurações do bot, mas por gentileza, mantenha meus CRÉDITOS 🗿🍷.

Em caso de dúvidas ou problemas, estou à disposição!

📱 MEU NÚMERO: wa.me/5522997625501

🔗 MEU INSTAGRAM: @HACKZINHOX

ALIZIN DOMINA, SIM OU CLARO? 🙈
( TÔ GASTANDO )

Até logo! Se encontrar algum erro, por favor, me avise no privado.
wa.me/5522997625501

/// BY ALIZINDEV BY ALIZIN DEV \\\\
*/


require('./configuracao.js')

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
} = require('@whiskeysockets/baileys')


///// FUNÇÕES \\\\\
const fs = require('fs')

const util = require('util')

const chalk = require('chalk')

const { exec, spawn, execSync } = require("child_process")

const yts = require('yt-search');

const axios = require('axios')

const path = require('path')

const os = require('os')

const moment = require('moment-timezone')

const speed = require('performance-now')

const { performance } = require('perf_hooks')

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
getExtension,
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

//========COMEÇO ANTIS - CONSTS IMPORTANTE, PARA O FUNCIONAMENTO DOS CMDS=============\\

const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./BANCO DE DADOS/funções/addcmd.js');

const AlizinComandoss = JSON.parse(fs.readFileSync('./BANCO DE DADOS/funções/comandos.json'))

const AlizinLimitel = JSON.parse(fs.readFileSync('./BANCO DE DADOS/usuarios/flood.json'));

const welkom2 = JSON.parse(fs.readFileSync('./BANCO DE DADOS/usuarios/vacilo.json'));

const anticall = JSON.parse(fs.readFileSync('./BANCO DE DADOS/usuarios/anticall.json'));

const antifake = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antifake.json'))

const muted = JSON.parse(fs.readFileSync('./BANCO DE DADOS/usuarios/muted.json'))

const autostick = JSON.parse(fs.readFileSync('./BANCO DE DADOS/funções/autostickpc.json'))

const welcome_group2 = JSON.parse(fs.readFileSync('./BANCO DE DADOS/grupos/welcomegp2.json'));

const antilinkhard = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antilinkhard.json'))

const autofigu = JSON.parse(fs.readFileSync('./BANCO DE DADOS/grupos/autofigu.json'))

const antilinkgp = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antilinkgp.json'))

const antiporn = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antiporn.json'))

const bye_group2 = JSON.parse(fs.readFileSync('./BANCO DE DADOS/grupos/byegp2.json'));

const { upload } = require('./BANCO DE DADOS/funções/tourl');

const antiimg = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antiimg.json'))

const antiflood = JSON.parse(fs.readFileSync('./BANCO DE DADOS/usuarios/antiflood.json'));

const antisticker = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antisticker.json'))

const antinotas = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antinotas.json'))

const antictt = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antictt.json'))

const ContadorDeMensagem = JSON.parse(fs.readFileSync('./BANCO DE DADOS/grupos/countmsg.json'));

const premium = JSON.parse(fs.readFileSync('./BANCO DE DADOS/usuarios/premium.json'));

const anticatalogo = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/anticatalogo.json'))

const autosticker = JSON.parse(fs.readFileSync('./BANCO DE DADOS/funções/autostickpc.json'));

const antidoc = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antidoc.json'))

const antiloc = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antiloc.json'))

const antipv = JSON.parse(fs.readFileSync('./BANCO DE DADOS/usuarios/antipv.json'))

const antivid = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antivideo.json'))

const antiaudio = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antiaudio.json'))

//========COMEÇO=============\\



module.exports = duda = async (duda, m, messages, store) => {
try {
const info = messages ? messages[0]: messages[1]
if (!info.message) return 
if (info.key && info.key.remoteJid == 'status@broadcast') return


prefixo = prefixo
prefix = prefixo

const altpdf = Object.keys(info.message)
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]

//==============(BODY)================\\
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectReply.selectedRowId || info.text) : ''
 
//======================================\\

const args = body.trim().split(/ +/).slice(1)

const q = args.join(' ')

var isCmd = body.startsWith(prefixo)

const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null

const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null

//================(BADY)================\\
 
bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''

//======================================\\
bidy = bady.toLowerCase()

//=======CONST DO JOGO QUANDO========\\
const arrayQND = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']

const arrayQND2 = ['dias', 'semanas', 'meses', 'anos']
//================FIM===================\\

//===============(BUDY)=================\\

budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var budy2 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

//======================================\\

var pes = (type === 'conversation' && m.message.conversation) ? m.message.conversation : (type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''

//===========(ID DAS FIGUS)===========\\

const figura = Object.keys(m.message)[0] == "stickerMessage" ? m.message.stickerMessage.fileSha256.toString('base64') : ""

//=====================================\\

const listmsg = (from, title, desc, list) => { 
po = duda.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "Selecione","listType": 1,"sections": list}}, {})
return duda.relayWAMessage(po, {waitForAck: true})
}
listmes = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''

//========FORMAÇÕES/CONST)============\\
// FUNÇÃO DE SER DONO, BOT, E ETC \\

//LOGO\\
const logo = global.LogoMenu

//BOT OU NÃO\\
const isBot = m.key.fromMe ? true : false

//DONO\\
const donooriginal = [`${NumeroDoDonoA}@s.whatsapp.net`]

//FUNÇÃO - NOME [ BOT ]
const NomeDobot = global.NomeDoBot

//DONO
const NomeDoDono = global.NomeDoDono

//DONO
const numerodonoa = global.NumeroDoDonoA

//DONO
const numerodn = `${NumeroDoDonoA}`

//DONO 
const numerodono = `${NumeroDoDonoA}`


//FUNÇÃO DONO
const SoDono = donooriginal.includes(m.sender) || isBot

//PUXADINHA DI CRIA, DO MENU
const menu = require("./BANCO DE DADOS/MENU/menu.js");
const menu2 = require("./BANCO DE DADOS/MENU/menu2.js");

const { getGroupAdmins } = require('./BANCO DE DADOS/myfunc')

//NÚMERO DO BOT
const botNumber = duda.user.id.split(':')[0]+'@s.whatsapp.net'

//MESMA DA DE CIMA.
const NumeroDoBot = duda.user.id.split(':')[0]+'@s.whatsapp.net'

//SE SOU EU: A BOT
const itsMe = m.sender == botNumber ? true : false

//MESMA DA DE CIMA 
const SouEuNe = m.sender == botNumber ? true : false

//função texto 
const text = args.join(" ")
const texto = args.join(" ")

const from = m.key.remoteJid

//função grupo 
const isGroup = from.endsWith('@g.us')
const isGrupo = from.endsWith('@g.us')

const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''


// funções do meu comando: script
function cmdId(command){
cmdiid = AlizinComandoss.findIndex(function(cmd) {
if(cmd.cmd == command){
return cmd
}
})
return cmdiid
}

//ESPAÇO DOS IFS - VVIF

if(isCmd && cmdId(command) == -1 && !info.message.buttonsResponseMessage && !info.message.listResponseMessage){
AlizinComandoss.push({cmd: command, usos: 1})
fs.writeFileSync('./BANCO DE DADOS/funções/comandos.json', JSON.stringify(AlizinComandoss))
}else if(cmdId(command) > -1){
AlizinComandoss[cmdId(command)].usos += 1
fs.writeFileSync('./BANCO DE DADOS/funções/comandos.json', JSON.stringify(AlizinComandoss))
}

//========GRUPOS/CONST)=============\\

const groupMetadata = isGroup ? await duda.groupMetadata(from) : ''
const participants = isGroup ? await groupMetadata.participants : ''

//nome do grupo
const groupName = isGroup ? groupMetadata.subject : ''
const NomeGrupo = isGroup ? groupMetadata.subject : ''
const NomeGp = isGroup ? groupMetadata.subject : ''

const sender = isGroup ? m.key.participant : m.key.remoteJid
const pushname = m.pushName ? m.pushName : ''

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const arg = body.substring(body.indexOf(' ') + 1)


const argss = body.split(/ +/g)
const testat = body
const ants = body

//descrição do grupo 
const groupDesc = isGroup ? groupMetadata.desc : ''
const DescricaoGp = isGroup ? groupMetadata.desc : ''
const DescriçãoGp = isGroup ? groupMetadata.desc : ''

//grupo participantes 
const groupMembers = isGroup ? groupMetadata.participants : ''
const MembroDoGp = isGroup ? groupMetadata.participants : ''

//grupo adm, pra ver se é, etc.
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const GrupoAdm = isGroup ? getGroupAdmins(groupMembers) : ''

//=======================================\\


//=======(ADMS/DONO/ETC..CONST)========\\

const isPremium = premium.includes(sender)

//PRA SABER SE QUEM DEU O CMD, É ADM!
const isGroupAdmins = groupAdmins.includes(sender) || false 
const VcEadmSn = groupAdmins.includes(sender) || false 

//PRA VER SE O BOT É ADM
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const BotAdmSn = groupAdmins.includes(botNumber) || false

//==============================

function selecionarFigurinhasAleatorias(stickersData, quantity) {
const shuffledStickers = embaralharArray(stickersData);
return shuffledStickers.slice(0, quantity);
}

function embaralharArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
return array;
}


//==============================
async function aguardando () {
var AlizinDevv = [
"⌛10%",
"⏳30%",
"⌛50%",
"⏳80%",
"⌛100%",
"ENVIANDO..."
]
let { key } = await duda.sendMessage(from, {text: 'ENVIANDO...'}) 
for (let i = 0; i < AlizinDevv.length; i++) {
await duda.sendMessage(from, {text: AlizinDevv[i], edit: key });
}
}


const welcm = isGroup ? wlcm.includes(from) : true
const isAutoStick = autostick.includes(from)
const isAutoSticker = isGroup ? autosticker.includes(from) : false
const adeuscara = JSON.parse(fs.readFileSync('./BANCO DE DADOS/grupos/adeus.json'));
const welkom = JSON.parse(fs.readFileSync('./BANCO DE DADOS/grupos/bemvindo.json'));
const isWelkom = isGroup ? welkom.includes(from) : false
const isAdeusCara = isGroup ? adeuscara.includes(from) : false

const content = JSON.stringify(m.message)

//================COMEÇO DOS ANTIS======================


//===========(ANTIS-PROTEÇÕES)===========\\

const isAntifake = isGroup ? antifake.includes(from) : false

const isAntiCtt = isGroup ? antictt.includes(from) : false

const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false

const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false

const isAntiPorn = isGroup ? antiporn.includes(from) : false

const isAntiAudio = isGroup ? antiaudio.includes(from) : false	

const isBanchat = isGroup ? bancht.includes(from) : false
	
const isAntiImg = isGroup ? antiimg.includes(from) : false

const isAntiSticker = isGroup ? antisticker.includes(from) : false

const isAntiNotas = isGroup ? antinotas.includes(from) : false

const Antidoc = isGroup ? antidoc.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const isWelkom2 = isGroup ? welkom2.includes(from) : true

const groupIdWelcomed2 = []	

for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)

const groupIdBye2 = []

for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isWelcomed2 = (groupIdWelcomed2.indexOf(from) >= 0) ? true : false

const isByed2 = (groupIdBye2.indexOf(from) >= 0) ? true : false	

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false

const isViewOnce = (type == 'viewOnceMessage')


//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
 
//==========================================\\

selectedButton = (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''

//==========================================\\


const argsButton = selectedButton.trim().split(/ +/)

//==========================================\\

const getFileBuffer = async (mediakey, MediaType) => {

const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

 try {
ppimg = await duda.profilePictureUrl(sender)
 } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
 }
const userppbuff = await getBuffer(ppimg) 


const sendSticker = (from, filename, m) => {
duda.sendMessage(from, {sticker: filename}, {quoted: pfvDeus})
}

const sendImage = (ytb) => {
duda.sendMessage(from, {image: ytb}, {quoted:m})
}


const sendMess = (hehe, ytb) => {
duda.sendMessage(hehe, {text: ytb})
}

	const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
		
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
duda.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}		

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? duda.sendMessage(from, {text: teks.trim(), mentions: memberr}) : duda.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const costum = (pesan, tipe, target, target2) => {
duda.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}

const sendlistA = async (id, txt1, txt2, title1, btext, but) => {

const sections = but

const listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
duda.sendMessage(id, listMessage)
}


//=========HORAS=============

function FuncaoHora(segundos){
function HoraFuncao(s){
return (s < 10 ? '0' : '') + s;
}
var horas = Math.floor(segundos / (60*60));
var minutos = Math.floor(segundos % (60*60) / 60);
var segundos = Math.floor(segundos % 60);
return `${HoraFuncao(horas)} HORAS ${HoraFuncao(minutos)} MINUTOS ${HoraFuncao(segundos)} SEGUNDOS`
}



const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'Boa madrugada'
} 
if(time2 > "05:30:00"){
var tempo = 'Bom dia'
}
if(time2 > "12:00:00"){
var tempo = 'Boa tarde'
}
if(time2 > "19:00:00"){
var tempo = 'Boa noite'
}



const pfvDeus = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "557999398421-1625944593@g.us" } : {}) }, message: { "liveLocationMessage": { "caption": `Usuário: ${pushname}` } } }

const reply = (texto) => {
duda.sendMessage(from, { text: texto }, {quoted:m}).catch(e => {
console.log(e)
})
}



//=====================================

duda.createMessage = async (jidnya, kontennya, optionnya) => {
return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: duda.authState.creds.me.id,upload: duda.waUploadToServer})
}
//=====================================


function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}

//=============DATA=============

const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const dataa = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

//=====================================

//=====================================

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

//===========(enviar.espere)=============\\
const { mensagens } = require('./BANCO DE DADOS/funções/aleatoria.js');

const { sortear } = require('./BANCO DE DADOS/funções/aleatoria.js');

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 
//========================================\\


//=====================================

enviar = {
espere: `${enviarmen}`,
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: '<❗> Este comando só pode ser utilizado em grupo.',
premium: '<❗> Este pedido é so para usuários premium.',
mod: `<❗> ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${global.NomeDoDono}*`,
banido: '<❗> Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque.' ,
donosmt: '<❗> Este é um recurso especial para o meu Mestre.',
donosmt2: '<❗> Este é um recurso especial para o meu Mestre.',
adm: '<❗> Este comando só pode ser usado por administradores do grupo.',
Badmin: '<❗> Este comando só pode ser usado quando o bot se tornar administrador.',
}
}
//=====================================

const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
duda.sendMessage(id, buttonMessage, {quoted: vr})
}

//=====================================


const enviarbutao = (from, text, footer, buttons) => {
return duda.sendMessage(from, { text: text, footer: footer, templateButtons: buttons, quoted: pfvDeus})
}

//=====================================



const enviarimg = (imageDir, caption) => {
duda.sendMessage(from, {
image: fs.readFileSync(imageDir),
caption: caption
})
}

 
// ENVIAR BOTÃO COM IMAGEM
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
buttons: but,
headerType: 4
}
duda.sendMessage(id, buttonMessage, {quoted: vr})
}


//========AUTOFIGU-GP/AUTOFIGU-PV=============

const enviarfigu = async (figu, tag) => {
AlizinTexto = fs.readFileSync(figu)
duda.sendMessage(from, {sticker: AlizinTexto}, {quoted: info})
}

const enviarfiguUrl = async (link) => {
ranp = getRandom('.gif')
AlizinAuga = getRandom('.webp')
ini_buffer = `${link}`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${AlizinAuga}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(AlizinAuga)
duda.sendMessage(from, {sticker: buff}, {quoted: info}).catch(e => {
})
fs.unlinkSync(AlizinAuga)
})
}

let budai = budy.toLowerCase()

if (budai.startsWith("duda ban")) {
if (!SoDono) return reply(`Comando bloqueado devido a banimento do número.`)
if (!isGroup) return reply('Este comando só funciona em grupos.')
if (!isBotGroupAdmins) return reply('O bot precisa ser um administrador para fazer isso.')
if (!isGroupAdmins) return reply('Você precisa ser um administrador para banir.')
let users = info.mentionedJid[0] || info.quoted ? info.quoted.sender : testa.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
if (users === '@s.whatsapp.net') return reply('Marque alguém ou adicione um número.')
if (botNumber.includes(users)) return reply('Não posso banir a mim mesmo.')
if (numerodono.includes(users)) return reply('Não posso banir meu mestre.')
try {
await duda.groupParticipantsUpdate(from, [users], 'remove')
reply('Usuário banido com sucesso.')
} catch {
reply('Erro ao remover usuário do grupo.')
}
}

if (budai.startsWith("duda reviver")) {
if (!SoDono) return reply(`Comando bloqueado devido a banimento do número.`)
if (!isGroup) return reply('Este comando só funciona em grupos.')
if (!isBotGroupAdmins) return reply('O bot precisa ser um administrador para fazer isso.')
if (!isGroupAdmins) return reply('Você precisa ser um administrador para reviver.')
let users = info.mentionedJid[0] || info.quoted ? info.quoted.sender : testa.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
if (users === '@s.whatsapp.net') return reply('Marque alguém ou adicione um número.')
try {
await duda.groupParticipantsUpdate(from, [users], 'add')
reply('Usuário revivido com sucesso.')
} catch {
reply('Erro ao reviver usuário do grupo.')
}
}

if (budai.startsWith("duda promover")) {
if (!isGroup) return reply('Este comando só funciona em grupos.')
if (!isBotGroupAdmins) return reply('O bot precisa ser um administrador para fazer isso.')
if (!isGroupAdmins) return reply('Você precisa ser um administrador para promover.')
let users = info.mentionedJid[0] || info.quoted ? info.quoted.sender : testa.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
if (users === '@s.whatsapp.net') return reply('Marque alguém ou adicione um número.')
try {
await duda.groupParticipantsUpdate(from, [users], 'promote')
reply('Usuário promovido com sucesso.')
} catch {
reply('Erro ao promover usuário do grupo.')
}
}

if (budai.startsWith("duda rebaixar")) {
if (!isGroup) return reply('Este comando só funciona em grupos.')
if (!isBotGroupAdmins) return reply('O bot precisa ser um administrador para fazer isso.')
if (!isGroupAdmins) return reply('Você precisa ser um administrador para rebaixar.')
let users = info.mentionedJid[0] || info.quoted ? info.quoted.sender : testa.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
if (users === '@s.whatsapp.net') return reply('Marque alguém ou adicione um número.')
try {
await duda.groupParticipantsUpdate(from, [users], 'demote')
reply('Usuário rebaixado com sucesso.')
} catch {
reply('Erro ao rebaixar usuário do grupo.')
}
}

if (budai.startsWith("duda fechargp")) {
if (!isGroup) return reply('Este comando só funciona em grupos.')
if (!isBotGroupAdmins) return reply('O bot precisa ser um administrador para fazer isso.')
if (!isGroupAdmins) return reply('Você precisa ser um administrador para fechar o grupo.')
await duda.groupSettingUpdate(from, 'announcement')
}
if (budai.startsWith("duda abrirgp")) {
if (!isGroup) return reply('Este comando só funciona em grupos.')
if (!isBotGroupAdmins) return reply('O bot precisa ser um administrador para fazer isso.')
if (!isGroupAdmins) return reply('Você precisa ser um administrador para abrir o grupo.')
await duda.groupSettingUpdate(from, 'not_announcement')
}



if(isAutoSticker &&  !m.key.fromMe && isGroup) {
async function autofiguf() {
await setTimeout(async() => {

if(budy.includes(`${prefixo}sticker`) || budy.includes(`${prefixo}s`) || budy.includes(`${prefixo}stk`) || budy.includes(`${prefixo}st`) || budy.includes(`${prefixo}fsticker`) || budy.includes(`${prefixo}f`) || budy.includes(`${prefixo}fstiker`)) return

if(type === "videoMessage") {
if ((isMedia && info.message.videoMessage.seconds < 20)){
AlizinTentando  = getRandom('.'+await getExtension(info.message.videoMessage.mimetype))
buffimg = await getFileBuffer(info.message.videoMessage, 'video')
fs.writeFileSync(AlizinTentando , buffimg)
const media = AlizinTentando 
AlizinAuga = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'manu')} ${AlizinAuga} -o ${AlizinAuga}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${AlizinAuga}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(AlizinAuga)
duda.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(AlizinAuga)
})
} 
}

if(type === "imageMessage") {
AlizinTentando  = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
buffimg = await getFileBuffer(info.message.imageMessage, 'image')
fs.writeFileSync(AlizinTentando , buffimg)
const media = AlizinTentando 
AlizinAuga = getRandom('.webp')
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${AlizinAuga}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(AlizinAuga)
duda.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(AlizinAuga)
})
}
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

const GroupsMutedActived = []
for(let obj of muted) {
GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
reply('*Eu avisei, vou meter o martelo do ban em tu 😡')
setTimeout(async () => {
duda.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
return
}

//======================================\\

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
duda.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}

//======================================\\

//BAN CHATS/GRUPOS
if (isBanchat && !isGroupAdmins && !SoDono){
if (!isGroupAdmins && !SoDono) return
if (budy2.startsWith('unbangp')){
if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido, ou seja não estou ouvindo ninguém`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./BANCO DE DADOS/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}

//===============(simih)=============\\
const simih = async (text) => {
	try {
data = await fetchJson(`https://simsimi.info/api/?text=${text}&lc=pt`, {method: 'get'})
simi = `${data.message}`
return simi
} catch {
return 
}
}

async function AntilinkHardF() {
if(isUrl(budy2) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(command == "tiktok" && command == "facebook" && command == "instagram" && command == "tiktok" && command == "twitter" && command == "ytmp3" && command == "ytmp4" && command == "play") return
linkgpp = await duda.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(type === "listResponseMessage") return
if(budy2.includes(`${linkgpp}`)) return 
reply('*Link detectado, porém usuário é admin*')
}

if(isUrl(budy2) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(command == "tiktok" && command == "facebook" && command == "instagram" && command == "tiktok" && command == "twitter" && command == "ytmp3" && command == "ytmp4" && command == "play") return
linkgpp = await duda.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(type === "listResponseMessage") return
reply('*Link detectado, punindo usuário...*')
if(!JSON.stringify(groupMembers).includes(sender)) return
duda.groupParticipantsUpdate(from, [sender], 'remove')
}
} 
AntilinkHardF()

if(isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
if(!isAntilinkgp) return
if(!isUrl(body)) return 
if(isGroupAdmins) return reply("Você é adm, não removerei você..") 
if(budy2.includes("chat.whatsapp.com/")){
if(!budy2.includes("chat.whatsapp.com/")) return
if(isBot) return 
linkgpp = await duda.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')
reply('*Link de grupo detectado, punindo usuário...*')
if(!JSON.stringify(groupMembers).includes(sender)) return
duda.groupParticipantsUpdate(from, [sender], 'remove')
}
}

//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (m.key.fromMe) return
if(isGroupAdmins) return duda.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: pfvDeus})
await duda.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: pfvDeus})
setTimeout(async function () {
duda.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if (m.key.fromMe) return
if(isGroupAdmins) return duda.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: pfvDeus})
await duda.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: pfvDeus})
setTimeout(async function () {
duda.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if (m.key.fromMe) return
if(isGroupAdmins) return duda.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: pfvDeus})
await duda.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: pfvDeus})
setTimeout(async function () {
duda.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//=============BLOCKCMD===============\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && getComandoBlock(from).includes(command))return reply('comando blockeado')
	
//===============FIM====================\\

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
if(type == 'stickerMessage') return
let verificar = body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && body.length < 100) return
await duda.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: pfvDeus})
setTimeout(async function () {
duda.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//FINALZIN ==============================>


//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return duda.sendMessage(from,{text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: pfvDeus})
await duda.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: pfvDeus})
setTimeout(async function () {
duda.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return duda.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: pfvDeus})
await duda.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: pfvDeus})
setTimeout(async function () {
duda.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
//=======================================\\

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length == groupMembers.length || info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length == groupMembers.length - 1) { 
reply("MEMBRO COM MENSAGEM DE MARCAÇÃO DE TODOS DO GRUPO, POR CONTA DISSO VOU REMOVER DO GRUPO, QUALQUER COISA VÁ NO PV DO ADMINISTRADOR...")
duda.groupParticipantsUpdate(from, [sender], "remove")
}
}
//========(ANTI-PV-QUE-BLOQUEIA)======\\
if(isAntiPv && !isGroup && !SoDono && !m.key.fromMe && !isPremium){ 
reply(`[🚫] 𝗔𝗡𝗧𝗜𝗣𝗩 𝗤𝗨𝗘 𝗕𝗟𝗢𝗤𝗨𝗘𝗜𝗔! [🚫]\nUsuários que enviarem mensagem no privado, será bloqueado pois antipv está ativo, fale com meu dono para solicitar o desbloqueio: wa.me/${NumeroDoDonoA}`)
setTimeout(async () => {
duda.updateBlockStatus(sender, 'block')
}, 1000)
return
}
//======================================\\

//===(ANTI-CALL)===\\
if (!isGroup && isAnticall) {
duda.ws.on('CB:call', async (callData) => {
var msgBlockPath = `./BANCO DE DADOS/msg_block-${sender}.json`;

if (!fs.existsSync(msgBlockPath)) {
fs.writeFileSync(msgBlockPath, JSON.stringify("Olá! O recurso de bloqueio de chamadas está ativado. Estou bloqueando chamadas indesejadas no momento.", null, 2));

var msgBlockContent = JSON.parse(fs.readFileSync(msgBlockPath));

if (callData.content[0].tag == 'offer') {
duda.sendMessage(callData.content[0].attrs['call-creator'], { text: msgBlockContent }).then(() => { 
duda.updateBlockStatus(callData.content[0].attrs['call-creator'], "block");
deleteFile(msgBlockPath);
});
}
}
});
}

///////////////////////


//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if(!isGroup && !isPremium && !SoDono && !m.key.fromMe && banChats === true) return 
const atibot = m.isBaileys
if (atibot === true) return 


//======================================\\
 
if(fs.existsSync(`./BANCO DE DADOS/limitar/limite-c_${from}.json`)) {
var limitecaracteres_on = JSON.parse(fs.readFileSync(`./BANCO DE DADOS/limitar/limite-c_${from}.json`))
var AlizinLimite = limitecaracteres_on.limite
} else {
var AlizinLimite = AlizinLimitel.AlizinLimite
}


//===================================== 

const enviarfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}
await duda.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }

//===================================== 

 const enviarfiguvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifVid(buff, options)
} else {
 buffer = await videoToWebp(buff)
}

await duda.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 

//=======================\\

const mencionar = ( foto, texto, membro, ids ) => {
( ids == null || ids == undefined || ids == false ) ? duda.sendMessage(from, { image: foto, caption: texto.trim(), contextInfo: { "mentionedJid": membro } }) : duda.sendMessage(from, { image: foto, caption: texto.trim(), contextInfo: { "mentionedJid": membro } })
}
//======================================\\

//========(CONTADOR-DE-MENSAGENS)========\\

const grupoIds = [];
const senderIds = [];
for (let obj of ContadorDeMensagem) {
grupoIds.push(obj.groupId);
}
const SalvarArquivoConjut = () => {
fs.writeFileSync('./BANCO DE DADOS/grupos/countmsg.json', JSON.stringify(ContadorDeMensagem, null, 2) + '\n');
};
const grupoIndex = grupoIds.indexOf(from);
if (isGroup && grupoIndex >= 0) {
const groupIdx = grupoIndex;
for (let obj of ContadorDeMensagem[groupIdx].numbers) {
senderIds.push(obj.id);
}
const senderIndex = senderIds.indexOf(sender);
if (senderIndex >= 0) {
const senderIdx = senderIndex;
ContadorDeMensagem[groupIdx].numbers[senderIdx].messages += 1;
ContadorDeMensagem[groupIdx].numbers[senderIdx].cmdMessages += isCmd ? 1 : 0;
SalvarArquivoConjut();
} else {
const messages = 1;
const cmdMessages = isCmd ? 1 : 0;
ContadorDeMensagem[groupIdx].numbers.push({
id: sender,
messages: messages,
cmdMessages: cmdMessages
});
SalvarArquivoConjut();
}
} else if (isGroup) {
ContadorDeMensagem.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmdMessages: isCmd ? 1 : 0
}]
});
SalvarArquivoConjut();
}


//======================================\\

//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}

//=====================================
const isFiltered = (sender) => !!usedCommandRecently.has(sender)

const addFilter = (sender) => {
usedCommandRecently.add(sender)
setTimeout(() => usedCommandRecently.delete(sender), 4000) 
}

if (isAntiLinkHard && isUrl(budy) && isFiltered(sender) && isGroup) {
console.log(color('[SPAM]', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${budy}`), 'DE:', color(pushname))
if(info.key.fromMe) return 
return 
}



switch(comando) {
//////// COMEÇO DOS PREFIXOS AKI TROPAA \\\\\\\\
//////// COMEÇO DOS PREFIXOS AKI TROPAA \\\\\\\\
//////// COMEÇO DOS PREFIXOS AKI TROPAA \\\\\\\\
//////// COMEÇO DOS PREFIXOS AKI TROPAA \\\\\\\



case 'antipv':
try {
if (!SoDono) return reply(`Apenas dono pode ativar/desativar essa função..`)
if (Number(args[0]) === 1) {
if (isAntiPv) return reply('<❗> Já esta ativo.')
antipv.push('Ativado')
fs.writeFileSync('./BANCO DE DADOS/usuarios/antipv.json', JSON.stringify(antipv))
reply('O recurso está agora plenamente ativo, brilhando como um farol de inovação!: antipv no bot✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiPv) return reply('Já está desativado')
fs.writeFileSync('./BANCO DE DADOS/usuarios/anticall.json', JSON.stringify([]))
reply('Você realizou a desativação do recurso com sucesso: antipv no bot✔️')
} else {
reply('Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".')
}
} catch {
reply('Falha ao ativar')
}
break

case 'linkgppv':
case 'linkgrupopv':
reply(`<❗> Enviando link no seu pv, aguarde. `)
 if (!isGroup) return reply(enviar.msg.grupo)
 if (!isGroupAdmins) return reply(enviar.msg.adm)
 if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
 linkgc = await duda.groupInviteCode(from)
duda.sendMessage(sender, { text: 'https://chat.whatsapp.com/' + linkgc}, {quoted: pfvDeus})
 break
 
 
case 'contatoon':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (isAntiCtt) return reply('Ja esta ativo')
antictt.push(from)
fs.writeFileSync('./BANCO DE DADOS/antis/antictt.json', JSON.stringify(antictt))
reply('🌀 O recurso está agora plenamente ativo, brilhando como um farol de inovação!: anticontato neste grupo 📝')
break 
case 'contatooff':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!isAntiCtt) return reply('Ja esta Desativado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./BANCO DE DADOS/antis/antictt.json', JSON.stringify(antictt))
reply('‼️ Você realizou a desativação do recurso com sucesso: anticontato neste grupo✔️')
break

case 'groupname':
case 'nomegp':
{
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
AlizinTextot = args.join(" ")
duda.groupUpdateSubject(from, `${AlizinTextot}`)
duda.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info}).catch((err) => {
reply(`Ocorreu um erro`);
})
}
break

case 'descgp':
case 'descriçãogp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.adm)
AlizinTextoAlizinTexto = args.join(" ")
duda.groupUpdateDescription(from, `${AlizinTextoAlizinTexto}`)
duda.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: info})
break

case 'setfotogp':
case 'fotogp':
addFilter(from)
if (!isGroup) return reply('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser ADM')
if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
if (!isQuotedImage) return reply(`Use: ${prefixo + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
AlizinTentando  = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(AlizinTentando , buffimg)
medipp = AlizinTentando
await duda.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break


case 'promover':
case 'promote':
if (!isGroupAdmins && !SoDono) return reply('Somente administradores podem utilizar este comando.')
if (!isBotGroupAdmins) return reply('O bot precisa ser um administrador para realizar esta ação.')
if (!info.message.extendedTextMessage) return reply('Marque ou responda à mensagem da pessoa que você deseja promover.')
 mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] || info.message.extendedTextMessage.contextInfo.participant
if (botNumber.includes(mentioned)) return reply("Por favor, marque outra pessoa.")
let responsedm = await duda.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") {
duda.sendMessage(from, {text: `@${mentioned.split("@")[0]} agora é um administrador.️`, mentions: [mentioned, sender]})
} else if (responsedm[0].status === "404") {
duda.sendMessage(from, {text: `@${mentioned.split("@")[0]} não está no grupo️`, mentions: [mentioned, sender]})
} else {
duda.sendMessage(from, {text: `Ocorreu um erro️`, mentions: [sender]})
}
break;


case 'rebaixar':
case 'demote':
if (!isGroupAdmins && !SoDono) return reply("Apenas administradores podem usar este comando.")
if (!isBotGroupAdmins) return reply("Por favor, adicione o bot como administrador do grupo.")
if (!info.message.extendedTextMessage) return reply('Marque ou responda à mensagem da pessoa que você quer rebaixar.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] || info.message.extendedTextMessage.contextInfo.participant
if (botNumber.includes(mentioned)) return reply("Por favor, marque outra pessoa.")
let responsepm = await duda.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") {
duda.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou este grupo e não pode ser removido(a) dos administradores.️`, mentions: [mentioned, sender]})
} else if (responsepm[0].status === "200") {
duda.sendMessage(from, {text: `@${mentioned.split("@")[0]} perdeu o cargo de administrador.️`, mentions: [mentioned, sender]})
} else if (responsepm[0].status === "404") {
duda.sendMessage(from, {text: `@${mentioned.split("@")[0]} não está no grupo️`, mentions: [mentioned, sender]})
} else {
duda.sendMessage(from, {text: `Ocorreu um erro️`, mentions: [sender]})
}
break;

case 'ban':
case 'kick': 
if (!isGroup) 
return reply("Ops! Parece que este comando só funciona em grupos. 😅");
if (!SoDono) 
return reply("Ei! Somente o dono pode usar esse comando. 😎");
if (!isBotGroupAdmins) 
return reply('Desculpe, mas só posso executar essa ação se eu for um administrador do grupo. 🤖');
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) 
return reply('Ei! Marque uma mensagem ou mencione alguém para eu banir. 😄');
let mentioned;
if (info.message.extendedTextMessage.contextInfo.participant !== null && 
info.message.extendedTextMessage.contextInfo.participant != undefined && 
info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? 
info.message.extendedTextMessage.contextInfo.mentionedJid[0] : 
info.message.extendedTextMessage.contextInfo.participant;
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && 
info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid;
} else {
return;
}
if (mentioned.includes(sender)) 
return reply("Não banir a si mesmo, okay? 🤖");
if (mentioned.includes(numerodono)) 
return reply("Não mexa com o mestre, hein? 🧙‍♂️");
if (mentioned.includes(botNumber)) 
return reply("Você não pode banir a sua amiga robô! 🤖");
let responseb;
if (Array.isArray(mentioned)) {
if (mentioned.length > 1) {
a = 0;
for (let banned of mentioned) {
await delay(100);
let responseb2 = await duda.groupParticipantsUpdate(from, [banned], 'remove');
if (responseb2[0].status === "200") 
a = a + 1;
}
duda.sendMessage(from, {
text: `💥 Um total de ${a} participante(s) foram removidos do grupo com sucesso! Esperamos que a atmosfera melhore agora. 🚀`,
mentions: [sender]
});
} else {
responseb = await duda.groupParticipantsUpdate(from, [mentioned[0]], 'remove');
}
} else {
responseb = await duda.groupParticipantsUpdate(from, [mentioned], 'remove');
}
if (responseb[0].status === "200") {
duda.sendMessage(from, {
text: `🎉 Oh não! @${mentioned.split("@")[0]} foi expulso da festa! 🎈 Esperamos vê-lo novamente em breve! 👋`, 
mentions: [mentioned]
});
} else if (responseb[0].status === "406") {
duda.sendMessage(from, {
text: `🏰 Ops! @${mentioned.split("@")[0]} construiu este castelo e é o guardião dele! Não pode ser removido do reino! 🛡️`, 
mentions: [mentioned]
});
} else if (responseb[0].status === "404") {
duda.sendMessage(from, {
text: `👋 @${mentioned.split("@")[0]} já partiu para novas aventuras ou decidiu seguir outro caminho. Adeus! 🌟`, 
mentions: [mentioned]
});
} else {
duda.sendMessage(from, {
text: `🤖 Ops! Parece que algo deu errado ao tentar banir @${sender.split("@")[0]}. Vamos tentar novamente mais tarde! 💡`, 
mentions: [sender]
});
}
break;



case 'banghost':
case 'banghosts':
if (!isGroup) return reply(enviar.msg.grupo);
if (!SoDono) return reply("Só o dono pode executar este comando.");
if (!isBotGroupAdmins) return reply('O bot precisa ser um administrador do grupo para executar esta função.');
if (q.length < 1) return reply(`Exemplo: ${prefixo}banghosts 0\n\nIsso vai banir todos os membros com 0 mensagens, mas faça isso apenas se o bot tiver armazenado mensagens dos membros ativos do grupo.`);
async function banghst() {
const grupoIds = [];
const senderIds = [];
for (let obj of ContadorDeMensagem) {
grupoIds.push(obj.groupId);
}
const grupoIndex = grupoIds.indexOf(from);
if (grupoIndex >= 0) {
const groupIdx = grupoIndex;
for (let obj of ContadorDeMensagem[groupIdx].numbers) {
senderIds.push(obj.id);
}
for (let obj of groupMembers) {
const senderIndex = senderIds.indexOf(obj.id);
if (senderIndex >= 0) {
const senderIdx = senderIndex;
if (ContadorDeMensagem[groupIdx].numbers[senderIdx].messages <= args[0]) {
if (groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} está liberado da inspeção por ser administrador`, [obj.id], true);
} else if (numerodono.includes(obj.id)) {
mentions(`@${obj.id} está liberado da inspeção por ser dono`, [obj.id], true);
} else {
duda.groupParticipantsUpdate(from, [obj.id], 'remove');
 }
}
}
}
}
SalvarArquivoConjut();
}
setInterval(banghst, 1000);
break;

case 'setnamewpp':
case 'mudarnomewpp':
texto = args.join(` `)
if (!texto) return env(`Exemplo:\n\n*${prefixoo}AlizinDUDAdomina...*`)
if (!SoDono) return reply(`Somente meu dono.`)
const namew = texto
await duda.updateProfileName(namew)
reply('*Pronto! Meu Nome do whatsapp foi alterado.*')
break

case 'consultafake'://BY ALIZIN 
if (!q) return reply(`Por favor, insira o número.`);

const operadoras = ['TIM', 'VIVO', 'CLARO', 'OI', 'NEXTEL'];
const tipos = ['Tipo A', 'Tipo B', 'Tipo C', 'Tipo D', 'Tipo E'];
const nomes = [
'Ana Silva', 'Bruno Oliveira', 'Carla Souza', 'Daniel Santos', 'Erika Costa',
'Felipe Martins', 'Giovana Pereira', 'Henrique Lima', 'Isabela Almeida', 'João Pereira',
'Karina Fernandes', 'Lucas Silva', 'Mariana Oliveira', 'Nelson Costa', 'Patrícia Souza',
'Rafaela Mendes', 'Sérgio Pereira', 'Tatiane Rodrigues', 'Ubirajara Alves', 'Vanessa Santos'
];
const cpfs = [
'33082352855', '12345678900', '98765432100', '45612378900', '78912345600',
'15935785200', '45678912300', '98712345600', '65498732100', '32178965400',
'74185296300', '12378945600', '65412398700', '78945612300', '85296374100',
'36925814700', '25836914700', '14725836900', '95175345600', '75395145600'
];
const ruas = [
'Rua da Amizade', 'Rua das Flores', 'Rua dos Girassóis', 'Rua do Bosque', 'Rua das Palmeiras',
'Rua dos Ipês', 'Rua das Acácias', 'Rua dos Jasmins', 'Rua das Violetas', 'Rua dos Cravos',
'Rua das Margaridas', 'Rua do Lago', 'Rua das Águias', 'Rua dos Colibris', 'Rua dos Sabiás',
'Rua das Orquídeas', 'Rua dos Cactos', 'Rua dos Pinheiros', 'Rua dos Eucaliptos', 'Rua dos Jacarandás'
];
const bairros = [
'Jardim Primavera', 'Bairro Novo', 'Vila Esperança', 'Centro', 'Bairro Industrial',
'Vila Operária', 'Bairro dos Estados', 'Vila São Paulo', 'Bairro da Paz', 'Vila das Flores',
'Bairro São Jorge', 'Vila Rica', 'Bairro Santa Cruz', 'Vila Aurora', 'Bairro Bela Vista',
'Vila Progresso', 'Bairro Boa Esperança', 'Vila Harmonia', 'Bairro das Pedras', 'Vila Feliz'
];
const numeros = Array.from({ length: 20 }, (_, i) => i + 1);
const estados = ['SP', 'RJ', 'MG', 'BA', 'RS', 'SC', 'PR', 'GO', 'DF', 'ES', 'PE', 'RN', 'CE', 'AM', 'PA', 'MT', 'MS', 'TO', 'RO', 'AC'];
const cidades = [
'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Porto Alegre',
'Florianópolis', 'Curitiba', 'Goiânia', 'Brasília', 'Vitória',
'Recife', 'Natal', 'Fortaleza', 'Manaus', 'Belém', 'Cuiabá', 'Campo Grande',
'Palmas', 'Porto Velho', 'Rio Branco'
];
const ceps = [
'08508190', '02046000', '04003010', '11030000', '13073060', '15014350', '16015010', '18046320', '19013320', '19053290',
'21070200', '22010002', '23075500', '24030052', '25045010', '26010110', '27013200', '28020203', '29015180', '30015020'
];

let resultado = '';

for (let i = 0; i < 20; i++) {
resultado += `
🔍 CONSULTA TELEFÔNICA 🔎
• Operadora: ${operadoras[Math.floor(Math.random() * operadoras.length)]}
• Tipo: ${tipos[Math.floor(Math.random() * tipos.length)]}
• Nome: ${nomes[Math.floor(Math.random() * nomes.length)]}
• CPF: ${cpfs[Math.floor(Math.random() * cpfs.length)]}
• Endereço:
• Rua: ${ruas[Math.floor(Math.random() * ruas.length)]}
• Bairro: ${bairros[Math.floor(Math.random() * bairros.length)]}
• Número: ${numeros[Math.floor(Math.random() * numeros.length)]}
• Estado: ${estados[Math.floor(Math.random() * estados.length)]}
• Cidade: ${cidades[Math.floor(Math.random() * cidades.length)]}
• CEP: ${ceps[Math.floor(Math.random() * ceps.length)]}
`;
}
reply(resultado);
break//BY ALIZIN i NUNU

// DONO \\

case 'seradm': {
if (!SoDono && !m.key.fromMe) return reply(mess.owner)
reply(`Agora vc é adm do grupo.`)
AlizinDono = sender
duda.groupParticipantsUpdate(from, [AlizinDono], 'promote')
}
break
case 'sermembro': {
if (!SoDono && !m.key.fromMe) return reply(mess.owner)
reply(`Agora vc não é mais adm do grupo.`)
MembroAlizin = sender
await duda.groupParticipantsUpdate(from, [MembroAlizin], 'demote')
}
break
case 'sair':
case 'leave':
if (!SoDono) return reply(`so o: ${NomeDoDono}, que pode usar esse cmd.`)
await sleep (3000)
SairAlizin = sender
duda.groupLeave(from, [SairAlizin], "leave")
break

case 'varfake':
case 'fakenogp':
if (!m.isGroup) return m.reply('Só em Grupo')
if (!isGroupAdmins) return m.reply('Você Não é Adm')
if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
if (args.length < 1) return m.reply('Ative pressione 1, Desativar pressione 0')
if (Number(args[0]) === 1) {
if (isAntifake) return m.reply(`O recurso de Anti fake já está Ativado neste grupo: ${NomeGp}`)
if (isAntifake) return m.reply('*O recurso de Anti fake já estava ativo antes*')
antifake.push(m.chat)
fs.writeFileSync('./BANCO DE DADOS/antis/antifake.json', JSON.stringify(antifake))
reply(`Antifake foi ativado com sucesso neste grupo - : ${NomeGp}`)
} else if (Number(args[0]) === 0) {
if (!isAntifake) return reply(`O recurso de  Anti fake já está Desativado neste grupo.`)
antifake.splice(m.chat, 1)
fs.writeFileSync('./BANCO DE DADOS/antis/antifake.json', JSON.stringify(antifake))
reply(`Antifake foi Desativado com sucesso neste grupo - : ${NomeGp}`)
} else {
reply('「* Adicionar parâmetro 1 ou 0 ')
}
break

case 'anticatalogo':
case 'anticatalg':
try{
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (Number(args[0]) === 1) {
if (isAnticatalogo) return reply('Ja esta ativo')
anticatalogo.push(from)
fs.writeFileSync('./BANCO DE DADOS/antis/anticatalogo.json', JSON.stringify(anticatalogo))
reply('[🌹️] O recurso está agora plenamente ativo, brilhando como um farol de inovação!: anticatalogo neste grupo.')
} else if (Number(args[0]) === 0) {
if (!isAnticatalogo) return reply('Ja esta Desativado')
pesquisar = from
processo = anticatalogo.indexOf(pesquisar)
while(processo >= 0){
anticatalogo.splice(processo, 1)
processo = anticatalogo.indexOf(pesquisar)
}
fs.writeFileSync('./BANCO DE DADOS/antis/anticatalogo.json', JSON.stringify(anticatalogo))
reply('‼️ Você realizou a desativação do recurso com sucesso: anticatalogo neste grupo✔️')
} else {
reply('Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".')
}
} catch {
reply('Falha ao ativar')
}
break

case 'antiligar':
case 'antiligacao':
case 'antiligação':
try {
if (!SoDono  && !m.key.fromMe) return reply(mess.owner)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./BANCO DE DADOS/usuarios/anticall.json', JSON.stringify(anticall))
reply('O recurso está agora plenamente ativo, brilhando como um farol de inovação!: antiligação no bot✔️')
} else if (Number(args[0]) === 0) {
if (!isAnticall) return reply('Ja esta Desativado')
fs.writeFileSync('./BANCO DE DADOS/usuarios/anticall.json', JSON.stringify([]))
reply('Você realizou a desativação do recurso com sucesso: antiligação no bot✔️')
} else {
reply('Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".')
}
} catch {
reply('Falha ao ativar')
}
break


case 'antiloc':
case 'antilocalizao':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {		 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./BANCO DE DADOS/antis/antiloc.json', JSON.stringify(antiloc))
reply('O recurso está agora plenamente ativo, brilhando como um farol de inovação!: anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./BANCO DE DADOS/antis/antiloc.json', JSON.stringify(antiloc))
reply('Você realizou a desativação do recurso com sucesso: anti loc neste grupo✔️')
} else {
reply('Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

// GERAR, DOWNLOAD, ETC \\

case 'play':
case 'p'://BY ALIZIN// BY GLEYSON
duda.sendMessage(from, { react: { text: `⌛`, key: m.key }})
if (!q) return reply('Por favor, insira uma mensagem.')
try {
const responseData = await fetchJson(`http://br4.bronxyshost.com:4047/api/ytsrc/videos?q=${q}&apikey=kitagawaV6`)
const videoData = responseData.resultado[0]
const MensagemDescrição = `• *Título:* ${videoData.title}\n• *Descrição:* ${videoData.description}\n• *Duração:* ${videoData.timestamp} | ${videoData.seconds} segundos.\n• *Link:* ${videoData.url}`
const AudioUrl = `http://br4.bronxyshost.com:4047/api/dl/ytaudio?url=${videoData.url}&apikey=kitagawaV6`
duda.sendMessage(from, { react: { text: `✔️`, key: m.key }})
const LegendaFoto = { image: { url: `${videoData.image}` }, caption: MensagemDescrição }
const AnexoDeAudio = { audio: { url: AudioUrl }, fileName: `${videoData.title}.mp3`, mimetype: "audio/mp4" }
duda.sendMessage(from, LegendaFoto, { quoted: info })
duda.sendMessage(from, AnexoDeAudio, { quoted: info })
} catch (AlizinError) {
console.error(AlizinError)
return reply('Ocorreu um erro ao processar sua solicitação.')
}//BY ALIZIN// BY GLEYSON
break

case 'pix':
reply(`*B O Q U E T E*
*█║▌│║▌║▌│█│▌║│█│*
*¹²³ ³² ²³¹ ¹ ¹²³² ³²¹ ³²³ ¹²³*`)
break


case 'tag':
case 'hidetag':
case 'totag':
if (!isGroup) return reply("Este comando só funciona em grupos.")
if (!isGroupAdmins) return reply("Apenas administradores podem usar este comando.")
if (!isBotGroupAdmins) return reply("Por favor, adicione o bot como administrador do grupo.")
if (args.length < 1) return reply('Por favor, inclua a mensagem que deseja citar.')
let mensagem = args.join(' ')
let grupoInfo = await duda.groupMetadata(from)
let participantes = grupoInfo['participants']
let mencionados = []
participantes.forEach(participante => {
mencionados.push(participante.id.replace('c.us', 's.whatsapp.net'))
})
let AlizinOpcoes = {
text: `${mensagem}`,
mentions: mencionados,
quoted: info
}
duda.sendMessage(from, AlizinOpcoes)
break;
    
case 'boquete':
case 'boleto':
duda.sendMessage(from, { react: { text: `🍼`, key: m.key }});
try {
let ppimg;
const AlizinMencionarr = info.mentionedJid[0] || info.message.extendedTextMessage.contextInfo.participant;
const valorBoquete = `
┏ @${AlizinMencionarr.split('@')[0]}
*Pague o boleto no valor de* *R$${Math.floor(Math.random() * 9999)}*     
🍼 B O Q U E T E 🍼
█║▌│║▌║▌│█│▌║│█│
¹²³ ³² ²³¹ ¹ ¹²³² ³²¹ ³²³ ¹²³ 
`;
if (!AlizinMencionarr || !info) {
return reply('Mencione alguém ou responda a uma mensagem para pagar o boleto.');
}
if (botNumber.includes(AlizinMencionarr)) {
return reply('Por favor, marque outra pessoa.');
}
if (numerodono.includes(AlizinMencionarr)) {
return reply('Por favor, marque outra pessoa.');
}
try {
ppimg = await duda.profilePictureUrl(`${AlizinMencionarr.split('@')[0]}@c.us`, 'image');
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
duda.sendMessage(from, {
text: valorBoquete,
contextInfo: {
externalAdReply: {
title: '🧾 PAGUE O BOLETO 🧾',
body: ``,
thumbnail: await getBuffer(ppimg),
mediaType: 1, // 1 para imagem
showAdAttribution: true,
sourceUrl: `http://${NomeDoDono}.com`,
},
},
caption: ppimg,
mentions: [AlizinMencionarr],
}, { quoted: info });

} catch (error) {
console.error('Erro ao executar o comando boquete:', error);
return reply('Ocorreu um erro ao processar o comando.');
}
break;



case 'playvid':
case 'playvd':
case 'pvid':
case 'playvideo':
case 'playmp4'://BY ALIZIN// BY GLEYSON
if (!q) return reply('Por favor, insira uma mensagem.')
try {
const dadosResposta = await fetchJson(`http://br4.bronxyshost.com:4047/api/ytsrc/videos?q=${q}&apikey=kitagawaV6`)
const dadosVideo = dadosResposta.resultado[0]
const urlVideo = await getBuffer(`http://br4.bronxyshost.com:4047/api/dl/ytvideo?url=${dadosVideo.url}&apikey=kitagawaV6`)
const legendaMensagem = `• *Título:* ${dadosVideo.title}\n• *Descrição:* ${dadosVideo.description}\n• *Duração:* ${dadosVideo.timestamp} | ${dadosVideo.seconds} segundos.\n• *Link:* ${dadosVideo.url}`
await duda.sendMessage(from, { video: urlVideo, caption: legendaMensagem }, { quoted: info })
} catch (AlizinErro) {
console.error(AlizinErro)
return reply('Ocorreu um erro ao processar sua solicitação.')
}//BY ALIZIN// BY GLEYSON
break
  

case 'togif'://ESSE É PRA GIF, TENDEU?
case 'figupragif':
try {
if (!quoted) return reply('Envie uma mensagem respondida com um arquivo WebP para converter para GIF.');
if (!/webp/.test(quoted.mimetype)) return reply('Por favor, envie um arquivo WebP válido para converter para GIF.');
const { FiguMp4OuGif } = require('./BANCO DE DADOS/AlizinGifVideo.js');
const AlizinMedia = await duda.downloadAndSaveMediaMessage(quoted);
const AlizinMp4Link = await FiguMp4OuGif(AlizinMedia);
await duda.sendMessage(from, { video: { url: AlizinMp4Link, caption: '*Esta ai, heinn,By\nDuda-Base*' }, gifPlayback: true }, { quoted: info });
await fs.unlinkSync(AlizinMedia);
} catch (AlizinErro) {
console.error('Erro durante a conversão para MP4:', AlizinErro);
reply('Ocorreu um erro ao processar a conversão para MP4.');
}
break;

case 'togiff'://ESSE É PRA VIDEO, TENDEU?
case 'figupravideo':
case 'figupravd':
try {
if (!quoted) return reply('Envie uma mensagem respondida com um arquivo WebP para converter para GIF.');
if (!/webp/.test(quoted.mimetype)) return reply('Por favor, envie um arquivo WebP válido para converter para GIF.');
const { FiguMp4OuGif } = require('./BANCO DE DADOS/AlizinGifVideo.js');
const AlizinMedia = await duda.downloadAndSaveMediaMessage(quoted);
const AlizinMp4Link = await FiguMp4OuGif(AlizinMedia);
await duda.sendMessage(from, { video: { url: AlizinMp4Link, caption: '*Esta ai, heinn,By\nDuda-Base*' }}, { quoted: info });
await fs.unlinkSync(AlizinMedia);
} catch (AlizinErro) {
console.error('Erro durante a conversão para MP4:', AlizinErro);
reply('Ocorreu um erro ao processar a conversão para MP4.');
}
break;

case 'gerarlink':
case 'imgpralink':
try {
if (isQuotedImage) {
reply(enviar.espere)
boij = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : m
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande uma imagem com a legenda ${prefixo + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔')
}
break

case 'videourl':
case 'videopralink':
case 'imgpravideo':
try {
if ((isQuotedVideo) && args.length == 0) {
reply(enviar.espere)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : m
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande vídeo com a legenda ${prefixo + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é 30 segundos.')
}
break


case 'antidocumento':
case 'antidoc':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (Antidoc) return reply('Ja esta ativo')
antidoc.push(from)
fs.writeFileSync('./BANCO DE DADOS/antis/antidoc.json', JSON.stringify(antidoc))
reply('⚡ O recurso está agora plenamente ativo, brilhando como um farol de inovação!: anti documento neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!Antidoc) return reply('Ja esta Desativado')
pesquisar = from
processo = antidoc.indexOf(pesquisar)
while(processo >= 0){
antidoc.splice(processo, 1)
processo = antidoc.indexOf(pesquisar)
}
fs.writeFileSync('./BANCO DE DADOS/antis/antidoc.json', JSON.stringify(antidoc))
reply('‼️ Você realizou a desativação do recurso com sucesso: anti documento neste grupo✔️')
} else {
reply('Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".')
}
break

case 'antiimg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./BANCO DE DADOS/antis/antiimg.json', JSON.stringify(antiimg))
reply('O recurso está agora plenamente ativo, brilhando como um farol de inovação!: anti imagem neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./BANCO DE DADOS/antis/antiimg.json', JSON.stringify(antiimg))
reply('Você realizou a desativação do recurso com sucesso: anti imagem neste grupo✔️')
} else {
reply('Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".')
}
break

case 'antisticker':
case 'antifigu':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply('Já Esta ativo')
antisticker.push(from)
fs.writeFileSync('./BANCO DE DADOS/antis/antisticker.json', JSON.stringify(antisticker))
reply('O recurso está agora plenamente ativo, brilhando como um farol de inovação!: anti sticker neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return reply('Ja esta Desativado.')
antisticker.splice(from, 1)
fs.writeFileSync('./BANCO DE DADOS/antis/antisticker.json', JSON.stringify(antisticker))
reply('Você realizou a desativação do recurso com sucesso: anti sticker neste grupo✔️')
} else {
reply('Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".')
}
break

case 'antinotas':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiNotas) return reply('Já Esta ativo')
antinotas.push(from)
fs.writeFileSync('./BANCO DE DADOS/antis/antinotas.json', JSON.stringify(antinotas))
reply('O recurso está agora plenamente ativo, brilhando como um farol de inovação!: anti notas neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiNotas) return reply('Ja esta Desativado.')
antinotas.splice(from, 1)
fs.writeFileSync('./BANCO DE DADOS/antis/antinotas.json', JSON.stringify(antinotas))
reply('Você realizou a desativação do recurso com sucesso: anti notas neste grupo✔️')
} else {
reply('Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".')
}
break

case 'antivideo':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./BANCO DE DADOS/antis/antivideo.json', JSON.stringify(antivid))
reply('O recurso está agora plenamente ativo, brilhando como um farol de inovação!: anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./BANCO DE DADOS/antis/antivideo.json', JSON.stringify(antivid))
reply('Você realizou a desativação do recurso com sucesso: anti video neste grupo✔️')
} else {
reply('Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".')
}
break

case 'antiaudio':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./BANCO DE DADOS/antis/antiaudio.json', JSON.stringify(antiaudio))
reply('O recurso está agora plenamente ativo, brilhando como um farol de inovação!: anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiAudio) return reply('Ja esta Desativado')
antiaudio.splice(from, 1)
fs.writeFileSync('./BANCO DE DADOS/antis/antiaudio.json', JSON.stringify(antiaudio))
reply('Você realizou a desativação do recurso com sucesso: anti audio neste grupo✔️')
} else {
reply('Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".')
}
break

case 'grupoinfo':
case 'infogrupo':
case 'infogp':
case 'gpinfo':
case 'regras':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
ppUrl = await duda.profilePictureUrl(from, 'image')
buffer = await getBuffer(ppUrl)
const metadatqa = await duda.groupMetadata(from) 
duda.sendMessage(from, {image: buffer, caption: `*NOME* : ${groupName}\n\n*MEMBROS* : ${groupMembers.length}\n\n*ADMINS* : ${groupAdmins.length}\n\n*DESCRIÇÃO* : ${metadatqa.desc}`, thumbnail: null}, {quoted: pfvDeus})
break 


case 'limitecaracteres':
case 'limiteflood':
case 'limite':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply(`Digite ${prefixo + command} 1 para ativar`)
if (Number(args[0]) === 1) {
if (isAntiFlood) return reply(`⚡ O recurso limite de caracteres até ${AlizinLimite} já está ativo no grupo ⚡`)
antiflood.push(from)
fs.writeFileSync('./BANCO DE DADOS/usuarios/antiflood.json', JSON.stringify(antiflood))
reply(`<❗> ️O recurso limite de caracteres ${AlizinLimite} foi ativado nesse grupo.`)
} else if (Number(args[0]) === 0) {
 if (!isAntiFlood) return reply('<❗> O recurso limite de caracteres não está ativado no grupo .')
let position = false
Object.keys(antiflood).forEach((i) => {
if (antiflood[i] === from) {
position = i
}
})
if (position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./BANCO DE DADOS/usuarios/antiflood.json', JSON.stringify(antiflood))
}
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefixo + command} Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".`)
}
break

case 'aviso': {
if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMINISTRADOR`)
if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMINISTRADOR`)
let AlizinDevinj = `📢 *AVISO DO ADMINISTRADOR* 📢\n\n*Nós, administradores do grupo :\n${NomeGp}*\n\n${q ? q : 'AlizinDev'}\n\n`
for (let AlizinMenco of participants) {
AlizinDevinj += `° @${AlizinMenco.id.split('@')[0]}\n`
}
duda.sendMessage(m.chat, { text: AlizinDevinj, mentions: participants.map(AlizinnnZete => AlizinnnZete.id) }, { quoted: pfvDeus })
}
break

case 'antilinkhard':
case 'antilink':
try {
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (Number(args[0]) === 1) {
if (isAntiLinkHard) return reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./BANCO DE DADOS/antis/antilinkhard.json', JSON.stringify(antilinkhard))
reply('[⚡️] O recurso está agora plenamente ativo, brilhando como um farol de inovação!: antilink hardcore neste grupo.')
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./BANCO DE DADOS/antis/antilinkhard.json', JSON.stringify(antilinkhard))
reply('<❗> Você realizou a desativação do recurso com sucesso: antilink harcore neste grupo.')
} else {
reply('Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".')
}
} catch {
reply('Falha ao ativar')
}
break

case 'gerarcpf':
if(!isPremium) return reply(enviar.msg.premium)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await duda.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: pfvDeus})
break

case 'encurtalink':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://youtube.com/@AlizinDev`)
try {
linkar = args[0]
Alizinhoo = await axios.get(`https://tinyurl.com/api-create.php?url=${linkar}`)
reply(`${Alizinhoo.data}`)
} catch (e) {
console.log(e)
reply(`${e}`)
}
break

case 'listafake': {
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(mess.only.admin)
AlizinDevk = '𝗙𝗔𝗞𝗘𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢  \n'
mencoAlizin = []
for(let mem of groupMembers) {
if(!mem.id.startsWith(55)) {
AlizinDevk += `> @${mem.id.split('@')[0]}\n`
mencoAlizin.push(mem.id)
}
}
if(AlizinDevk.indexOf('>') < 0) return reply('Nenhum Fake Aqui')
duda.sendMessage(from, {text: AlizinDevk, mentions: mencoAlizin})
}
break

case 'antilinkgp':
try {
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (Number(args[0]) === 1) {
if (isAntilinkgp) return reply('Ja esta ativo')
antilinkgp.push(from)
fs.writeFileSync('./BANCO DE DADOS/antis/antilinkgp.json', JSON.stringify(antilinkgp))
reply('[⚡️] O recurso está agora plenamente ativo, brilhando como um farol de inovação!: antilinkgp.')
} else if (Number(args[0]) === 0) {
if (!isAntilinkgp) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkgp.indexOf(pesquisar)
while(processo >= 0){
antilinkgp.splice(processo, 1)
processo = antilinkgp.indexOf(pesquisar)
}
fs.writeFileSync('./BANCO DE DADOS/antis/antilinkgp.json', JSON.stringify(antilinkgp))
reply('<❗> Você realizou a desativação do recurso com sucesso: antilink de grupo.️')
} else {
reply('Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".')
}
} catch {
reply('Falha ao ativar')
}
break

case 'kickfake':
case 'banfake':
{
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
TemSimm = [];
for(let SerarSeTem of groupMembers) {
if(!SerarSeTem.id.startsWith("55") && SerarSeTem.id !== botNumber && SerarSeTem.admin === null) {
TemSimm.push(SerarSeTem.id)
}
}
if(TemSimm.length === 0) return reply("Nenhum número fake encontrado no grupo")
for(let SerarSeTem of TemSimm) {
await sleep(100)
duda.groupParticipantsUpdate(from, [SerarSeTem], 'remove')
}
AlizinDevin = `${TemSimm.length} números fake removido do grupo`
duda.sendMessage(from, {text: AlizinDevin, mentions: TemSimm})
}
break

case 'abrirgp': 
try {
if (!isGroup) return reply(`Só em grupo`)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args[0] === '1') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
await duda.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === '0') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
await duda.groupSettingUpdate(from, 'announcement')
} else {
reply('1 para abrir, 0 para fechar')
}
} catch {
reply('Falha ao ativar')
}
break 

case 'novolink':
case 'redefinir':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
await duda.groupRevokeInvite(from)
reply('link redefinido')
} catch(e) {
console.log(e)
reply(`erro`)
}
break

case 'bemvindo':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ja esta ativo')
welkom.push(from)
fs.writeFileSync('./BANCO DE DADOS/grupos/bemvindo.json', JSON.stringify(welkom))
reply('🌀 O recurso está agora plenamente ativo, brilhando como um farol de inovação!: bem vindo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isWelkom) return reply('Ja esta Desativado')
pesquisar = from
processo = welkom.indexOf(pesquisar)
while (processo >= 0) {
welkom.splice(processo, 1)
processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./BANCO DE DADOS/grupos/bemvindo.json', JSON.stringify(welkom))
reply('‼️ Você realizou a desativação do recurso com sucesso: bemvindo neste grupo✔️')
} else {
reply('Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".')
}
break

case 'varadeus':
case 'adeuscara':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAdeusCara) return reply('Ja esta ativo')
adeuscara.push(from)
fs.writeFileSync('./BANCO DE DADOS/grupos/adeus.json', JSON.stringify(adeuscara))
reply('🌀 O recurso está agora plenamente ativo, brilhando como um farol de inovação!: adeuscara neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAdeusCara) return reply('Ja esta Desativado')
pesquisar = from
processo = adeuscara.indexOf(pesquisar)
while (processo >= 0) {
adeuscara.splice(processo, 1)
processo = adeuscara.indexOf(pesquisar)
}
fs.writeFileSync('./BANCO DE DADOS/grupos/adeus.json', JSON.stringify(adeuscara))
reply('‼️ Você realizou a desativação do recurso com sucesso: adeuscara neste grupo✔️')
} else {
reply('Aᴛɪᴠᴇ Cᴏᴍ O Pᴏᴅᴇʀ Dᴏ "1" Oᴜ Dᴇsᴀᴛɪᴠᴇ Cᴏᴍ O Eɴᴄᴀɴᴛᴏ Dᴏ "0".')
}
break


case 'help':
case 'cmds':
case 'comandos':
case 'menu':
try {
duda.sendMessage(from, { react: { text: `🩸`, key: m.key }})
FotoDaDudaBot = await getBuffer(LogoMenu);
duda.sendMessage(from, { image: FotoDaDudaBot, caption: menu(pushname, sender, dataa, hora, prefixo) }, { quoted: info });
} catch (e) {
console.log(e);
}
break;

case 'help2':
case 'cmds2':
case 'comandos2':
case 'menu2':
try {
duda.sendMessage(from, { react: { text: `🩸`, key: m.key }})
FotoDaDudaBot = await getBuffer(`${logo}`);
duda.sendMessage(from, { image: FotoDaDudaBot, caption: menu2(pushname, sender, dataa, hora, prefixo) }, { quoted: info });
} catch (e) {
console.log(e);
}
break;

//================ANTIS=============


case 'status':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins && !SoDono  && !m.key.fromMe) return reply(enviar.msg.adm)
Statuse =
`╭╼╼╾❲ S T A T U S ❳╼╼╾╮
┃│
┃│➥ Antiaudio: ${isAntiAudio? '✓' : '✕'}
┃│➥ Antidocumento: ${Antidoc ? '✓' : '✕'}
┃│➥ Antifake: ${isAntifake ? '✓' : '✕'}
┃│➥ Antiimg: ${isAntiImg? '✓' : '✕'}
┃│➥ AntiContato ${isAntiCtt ? '✓' : '✕'}
┃│➥ AntiSticker: ${isAntiSticker ? '✓' : '✕'}
┃│➥ Antiligação: ${isAnticall ? '✓' : '✕'}
┃│➥ AntiPv-Block: ${isAntiPv ? '✓' : '✕'}
┃│➥ AntilinkHard: ${isAntiLinkHard ? '✓' : '✕'}
┃│➥ LimiteCaracteres: ${isAntiFlood ? '✓' : '✕'}
┃│➥ AntiCatalogo: ${isAnticatalogo ? '✓' : '✕'}
┃│➥ Antivideo: ${isAntiVid ? '✓' : '✕'}
┃│➥ AntiLocalização: ${Antiloc ? '✓' : '✕'}
    ===== ${NomeDoBot} =====
╰────────────────────╯`
wew = await getBuffer(`${logo}`)
duda.sendMessage(from, {image: wew, caption: Statuse, thumbnail: null})
break

case 'serpremium':
case 'serprem':
if (!SoDono && !m.key.fromMe) return reply(mess.donosmt)
premium.push(`${numerodonoa}@s.whatsapp.net`)
fs.writeFileSync('./BANCO DE DADOS/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto ${numerodonoa} você foi adicionado na lista premium.`)
break

case 'addpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
mentioned = info.message.extendedTextMessage.contextInfo.participant 
AlizinTexto = premium.includes(mentioned)
if(AlizinTexto) return reply("*Este número já está incluso..*")
premium.push(`${mentioned}`)
fs.writeFileSync('./BANCO DE DADOS/usuarios/premium.json', JSON.stringify(premium))
duda.sendMessage(from, {text: `👑@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑`}, {quoted: info})
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
AlizinTexto = premium.includes(mentioned)
if(AlizinTexto) return reply("*Este número já está incluso..*")
premium.push(`${mentioned}`)
fs.writeFileSync('./BANCO DE DADOS/usuarios/premium.json', JSON.stringify(premium))
tedtp = args.join(" ").replace("@", "")
duda.sendMessage(from, {text: `👑@${tedtp} foi adicionado à lista de usuários premium com sucesso👑`, mentions: [mentioned]}, {quoted: info})
}
break 

case 'delpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
AlizinTexto = premium.includes(num)
if(!AlizinTexto) return reply("*Este número não está incluso na lista premium..*")
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./BANCO DE DADOS/usuarios/premium.json', JSON.stringify(premium))
duda.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
AlizinTexto = premium.includes(mentioned)
if(!AlizinTexto) return reply("*Este número não está incluso na lista premium..*")
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./BANCO DE DADOS/usuarios/premium.json', JSON.stringify(premium))
duda.sendMessage(from, {text: ` @${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break

case 'premiumlist':
if(!isPremium) return reply(enviar.msg.premium)
tkks = '╭────「 𝐔𝐒𝐔𝜟́𝐑𝐈𝚯𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌𝐒 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────「 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 」────`
reply(tkks.trim())
break

case 'checarprem':
if(!isPremium) {
reply(`Não, você não tem Premium.`)
} else {
reply(`Sim, você tem premium!`)
}
break


/// CMDS BRINCA - SLA \\

case 'sn':
if (!isGroup) return reply(enviar.msg.grupo)
const sn = ['sim', 'não', 'com certeza', 'com certeza não']
gosto = q
if (args.length < 1) return reply(`Você deve fazer uma pergunta...\nExemplo: ${prefixo}sn O ${pushname} é um baiano preguiçoso?`)
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break
case 'sticker':
case 'stickergif':
case 'sgif':
case 'f':
case 'figu':
case 's':
case 'sticker':
case 'stiker':{
// Verifica se a mensagem está respondendo a outra mensagem
if (!m.quoted)return reply(`🚀 Por favor, envie um vídeo ou foto para criar um sticker!`);
// Verifica se a mensagem é uma imagem
if (/image/.test(mime)) {
// Faz o download da mídia
let ALIZIN_media = await m.quoted.download();
// Cria o sticker a partir da imagem
let ALIZIN_sticker = await duda.sendImageAsSticker(m.chat, ALIZIN_media, m, { packname: global.Packname2, author: global.Author });
// Envia uma mensagem de confirmação
reply(`✨ Sticker criado com sucesso! Use com moderação.`);
} else if (/video/.test(mime)) {
// Verifica se o vídeo não excede 10 segundos
if ((m.quoted.msg || m.quoted).seconds > 10)return reply('🎥 Por favor, envie um vídeo com até 10 segundos.');
// Faz o download do vídeo
let ALIZIN_video = await m.quoted.download();
// Cria o sticker a partir do vídeo
let ALIZIN_sticker = await duda.sendVideoAsSticker(m.chat, ALIZIN_video, m, { packname: global.Packname2, author: global.Author });
// Envia uma mensagem de confirmação
reply(`✨ Sticker de vídeo criado com sucesso! Use com moderação.`);
} else {
// Se a mídia não for nem imagem nem vídeo, envia uma mensagem de erro
reply(`📷 Por favor, envie uma foto ou vídeo com no máximo 10 segundos.`);
}
}
break;




// FIM DE TUDO, AGRADEÇO A TODOS.
default:

//========================================

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return duda.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: m})
await duda.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contato ou vcard, caso for um engano, fale com algum adm.'}, {quoted: pfvDeus})
await duda.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
duda.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await duda.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:pfvDeus})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
duda.sendMessage(from, {text: clear}, {quoted: pfvDeus, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await duda.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:pfvDeus})
await sleep(2000);
await duda.sendMessage(from, {text: destrava(prefix)}, {quoted: pfvDeus})
await sleep(2000);
await duda.sendMessage(from, {text: destrava(prefix)}, {quoted: pfvDeus})
await sleep(2000);
await duda.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:pfvDeus})
await sleep(5000);
await duda.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await duda.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:pfvDeus})
}

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return duda.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: m})
await duda.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contatos'}, {quoted: pfvDeus})
await duda.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
duda.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await duda.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:pfvDeus})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
duda.sendMessage(from, {text: clear}, {quoted: pfvDeus, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await duda.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:pfvDeus})
await sleep(2000);
await duda.sendMessage(from, {text: destrava(prefix)}, {quoted: pfvDeus})
await sleep(2000);
await duda.sendMessage(from, {text: destrava(prefix)}, {quoted: pfvDeus})
await sleep(2000);
await duda.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:pfvDeus})
await sleep(5000);
await duda.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await duda.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:pfvDeus})
}

if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return duda.sendMessage(from, {text: 'Localização detectada, você é adm, então não irei ti remover'}, {quoted: m})
await duda.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.'}, {quoted: pfvDeus})
await duda.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
duda.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await duda.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:pfvDeus})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
duda.sendMessage(from, {text: clear}, {quoted: pfvDeus, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await duda.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:pfvDeus})
await sleep(2000);
await duda.sendMessage(from, {text: destrava(prefix)}, {quoted: pfvDeus})
await sleep(2000);
await duda.sendMessage(from, {text: destrava(prefix)}, {quoted: pfvDeus})
await sleep(2000);
await duda.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:pfvDeus})
await sleep(5000);
await duda.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await duda.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:pfvDeus})
}

if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return duda.sendMessage(from, {text: 'Catalogo detectado, você é adm, então não irei ti remover'}, {quoted: m})
await duda.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm.'}, {quoted: pfvDeus})
await duda.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
duda.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await duda.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:pfvDeus})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
duda.sendMessage(from, {text: clear}, {quoted: pfvDeus, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await duda.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:pfvDeus})
await sleep(2000);
await duda.sendMessage(from, {text: destrava(prefix)}, {quoted: pfvDeus})
await sleep(2000);
await duda.sendMessage(from, {text: destrava(prefix)}, {quoted: pfvDeus})
await sleep(2000);
await duda.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:pfvDeus})
await sleep(5000);
await duda.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await duda.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:pfvDeus})
}

if (body.length >= AlizinLimite) { 
if(!isAntiFlood) return
if(isAntiFlood && isGroupAdmins && isBotGroupAdmins && isPremium) {
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
} else {
if(SoDono) return
if(isGroupAdmins) return
if(isPremium) return
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
setTimeout( () => {
if(!SoDono  && !m.key.fromMe && !isGroupAdmins) return reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
console.log(color('deram Spam','red'))
}, 100)
setTimeout( () => {
duda.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
setTimeout( () => {
}, 0)
}
}


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

 

if (isCmd) {
AlizinComandoss.splice(cmdId(command), 1);
fs.writeFileSync('./BANCO DE DADOS/funções/comandos.json', JSON.stringify(AlizinComandoss));
await duda.sendMessage(from, {react: {text: "🤷🏽‍♀️", key: info.key}});
const r = (Date.now() / 1000) - info.messageTimestamp;
let AlizinSelo = {key: { participant: sender }, message: { conversation: `*Utilize:* ${prefix}menu\n*Ping:* ${r.toFixed(3)}\n${NomeDoBot}`}};
if (!command || command.length === 0) {
return duda.sendMessage(from, {sticker: {url: './BANCO DE DADOS/stickers/cmd.webp'}}, {quoted: AlizinSelo});
}
let AlizinCmdinfos = [];
if (Array.isArray(AlizinComandoss)) {
AlizinComandoss.sort((a, b) => {
if (a && b && a.cmd && b.cmd) {
return a.cmd.length - b.cmd.length;
} else {
return 0;

}
});
}
for (let cmd of AlizinComandoss) {
let probabilidade = 0;
for (let i = 0; i < command.length; i++) {
if (cmd.cmd && cmd.cmd.includes(command[i])) probabilidade += 1;
if (cmd.cmd && cmd.cmd[i] == command[i]) probabilidade += 1;
}
AlizinCmdinfos.push({
cmd: cmd.cmd,
probabilidade: probabilidade
});
}

AlizinCmdinfos.sort((a, b) => b.probabilidade - a.probabilidade);
reply(
`╭━━━━━━━╮
┃  ᴄᴍᴅ: *${prefix + command}* ɴᴀᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ ┃
╰━━━━━━━╯
  ∧＿∧
（｡･ω･｡)つ━☆・*。
⊂　   ノ    ・゜+.
 しーＪ   °。+ * ඞ *

┏━━━━━━━━━━━━━━━┓
┃ᴛᴀʟᴠᴇᴢ ᴇɴᴄᴏɴᴛʀᴇɪ ɪꜱꜱᴏ:┃
┃ *${prefix + (AlizinCmdinfos[0]?.cmd || "Nenhum comando encontrado")}*                       ┃
┗━━━━━━━━━━━━━━━┛
\n`);
}



}
} catch (AlizinErro) {
console.log(AlizinErro)
}
}


