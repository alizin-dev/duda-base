const menu = (pushname, sender, data, hora, prefixo) => { 

// NÃO APAGUE ESSE ${prefixo}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DA CONFIGURAÇÃO.JS, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

// BY: ALIZIN DEV
// Pode Alterar Todo o Menu 
//  [🩸] DUDA BOT BASE
return `
╭────────────╮
*┝━ 𖡦 Suas Informações*
╎
╎🧑‍💻 Nome:「  ${pushname}  」
╎🛸 Número: ${sender.split('@')[0]}
╎📅 Data: ${data}
╎🕗 Horário: ${hora}
╎👾 Prefix: ${prefixo}
╰────────────╮
╭────────────╯
*┝━ 𖡦 Para/Todos*
╎
╎𖤛 ${prefixo}Perfil
╎𖤛 ${prefixo}Play (NOME DA MÚSICA)
╎𖤛 ${prefixo}Gerarnick (SEU NICK AKI)
╎𖤛 ${prefixo}Suporte
╎𖤛 ${prefixo}Infogp
╎𖤛 ${prefixo}Admins
╎𖤛 ${prefixo}Toimg (Marcar/fig)
╎𖤛 ${prefixo}S
╰────────────╮
╭────────────╯
*┝━ 𖡦 Para/Adms*
╎
╎𖤛 ${prefixo}Promover (@NUMERO) 
╎𖤛 ${prefixo}Rebaixar (@NUMERO) 
╎𖤛 ${prefixo}Banir (@NUMERO) 
╎𖤛 ${prefixo}Bemvindo 1 / 0
╎𖤛 ${prefixo}Gp (FECHA, ABRIR) 
╎𖤛 ${prefixo}Mudardk (DESCRIÇÃO) 
╎𖤛 ${prefixo}Mudarnm (NOME) 
╎𖤛 ${prefixo}Gplink
╎𖤛 ${prefixo}Antilink 1 / 0
╎𖤛 ${prefixo}Resetarlink
╎𖤛 ${prefixo}Marcar
╰────────────╮
╭────────────╯
*┝━ 𖡦 Para/dono*
╎
╎𖤛 ${prefixo}Sair
╎𖤛 ${prefixo}Executar
╎𖤛 ${prefixo}Seradm
╎𖤛 ${prefixo}Sermembro
╰────────────╯`
}
exports.menu = menu
//// NÃO APAGUE ESSE ` `
/// ( CASO NÃO QUEIRA ERROS ) \\\\