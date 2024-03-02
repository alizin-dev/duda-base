function menu(pushname, sender, dataa, hora, prefixo) {


// Implemente a lógica do menu aqui
// NÃO APAGUE ESSE ${prefixo}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DA CONFIGURAÇÃO.JS, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 


// BY: ALIZIN DEV
// Pode Alterar Todo o Menu 
//  [🩸] DUDA BOT BASE
return `*╭───✰⃟⃟───────────╮*
*╰╮𖤛🩸⃞̶̄ 𝐒𝐔𝐀𝐒 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐎̃𝐄𝐒🩸⃞̶̱̄𖤛*
┃│➥🧑‍💻 𝐍𝐨𝐦𝐞:「  ${pushname}  」
┃│➥🛸 𝐍𝐮́𝐦𝐞𝐫𝐨: ${sender.split('@')[0]}
┃│➥📅 𝐃𝐚𝐭𝐚: ${dataa}
┃│➥🕗 𝐇𝐨𝐫𝐚́𝐫𝐢𝐨: ${hora}
┃│➥👾 𝐏𝐫𝐞𝐟𝐢𝐱: ${prefixo}
*╰───✰⃟⃟──────────╮*
*╭───────✰⃟⃟──────╯*
*╰╮𖤛🩸⃞̶̱̄𝐏𝐀𝐑𝐀 𝐆𝐑𝐔𝐏𝐎𝐒🩸⃞̶̱̄𖤛*
╭┤➥
┃│➥
┃│➥✰ ${prefixo}ContatoOff
┃│➥✰ ${prefixo}ContatoOn
┃│➥✰ ${prefixo}NomeGp (md nome)
┃│➥✰ ${prefixo}GescriçãoGp
┃│➥✰ ${prefixo}FotoGp
┃│➥✰ ${prefixo}Ban 
┃│➥✰ ${prefixo}BanGhosts
┃│➥✰ ${prefixo}
*╰───✰⃟⃟──────────╮*
*╭───────✰⃟⃟──────╯*
*╰╮𖤛🩸⃞̶̱̄𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐈𝐒🩸⃞̶̱̄𖤛*
╭┤➥
┃│➥✰ ${prefixo}Menu2
┃│➥✰ ${prefixo}ConsultaFake
┃│➥✰ ${prefixo}SerAdm
┃│➥✰ ${prefixo}S
┃│➥✰ ${prefixo}MudarNomeWpp
*╰───✰⃟⃟──────────╮*
*╭───────✰⃟⃟──────╯*
*╰───✰⃟⃟──────────╮*
*╭───────✰⃟⃟──────╯*
*╰╮𖤛🩸⃞̶̱̄𝐇𝐔𝐌𝐀𝐍𝐎𝐒🩸⃞̶̱̄𖤛*
╭┤➥
┃│➥✰ ${prefixo}ConsultaFake
┃│➥✰ ${prefixo}FigupraVd | pr video
┃│➥✰ ${prefixo}FigupraGif | pr gif
┃│➥✰ ${prefixo}VideopraLink
┃│➥✰ ${prefixo}ImgpraLink
┃│➥✰ ${prefixo}ImgpraVideo
┃│➥✰ ${prefixo}EncurtaLink
┃│➥✰ ${prefixo}GerarCpf
┃│➥✰ ${prefixo}Sn
*╰───✰⃟⃟──────────╮*
*╭───────✰⃟⃟──────╯*
*╰╮𖤛🩸⃞̶̱̄𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃🩸⃞̶̱̄𖤛*
╭┤➥
┃│➥
┃│➥✰ ${prefixo}Play
┃│➥✰ ${prefixo}PlayVideo
╰──────────────╯`;
}

module.exports = menu;