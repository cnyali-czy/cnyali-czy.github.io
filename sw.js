/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/01/01/读入黑科技/index.html","a9fb05de2cc30f8104d4b3f1bb8bc196"],["/2019/03/14/Todo-List/index.html","2759a708bdcfa0a2c001761142dd0db9"],["/2019/03/18/BZOJ-3110/index.html","8d031308b8b6371f48c29839967f809f"],["/2019/03/21/模板-静态区间第K小（主席树）/index.html","1cd2dded14318fd38711be627b13f06e"],["/2019/03/22/BZOJ-1901（动态区间第K小）/index.html","3091817f150d73c3d5a459b5a4083173"],["/2019/03/23/Luogu-3157/index.html","dc5642e51836b6a7e02db0508b3cc9df"],["/2019/03/26/BZOJ-4827/index.html","05c0b6b445e8f925ddcd6ffa516b58e3"],["/2019/03/28/BZOJ-3527/index.html","f1c319f2ac9bd06180052988666faa53"],["/2019/03/29/BZOJ-4503/index.html","d5d89f64e0ccda0ce650d42bcb4cea57"],["/2019/03/29/模板-exCRT/index.html","9950b58773c447c175edf1d3e48e17e6"],["/2019/03/30/合集-斜率优化/index.html","e12f4b8e37b42757b1b7d4720b6f3407"],["/2019/04/02/Luogu-2444/index.html","24162c898f08bded2900b2c4aa72be8b"],["/2019/07/02/Luogu-4197-ONTAK2010-Peaks/index.html","63b9b7bbc0fba0d2d650bfe2f3a2fa42"],["/2019/07/07/Luogu-2042-NOI2005-维护数列/index.html","4c677f925071c4c07d3efc7a67661cd6"],["/2019/07/07/模板-三维偏序/index.html","467954c571f3922221fdebb729c398ce"],["/2019/07/16/胡闹-多重集合问题/index.html","1bbcc4ac02af223e9f1411d0abd6a640"],["/2019/07/17/胡闹-文本编辑器/index.html","37d66a91113b80ec8edbb1b9b0dc9555"],["/2019/07/18/胡闹-最小质因数/index.html","531076ed62d322eb976f395b8a96405a"],["/2019/07/19/胡闹-一路畅通/index.html","5c190132e67dfe22965479383d5f56f6"],["/2019/07/19/胡闹-卷积练习题/index.html","3386bb2e43bd1c9b595dcbc914010769"],["/2019/07/19/胡闹-斐波那契/index.html","da33334a8c837a8ccbfda707af010e32"],["/2019/07/20/胡闹-序列/index.html","c80ace1f8cf05385c20b1ed291152799"],["/2019/07/21/胡闹-string/index.html","4597eee9f6a629cd09abc49872972173"],["/2019/07/21/胡闹-老园丁与小司机/index.html","719860778f443dbea7402264a4708975"],["/2019/07/22/胡闹-reform/index.html","a629cf190c4208bbfbae107035513906"],["/2019/07/23/Luogu-2597-ZJOI2012-灾难/index.html","77922c52595edaf0e06455453d9e91ab"],["/2019/07/23/胡闹-interval/index.html","cff317ea8b586ca71e10be7403bc1217"],["/2019/07/24/Luogu-4074-WC2013-糖果公园/index.html","0eebe7246246676a1e199a13f1aa2d53"],["/2019/07/24/胡闹-tree/index.html","28a4332b2313acf82c21a165bdbb9a55"],["/2019/07/25/胡闹-回文/index.html","5988c6779d301d753990545ba2d87568"],["/2019/07/25/胡闹-填数/index.html","c00a48c67da1c66b661555d6d72e06a0"],["/2019/07/26/口胡-字符串最小等价串/index.html","def05d4ef3b056cd83b7348b7ed69e79"],["/2019/07/27/口胡-最小K覆盖圆/index.html","357297afe152e1d58259c7c4b42514f3"],["/about/index.html","dc891f1b013c912c6e2d79f9c940a456"],["/archives/2017/01/index.html","0a60cd56a0ef98a2c166f02c1fe574ed"],["/archives/2017/index.html","276e2bcbb51131155edf151a69106208"],["/archives/2019/03/index.html","a44c5fd45842fc2435d9b553605ea7d1"],["/archives/2019/04/index.html","328af10a72dc32e8711ab78b86ce01eb"],["/archives/2019/07/index.html","b74ed90fc695da2ba3e1516008033d7d"],["/archives/2019/07/page/2/index.html","8ed67675a58ecf962a58befa4fef0c29"],["/archives/2019/07/page/3/index.html","73a00210a4f7567e1e5e0ed1575be334"],["/archives/2019/index.html","1ce364b143a50447b1c827b3fe4555ac"],["/archives/2019/page/2/index.html","8bacb33e654b51ec4144aae70d5b5742"],["/archives/2019/page/3/index.html","f32de15e48e02e9108f4d86dc4431813"],["/archives/2019/page/4/index.html","11ea98f2645c94a4cfe52da8fbb28210"],["/archives/index.html","060c9f0f12a67958b7609ca24a6b9e8e"],["/archives/page/2/index.html","4a3cc91531053908d5566d1ab67f86e2"],["/archives/page/3/index.html","ac8e98ba96c1a4edcf9112dca6bfefdf"],["/archives/page/4/index.html","ded1788f64e45b0419ccd7d699b31afb"],["/bundle.js","56389d6b99fbe1b43673c06df3ae5da1"],["/categories/index.html","1c1a21798c5d18e31e70273f951f1d7f"],["/categories/杂项/index.html","ea239a994b409d40b70540c051d893bf"],["/categories/模板/index.html","f960825ce54a23deb9952b91cbb88404"],["/categories/题解/index.html","90ab546534832a9f6512d1d4f08f7bb6"],["/categories/题解/page/2/index.html","38c0c36b8c9a60c5cf0d4052d55455e6"],["/categories/题解/page/3/index.html","cea799f82e1f974fa7292fdcd75a458b"],["/categories/题解/合集/index.html","f3e59af39c1cd119875a0af5a97b3910"],["/categories/题解（口胡）/index.html","05798d520d9b0c52317d90f8585758ff"],["/css/back-to-top.css","556ad6f62ee8a83184272baca5468666"],["/css/insight.css","205755754637b723fae96c6c40622230"],["/css/progressbar.css","bf4b3eb4d2b9683e9bad95f36e88efe9"],["/css/search.css","12be3382d498d4a05aa8fd0a13c07bcb"],["/css/style.css","35cd47b5e8b84d704f61ccd691bebfb5"],["/images/avatar.png","93aa915a77cef01956276aacaab48271"],["/images/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/images/code.png","3ff99963cd6b42ecffc51b6b098446a7"],["/images/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/images/logo.png","9a06864183821dda6b4bd6b4ab6f8b8b"],["/images/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/images/wechat.jpg","1c17fd2e5163b4d6959251cbc13f608c"],["/img/background-old.jpg","59acb3f7f13a1ef1a06a6914fb2f6516"],["/img/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/img/主席树.png","a7b53159041fdba938e1b2c936525fd8"],["/index.html","eee6081ef197528a90470f800a6ea9da"],["/js/animation.js","0c794ad2b3712352ee0f751b7f78febd"],["/js/back-to-top.js","c2ce6f5cb6e89b35fdd8c1fc25a9668f"],["/js/clipboard.js","d29605a584c775c8ad5dcd1ae721a68d"],["/js/gallery.js","10a9538f92fbf8bf277d46fd2bb2b119"],["/js/insight.js","4fc742a9cf94f22db87bd41ba89902ba"],["/js/main.js","48a6031755b023be26385ad7871c6d21"],["/page/2/index.html","4bf5cd01f129e23a334c2d73510f2303"],["/page/3/index.html","e29d09ba542d4138accb7b5cd1e6bada"],["/page/4/index.html","74d3165841a65dde3e97693bff00733d"],["/page/5/index.html","347ffd0d0be0a73f8e74d204b9f44df2"],["/style.css","398949a380c8b185fc07a1bff8ab07d7"],["/sw-register.js","481f49af93562a5c7c01008688676c4d"],["/tags/AC自动机/index.html","529386adacc471bc9034bf8ba7a679ad"],["/tags/FFT/index.html","9f826354699182ab209f4bd78fad4904"],["/tags/Hash/index.html","c9fcca8938611bf27eddb84ce03d137c"],["/tags/Kruskal重构树/index.html","8a8af483bc95ee38ff5898d32fd6cac3"],["/tags/WO-YE-BU-HUI/index.html","54e177cdd24dc7b430c7d2059414343c"],["/tags/excrt/index.html","a7543a28ebe9e661938491d8804cc536"],["/tags/index.html","7655898dd1ddd04178f706f4e480ec99"],["/tags/lct/index.html","8ba499270fc9018b6e083f552801ad44"],["/tags/主席树/index.html","63e74855bd2df421b56ca50feae1e056"],["/tags/倍增/index.html","68dc68be5774250bef90fc6f93ce7d3d"],["/tags/卡常/index.html","169e3abb9d4dacec3d2a572d3868b09b"],["/tags/口胡系列/index.html","dfc7360345042ed0cb9e59d42f6a52cf"],["/tags/可并堆/index.html","dc4ef1efac4964d22bfdef1fbc124e9a"],["/tags/坑/index.html","e77540d900415595bbd83dfef9fe6abc"],["/tags/套路/index.html","bafb838baf2c41510e73946353d92fcf"],["/tags/字符串/index.html","c17ffc79f720509d875070080008930f"],["/tags/容斥/index.html","b524e102c96019076573aeabfda8f2f8"],["/tags/左偏树/index.html","f6d53d56bc29b86fb0fb2c5845b6b1d5"],["/tags/平衡树/index.html","22366e64da6c13fcb32f79e818150875"],["/tags/技巧/index.html","8b3be4e7b215aa6bf874303024545e22"],["/tags/数论/index.html","fba73402b51a98f9600cbc4beba42cb8"],["/tags/斜率优化/index.html","36e4efd78a1e57970b12a0bb3532bbe5"],["/tags/树上莫队/index.html","32ca0bb5ffee8a3dc0912412741be442"],["/tags/树套树/index.html","e307e0184173505bfe93f43b3003aade"],["/tags/毒瘤计数/index.html","1e7f279c2f76fe44fd680d49bd59401a"],["/tags/网络流/index.html","ee5bc2902da5dd5891e210803d196477"],["/tags/胡闹/index.html","8a490b532e43c9793dbd80fe9dc35638"],["/tags/胡闹系列/index.html","bf5d7c136c03d099c192883127d56ef1"],["/tags/胡闹系列/page/2/index.html","d919dad78a5164ea796e28b2487e9c62"],["/tags/莫比乌斯反演/index.html","7b0dac7c75c682e10939e82121bce61d"],["/tags/计算几何/index.html","71f22e85e236ad10b376e7fe55eaadd2"],["/tags/高级数据结构/index.html","eba6a660dc38b5bbaccea095fce9f4e6"],["/tags/黑科技/index.html","8672dc756896f6b6677792666e5ead74"]];
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
