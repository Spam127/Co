const Discord = require('discord.js');
const bot = new Discord.Client();
const dateFormat = require('dateformat');//npm i dateformat
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const moment = require('moment');
const request = require('request');
const fs = require("fs");
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const discord_token = "NTI4MzA4MzgwMzQ4MTg2NjI0.DwgZRw.H_uu-XoZ9pGFaflSUBSggew_LPQ";
var table = require('table').table
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', function(){
    var ms = 60000 ;
    var setGame = [`${client.guilds.size} Server`,' Corenca Bot™ by Omaar ','Type -help | Lather Server  ',`${client.users.size} Members`,'-invite','By: n3k4a & Hosam | BaronTube'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/n3k4a`);
    }, ms);
    console.log(` ╔═══╗──╔╗ |> Name: ${client.user.username}`);
 console.log(` ║╔═╗║──║║ |> Servers: ${client.guilds.size}`);
 console.log(` ║║─╚╬══╣║╔══╦╗╔╦╗─╔╗ |> Members: ${client.users.size}`);
 console.log(` ║║╔═╣╔╗║║║╔╗╠╬╬╣║─║║║ |> Channels: ${client.channels.size}`);
 console.log(` ║╚╩═║╔╗║╚╣╔╗╠╬╬╣╚═╝║ |> Channels: ${client.channels.size}`);
 console.log(` ╚═══╩╝╚╩═╩╝╚╩╝╚╩═╗╔╝ |> Id: ${client.user.id}`);
 console.log(` ───────────────╔═╝║`);
 console.log(` ───────────────╚══╝`);



 client.on('message', message => {
     if (message.content === "bot") {
     let embed = new Discord.RichEmbed()

  .setColor("#51cde6")
  .addField("Playing on" , client.guilds.size)


  message.channel.sendEmbed(embed);

    }
});


console.log('n3k4a is one ');
client.on('ready', () => {
  console.log(`im redey`);
});
const x5bz4 = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشك??ك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
   '*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفت????ح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها ا??مخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدنا في نشر البوت وادخل هذا السيرفر https://discord.gg/ZnPDHaA ***'
]
 client.on('message', message => {
 if (message.content.startsWith('-مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${x5bz4[Math.floor(Math.random() * x5bz4.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});




var prefix = "-";

client.on('message', message => {
if (message.content === "-help") {
    let pages = [`
***__وصف عن البوت__***
**
تم الانشاء من قبل سيرفر**
**lather Server
**
        ***__General orders__***
**
**للاشتراك الشهري = السعر 100 الف كريديت للشراء قم بالتواصل مع صاحب البوت 
! RG I Omaaàr.#0001**
『-server/يعرض لك معلومات عن السيرفر』
『-allbots/ لمعرفه عدد البوتات في السيرفر』
『-id/معلومات  عنك』
『-avatar /للعرض صورتك او صورة شخص فقط قم بعمل منشن له 』
『-embed /البوت يكرر الكلام الي قلته ب امبد
『-members/��عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص』
『-avatar/صورتك او صورة الي تمنشنو』
『-ask/يبحث عن الكلمه الي تكتبها باالانجليزي』
『-invites /لمعرفه كم شخص دعوت الي السيرفر』
『-uptime / لمعرالبوت اون لاين منذ متي』  
『❖❖❖اومر مميزه نادره❖❖❖』
『-daily /علشان تخد الكرديت اليومي 』
『-credit / لكي تري الكرديت الخاص باك』
『-trans <@someone> <number / للتبرع لحد بلكريدت』
『-boom /  يطير جبه الي تبي عن طريق المنشن』
『-sad / يقول للشخص انك خزين بسببه  او زعلان منه عن طريق المنشن』
『-kiss/يعطي قبله لمن تختار في السيرفر عن طريق المنشن』
『-love / يعبر بشعورك بلحب  لمن تختار في السيرفر عن طريق المنشن』
『-miss / يرسله اشتقت لك لمن تختار في السيرفر عن طريق المنشن』
『-slap / يعطي كف لمن تختاره في السيرفرعن طريق المنشن』
『-hug /  يعطي وحضن او ضمه لمن تختاره في السيرفر عن طريق المنشن』
『-cat/صور قطط صغيره』
『-paint/يجبلك الكلام الي تكتبه في صوره』
『-trans/يترجم الكلمه الي تكتبه ال اي لغه مع تحديد』
=====اوامر اضافيه====
『ترحيب』
『باك』
『السلام عليكم』
**
  `,`
        ***__Administrative Orders__***
**
『-clear <numbr> / البوت يمسح الرسال برقم حد اقصي 100 رساله』
『-say / البوت يكرر الكلام الي انت تقوله』
『-kick @user <reason> / طرد الشخص من السيرفر』
『-ban @user <reason> / حضر الشخص من السيرفر』
『-setstats/ يعمل روم لك بلوقت والتاريخ والاشخاص المتصليف في الرومات』
『-banlist / عدد الاشخاص المبندة 』
『-mute / يعطي ميوت للعضو 』
『-unmute /  يفك الميوت عن العضو 』
『-giveaway / يسويلك قف اوي علي الشي الي تبيه』
『-setwelcomer /  <welcome> يجب ان يكون اسم روم الترحيب 』
『-nick/ لتغيراسماء جميع الاعضاء』
『-mutechannel / لقفل الشات علي الاعضاء في السيرفر』
『-unmutechannel / لفتح الشات لجميع الاعضاء في السيرفر』
   `,`
        ***__Music orders__***
**
الموزك تحت التطوير الي الافضل
**
        ***__Games orders__***
 **       
『-slots / ['🍏''🍇' '🍒' '🍍' '🍅' '🍆' '🍑' '🍓'] جمع 3 من نفس الشي تفوز』
『لعبه التهكير الوهمي /تهكير منشن الشخص 』
『-لعبة كت تويت / كت تويت』
『-لعبة مريم / مريم』
『تغريد  للشخص عن طريق المنشن /-غرد』
『-marry/لعبه الزواج لا تفهم غلط』
『نكت مضحكه/ -نكت』
『-rps/لعبه حجر ورقه مقص』
**
   
`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')