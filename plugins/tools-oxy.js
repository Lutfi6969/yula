let fetch = require('node-fetch')

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example use *${usedPrefix + command} BunnyWalker*`
	try {
		let fimg = await fetch(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${encodeURIComponent(text)}`)
		if (!fimg.ok) throw new e()
		let fimgb = Buffer.from(await fimg.arrayBuffer())
	    await conn.sendMessage(m.chat, { image: fimgb, caption: `_Photo Oxy : ${command}_` }, { quoted: m })
	} catch (e) {
		m.reply(`Terjadi kesalahan, coba lagi nanti.`)
	}
}

handler.help = ['shadow','cup','cup1','romance','smoke','burnpaper','lovemessage','undergrass','love','coffe','woodheart','woodenboard','summer3d','wolfmetal','nature3d','underwater','golderrose','summernature','fallleaves','flamming','harrypotter','carvedwood'].map(v => v + ' <text>')
handler.tags = ['tools']
handler.command = /^(shadow|cup|cup1|romance|smoke|burnpaper|lovemessage|undergrass|love|coffe|woodheart|woodenboard|summer3d|wolfmetal|nature3d|underwater|golderrose|summernature|fallleaves|flamming|harrypotter|carvedwood)$/i

handler.premium = true

module.exports = handler