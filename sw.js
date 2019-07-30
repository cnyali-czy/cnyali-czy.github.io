/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/01/01/读入黑科技/index.html","a729281437ba518c44b057bc16e91ab2"],["/2019/03/18/BZOJ-3110/index.html","71d74c0edb13cd827773e360a2ef2dff"],["/2019/03/21/模板-静态区间第K小（主席树）/index.html","4eb94cf5379bd2804190bac8f07aa25a"],["/2019/03/22/BZOJ-1901（动态区间第K小）/index.html","e8b2acc5bdf4f907c8ec286fa79d8966"],["/2019/03/23/Luogu-3157/index.html","45c147c6064f530c7ae8a34022fc97b6"],["/2019/03/26/BZOJ-4827/index.html","6d0784f04bd79e733964a822674f121a"],["/2019/03/28/BZOJ-3527/index.html","4efdc0769cec088461a9fb738264650a"],["/2019/03/29/BZOJ-4503/index.html","3b29a3f39f643ade76960b155e7e8427"],["/2019/03/29/模板-exCRT/index.html","787cbf52b45e55580d9ebae0513e92ba"],["/2019/03/30/合集-斜率优化/index.html","6936751678589fff97f0e0e8cd794c5d"],["/2019/04/02/Luogu-2444/index.html","1eaa9dddc068b746dcd9e7da41fb41eb"],["/2019/07/02/Luogu-4197-ONTAK2010-Peaks/index.html","fbeaa26de0674c9ffacb3cc7573c8272"],["/2019/07/07/Luogu-2042-NOI2005-维护数列/index.html","445007a4a3fe3a76a2f5e11830f9a349"],["/2019/07/07/模板-三维偏序/index.html","5cab382d0bc9e9ff52115217c097b8d2"],["/2019/07/16/胡闹-多重集合问题/index.html","9d50ecd3a81dfaaca64276a6009ea577"],["/2019/07/17/胡闹-文本编辑器/index.html","936160bee4d460537dcbb6407f65c90d"],["/2019/07/18/胡闹-最小质因数/index.html","b16e590629830fa1c8125933eb514e0c"],["/2019/07/19/胡闹-一路畅通/index.html","3eb7575bd40d0e5cc88196861eb19a46"],["/2019/07/19/胡闹-卷积练习题/index.html","396043f3a9b99fc35031787e929543e0"],["/2019/07/19/胡闹-斐波那契/index.html","c88e84fff74913bffeed51f693875a8b"],["/2019/07/20/胡闹-序列/index.html","2f1c4c9ac1f9801ca57416102fff7077"],["/2019/07/21/胡闹-string/index.html","79a6478e6f2577418c4c44dadc968639"],["/2019/07/21/胡闹-老园丁与小司机/index.html","72d6c2aded35ebd7ed3903b2182a78dd"],["/2019/07/22/胡闹-reform/index.html","20bdf78e688db760a7d9c1c7c7f469a4"],["/2019/07/23/Luogu-2597-ZJOI2012-灾难/index.html","c4cf15ac506df23c3073d6e9fe3946b0"],["/2019/07/23/胡闹-interval/index.html","0671456b2086012e3380df150d2689da"],["/2019/07/24/Luogu-4074-WC2013-糖果公园/index.html","62a7739471aaeb3a7300dc590033c6e1"],["/2019/07/24/胡闹-tree/index.html","4f326909a3e6b7e9c10211f5aa6be6ae"],["/2019/07/25/胡闹-回文/index.html","1de20e91ea1fedc143eacffb30232d8a"],["/2019/07/25/胡闹-填数/index.html","fe5063f45cc1ad563527e6580ba29a65"],["/2019/07/26/口胡-字符串最小等价串/index.html","eec1f1e93ff7b3f0bd824e9c6f390757"],["/2019/07/27/口胡-最小K覆盖圆/index.html","b1a0808c7d28661fe645edcc20c0f27e"],["/2019/07/28/胡闹-交互程序/index.html","b04b4f4f55003fb0fd8d4621978173b7"],["/2019/07/28/胡闹-统计三角形/index.html","f83d724bd500e832af62ab3be46aec29"],["/2019/07/29/模板-后缀排序（有待完善）/index.html","b90abfe6be6eb753aa3af4ff12adef1d"],["/6667/12/03/Todo-List/index.html","3ff1fc0e3e77780f756ff1226d21b58f"],["/about/index.html","06e4332042c17cff7e5843f2a21bab28"],["/archives/2017/01/index.html","8ca753fe68f43617d2e42a5dede8512e"],["/archives/2017/index.html","52f93a4e2b5c19648636fd5a3a66d931"],["/archives/2019/03/index.html","711bbc758fb417586c2b8e1c201eb5e8"],["/archives/2019/04/index.html","f6d71514d6d4f032443f3bcf66ff0bf0"],["/archives/2019/07/index.html","6ffaa4daf837146cc5f1ceb6a1159fb9"],["/archives/2019/07/page/2/index.html","1b0e231f357d3f4f237b0ded7dff6173"],["/archives/2019/07/page/3/index.html","88c78669c3d2ba0bf48dbea1f7882b3f"],["/archives/2019/index.html","7e85b57fb1d7e6db896b8492fc0ab8b9"],["/archives/2019/page/2/index.html","4d4f103654cb3c36db3330fbd360acc0"],["/archives/2019/page/3/index.html","a0313ab5f8bb30ae041771c30a272ca1"],["/archives/2019/page/4/index.html","ddf7b818a00a96caf441c85775fd2f62"],["/archives/6667/12/index.html","12192b1b5976ceafdee12545d5a5ec77"],["/archives/6667/index.html","b593cc1278830fe945d3d43da6094fe8"],["/archives/index.html","357f7ba3fe58beaf1f4e0b8dd0d98de7"],["/archives/page/2/index.html","3aa63c31fb3c59c7890660afec6587e1"],["/archives/page/3/index.html","c7ea0026b17d3f1dfdb0ea71bda5529a"],["/archives/page/4/index.html","0c3132eb5febfe09eb0c8a318a2320a5"],["/bundle.js","56389d6b99fbe1b43673c06df3ae5da1"],["/categories/index.html","4ce00e6dbf83cb55c33541d77e8676e0"],["/categories/杂项/index.html","302fabc43b0e12ea683519180a4cdff4"],["/categories/模板/index.html","603a0374f7d6b3fb129c9eea9b887879"],["/categories/题解/index.html","b7356caa05548334f1386ed10df6e76a"],["/categories/题解/page/2/index.html","44834ab10167e2d3009a77273531f640"],["/categories/题解/page/3/index.html","f29244499de43847f3db612b1756602c"],["/categories/题解/合集/index.html","d5c9978b2e3eeb19e71b33ce1662c64e"],["/categories/题解（口胡）/index.html","bdc94551022e9da26df1d03a5f33dfe6"],["/css/back-to-top.css","c3a102a897acd8fb8907585675ca6382"],["/css/insight.css","205755754637b723fae96c6c40622230"],["/css/progressbar.css","bf4b3eb4d2b9683e9bad95f36e88efe9"],["/css/search.css","12be3382d498d4a05aa8fd0a13c07bcb"],["/css/style.css","35cd47b5e8b84d704f61ccd691bebfb5"],["/images/avatar.png","93aa915a77cef01956276aacaab48271"],["/images/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/images/code.png","3ff99963cd6b42ecffc51b6b098446a7"],["/images/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/images/logo.png","9a06864183821dda6b4bd6b4ab6f8b8b"],["/images/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/images/wechat.jpg","1c17fd2e5163b4d6959251cbc13f608c"],["/img/background-old.jpg","59acb3f7f13a1ef1a06a6914fb2f6516"],["/img/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/img/主席树.png","a7b53159041fdba938e1b2c936525fd8"],["/index.html","1c9b7efe008efc6dce70c6425a0db258"],["/js/animation.js","0c794ad2b3712352ee0f751b7f78febd"],["/js/back-to-top.js","c2ce6f5cb6e89b35fdd8c1fc25a9668f"],["/js/clipboard.js","d29605a584c775c8ad5dcd1ae721a68d"],["/js/gallery.js","10a9538f92fbf8bf277d46fd2bb2b119"],["/js/insight.js","4fc742a9cf94f22db87bd41ba89902ba"],["/js/main.js","48a6031755b023be26385ad7871c6d21"],["/page/2/index.html","c07524a6f410da4672d373fce5abb6b5"],["/page/3/index.html","69742b99c12613100ca2ff4d17475a17"],["/page/4/index.html","2b089054b8aee83f898427eec9b90c58"],["/page/5/index.html","885a5cd9e33e6ef6cd74fbcd27b12da1"],["/style.css","90566a4472809c6c9f25e265cb42fe21"],["/sw-register.js","8b26a2d6cb943166b44e4cf400a0566f"],["/tags/AC自动机/index.html","7916240ee1369067f4d7ba8e0997565f"],["/tags/FFT、NTT/index.html","63888ca3603ea2d01c4b8fd09667c689"],["/tags/Hash/index.html","e414b32b35a70dd5eb85bce86c3aaff9"],["/tags/Kruskal重构树/index.html","9a24adafd6e5192c91db4d7b65ab99c8"],["/tags/SAM/index.html","f723d40cef5b7fa747b3785a21c1e505"],["/tags/WO-YE-BU-HUI/index.html","201a1b82014857cca9320efce81a8bd8"],["/tags/excrt/index.html","b2338c43c9a5ec56b0187b2d1fdf752e"],["/tags/index.html","a30dfd3167c0727fadc03a6007d77890"],["/tags/lct/index.html","2ac1825dfce51c77682658e761d28268"],["/tags/主席树/index.html","f49299a1eba98da1da992c82addbd9b9"],["/tags/交互/index.html","f2c0d053342457c7029c788974bc333f"],["/tags/倍增/index.html","041d7b2b348473bd423a09364a408cf9"],["/tags/卡常/index.html","a61f3289ac433e9a69cf19eef688bc39"],["/tags/口胡系列/index.html","1d2ad5b526a441b489f3f329626b37bc"],["/tags/可并堆/index.html","e9cdbbc9ff68452ff121504ade7ff430"],["/tags/坑/index.html","30f4686359b641c90100fd34a189633f"],["/tags/套路/index.html","57af340617a886d449df12980e0ad67d"],["/tags/字符串/index.html","8d797271fa16a3ca76b8d0c233e2d59e"],["/tags/容斥/index.html","fc60951c3db7623309b773fb450799d4"],["/tags/左偏树/index.html","f4f02aa0c487190d219beec39cbfd128"],["/tags/平衡树/index.html","b55159d047782a2056527d8413482213"],["/tags/技巧/index.html","da91f26486324eed1c37f65e90874fa5"],["/tags/数论/index.html","dc888b331aa2a3a41a91f486e7741f62"],["/tags/斜率优化/index.html","b4edb90928957dca9077d828fb42586e"],["/tags/树上莫队/index.html","5bb2a7fbb48e16e623ad18256a5d39e7"],["/tags/树套树/index.html","541d16ca239bdc5c7222392afe20d63e"],["/tags/毒瘤计数/index.html","731834fc8b57a67781019560e93475a2"],["/tags/生成函数/index.html","5abc9de7ff16f4b98b1c956fe1937efe"],["/tags/网络流/index.html","0eee8eab0f5675960cd1580f04fbe354"],["/tags/胡闹/index.html","33fbc57cdec3f868f5324a155307155a"],["/tags/胡闹系列/index.html","8c01cfaeb939cae4935071a388ce8dec"],["/tags/胡闹系列/page/2/index.html","76bc2e875f3eddeb1b5366a10c36f290"],["/tags/莫比乌斯反演/index.html","a1dc4a137e79dba5c402bbf4e3ed1ebd"],["/tags/计算几何/index.html","a7c5c2526e73d03537a1e659276b1b2a"],["/tags/高级数据结构/index.html","8c909bc09efa3b1e0567b48976495c79"],["/tags/黑科技/index.html","ff4fab99871060506028a26502b6b821"]];
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
