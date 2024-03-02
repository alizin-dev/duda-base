

require('./configuracao')

const {
default: 
makeWASocket,
useMultiFileAuthState, 
PHONENUMBER_MCC,
makeCacheableSignalKeyStore,
DisconnectReason,
fetchLatestBaileysVersion, 
generateForwardMessageContent, 
prepareWAMessageMedia, 
generateWAMessageFromContent, 
generateMessageID, 
downloadContentFromMessage, 
MessageType,
makeInMemoryStore, 
jidDecode, 
delay,
proto
 } = require("@whiskeysockets/baileys")

const { state, saveCreds } = useMultiFileAuthState(`./𝐐𝐑-𝐃𝜟-𝐃𝐔𝐃𝜟-𝐁𝚯𝐓`)

const { upload } = require('./BANCO DE DADOS/tourl');

const { exec } = require("child_process")

const NodeCache = require("node-cache")

const sessionName = global.sessionName

const encodeUrl = require('encodeurl')

const pino = require('pino')

const fs = require('fs')

const chalk = require('chalk')

const FileType = require('file-type')

const spin = require('spinnies')

const PhoneNumber = require('awesome-phonenumber')

const CFonts = require('cfonts');


// FUNÇÃO DA ( DATA/HORA )
const moment = require('moment-timezone')

//// DATA \\\
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

/// HORA \\\
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');


const { color, mylog, bgcolor, infolog } = require("./BANCO DE DADOS/funções/color");

const { banner, banner2, banner3, banner5 } = require('./BANCO DE DADOS/funções/functions.js'); // FUNÇÕES NESCESSARIAS PRA FUNFAR ALGUMAS COISAS


/// BEM VINDO ( PUXADINHA DI CRIA )
const welkom = JSON.parse(fs.readFileSync('./BANCO DE DADOS/grupos/bemvindo.json'));


/// ANTI FAKE ( PUXADINHA DI CRIA )
const antifake = JSON.parse(fs.readFileSync('./BANCO DE DADOS/antis/antifake.json'))


const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./BANCO DE DADOS/exif')

const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./BANCO DE DADOS/myfunc')


//=====================================     
  const spinner = {
  "interval": 150,
  "frames": [
  "🕐 D",
  "🕑 DU",
  "🕒 DUD",
  "🕓 DUDA",
  "🕔 DUDA-B",
  "🕕 DUDA-BO",  
  "🕖 DUDA-BOT B", 
  "🕗 DUDA-BOT BA CO", 
  "🕘 DUDA-BOT BAS CONE",
  "🕙 DUDA-BOT BASE CONEC", 
  "🕚 DUDA-BOT BASE CONECTAN", 
  "🕛 DUDA-BOT BASE CONECTANDO...",
  ]}
//=====================================     
 let globalSpinner;

//=====================================     

 const getGlobalSpinner = () => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'pink', succeedColor: 'purple', spinner});
  return globalSpinner;
 }

//=====================================     

  spins = getGlobalSpinner(false)

//=====================================     

    const start = (id, text) => {
	spins.add("2", {text: text})
	}
	
	
    const infopd = (id, text) => {
	spins.update(id, {text: text})
    }
    const success = (id, text) => {
	spins.succeed(id, {text: text})
    }

    const close = (id, text) => {
	spins.fail(id, {text: text})
    }	

    const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

