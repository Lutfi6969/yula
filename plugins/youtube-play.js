const _0x7a79e2=_0x521b;(function(_0x389a7f,_0xa0a11){const _0x222cae=_0x521b,_0xb69f2c=_0x389a7f();while(!![]){try{const _0x1d3b7a=-parseInt(_0x222cae(0x180))/0x1*(parseInt(_0x222cae(0x171))/0x2)+parseInt(_0x222cae(0x170))/0x3*(-parseInt(_0x222cae(0x182))/0x4)+parseInt(_0x222cae(0x174))/0x5*(parseInt(_0x222cae(0x181))/0x6)+parseInt(_0x222cae(0x15a))/0x7+-parseInt(_0x222cae(0x18b))/0x8*(-parseInt(_0x222cae(0x162))/0x9)+-parseInt(_0x222cae(0x179))/0xa+parseInt(_0x222cae(0x16a))/0xb;if(_0x1d3b7a===_0xa0a11)break;else _0xb69f2c['push'](_0xb69f2c['shift']());}catch(_0x3cd375){_0xb69f2c['push'](_0xb69f2c['shift']());}}}(_0x55fa,0xc0a5f));function _0x55fa(){const _0x240113=['viewCount','\x20\x20◦\x20*Duration*:\x20','videos','316144QnOUMJ','13656rvWdxZ','2486476bKYdvX','\x0a\x20\x20\x0aYTdl\x20By\x20https://github.com/fent/node-ytdl-core\x0aSearch\x20By\x20https://github.com/talmobi/yt-search\x0aSent\x20By\x20Assistant\x20Yula💕','toLocaleDateString','\x20name/url','getFile','toString','ytdl-core','register','.mp3','12808SjaEAp','premium','end','There\x20was\x20an\x20error\x20converting\x20the\x20audio:\x20','tags','reply','tmp/','lengthSeconds','toFixed','chat','99379EuZdOP','toFormat','videoId','sender','/hqdefault.jpg','log','map','An\x20error\x20occurred\x20while\x20searching\x20for\x20the\x20song:\x20','8109rMYogl','command','\x0a\x20\x20◦\x20*Upload*:\x20','sendFile','https://i.ytimg.com/vi/','https://youtube.com','createWriteStream','help','9872335TOaqZq','youtubeplay','.webm','title','downloader','unlinkSync','3CWBEbt','2HwUmRU','floor','pipe','475djoLBH','relayMessage','videoDetails','\x0a\x20\x20◦\x20*Views*:\x20','save','8435530FQmNMQ','AUDIO\x20SEDANG\x20DI\x20KIRIM','getInfo','highestaudio'];_0x55fa=function(){return _0x240113;};return _0x55fa();}let ytdl=require(_0x7a79e2(0x188)),fs=require('fs'),ffmpeg=require('fluent-ffmpeg'),search=require('yt-search'),handler=async(_0x28eb2d,{conn:_0x3755a3,text:_0x1b03a3})=>{const _0x3af44b=_0x7a79e2;if(!_0x1b03a3)return _0x28eb2d[_0x3af44b(0x190)]('*example*:\x20.play\x20eula\x20song');try{let _0x4d15f6=await search(_0x1b03a3),_0x1ae1a6=_0x4d15f6[_0x3af44b(0x17f)][0x0][_0x3af44b(0x15c)],_0x267c99=await ytdl[_0x3af44b(0x17b)](_0x1ae1a6),_0x3178d6=_0x267c99[_0x3af44b(0x176)][_0x3af44b(0x16d)]['replace'](/[^\w\s]/gi,''),_0x3bd5fb=_0x3af44b(0x166)+_0x1ae1a6+_0x3af44b(0x15e),_0xe85e02=_0x267c99[_0x3af44b(0x176)]['video_url'],_0x3a085b=parseInt(_0x267c99['videoDetails'][_0x3af44b(0x192)]),_0x4de2af=new Date(_0x267c99[_0x3af44b(0x176)]['publishDate'])[_0x3af44b(0x184)](),_0x1268d1=_0x267c99['videoDetails'][_0x3af44b(0x17d)],_0x43dd92=Math[_0x3af44b(0x172)](_0x3a085b/0x3c),_0x100556=_0x4d15f6[_0x3af44b(0x17f)][0x0]['description'],_0x13e963=_0x3a085b%0x3c,_0x1ad95b=_0x43dd92+':'+(_0x13e963<0xa?'0':'')+_0x13e963;function _0x1b64cd(_0x955cd3){const _0x4244a0=_0x3af44b;if(_0x955cd3>=0xf4240)return(_0x955cd3/0xf4240)[_0x4244a0(0x193)](0x1)+'M';else return _0x955cd3>=0x3e8?(_0x955cd3/0x3e8)[_0x4244a0(0x193)](0x1)+'K':_0x955cd3[_0x4244a0(0x187)]();}let _0xeeed30=ytdl(_0x1ae1a6,{'quality':_0x3af44b(0x17c)}),_0x8457ba='tmp/'+_0x3178d6+_0x3af44b(0x16c),_0x3639b4=_0x3af44b(0x191)+_0x3178d6+_0x3af44b(0x18a),_0x40c022=_0x1b64cd(_0x1268d1),_0x358145=_0x3af44b(0x17e)+_0x1ad95b+_0x3af44b(0x164)+_0x4de2af+_0x3af44b(0x177)+_0x40c022+_0x3af44b(0x183);var _0x242dbc=_0x3755a3[_0x3af44b(0x175)](_0x28eb2d[_0x3af44b(0x159)],{'extendedTextMessage':{'text':_0x358145,'contextInfo':{'externalAdReply':{'title':_0x3af44b(0x17a),'body':'Youtube\x20Play\x20by\x20Assisten\x20Yula','mediaType':0x1,'previewType':0x0,'renderLargerThumbnail':!![],'thumbnailUrl':_0x3bd5fb,'sourceUrl':_0x3af44b(0x167)}},'mentions':[_0x28eb2d[_0x3af44b(0x15d)]]}},{});_0xeeed30[_0x3af44b(0x173)](fs[_0x3af44b(0x168)](_0x8457ba))['on']('finish',async()=>{const _0xc145fc=_0x3af44b;ffmpeg(_0x8457ba)[_0xc145fc(0x15b)]('mp3')['on'](_0xc145fc(0x18d),async()=>{const _0x18cb08=_0xc145fc;let _0x3e3a78=await _0x3755a3[_0x18cb08(0x186)](_0x3bd5fb),_0x4bb229=fs['readFileSync'](_0x3639b4);_0x3755a3[_0x18cb08(0x165)](_0x28eb2d[_0x18cb08(0x159)],_0x4bb229,_0x3178d6+_0x18cb08(0x18a),'',_0x28eb2d),fs[_0x18cb08(0x16f)](_0x8457ba),fs[_0x18cb08(0x16f)](_0x3639b4);})['on']('error',_0x3c4289=>{const _0x290d18=_0xc145fc;console[_0x290d18(0x15f)](_0x3c4289),_0x28eb2d[_0x290d18(0x190)](_0x290d18(0x18e)+_0x3c4289['message']),fs[_0x290d18(0x16f)](_0x8457ba),fs[_0x290d18(0x16f)](_0x3639b4);})[_0xc145fc(0x178)](_0x3639b4);});}catch(_0x31cc4){console[_0x3af44b(0x15f)](_0x31cc4),_0x28eb2d['reply'](_0x3af44b(0x161)+_0x31cc4['message']);}};function _0x521b(_0x240d17,_0x3f9ab8){const _0x55fad0=_0x55fa();return _0x521b=function(_0x521b3b,_0x4dfaba){_0x521b3b=_0x521b3b-0x159;let _0x3a0012=_0x55fad0[_0x521b3b];return _0x3a0012;},_0x521b(_0x240d17,_0x3f9ab8);}handler[_0x7a79e2(0x169)]=[_0x7a79e2(0x16b)][_0x7a79e2(0x160)](_0x420c3e=>_0x420c3e+_0x7a79e2(0x185)),handler[_0x7a79e2(0x18f)]=[_0x7a79e2(0x16e)],handler[_0x7a79e2(0x163)]=/^(ytplay|play|youtubeplay)$/i,handler[_0x7a79e2(0x189)]=![],handler[_0x7a79e2(0x18c)]=![],handler['limit']=0x2,module['exports']=handler;