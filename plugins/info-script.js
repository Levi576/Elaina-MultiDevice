//Credits Jangan Dihapus
//Thanks For Kannachann(Kang Ngamok) & Papah-Chan
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*ngemis awokawokawok🗿*`
let wibu = `https://api.zacros.my.id/randomimg/waifu` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/channel/UC2GOH5mCArh3E4J3sGFMC5g",
    mediaType: "VIDEO",
    description: "https://youtube.com/channel/UC2GOH5mCArh3E4J3sGFMC5g", 
    title: 'Elaina-MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
