/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/01/01/读入黑科技/index.html","782d7d984fee45c99311d0fac841b49b"],["/2019/03/18/BZOJ-3110/index.html","b77ea11e7bf94d1b96a9868b04ae279b"],["/2019/03/21/模板-静态区间第K小（主席树）/index.html","554f80eb0082dd6263fdb0972eccae10"],["/2019/03/22/BZOJ-1901（动态区间第K小）/index.html","7f2f471eba5a4569fcc643364e54e359"],["/2019/03/23/Luogu-3157/index.html","6ee6b282f67aeab39f6472cee005fcb3"],["/2019/03/26/BZOJ-4827/index.html","5bdcf063ca8be6d7843f4eab7956ea06"],["/2019/03/28/BZOJ-3527/index.html","e6318970f64e0ed71ce21ef454e39996"],["/2019/03/29/BZOJ-4503/index.html","1aa601a3f73b53b1c32e32738cac87cb"],["/2019/03/29/模板-exCRT/index.html","d689bb2998b23c5bb16fd5819b77d914"],["/2019/03/30/合集-斜率优化/index.html","30f54462f60cca185c43790e6b0cd777"],["/2019/04/02/Luogu-2444/index.html","1881d4d20233b2239adb9b60af74f15b"],["/2019/07/02/Luogu-4197-ONTAK2010-Peaks/index.html","384971f48c164e1ab290b41d7c86fc67"],["/2019/07/07/Luogu-2042-NOI2005-维护数列/index.html","b79bbe036088067c1abade234685457d"],["/2019/07/07/模板-三维偏序/index.html","b6bd17c44e83725e6baf43765b677539"],["/2019/07/16/胡闹-多重集合问题/index.html","65245d10b0aeb2ca009dc5427c557f6c"],["/2019/07/17/胡闹-文本编辑器/index.html","cae1ffca809270693143d95c7fd60e95"],["/2019/07/18/胡闹-最小质因数/index.html","a871772a4cdd3d50e9ccc33271249642"],["/2019/07/19/胡闹-一路畅通/index.html","7bec77b3cd852e9fb238bf90a172b021"],["/2019/07/19/胡闹-卷积练习题/index.html","b6d08899645d5b640842ec952ccf2d43"],["/2019/07/19/胡闹-斐波那契/index.html","dba7ed98a799e8cfa837c83446a8e6c2"],["/2019/07/20/胡闹-序列/index.html","253d91d0bc3d8d662d7d8f05c1e46a5b"],["/2019/07/21/胡闹-string/index.html","1776a9b769f65e7ad77ec4ab1ee34a13"],["/2019/07/21/胡闹-老园丁与小司机/index.html","a23f5d35e15dccc302b4a7f6518b2ff7"],["/2019/07/22/胡闹-reform/index.html","20406726efabfe89bf7d42c2a81f776f"],["/2019/07/23/Luogu-2597-ZJOI2012-灾难/index.html","474d268f652598bfadc8470038e0b1c2"],["/2019/07/23/胡闹-interval/index.html","1f19091df4c1d082e0d52dffcb3691b9"],["/2019/07/24/Luogu-4074-WC2013-糖果公园/index.html","f2e3c67f6806f9cb2a9089e0b3674df2"],["/2019/07/24/胡闹-tree/index.html","118426270ad4ad31b3b6450317f71cde"],["/2019/07/25/胡闹-回文/index.html","b57a973536b8cc0cd5772634c1398f09"],["/2019/07/25/胡闹-填数/index.html","c46fde51515a8beed0324ef647c94b0a"],["/2019/07/26/口胡-字符串最小等价串/index.html","dc16f8b6bcb54352b09765eda65c621a"],["/2019/07/27/口胡-最小K覆盖圆/index.html","28b08796f7d7b0328b30328e4739dac0"],["/2019/07/28/胡闹-交互程序/index.html","d77c8339e05f24f2e2fb6f0951d08fcd"],["/2019/07/28/胡闹-统计三角形/index.html","9a919d2114b8a72055166f8aeb3b613b"],["/6667/12/03/Todo-List/index.html","a48a55c63ff39defd64ab7cf97a6d078"],["/about/index.html","f264067dca6c3341b32443dae6deff9c"],["/archives/2017/01/index.html","60172902780323a7a1aed7302c578079"],["/archives/2017/index.html","16379d7c30f2ea91bf5ca8e24f553fdb"],["/archives/2019/03/index.html","1f8241af54e7ccd192d293afb3404b23"],["/archives/2019/04/index.html","4679b05e622bd9ab1c0baf7ff91e346f"],["/archives/2019/07/index.html","f7c6f6ea6011b956ce17eb77cec0cc5a"],["/archives/2019/07/page/2/index.html","b7cdda7bc8dd9988d2d1f449886d9327"],["/archives/2019/07/page/3/index.html","121be50388ebf1a344b89e78175af164"],["/archives/2019/index.html","5d40588464b65b4177678e92f6a8e84b"],["/archives/2019/page/2/index.html","4cc5642fb08718052e5ba7dc5b447f94"],["/archives/2019/page/3/index.html","a5714e4d9a979df8eb2693b8ab41f7ac"],["/archives/2019/page/4/index.html","33456d53b1cc2dc38354ff98a4f2d30d"],["/archives/6667/12/index.html","8c523e507dfdd794338588ebcbbba21e"],["/archives/6667/index.html","38354196014ee82e29dc6831d0163845"],["/archives/index.html","002f06559e13723b571e5b8112d986ab"],["/archives/page/2/index.html","343206951b331ed2b2597249ea5d0f28"],["/archives/page/3/index.html","b237b5811a0db6d42cf0b94f5ca93ccb"],["/archives/page/4/index.html","edc0a67d4020189f6c757ad2320d2101"],["/bundle.js","56389d6b99fbe1b43673c06df3ae5da1"],["/categories/index.html","7b579b1dd63c63623b607aa5c7047726"],["/categories/杂项/index.html","ec879e7b37f7484009c40964b5644e85"],["/categories/模板/index.html","c1f6fd4ee0a8839350a1e1d8c4166782"],["/categories/题解/index.html","c96a28d8645d9be3fae7cd6f10a0b349"],["/categories/题解/page/2/index.html","635a890fd9d8d4af5991ac6833081d89"],["/categories/题解/page/3/index.html","dfb0e24ea4ec84a80215d7f02643baa4"],["/categories/题解/合集/index.html","49146ef17f9b37b0834988d800d8fd39"],["/categories/题解（口胡）/index.html","5dbcfe490fa3876282475712492e009d"],["/css/back-to-top.css","c3a102a897acd8fb8907585675ca6382"],["/css/insight.css","205755754637b723fae96c6c40622230"],["/css/progressbar.css","bf4b3eb4d2b9683e9bad95f36e88efe9"],["/css/search.css","12be3382d498d4a05aa8fd0a13c07bcb"],["/css/style.css","35cd47b5e8b84d704f61ccd691bebfb5"],["/images/avatar.png","93aa915a77cef01956276aacaab48271"],["/images/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/images/code.png","3ff99963cd6b42ecffc51b6b098446a7"],["/images/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/images/logo.png","9a06864183821dda6b4bd6b4ab6f8b8b"],["/images/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/images/wechat.jpg","1c17fd2e5163b4d6959251cbc13f608c"],["/img/background-old.jpg","59acb3f7f13a1ef1a06a6914fb2f6516"],["/img/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/img/主席树.png","a7b53159041fdba938e1b2c936525fd8"],["/index.html","9dffceed47db65d02c4ed1049efc2347"],["/js/animation.js","0c794ad2b3712352ee0f751b7f78febd"],["/js/back-to-top.js","c2ce6f5cb6e89b35fdd8c1fc25a9668f"],["/js/clipboard.js","d29605a584c775c8ad5dcd1ae721a68d"],["/js/gallery.js","10a9538f92fbf8bf277d46fd2bb2b119"],["/js/insight.js","4fc742a9cf94f22db87bd41ba89902ba"],["/js/main.js","48a6031755b023be26385ad7871c6d21"],["/page/2/index.html","66e8b15ead865915ae93a96bd4be8f0f"],["/page/3/index.html","bba10c1fb925e97e662d3acfd04f5b17"],["/page/4/index.html","551880b0b397bec818aaea61ad529280"],["/page/5/index.html","35c77a18b7e341ade0b3dbcf1399ddb6"],["/style.css","90566a4472809c6c9f25e265cb42fe21"],["/sw-register.js","607f3d342c672fab7fc341755b9375ad"],["/tags/AC自动机/index.html","94a690777fdbc5515c22a8fb50c805c6"],["/tags/FFT、NTT/index.html","1398def618b9cebd4e4ab91ca0d254e3"],["/tags/Hash/index.html","aff9c7170cf64a87b5b999908b3b38f4"],["/tags/Kruskal重构树/index.html","96fc26f7e492956d5533599adc9be597"],["/tags/WO-YE-BU-HUI/index.html","e1655695362e81361b098791553a7fe0"],["/tags/excrt/index.html","38690e800b49b331a3af61aa34f4548c"],["/tags/index.html","eba38f3561ca7f9cc2cc9b0d6791dcf5"],["/tags/lct/index.html","3b358a1c9f0c6e60ab3166d505b1cc38"],["/tags/主席树/index.html","8a7ab8555d3d2f3fdc72ebfbfb420466"],["/tags/交互/index.html","079180e1b7faa448476c7921d9ce227a"],["/tags/倍增/index.html","22aae795fbcb507818e15e9916ade3bc"],["/tags/卡常/index.html","0ab8d52b6f5257c8267705ffddfc5420"],["/tags/口胡系列/index.html","35a9d6c78208d67c49199604fefcb9c9"],["/tags/可并堆/index.html","ff4d0cb219ffff8fe3950e1523cef340"],["/tags/坑/index.html","be549a803ec8d925672aa17f70c6aa46"],["/tags/套路/index.html","46979a77e6564fc45b59119e4f734ab0"],["/tags/字符串/index.html","45c9d92bcf00f82814da1c1734e528fc"],["/tags/容斥/index.html","cf412565e1a74f8698c2559ee58ba77e"],["/tags/左偏树/index.html","54e565aa851a99fbe636808fc4f951ea"],["/tags/平衡树/index.html","7ba3afe87f020b7da3cfcce36422eb2f"],["/tags/技巧/index.html","1606d450df4efce0c9635c3bc25e28d0"],["/tags/数论/index.html","853dc202beecc125ef4b44d6b9b6d85d"],["/tags/斜率优化/index.html","bce6905053e188546d453894a98194ce"],["/tags/树上莫队/index.html","08c05c6265c8b11c0aefab346d55223c"],["/tags/树套树/index.html","649ad92ac173b22b90d3f73408e0f47c"],["/tags/毒瘤计数/index.html","98a65ef308a6bfdb2273b6e4e6f0d129"],["/tags/生成函数/index.html","76c1dedae2411bcb71b03c1241a9ce87"],["/tags/网络流/index.html","96c70b5814e35c0af2a123cbbfa3f34a"],["/tags/胡闹/index.html","ae1c67161224574f913f013ec4368c7e"],["/tags/胡闹系列/index.html","1f87638be17cf2ef209612bdf382e6e8"],["/tags/胡闹系列/page/2/index.html","f2aaff332c24a5e9dbec96b1c3a104fe"],["/tags/莫比乌斯反演/index.html","28c50d2ecf29619e56a109c37632a2f5"],["/tags/计算几何/index.html","9c1f9fd21f83c153f48dcb41fc62df56"],["/tags/高级数据结构/index.html","1d05b01f7cb45f6a0cd270cb50abbaef"],["/tags/黑科技/index.html","c13be24d20d2f53b793796d0e83bab19"]];
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
