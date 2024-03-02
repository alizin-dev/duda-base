function menu2(pushname, sender, dataa, hora, prefixo) {


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
*╭┤➥ 𖤛🩸⃞̶̱̄𝐀𝐍𝐓𝐈𝐒🩸⃞̶̱̄𖤛*
*╭┤➥  𖤛 🩸⃞̶̱̄𝐀𝐃𝐌𝐍❜𝐒🩸⃞̶̱̄ 𖤛*
┃│➥
┃│➥✰ ${prefixo}Aviso 
┃│➥✰ ${prefixo}BemVindo 1/0
┃│➥✰ ${prefixo}ContatoOff
┃│➥✰ ${prefixo}ContatoOn
┃│➥✰ ${prefixo}NomeGp (md nome)
┃│➥✰ ${prefixo}GescriçãoGp
┃│➥✰ ${prefixo}FotoGp
┃│➥✰ ${prefixo}AbrirGp
┃│➥✰ ${prefixo}NovoLink
┃│➥✰ ${prefixo}Ban 
┃│➥✰ ${prefixo}LinkGrupoPv
┃│➥✰ ${prefixo}Status
┃│➥✰ ${prefixo}BanGhosts 
┃│➥✰ ${prefixo}FakeNoGp
┃│➥✰ ${prefixo}ListaFake
┃│➥✰ ${prefixo}BanFake
┃│➥✰ ${prefixo}Ban 
┃│➥✰ ${prefixo}AdeusCara 1/0
┃│➥✰ ${prefixo}LimiteFlood 1/0
┃│➥✰ ${prefixo}LimiteCaracteres 1/0
┃│➥✰ ${prefixo}AntiCatalogo 1/0
┃│➥✰ ${prefixo}AntiLigacao 1/0
┃│➥✰ ${prefixo}AntiLocalizao 1/0
┃│➥✰ ${prefixo}AntiDocumento 1/0
┃│➥✰ ${prefixo}AntiImg 1/0
┃│➥✰ ${prefixo}AntiSticker 1/0
┃│➥✰ ${prefixo}AntiNotas 1/0
┃│➥✰ ${prefixo}AntiVideo 1/0
┃│➥✰ ${prefixo}AntiAudio 1/0
┃│➥✰ ${prefixo}AntilinkGp 1/0
┃│➥✰ ${prefixo}Tag/ToTag 
┃│➥✰ ${prefixo}Ban 
┃│➥✰ ${prefixo}Ban 
╰──────────────╯`;
}

module.exports = menu2;