// ==================================== \\     
        const msgRetryCounterCache = new NodeCache();
    
        const readline = require("readline");
       
        let phoneNumber = `${NumeroDoDonoA}`

        const pairingCode = !!phoneNumber || process.argv.includes("--Alizin-Codiguin")
        
        const useMobile = process.argv.includes("--mobile")

        const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
        
        const question = (text) => new Promise((resolve) => rl.question(text, resolve))

        NomeDoBot = global.NomeDoBot
        async function startduda() {
        
        let { version, isLatest } = await fetchLatestBaileysVersion()
        console.log(banner2.string)
        console.log(banner3.string)
    const {  state, saveCreds } =await useMultiFileAuthState(`./𝐐𝐑-𝐃𝜟-𝐃𝐔𝐃𝜟-𝐁𝚯𝐓`)
    
    const msgRetryCounterCache = new NodeCache() // para mensagem de nova tentativa, "mensagem de espera"
    
    const duda = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // aparecendo QR no log do terminal
      mobile: useMobile, // API móvel (propensa a banimentos)
      browser: [ "Ubuntu", "Chrome", "20.0.04" ],// para estes problemas https://github.com/WhiskeySockets/Baileys/issues/328
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      markOnlineOnConnect: true, // definir falso para off-line
      generateHighQualityLinkPreview: true, // criar link de visualização alto
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolver mensagens em espera
      defaultQueryTimeoutMs: undefined, //para estes problemas https://github.com/WhiskeySockets/Baileys/issues/276
   })
   
   store.bind(duda.ev)
        
        
        
    require('./BANCO DE DADOS/MENU/menu.js')
    require('./BANCO DE DADOS/MENU/menu2.js')
	require('./configuracao')
	require('./duda')
	require('./index')
    nocache('./BANCO DE DADOS/MENU/menu.js', Módulo => console.log(chalk.greenBright('[ ⏤͟͞𝐃𝐔𝐃𝜟 𝐁𝚯𝐓 ] ') + hora + chalk.cyanBright(` 𝐌𝚯́𝐃𝐔𝐋𝚯 "${Módulo}" ATUALIZADO`)))
    nocache('./BANCO DE DADOS/MENU/menu2.js', Módulo => console.log(chalk.greenBright('[ ⏤͟͞𝐃𝐔𝐃𝜟 𝐁𝚯𝐓 ] ') + hora + chalk.cyanBright(` 𝐌𝚯́𝐃𝐔𝐋𝚯 "${Módulo}" ATUALIZADO`)))
	nocache('./configuracao', Módulo => console.log(chalk.greenBright('[ ⏤͟͞𝐃𝐔𝐃𝜟 𝐁𝚯𝐓 ] ') + hora + chalk.cyanBright(` 𝐌𝚯́𝐃𝐔𝐋𝚯 "${Módulo}" 𝜟𝐓𝐔𝜟𝐋𝐈𝐙𝜟𝐃𝚯❗`)))
	nocache('./duda', Módulo => console.log(chalk.greenBright('[ ⏤͟͞𝐃𝐔𝐃𝜟 𝐁𝚯𝐓 ] ') + hora + chalk.cyanBright(` 𝐌𝚯́𝐃𝐔𝐋𝚯 "${Módulo}" 𝜟𝐓𝐔𝜟𝐋𝐈𝐙𝜟𝐃𝚯❗`)))
	nocache('./index', Módulo => console.log(chalk.greenBright('[ ⏤͟͞𝐃𝐔𝐃𝜟 𝐁𝚯𝐓 ] ') + hora + chalk.cyanBright(` 𝐌𝚯́𝐃𝐔𝐋𝚯 "${Módulo}" 𝜟𝐓𝐔𝜟𝐋𝐈𝐙𝜟𝐃𝚯❗`)))
	
    
    
