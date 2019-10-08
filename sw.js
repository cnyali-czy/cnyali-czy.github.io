/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/01/01/读入黑科技/index.html","6803de5dc7394e3b1bd1a210c7f78f4c"],["/2019/03/18/BZOJ-3110/index.html","61c100f9f2f29004c5d0160d5d252233"],["/2019/03/21/模板-静态区间第K小（主席树）/index.html","98e06b900e376f9e430265696f940117"],["/2019/03/22/BZOJ-1901（动态区间第K小）/index.html","91b5eca46d52d7cc4759d0444b45c44c"],["/2019/03/23/Luogu-3157/index.html","798abf86cbe39592772d1ee3259e2177"],["/2019/03/26/BZOJ-4827/index.html","8c62d4ccd73f4480708cf17f64e0fde6"],["/2019/03/28/BZOJ-3527/index.html","414ca4170b93c82db31c9b66ca1010f1"],["/2019/03/29/BZOJ-4503/index.html","c98ae6176bda4d61bd06f3867b82779f"],["/2019/03/29/模板-exCRT/index.html","2870744a41de0f6208298eb6b025b335"],["/2019/03/30/合集-斜率优化/index.html","72efc1832e936c85c70618f6c5b647d9"],["/2019/04/02/Luogu-2444/index.html","a0d77ea57e48d3e93a7c5502d759262d"],["/2019/07/02/Luogu-4197-ONTAK2010-Peaks/index.html","d87ebeeedf55380e8d8aa68eed204681"],["/2019/07/07/Luogu-2042-NOI2005-维护数列/index.html","789a09501142588da3516423948b750b"],["/2019/07/07/模板-三维偏序/index.html","c0d11d791d83a3344b5aba082ad9d11e"],["/2019/07/16/胡闹-多重集合问题/index.html","6ceb40187f4a6488c53ec158bc7f9aed"],["/2019/07/17/胡闹-文本编辑器/index.html","848440ada85624df7ac8ea734ec00794"],["/2019/07/18/胡闹-最小质因数/index.html","a07553dfd6ba31c80c46bae11e223f6f"],["/2019/07/19/胡闹-一路畅通/index.html","2a403e9f6035f2823bbb362ef04529cb"],["/2019/07/19/胡闹-卷积练习题/index.html","aaf577f7a16add67913bac1906e1bd09"],["/2019/07/19/胡闹-斐波那契/index.html","743fb3a3c60aa5fbdd464bffa426a97c"],["/2019/07/20/胡闹-序列/index.html","dbdd465caa202cf91849dc22fb1c587d"],["/2019/07/21/胡闹-string/index.html","1cf27ca2f7c50d5b00d547ccccac5f19"],["/2019/07/21/胡闹-老园丁与小司机/index.html","9561ec8b40c521b46e2d5cd24596aed4"],["/2019/07/22/胡闹-reform/index.html","8563c9507ed72214740d260fb2b2d8e0"],["/2019/07/23/Luogu-2597-ZJOI2012-灾难/index.html","0d6655314ad37d63ebc041fabfaf7d1c"],["/2019/07/23/胡闹-interval/index.html","b24301c4c21f79c702ef1e99117d97c8"],["/2019/07/24/Luogu-4074-WC2013-糖果公园/index.html","98ea6fba4e70a4b67c95b906fa8f9c09"],["/2019/07/24/胡闹-tree/index.html","9688d5d19ded1a1d9db19368e387f05e"],["/2019/07/25/胡闹-回文/index.html","d8d66b10496b0912aa644b5693df5d55"],["/2019/07/25/胡闹-填数/index.html","a2124b974f724aa1c3b8ec0335b70138"],["/2019/07/26/口胡-字符串最小等价串/index.html","adf45cd9f0d5dd4a542e7a4af3e8a7d3"],["/2019/07/27/口胡-最小K覆盖圆/index.html","64cfc1a381bdff03afb260926e2790b8"],["/2019/07/28/胡闹-交互程序/index.html","0409e20ec61a2ad47f8255a48a7dec1b"],["/2019/07/28/胡闹-统计三角形/index.html","58bc3c82201e8d78962cf8ef744e9789"],["/2019/07/29/模板-后缀排序（有待完善）/index.html","1164efc50a0ae7f138dc35f266f56b6f"],["/2019/07/30/BZOJ-3513-MUTC2013-idiots/index.html","d49a3d47283f70f4ab13a69f0873c233"],["/2019/08/01/模板-多项式求逆/index.html","2404c1cbc6167830ec936e355bff3b4c"],["/2019/08/03/Luogu-1117-NOI2016-优秀的拆分/index.html","2e865c9a53df82b7c0e0cbd5cab0c683"],["/2019/08/07/BZOJ1951-SDOI2010-古代猪文/index.html","7f67e633f25c813cfd10852e6865f77a"],["/2019/08/07/口胡-LOJ2059-TJOI-HEOI2016-字符串/index.html","e55e9a38bc18308f00f4a42a27c67edb"],["/2019/08/10/LOJ2189-SHOI2014-神奇化合物/index.html","75ca1542f74fc98e215dcad692ef0607"],["/2019/08/11/UOJ131-NOI2015-品酒大会/index.html","b7edf02e6ee7168074b04320860d3cf8"],["/2019/08/12/BZOJ5336-TJOI2018-party/index.html","f54ad24d63f1189d724fd1e7ebaf8b44"],["/2019/08/13/ARC-093-F/index.html","454dbef9f5814d69e13acb2656107da7"],["/2019/08/17/胡闹-方差/index.html","5a47b0cb9b797a61ef71c0a910357964"],["/2019/08/18/口胡-Luogu3157-CQOI2011-动态逆序对/index.html","ef00ae4b46e610242e2e657d4bbe6e13"],["/2019/08/19/LOJ2057-TJOI2016-HEOI2016-游戏/index.html","cc35659964e456034e25ded8e1653f1c"],["/2019/08/20/LOJ2006-SCOI2015-小凸玩矩阵/index.html","9810cf12304f33f4abbec10325463c7a"],["/2019/08/21/口胡-BZOJ4522-CQOI2016-密钥破解/index.html","ab7ebb3ba1ae2e30b0c34e44be5a4c05"],["/2019/08/22/口胡-LOJ2548-JSOI2018-绝地反击/index.html","66ad0618aceb80bda11264e092d4fbb9"],["/2019/08/23/BZOJ2005-NOI2010-能量采集/index.html","0379e6f22ffa693da1035d78c76db18e"],["/2019/08/24/合集-莫比乌斯反演/index.html","a11f0c4c4c9463a81c887bf39292006a"],["/2019/08/25/BZOJ3122-SDOI2013-随机数生成器/index.html","eb8986d334b0388f21cab5b4a82792b9"],["/2019/08/27/BZOJ4137-FJOI2015-火星商店问题/index.html","9c5c29efe1f443924cce1afaef831672"],["/2019/08/28/BZOJ2331-SDOI2011-地板/index.html","8907ea5368b1fee0a6466b96869e659b"],["/2019/08/29/口胡-LOJ2001-SDOI2017-树点涂色/index.html","df1e87437b1855347fd03ca0197cef10"],["/2019/09/09/GEDT-2C/index.html","bb90bb20a6e9cddb6e83c3b780ed00e2"],["/6667/12/03/Todo-List/index.html","687ef5d4da97ef139740105229fdf3a6"],["/about/index.html","5f239c468658a6ce928c6defbb7bd5d0"],["/archives/2017/01/index.html","3c5e40cafda0f46e6f5490f4000e4295"],["/archives/2017/index.html","a07bbf6d40ec572204723d434c6ac563"],["/archives/2019/03/index.html","45ef43adfbda65daad04ef70440d1dfd"],["/archives/2019/04/index.html","dc559d64b2f3c01986796c447058c7ac"],["/archives/2019/07/index.html","de5bdcf16d3f851edfd75e3109dc198d"],["/archives/2019/07/page/2/index.html","1becc2c4d06df7f092a953d48341c447"],["/archives/2019/07/page/3/index.html","f2c54144e2e8144995540b2cbfb52338"],["/archives/2019/08/index.html","09b799b10d2c15229a2c1d454d18ae9d"],["/archives/2019/08/page/2/index.html","7de356d3eb7588bcbe5b63e4df8daf31"],["/archives/2019/09/index.html","e5827a49e38e21fe35fcb8a9c2bbf0cf"],["/archives/2019/index.html","8d166bfdffdd818cf382e263b033cbcc"],["/archives/2019/page/2/index.html","023cffecd82883865dc43fd704b554aa"],["/archives/2019/page/3/index.html","deb5adfd70b79e6291f3673beea11144"],["/archives/2019/page/4/index.html","c8444f795def17b60ed1770cfa1b4c4b"],["/archives/2019/page/5/index.html","a8da51254e53511d5a1a029f6a38dfd5"],["/archives/2019/page/6/index.html","ce7b59ff8d86798c661134ea1cb03d28"],["/archives/6667/12/index.html","0b8a3c671ef6f4fd20bd14dd5d5bef37"],["/archives/6667/index.html","d680eae8eb6600fbfb2c709ec4f62a9e"],["/archives/index.html","d0877f729b8d21c9f52715e93e782a19"],["/archives/page/2/index.html","911dd5d7674b8b54d85326351f429e73"],["/archives/page/3/index.html","20e3f2eae713457aadb119c9f01359cb"],["/archives/page/4/index.html","7cd2d700731d1622fae70eaa0b891f40"],["/archives/page/5/index.html","bbc5f4567870e83923fe842ec6cbb6e4"],["/archives/page/6/index.html","31b83ef18133733e802bad108d4f6cbb"],["/categories/index.html","9d608e8b4fb48bf468b0d7c52bd03b95"],["/categories/合集/index.html","e33e7fe9809aaddc353e4b197ca838f5"],["/categories/杂项/index.html","c5f7687ced7381aef3ef48281aacd18b"],["/categories/模板/index.html","83775dfd949be9afbb70b1418832fb66"],["/categories/题解/index.html","ffbe92063102b92ecb431395818a286a"],["/categories/题解/page/2/index.html","fbc872e4d759771d76680ebf17893a60"],["/categories/题解/page/3/index.html","6d440a614037a3054fd95222894dac70"],["/categories/题解/page/4/index.html","155d53cd52cee3a52568ac68dd3d5c3d"],["/categories/题解/page/5/index.html","690e7374c3434b07c7053784c77ac0a5"],["/categories/题解/口胡/index.html","6d73acbff4d76d8501b8d131f0376d8c"],["/categories/题解/合集/index.html","f60f4706110e213ee70b8818f1c8c175"],["/css/back-to-top.css","7e1a8b5f8454d4b9e970f2afe3819bcd"],["/css/insight.css","205755754637b723fae96c6c40622230"],["/css/progressbar.css","bf4b3eb4d2b9683e9bad95f36e88efe9"],["/css/search.css","15dcda6c7358fd8300f140e4105f6d73"],["/css/style.css","35cd47b5e8b84d704f61ccd691bebfb5"],["/images/avatar.png","93aa915a77cef01956276aacaab48271"],["/images/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/images/code.png","3ff99963cd6b42ecffc51b6b098446a7"],["/images/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/images/logo.png","9a06864183821dda6b4bd6b4ab6f8b8b"],["/images/saber-6.jpg","8b5487bfe0cb12e498534582c50c0363"],["/images/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/images/wechat.jpg","1c17fd2e5163b4d6959251cbc13f608c"],["/images/巴御前.jpg","238cbc502acd3fd1dda96ac8a8fd4df9"],["/images/狂兰+盾娘.png","68eceb2464b3fea80681c9ab63db8b54"],["/img/background-old.jpg","59acb3f7f13a1ef1a06a6914fb2f6516"],["/img/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/img/主席树.png","a7b53159041fdba938e1b2c936525fd8"],["/index.html","8140790defe7c841aafc778f95c5ad5c"],["/js/animation.js","0c794ad2b3712352ee0f751b7f78febd"],["/js/back-to-top.js","c2ce6f5cb6e89b35fdd8c1fc25a9668f"],["/js/clipboard.js","d29605a584c775c8ad5dcd1ae721a68d"],["/js/gallery.js","10a9538f92fbf8bf277d46fd2bb2b119"],["/js/insight.js","4fc742a9cf94f22db87bd41ba89902ba"],["/js/main.js","48a6031755b023be26385ad7871c6d21"],["/page/2/index.html","6253941876e5e79bfeaaabb75beb1623"],["/page/3/index.html","0f9cd31ff79e8b8832d9625008be45c2"],["/page/4/index.html","faa31fc4cc95056692750ee099ebe0d8"],["/page/5/index.html","159315de8c8718cb25bf5b71b382bb54"],["/page/6/index.html","cd69260a1cde2c1261ef7e81c7a6a2c2"],["/page/7/index.html","22e2f377b2af074ec49cc28559e6770d"],["/page/8/index.html","b56df2e9cbf68ba55a5b87d468b99c18"],["/style.css","ddd16150a104dba484dd564da5043ea6"],["/sw-register.js","6a5f871511201f6696a318024bb5d47a"],["/tags/AC自动机/index.html","5007f942a09a6ee5b1c6ff881a594ab5"],["/tags/FFT、NTT/index.html","0fc505a9389f9b2986940e2a64cc57c2"],["/tags/Hash/index.html","4e58ec7213eab282a9f1485220a2f457"],["/tags/K-D-Tree/index.html","ec66c3f59db1e68986080825d884b7fe"],["/tags/Kruskal重构树/index.html","88233cf2ad59a8692d6b453f7686d7cb"],["/tags/SAM/index.html","c594a2208199428243751961e01ed9b7"],["/tags/WO-YE-BU-HUI/index.html","a9c981df925048e8c7f2221dff0caf37"],["/tags/excrt/index.html","9313e03758d276e7e8d02be85533392d"],["/tags/index.html","39ad71586233dfb43e24af77fb92a434"],["/tags/lct/index.html","69d6a0e715ffa1c7267333920e098aa8"],["/tags/主席树/index.html","550bb41b4198d0fd319c70b3672269f9"],["/tags/二分图/index.html","fe93f4663f1bbd0f679786724cdaa2bb"],["/tags/交互/index.html","984abd1e0be57c2dcd5dacd3adcb2daa"],["/tags/倍增/index.html","989ba33804e7324a9b9f28d484e08a59"],["/tags/卡常/index.html","c2f908a0a334a4b450991535253e7bc8"],["/tags/可并堆/index.html","edffb82750508e96fee2643b48fb3406"],["/tags/可持久化/index.html","9c8c854c8bf27760b37d59c5a8a2ecec"],["/tags/坑/index.html","ed2cc8b8921532bd37bd759d46da9b59"],["/tags/多项式/index.html","a5e296ff3d3654f8b0ea6ddc058d70f6"],["/tags/套路/index.html","a1777d4d9b046a0ae6b3e66f82e28435"],["/tags/字符串/index.html","1f2bd34b41be0f297c2be4d7190bdfc3"],["/tags/容斥/index.html","e7565b43516b9dedc04389ab60d92926"],["/tags/左偏树/index.html","b4a9415b7e2d12bff54b70cd89cda8b7"],["/tags/带修莫队/index.html","920925cc991b9e2df94b1b7648a55a99"],["/tags/平衡树/index.html","2d793909467ce8d1edda0f3229fcda1d"],["/tags/技巧/index.html","b841efb976fde3ec52815dd8f95da853"],["/tags/插头dp/index.html","029a071b41caed9d70a722589f0f6137"],["/tags/数论/index.html","c46bbf2e1d94ada2ec77981802a28da4"],["/tags/斜率优化/index.html","44191a1046476f43f1d6d4816685efe5"],["/tags/树上莫队/index.html","d4614d4be32997a1e227a4aba7231ac7"],["/tags/树套树/index.html","1d5c772817da4e05384ea3d4afa00e85"],["/tags/毒瘤计数/index.html","fff15cf3926c5664891d87176020909c"],["/tags/生成函数/index.html","6aa7a6b12df16bb8d134687421ee2336"],["/tags/网络流/index.html","53473e289947d6b9625f067758a7938d"],["/tags/胡闹系列/index.html","e87d9b8cd26c7fd6b53a3a7828f5f2c5"],["/tags/胡闹系列/page/2/index.html","4509f1bcbffccda892026206ca906a56"],["/tags/莫比乌斯反演/index.html","4206b574c93b55be33e00f906390a5dd"],["/tags/计算几何/index.html","264a0b13dd5e45babb2654d0f9c5247b"],["/tags/高级数据结构/index.html","4e144d78161a191d1d570024d8d70035"],["/tags/高级数据结构/page/2/index.html","a2cc70d53dc885f72941557ef691f130"],["/tags/黑科技/index.html","9706a8043ef044a726cdbc9d20eb0771"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
