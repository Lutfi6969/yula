const _0x2f7537=_0x2015;(function(_0x343ab7,_0x41918f){const _0x599524=_0x2015,_0x3d126b=_0x343ab7();while(!![]){try{const _0x3f63cb=parseInt(_0x599524(0x1d7))/0x1+-parseInt(_0x599524(0x1e9))/0x2*(parseInt(_0x599524(0x1e2))/0x3)+parseInt(_0x599524(0x1cf))/0x4*(-parseInt(_0x599524(0x1e0))/0x5)+parseInt(_0x599524(0x1e1))/0x6+-parseInt(_0x599524(0x1d5))/0x7+parseInt(_0x599524(0x1d6))/0x8*(-parseInt(_0x599524(0x1df))/0x9)+parseInt(_0x599524(0x1e8))/0xa;if(_0x3f63cb===_0x41918f)break;else _0x3d126b['push'](_0x3d126b['shift']());}catch(_0x1e2e78){_0x3d126b['push'](_0x3d126b['shift']());}}}(_0x4d56,0xce60b));function _0x2015(_0x112d3f,_0x509add){const _0x4d56f0=_0x4d56();return _0x2015=function(_0x2015f4,_0x542247){_0x2015f4=_0x2015f4-0x1c9;let _0x5d092b=_0x4d56f0[_0x2015f4];return _0x5d092b;},_0x2015(_0x112d3f,_0x509add);}function _0x4d56(){const _0x11adfa=['map','downloader','Terjadi\x20kesalahan.\x20Silakan\x20coba\x20lagi\x20nanti.\x0aNyari\x20yang\x20bener\x20donk...','sendMessage','AUDIO\x20SEDANG\x20DI\x20KIRIM','14382351PZuPwV','6614095jONitE','8048232qpOIAl','537lynDAy','\x20eula\x20song','help','audio/mp4','\x0a»\x20*Uploads:*\x20','catch','23787430GBOoOZ','10662MDNCYY','Use\x20an\x20example:\x20','@bochilteam/scraper','limit','audio','\x0a»\x20*Views:*\x20','https://youtube.com','chat','4sVRvra','\x20<pencarian>','reply','Youtube\x20Play2\x20by\x20Assisten\x20YuLa','Video\x20Tidak\x20Ditemukan,\x20Coba\x20Judul\x20Lain','download','213276wMnWjN','8zIQjiX','1030783gBPZLl','video','key'];_0x4d56=function(){return _0x11adfa;};return _0x4d56();}let {youtubedl,youtubedlv2,youtubeSearch}=require(_0x2f7537(0x1c9));var handler=async(_0x50a79b,{conn:_0x51535b,command:_0x1d7a26,text:_0x156f2b,usedPrefix:_0x5adf4b})=>{const _0x30a7ba=_0x2f7537;try{if(!_0x156f2b)return _0x51535b[_0x30a7ba(0x1d1)](_0x50a79b['chat'],_0x30a7ba(0x1ea)+_0x5adf4b+_0x1d7a26+_0x30a7ba(0x1e3),_0x50a79b);_0x51535b['sendMessage'](_0x50a79b['chat'],{'react':{'text':'⏳','key':_0x50a79b[_0x30a7ba(0x1d9)]}});let _0x59e334=await youtubeSearch(_0x156f2b);if(!_0x59e334||!_0x59e334[_0x30a7ba(0x1d8)]||!_0x59e334[_0x30a7ba(0x1d8)][0x0])throw _0x30a7ba(0x1d3);let _0x434aeb=_0x59e334[_0x30a7ba(0x1d8)][0x0],{authorName:_0x5945a8,title:_0x1c4c8d,thumbnail:_0x287884,duration:_0x566235,viewH:_0x48a64f,publishedTime:_0x56c955,url:_0x1adbf9}=_0x434aeb,_0x3e6e29='»\x20*Duration:*\x20'+_0x566235+_0x30a7ba(0x1cc)+_0x48a64f+_0x30a7ba(0x1e6)+_0x56c955+'\x0a\x0aYTdl\x20by\x20https://github.com/BochilTeam/scraper\x0aSearch\x20by\x20https://github.com/BochilTeam/scraper\x0aSend\x20By\x20*Assisten\x20YuLa*';await _0x51535b[_0x30a7ba(0x1dd)](_0x50a79b[_0x30a7ba(0x1ce)],{'text':_0x3e6e29,'contextInfo':{'externalAdReply':{'title':_0x30a7ba(0x1de),'body':_0x30a7ba(0x1d2),'thumbnailUrl':_0x287884,'sourceUrl':_0x30a7ba(0x1cd),'mediaType':0x1,'renderLargerThumbnail':!![]}}});const _0xf6a535=await youtubedl(_0x1adbf9)[_0x30a7ba(0x1e7)](async _0x1d9c83=>await youtubedlv2(_0x1adbf9)),_0x458012=await _0xf6a535[_0x30a7ba(0x1cb)]['128kbps'][_0x30a7ba(0x1d4)]();let _0x5c768d={'audio':{'url':_0x458012},'mimetype':_0x30a7ba(0x1e5),'fileName':''+_0x1c4c8d};return _0x51535b[_0x30a7ba(0x1dd)](_0x50a79b[_0x30a7ba(0x1ce)],_0x5c768d,{'quoted':_0x50a79b});}catch(_0x14bf42){console['error'](_0x14bf42),_0x51535b['reply'](_0x50a79b['chat'],_0x30a7ba(0x1dc),_0x50a79b);}};handler[_0x2f7537(0x1e4)]=['youtubeplay'][_0x2f7537(0x1da)](_0x2a1429=>_0x2a1429+_0x2f7537(0x1d0)),handler['tags']=[_0x2f7537(0x1db)],handler['command']=/^(ytplay2|play2|youtubeplay2)$/i,handler[_0x2f7537(0x1ca)]=0x2,module['exports']=handler;