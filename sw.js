/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/01/01/读入黑科技/index.html","4e14910809bdeae0a0be8c02f27a75fc"],["/2019/03/14/Todo-List/index.html","75f655750a3b5b341586d4240ed522bb"],["/2019/03/18/BZOJ-3110/index.html","a691cf9137910d8c98902278f68940a5"],["/2019/03/21/模板-静态区间第K小（主席树）/index.html","f8c4a2391c297b82baa8ba9ec998675e"],["/2019/03/22/BZOJ-1901（动态区间第K小）/index.html","93a3c01ae459ec8f9d8ed8b3fb523fff"],["/2019/03/23/Luogu-3157/index.html","c900b336587a7f72d6b6cc3bd751f427"],["/2019/03/26/BZOJ-4827/index.html","eb21f178cd54668d18fd9d2f719e06d2"],["/2019/03/28/BZOJ-3527/index.html","efa2560ac6f8aa0dfe2d7e9f57032ac8"],["/2019/03/29/BZOJ-4503/index.html","67395423d69659148e34f89e851446b7"],["/2019/03/29/模板-exCRT/index.html","457f418fb0f143c2f526e16c440ac7d0"],["/2019/03/30/合集-斜率优化/index.html","845c49571100cb76a3a0e5dfaab6c374"],["/2019/04/02/Luogu-2444/index.html","4ca060fb8bde6a72545aafe4dd4d51ee"],["/2019/07/02/Luogu-4197-ONTAK2010-Peaks/index.html","49b25e9c23df60b8648c8832e7fbc2da"],["/2019/07/07/Luogu-2042-NOI2005-维护数列/index.html","feaab883ae6313e096f74585f50d0c8c"],["/2019/07/07/模板-三维偏序/index.html","d034194515bd6431190c4e46d1cff163"],["/2019/07/16/胡闹-多重集合问题/index.html","68ae2cf0d8adf4ef745bf9ca5e1d0463"],["/2019/07/17/胡闹-文本编辑器/index.html","325ac08f1c19fe2afbc6b3782e31632e"],["/2019/07/18/胡闹-最小质因数/index.html","b9b9eda46e7220ce2aee8d521fe142d2"],["/2019/07/19/胡闹-一路畅通/index.html","e867d2af67776e43c25ade220740cd89"],["/2019/07/19/胡闹-卷积练习题/index.html","f00a8d686b722856afbcb99108d85263"],["/2019/07/19/胡闹-斐波那契/index.html","346c784a08cd31c5d1df89e2dee4cd77"],["/2019/07/20/胡闹-序列/index.html","c7394dd24e1dc3c5def343c2e7eb6a2c"],["/2019/07/21/胡闹-string/index.html","b591f689e7e7a6a241db5faeb927895c"],["/2019/07/21/胡闹-老园丁与小司机/index.html","7ce2e181779b3523be6a0591193b2b95"],["/2019/07/22/胡闹-reform/index.html","970c1f24e019e4f2275d6301529065ed"],["/2019/07/23/Luogu-2597-ZJOI2012-灾难/index.html","bcbaf9e8252ca3255cc567b8456ec4d2"],["/2019/07/23/胡闹-interval/index.html","0b70e0180e9f0a5a6c77b2a9fcf50e3c"],["/2019/07/24/Luogu-4074-WC2013-糖果公园/index.html","46f31db0acb8401676f39de4f00f2b8d"],["/2019/07/24/胡闹-tree/index.html","0b04c9383918e70373c5cf98750169b1"],["/2019/07/25/胡闹-回文/index.html","94d4382e6238e2b4e4c8b5f763376e92"],["/2019/07/25/胡闹-填数/index.html","7ba03f7fe96abb158b732f763f5773b0"],["/2019/07/26/口胡-字符串最小等价串/index.html","9108de1c51dea0c04206bd836f64f873"],["/2019/07/27/口胡-最小K覆盖圆/index.html","1a351981f6b7fec9fcf902a4c6b56d0b"],["/2019/07/28/胡闹-交互程序/index.html","6b6028c574edb22d0b5d9115f817698b"],["/2019/07/28/胡闹-统计三角形/index.html","7b609bf85bfab005b82b2c6e27639f5b"],["/about/index.html","f155946e3040a19cedea4fa043be6f3f"],["/archives/2017/01/index.html","76dfa05ad4d975499e66e9020e46eb23"],["/archives/2017/index.html","d21a2ba2611267774a4b541357cd4726"],["/archives/2019/03/index.html","58bf3384f0e55fc29f8f76bb3e6c5281"],["/archives/2019/04/index.html","c4cfa02d3c21d0a1424aaaf037cf0176"],["/archives/2019/07/index.html","88a07d383767380cd024a56a02b80495"],["/archives/2019/07/page/2/index.html","ffac53d9b5eafa8aea1f95cbd8951e96"],["/archives/2019/07/page/3/index.html","368c24fba9698a9e7a3309d9bd92282b"],["/archives/2019/index.html","390ed45759564b5bf0fa2e30715c70f0"],["/archives/2019/page/2/index.html","f979552df2ef9fe4b24bff20613f1aff"],["/archives/2019/page/3/index.html","9a9a028a6b1dacd480308ba83994899c"],["/archives/2019/page/4/index.html","19139b27fb22627d94020944d7d38803"],["/archives/index.html","4887c890453ab2c82521ce2ec68a43c5"],["/archives/page/2/index.html","20363a28e90e2f338162fb1c135b6f04"],["/archives/page/3/index.html","43a343a79e3275c4a17ac25cd8a7174e"],["/archives/page/4/index.html","5393e4465c3633488d7775d154fcc6e3"],["/bundle.js","56389d6b99fbe1b43673c06df3ae5da1"],["/categories/index.html","627e086570554c0b6b0baf9f7a42fafe"],["/categories/杂项/index.html","e8cd556aeffac1337c51874d9892712e"],["/categories/模板/index.html","26b190b0efd276ca59361dc2992451c2"],["/categories/题解/index.html","9e743f06300b08dbcfa4f445ba70bf15"],["/categories/题解/page/2/index.html","48570df077fb09237ac2f322959e1ee8"],["/categories/题解/page/3/index.html","71ff5a2c6f44d94038eed7e6448a42b4"],["/categories/题解/合集/index.html","573145ef9a308a23128f88137366d787"],["/categories/题解（口胡）/index.html","66079b0c0f24f8ea31d0c8a1a558c116"],["/css/back-to-top.css","556ad6f62ee8a83184272baca5468666"],["/css/insight.css","205755754637b723fae96c6c40622230"],["/css/progressbar.css","bf4b3eb4d2b9683e9bad95f36e88efe9"],["/css/search.css","12be3382d498d4a05aa8fd0a13c07bcb"],["/css/style.css","35cd47b5e8b84d704f61ccd691bebfb5"],["/images/avatar.png","93aa915a77cef01956276aacaab48271"],["/images/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/images/code.png","3ff99963cd6b42ecffc51b6b098446a7"],["/images/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/images/logo.png","9a06864183821dda6b4bd6b4ab6f8b8b"],["/images/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/images/wechat.jpg","1c17fd2e5163b4d6959251cbc13f608c"],["/img/background-old.jpg","59acb3f7f13a1ef1a06a6914fb2f6516"],["/img/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/img/主席树.png","a7b53159041fdba938e1b2c936525fd8"],["/index.html","8371ac244b6981867391135275b3ea1c"],["/js/animation.js","0c794ad2b3712352ee0f751b7f78febd"],["/js/back-to-top.js","c2ce6f5cb6e89b35fdd8c1fc25a9668f"],["/js/clipboard.js","d29605a584c775c8ad5dcd1ae721a68d"],["/js/gallery.js","10a9538f92fbf8bf277d46fd2bb2b119"],["/js/insight.js","4fc742a9cf94f22db87bd41ba89902ba"],["/js/main.js","48a6031755b023be26385ad7871c6d21"],["/page/2/index.html","78b739874d5253e55a3b1f6f60f23d35"],["/page/3/index.html","f48b5e2b1fd8e89781a2c976fc7b8fa1"],["/page/4/index.html","8d0d8e604553f60261d9e7e882b6d471"],["/page/5/index.html","c451144c4a6b77b2a1c7949be6cf483e"],["/style.css","398949a380c8b185fc07a1bff8ab07d7"],["/sw-register.js","5f4578e57b6043e54c867547f1ea315e"],["/tags/AC自动机/index.html","f39f712f90d6bf8a223363370fbaf1b3"],["/tags/FFT、NTT/index.html","22af66a9bf7540bbe21600a3c96b6d4c"],["/tags/Hash/index.html","14612ef3e08bc753a2733058ee54fd3c"],["/tags/Kruskal重构树/index.html","c20133e1fae535a56427bac08ae239b6"],["/tags/WO-YE-BU-HUI/index.html","ef154ba4e2ec0b658c71910d6967b227"],["/tags/excrt/index.html","f308767f60a0da4b9932b248ab02e165"],["/tags/index.html","b029b322c116f84470eb7af664f70ec7"],["/tags/lct/index.html","a36163e402f39ba7d0ccb1e6f4861bec"],["/tags/主席树/index.html","689360090183fc8cfcbd30d3d1fcc58d"],["/tags/交互/index.html","032bfba58969e9b81cf825811ec2c350"],["/tags/倍增/index.html","7e9e7f5d1bf1da5925856d65ad4f6220"],["/tags/卡常/index.html","76cdc33c22a91e2ef2d6c18f8f6e588f"],["/tags/口胡系列/index.html","30347bbc0d0dbfeaba8644ea0e5a8cb9"],["/tags/可并堆/index.html","deae3768c25d595d089a79924dca3fb1"],["/tags/坑/index.html","c2fa289925a784a487f4594147330b30"],["/tags/套路/index.html","72edcf7970a5036779855abc9185bade"],["/tags/字符串/index.html","222aebe1ab50ce7380ae148cc1a9ee2e"],["/tags/容斥/index.html","899c807eeb83f5fbb37431a94c31dde6"],["/tags/左偏树/index.html","9093712cd53903b716b593816c28b515"],["/tags/平衡树/index.html","d9b3c557ab054edf47c7bd1c9ce97828"],["/tags/技巧/index.html","3bc11769dd47046f752527d8f7374860"],["/tags/数论/index.html","3540724ec7875f532a5c51467d2ed8c5"],["/tags/斜率优化/index.html","2cfef5dcdb38c5df926a2c35c232b48f"],["/tags/树上莫队/index.html","e099f526a7f69929d7cbcb17c992ef94"],["/tags/树套树/index.html","5ed5f0f2373b68ef1fa5487f7030a344"],["/tags/毒瘤计数/index.html","09d1372f8a24cc236c80024654531922"],["/tags/生成函数/index.html","e16c029c84f101f2590698a4f5bb8d0a"],["/tags/网络流/index.html","a0e5ce94909f8d1e34822c9595f25345"],["/tags/胡闹/index.html","ff879b5dd5e64045c4e334daa6a0f5db"],["/tags/胡闹系列/index.html","32172138da208c052fd5e40bfb71bf83"],["/tags/胡闹系列/page/2/index.html","35488346a99727ad427b883019115a89"],["/tags/莫比乌斯反演/index.html","d07255c8ec4923bed2172f8ae4cdb40a"],["/tags/计算几何/index.html","0e106a8f40aaeeb9b0ce495695267b75"],["/tags/高级数据结构/index.html","eaeb5b6a0435a3f13783db62e3ac3cce"],["/tags/黑科技/index.html","f670cdc0cb53a5aa550eac0c31f3e579"]];
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