//login usa código de pareamento // código fonte https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
   if (pairingCode && !duda.authState.creds.registered) {
      if (useMobile) throw new Error('Não é possível usar o código de pareamento com a API móvel')

      let phoneNumber
      if (!!phoneNumber) {
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Inicie com o código do país para o seu número do WhatsApp. Por exemplo: +5522997625501")))
            process.exit(0)
         }
      } else {
         phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Por favor, compartilhe seu número do WhatsApp 😍, assim podemos nos conectar mais facilmente.\nPor exemplo: +5522997625501 : `)))
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         // Pergunta novamente ao digitar o número errado
         
         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Inicie com o código do país para o seu número do WhatsApp. Por exemplo: +5522997625501")))

            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Por favor, compartilhe seu número do WhatsApp 😍, assim podemos nos conectar mais facilmente.\nPor exemplo: +5522997625501 : `)))
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            rl.close()
         }
      }

      setTimeout(async () => {
         let code = await duda.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Seu Código Do ZipZop: `)), chalk.black(chalk.white(code)))
      }, 3000)
   }
   
   
duda.ev.on('messages.upsert', async ({ messages }) => {
try {
        mek = messages ? messages[0]: messages[1]
        
        /*//*//*/await duda.readMessages([mek.key])*////*//
        
if(!mek.message) return

if (mek.key && mek.key.remoteJid == 'status@broadcast') return

let participant = mek.key.participant;

    
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
                
        if (!duda.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        
        m = smsg(duda, mek, store)
        
        require("./duda")(duda, m, messages, store)
        } catch (err) {
            console.log(err)
        }
    })

duda.ev.on('group-participants.update', async (dudinhaa) => {
  
const groupMetadata = await duda.groupMetadata(dudinhaa.id) 
  
const mdata = await duda.groupMetadata(dudinhaa.id)  



// PEGAR DESCRIÇÃO DO GRUPO

const groupDesc = await groupMetadata.desc

// CONST DO CMD DE BANIR QUEM ESTIVER NA LISTA N

const adeuscara = JSON.parse(fs.readFileSync('./BANCO DE DADOS/grupos/adeuscara.json'))
const dbackid = []
for(i=0;i<adeuscara.length;++i) dbackid.push(adeuscara[i].groupId)
console.log(dudinhaa)
if(dbackid.indexOf(dudinhaa.id) >= 0) {
if (dudinhaa.action == 'add'){ 
num = dudinhaa.participants[0]
var ind = dbackid.indexOf(dudinhaa.id)
if(adeuscara[ind].actived && adeuscara[ind].number.indexOf(num.split('@')[0]) >= 0) {
await duda.sendMessage(mdata.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'})
duda.groupParticipantsUpdate(mdata.id, [dudinhaa.participants[0]], 'remove')
return
}
}
}
// FIM LISTANEGRA CONST ^

// ANTIFAKE QUE ESTÁ JUNTO COM BEM VINDO 


// FIM ANTIFAKE ^

// BEM VINDO COMPLETO 
//=====================================     
if(welkom.includes(dudinhaa.id)) {
if(antifake.includes(dudinhaa.id) && !dudinhaa.participants[0].startsWith(55)) return
        try {
            let metadata = await duda.groupMetadata(dudinhaa.id)
            let participants = dudinhaa.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await duda.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
                }

                //Get Profile Picture Group\\
                try {
                    ppgroup = await duda.profilePictureUrl(dudinhaa.id, 'image')
                } catch {
                    ppgroup = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
                }
                
       let sai_kk = { url : ppgroup }    
       let wm_fatih = { url : ppuser }                
//welcome\\
        let nama = await duda.getName(num)
memb = metadata.participants.length
Wlcm = await getBuffer(`https://p7api.xyz/api/card/welcomev2?nome=${encodeURIComponent(nama)}&nomegp=${encodeURIComponent(metadata.subject)}&titulo=BEM%20VINDO&membros=${encodeURIComponent(memb)}&cor=140000&tcor=062be0&lcor=FF7B00&perfil=${encodeURIComponent(ppuser)}&fundo=https://telegra.ph/file/5e7003ccc9cbaed903068.jpg&numero=2023&apikey=p7ori`)
Lft = await getBuffer(`https://p7api.xyz/api/card/welcomev2?nome=${encodeURIComponent(nama)}&nomegp=${encodeURIComponent(metadata.subject)}&titulo=BEM%20VINDO&membros=${encodeURIComponent(memb)}&cor=140000&tcor=062be0&lcor=FF7B00&perfil=${encodeURIComponent(ppuser)}&fundo=https://telegra.ph/file/5e7003ccc9cbaed903068.jpg&numero=2023&apikey=p7ori`)
                if (dudinhaa.action == 'add') {
console.log(chalk.black(chalk.green('[ USUARIO ADICIONADO ]')), chalk.green(" Grupo: " + metadata.subject + ", Usuario: " + dudinhaa.participants[0].split('@')[0]))
                const xbuffer = await getBuffer(ppuser)
                let Xnome = num
	           const members = metadata.participants.length
                let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "5522997625501-1604595598@g.us"}, "message": {orderMessage: {itemCount: 666,status: 200, jpegThumbnail: sai_kk, surface: 200, message: `${metadata.subject}`, orderTitle: 'ALIZINDEV', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                xbody = `
┏━━━━━━[🗯]━━━━━━━━ ➤
┃•「 OLÁ 👋 」
└┬☆ 「 @${Xnome.split("@")[0]}  」
   ┃• PARTICIPANTES : ${members}
   ┃•  ENTROU AS : ${time} / ${date}
   ┗━━━━━━[💫]━━━━━━━━ ➤`
let buttonMessage = {
image: Wlcm,
Thumbnail: sai_kk,
mentions: [num],
caption: xbody,
footer: `${NomeDoBot}`,
headerType: 4,
                }
                duda.sendMessage(dudinhaa.id, buttonMessage, { quoted: unicorndoc 
            })
                      
                } else if (dudinhaa.action == 'remove') {
console.log(chalk.black(chalk.green('[ USUARIO REMOVIDO ]')), chalk.green(" Grupo: " + metadata.subject + ", Usuario: " + dudinhaa.participants[0].split('@')[0]))
                	const xbuffer = await getBuffer(ppuser)
                   	let nome = num
                    const members = metadata.participants.length
                    let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "5522997625501-1604595598@g.us"}, "message": {orderMessage: {itemCount: 666,status: 200, jpegThumbnail: sai_kk, surface: 200, message: `${metadata.subject}`, orderTitle: ' SUR', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                    xbody = `
┏━━━━━━[🗯]━━━━━━━━ ➤
┃•「 TCHAUZIN 👋 」
└┬☆ 「 @${nome.split("@")[0]}  」
   ┃•  PARTICIPANTES : ${members}
   ┃•  SAIU AS : ${time} / ${date}
   ┗━━━━━━[💫]━━━━━━━━ ➤`
let buttonMessage = {
image: Lft,
Thumbnail: sai_kk,
mentions: [num],
mentions: [num],
caption: xbody,
footer: `${NomeDoBot}`,
headerType: 4,
                }
                duda.sendMessage(dudinhaa.id, buttonMessage, { quoted: unicorndoc 
            })                }
            }
        } catch (err) {
            console.log(err)
}
}
})

 
//=====================================

