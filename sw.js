/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/01/01/读入黑科技/index.html","c31e59dc4c9cd289d12e0b2ed1b45522"],["/2019/03/14/Todo-List/index.html","f3aace68a18443e54125da5f9281ed82"],["/2019/03/18/BZOJ-3110/index.html","366dfdad4c1e56c426cf339ed707a8b6"],["/2019/03/21/模板-静态区间第K小（主席树）/index.html","75be4d618a04b77c98d2a48aec06cd41"],["/2019/03/22/BZOJ-1901（动态区间第K小）/index.html","eb74df5a9a21008aadfd5a168ff37225"],["/2019/03/23/Luogu-3157/index.html","afa13024a17a7a080fc5fc417e466d36"],["/2019/03/26/BZOJ-4827/index.html","1befbb316c0174e5625f6b59580eaafe"],["/2019/03/28/BZOJ-3527/index.html","28669c0f5460628f5f8b0da5e70892a1"],["/2019/03/29/BZOJ-4503/index.html","496f38ff79fe8b5bb9fd389db34af604"],["/2019/03/29/模板-exCRT/index.html","00c58d5cc75a2b2575062758bef83822"],["/2019/03/30/合集-斜率优化/index.html","9386124502a64afc48f25b1e06352851"],["/2019/04/02/Luogu-2444/index.html","9e987f854b182023e8aeeb701ea08727"],["/2019/07/02/Luogu-4197-ONTAK2010-Peaks/index.html","1b145eb849b3b50d80f260dbd57b389c"],["/2019/07/07/Luogu-2042-NOI2005-维护数列/index.html","abb106c6d033020ad53a3a5f522e7c93"],["/2019/07/07/模板-三维偏序/index.html","7ab8a4752648eb507844597f9aeb63c1"],["/2019/07/16/胡闹-多重集合问题/index.html","cb0f45b1a566a5e51532f1020a4e42be"],["/2019/07/17/胡闹-文本编辑器/index.html","a3bdc7a8a509fc31f8772e307658527e"],["/2019/07/18/胡闹-最小质因数/index.html","41c00a343712d032c301b00fda2e0af6"],["/2019/07/19/胡闹-一路畅通/index.html","8ae36da79304ca3f210f946ca2181c67"],["/2019/07/19/胡闹-卷积练习题/index.html","b3a38b2549787ab24bf20ce015a4ef38"],["/2019/07/19/胡闹-斐波那契/index.html","d42680af386782ec68c8913b94d37969"],["/2019/07/20/胡闹-序列/index.html","3c09c0704f75ee215c82dadc26d33600"],["/2019/07/21/胡闹-string/index.html","2886b9a7743deff9e2afae86ddbf0085"],["/2019/07/21/胡闹-老园丁与小司机/index.html","bca4c4f1d6e715db7f1dc872319fda03"],["/2019/07/22/胡闹-reform/index.html","5bc9a7e5c8428910c71833ec08952337"],["/2019/07/23/Luogu-2597-ZJOI2012-灾难/index.html","b9fb61d3e2ccdd5e7bd6b52105a1e2d9"],["/2019/07/23/胡闹-interval/index.html","53b12a20d6ec492b315327f56716fad0"],["/2019/07/24/Luogu-4074-WC2013-糖果公园/index.html","a652b9c4656f82fd6255cdf9075755f3"],["/2019/07/24/胡闹-tree/index.html","e400cd7822f95978ce951b1e7ebc7032"],["/2019/07/25/胡闹-回文/index.html","1649df4763c38cfcf5a67f33abca800b"],["/2019/07/25/胡闹-填数/index.html","05b28cb70df54b5f840fd774929fd788"],["/2019/07/26/口胡-字符串最小等价串/index.html","efb055d2fc8a8aca82f96ea225a724b5"],["/2019/07/27/口胡-最小K覆盖圆/index.html","3d2de20f4f18c95181fda864915a125c"],["/2019/07/28/胡闹-交互程序/index.html","a23a02f7ae68eabb08e28d4ca4803773"],["/2019/07/28/胡闹-统计三角形/index.html","6261adc0c8e7b2ae0fa61bd742b92bc7"],["/about/index.html","a8ef7154477c0d9c1425934f76d8c851"],["/archives/2017/01/index.html","773880fb053ab7dfb3774992e2e6f746"],["/archives/2017/index.html","3ac986110124d82cdcc0c8ecae602f6f"],["/archives/2019/03/index.html","1a99b66d33392b527da0aa562b9098da"],["/archives/2019/04/index.html","83654d040ae24ab48f80b80c92b81773"],["/archives/2019/07/index.html","c74c4b691ef200edb34ea105ac38b3f1"],["/archives/2019/07/page/2/index.html","04d2d030ce714b097924e930d48a2549"],["/archives/2019/07/page/3/index.html","3b57f7394860b5dfbbf8ba5483afd602"],["/archives/2019/index.html","e9ba4796db25ff261677adcdfedb00b3"],["/archives/2019/page/2/index.html","ea70b24e371b0e238b013c91e8239d04"],["/archives/2019/page/3/index.html","ada593679c7ed9303738e68f6b27099f"],["/archives/2019/page/4/index.html","23da4297f09f9eaadb4b68a435987007"],["/archives/index.html","c341cdd4ce86036eccd0c63db4467fd3"],["/archives/page/2/index.html","d73860d7575a5cbc2c1640055a5ba48f"],["/archives/page/3/index.html","dd97c915b507d44720880ae6bd0a9fe1"],["/archives/page/4/index.html","89898ec3f4a4b904b0f9bf2095259744"],["/bundle.js","56389d6b99fbe1b43673c06df3ae5da1"],["/categories/index.html","1836ffc54f3801643b6b0b17529ab6f5"],["/categories/杂项/index.html","dd69bc47e80de3f06f84486869dd75fb"],["/categories/模板/index.html","449006c97d2cf6604736ee5abc7e041d"],["/categories/题解/index.html","0738302f1d0c839d1a6c326ed97bbeab"],["/categories/题解/page/2/index.html","4a61656557eb9fd7447525320feaf139"],["/categories/题解/page/3/index.html","8f2e9bae43a9305a38a875d576f3f9e1"],["/categories/题解/合集/index.html","5a0f2c7264ee36ccf167137b3ac39dc1"],["/categories/题解（口胡）/index.html","f6461de75d73d9eb926189c1b90565ff"],["/css/back-to-top.css","556ad6f62ee8a83184272baca5468666"],["/css/insight.css","205755754637b723fae96c6c40622230"],["/css/progressbar.css","bf4b3eb4d2b9683e9bad95f36e88efe9"],["/css/search.css","12be3382d498d4a05aa8fd0a13c07bcb"],["/css/style.css","35cd47b5e8b84d704f61ccd691bebfb5"],["/images/avatar.png","93aa915a77cef01956276aacaab48271"],["/images/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/images/code.png","3ff99963cd6b42ecffc51b6b098446a7"],["/images/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/images/logo.png","9a06864183821dda6b4bd6b4ab6f8b8b"],["/images/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/images/wechat.jpg","1c17fd2e5163b4d6959251cbc13f608c"],["/img/background-old.jpg","59acb3f7f13a1ef1a06a6914fb2f6516"],["/img/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/img/主席树.png","a7b53159041fdba938e1b2c936525fd8"],["/index.html","b652f36a7e8b51775db9e9ccd8b110c9"],["/js/animation.js","0c794ad2b3712352ee0f751b7f78febd"],["/js/back-to-top.js","c2ce6f5cb6e89b35fdd8c1fc25a9668f"],["/js/clipboard.js","d29605a584c775c8ad5dcd1ae721a68d"],["/js/gallery.js","10a9538f92fbf8bf277d46fd2bb2b119"],["/js/insight.js","4fc742a9cf94f22db87bd41ba89902ba"],["/js/main.js","48a6031755b023be26385ad7871c6d21"],["/page/2/index.html","b35cbc7ca9f908b673e1c393103790e1"],["/page/3/index.html","b4e1fd0c6da16e562a42ed944de3093c"],["/page/4/index.html","c1ab7a274847b6ddd84ceee0f21f9098"],["/page/5/index.html","8b0e83aa57cc64304a2e92b3fe2439a8"],["/style.css","398949a380c8b185fc07a1bff8ab07d7"],["/sw-register.js","197b79ac28e14b6d16d2604d1de7a8db"],["/tags/AC自动机/index.html","96b9f21181daf374c52cde4daacbbb88"],["/tags/FFT、NTT/index.html","b997c146ebe6e7a7ea83bf2bd35332ee"],["/tags/Hash/index.html","c24f5d807c3e4e8d35f5923c69a5b0ae"],["/tags/Kruskal重构树/index.html","98a33395acc8550cc613e776d8070fcb"],["/tags/WO-YE-BU-HUI/index.html","92a2d812cac14efc7732d88ac98a36dd"],["/tags/excrt/index.html","4fc9ef011cf0374a519267d0dc6171c7"],["/tags/index.html","4f55a9ebf54430b0175f24edfcb62d86"],["/tags/lct/index.html","7de3de3b03f11c4ffc4a6fd3ba80ef5f"],["/tags/主席树/index.html","727be41b28bd865205aa4e3aa649747b"],["/tags/交互/index.html","ed88b368fb47bb25a575ec2c67e8a3d2"],["/tags/倍增/index.html","f5e4b0d147c414bbd1ec465c62689e5c"],["/tags/卡常/index.html","8bbde906fc2fd1d06bc93c38bc79a82c"],["/tags/口胡系列/index.html","2779f00687b89a1ef1cfc652ce9a3a95"],["/tags/可并堆/index.html","dca7acd973fe3a7b2abb553532913d55"],["/tags/坑/index.html","4fcd3572ec5e39d0b34d62c4bf0a37c4"],["/tags/套路/index.html","6ca4f3fe70675cfca68635b71544f711"],["/tags/字符串/index.html","f5adc44dccfdc2168114a25cdcb8c49c"],["/tags/容斥/index.html","3a3c50457dec97cbdb7fe5046da87c56"],["/tags/左偏树/index.html","1d79fa562bf9bf3007917602248a0910"],["/tags/平衡树/index.html","af58d5250ea40cdcd06e60865a0a2834"],["/tags/技巧/index.html","c34230bf0720c1e35d5b564af5368f4f"],["/tags/数论/index.html","cf336777588023689b01bad0473d1698"],["/tags/斜率优化/index.html","84a6f2a578dd385700f8d543915c4aca"],["/tags/树上莫队/index.html","e52d46b395a94f75b93d425b71534e91"],["/tags/树套树/index.html","83c4cb6344513426c500c1b94295f513"],["/tags/毒瘤计数/index.html","20c091a009709b40f4277295e8946097"],["/tags/生成函数/index.html","5b0bacc4c0e21eccfb81a30ccf22a145"],["/tags/网络流/index.html","ebb13ccd60bd49972501a4f3e6f7c9a0"],["/tags/胡闹/index.html","6320af1469c0dfabc816afe1102e28c5"],["/tags/胡闹系列/index.html","5a7dd575947e2b230572475b9b10b4d8"],["/tags/胡闹系列/page/2/index.html","350aa77e9829021967083c26bde9011d"],["/tags/莫比乌斯反演/index.html","1659d07757aa92c0d19a001d5c3c39db"],["/tags/计算几何/index.html","426eb62678e490c3e61876e02352be24"],["/tags/高级数据结构/index.html","5231c41255558d5bf71b38034913a82a"],["/tags/黑科技/index.html","9c28a7ad27bd8245df622a2cee95286a"]];
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