// FIM ^

        
	
    // Setting
    duda.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
        let decode = jidDecode(jid) || {}
     return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    duda.ev.on('contacts.update', update => {
    for (let contact of update) {
    let id = duda.decodeJid(contact.id)
    if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
    }
    })

    duda.getName = (jid, withoutContact  = false) => {
    id = duda.decodeJid(jid)
    withoutContact = duda.withoutContact || withoutContact 
    let v
    if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
    v = store.contacts[id] || {}
     if (!(v.name || v.subject)) v = duda.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === duda.decodeJid(duda.user.id) ?
            duda.user :
            (store.contacts[id] || {})
       return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
//=====================================     
    
            duda.setStatus = (status) => {
            duda.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
       }
	
       duda.public = true

    duda.serializeM = (m) => smsg(duda, m, store)
    duda.ev.process(
      async (events) => {
         if (events['presence.update']) {
            await duda.sendPresenceUpdate('available')
         }
         if (events['messages.upsert']) {
            const upsert = events['messages.upsert']
            for (let msg of upsert.messages) {
               if (msg.key.remoteJid === 'status@broadcast') {
                  if (msg.message?.protocolMessage) return
                  await delay(3000)
               }
            }
         }
         if (events['creds.update']) {
            await saveCreds()
         }
      }
   )
//===================================== 

    duda.ev.on('connection.update', async (update) => {
   const {
            connection, lastDisconnect, qr, isNewLogin
        } = update
        if (qr) {
            console.log(color("Escanear o qrcode em um ambiente escuro faz com que o foco da câmera seja melhor.    20 SEGUNDOS PARA GERAR OUTRO QR-CODE!!", "red"))
        }

        if (connection === 'connecting') {
            start(" ", " ")
        }

        if (isNewLogin?.qr) {
            startduda()
        }

        if (connection === 'open') {
            success('2', 'DUDA-BOT CONECTADA COM SUCESSO ✓')
        }

        if (connection === 'close') {
            var shouldReconnect = ((lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut)
            if (String(lastDisconnect.error)
                .includes("Stream Errored")) {
                console.log(color("Stream errored, o bot pode está conectado em outra sessão. Se essa mensagem continuar repetindo desconecte o bot do Whatsapp.", "yellow"))
            } else if (String(lastDisconnect.error)
                .includes("Connection Failure")) {
                exec(`rm ${sessionName}`)
                console.log(color("O bot foi desconectado do WhatsApp, irei apagar e gerar um qr code novo.", "red"))
                process.exit()
            } else if (String(lastDisconnect.error)
                .includes("Restart Required")) {
                console.log(color("Reinicie se for nescessario..", "yellow"))
            } else if (String(lastDisconnect.error)
                .includes("Connection was lost")) {
                console.log(color("koee cria, q net da xuxa, é essa ?kkkk, alizin dev está te hackeando!", "yellow"))
            } else if (String(lastDisconnect.error)
                .includes("Connection Terminated")) {
                console.log(color("koee cria, q net da xuxa, é essa ?kkkk alizin dev está te hackeando!", "cyan"))
            }

            if (lastDisconnect?.error) {
                startduda()
}
}
}) 
//=====================================     

//===================================== 


  
    duda.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: duda.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            duda.relayMessage(jid, template.message, { messageId: template.key.id })
    }

 
    duda.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        duda.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    

    duda.sendText = (jid, text, quoted = '', options) => duda.sendMessage(jid, { text: text, ...options }, { quoted })


    duda.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await duda.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }


    duda.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await duda.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }


    duda.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await duda.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }


    duda.sendTextWithMentions = async (jid, text, quoted, options = {}) => duda.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })


    duda.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await duda.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    
    duda.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await duda.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	

    duda.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename

        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    duda.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
   
    duda.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await duda.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./BANCO DE DADOS/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await duda.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }


    duda.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await duda.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    duda.cMod = (jid, copy, text = '', sender = duda.user.id, options = {}) => {

		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === duda.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }



    duda.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

//=====================================     
    
function nocache(Módulo, cb = () => { }) {
    fs.watchFile(require.resolve(Módulo), async () => {
        await uncache(require.resolve(Módulo))
        cb(Módulo)
    })
}

//===================================== 

function uncache(Módulo = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(Módulo)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}    


//=====================================     

    return duda
}

startduda()

