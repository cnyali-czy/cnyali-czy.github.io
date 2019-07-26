/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/01/01/读入黑科技/index.html","bdb605ef9a72df7dd9ba6860e71ec766"],["/2019/03/14/Todo-List/index.html","b7a2bd09ef74edc15f05329244a6baf9"],["/2019/03/18/BZOJ-3110/index.html","2746344578eb07649abfd2a588068127"],["/2019/03/21/模板-静态区间第K小（主席树）/index.html","e8603c080c8fc0b952c044fc75f9cfc9"],["/2019/03/22/BZOJ-1901（动态区间第K小）/index.html","4d7c78459d0f2a897d8249f306802f96"],["/2019/03/23/Luogu-3157/index.html","5f62a12554b00170a672eefdc97792e8"],["/2019/03/26/BZOJ-4827/index.html","80d67e10c4293fe098e52c8627ee6104"],["/2019/03/28/BZOJ-3527/index.html","9b9c3bf61482d4d7fd56ec9e95abe99b"],["/2019/03/29/BZOJ-4503/index.html","f1901e1519bfbd04f2a51521b6ebe56a"],["/2019/03/29/模板-exCRT/index.html","10ebc4554cf5b7d10116c06471b1df42"],["/2019/03/30/合集-斜率优化/index.html","d76fbbcf75e47c81428e273db8b7da6b"],["/2019/04/02/Luogu-2444/index.html","1be82ca1061f97d6bffcb03ba9387929"],["/2019/07/02/Luogu-4197-ONTAK2010-Peaks/index.html","ac774ca74b18885839cc87b005582b7f"],["/2019/07/07/Luogu-2042-NOI2005-维护数列/index.html","c1102aae530dbaa8f2e032cf01a377b3"],["/2019/07/07/模板-三维偏序/index.html","bde2d06ff07a347813b1e0f54da277e2"],["/2019/07/16/胡闹-多重集合问题/index.html","30cef707aad3942f423ed4e8166dd4e1"],["/2019/07/17/胡闹-文本编辑器/index.html","4f0854d62af89088cff8ad392f37ce96"],["/2019/07/18/胡闹-最小质因数/index.html","760438e0f5e495e7be4525364cb7988f"],["/2019/07/19/胡闹-一路畅通/index.html","929e81b0ae2ce3931349fc3ce1de0017"],["/2019/07/19/胡闹-卷积练习题/index.html","155baec64f0328b55cd7e8e01d4789c3"],["/2019/07/19/胡闹-斐波那契/index.html","a71c1c358a0ca75119a705b08677fb82"],["/2019/07/20/胡闹-序列/index.html","0115b0fb6df74414146ca7cd2f8be8ed"],["/2019/07/21/胡闹-string/index.html","bc5dadd078b7d8ff45c35c7805ff0e9b"],["/2019/07/21/胡闹-老园丁与小司机/index.html","a6c95ef6beefda176877aabd63af052d"],["/2019/07/22/胡闹-reform/index.html","b627d02b45cb7c9748f10bf8939011a9"],["/2019/07/23/Luogu-2597-ZJOI2012-灾难/index.html","7995e0ded6e353b48d497e676f8e151f"],["/2019/07/23/胡闹-interval/index.html","50ee3600571a50d8c1cc9a9ce10e97d2"],["/2019/07/24/Luogu-4074-WC2013-糖果公园/index.html","216fc250293eb1c3a5b4f9fd85a4bd25"],["/2019/07/24/胡闹-tree/index.html","7de2aa1c3befa895598ceb7f74572e73"],["/2019/07/25/胡闹-回文/index.html","3ac2d845241524b15a524f327e9c70e4"],["/2019/07/25/胡闹-填数/index.html","4b474f73494909d08992c39d09e711d7"],["/about/index.html","85d5ee695c524dc038e55c4b68af3474"],["/archives/2017/01/index.html","ab4bd950f651f879ce8b28a003675546"],["/archives/2017/index.html","eecd17c967468195e4ed0f5cdda5ead9"],["/archives/2019/03/index.html","a90c64f34c703036433f3da7d521994c"],["/archives/2019/04/index.html","9d3989f487a78d909f31cd582e79e5aa"],["/archives/2019/07/index.html","3e917e40935ce826e8d825ca8dc81115"],["/archives/2019/07/page/2/index.html","a7f27ef25cd0fc5383d8f8456c3bff20"],["/archives/2019/index.html","471271dda94f2010c0d4257c5e8fc26e"],["/archives/2019/page/2/index.html","c871cb0f7631644fd880c65c98c4af35"],["/archives/2019/page/3/index.html","1105c2b0101fd5f6fb5580b22a824596"],["/archives/index.html","0a9c81c030f20a4b900ce0d3286b9a23"],["/archives/page/2/index.html","c9766175bf18beec64c0081b8a038421"],["/archives/page/3/index.html","a4b9885f42d976d4f5be45f30261f3a1"],["/archives/page/4/index.html","390aab28d3e2501f0a3a5d42dd3602dd"],["/bundle.js","56389d6b99fbe1b43673c06df3ae5da1"],["/categories/index.html","de6910b105cd17ba781ea8e1666dbf0d"],["/categories/杂项/index.html","439006f5cf11e707560e4e348c2792d0"],["/categories/模板/index.html","dd0850c0084f79e7e32f4ed9459ad67c"],["/categories/题解/index.html","26fce29d7f48bcd5dea39c17ae7f2d0c"],["/categories/题解/page/2/index.html","0009a2512b810ec81cf0e6106e3fcf72"],["/categories/题解/page/3/index.html","b0eac2d6df7e58a280a2d75f90933cc5"],["/categories/题解/合集/index.html","5823381ad4d86c548e66a68e11b5cb89"],["/css/back-to-top.css","9eaefdd155c956a1ad12b458f9088cdc"],["/css/insight.css","205755754637b723fae96c6c40622230"],["/css/progressbar.css","bf4b3eb4d2b9683e9bad95f36e88efe9"],["/css/search.css","12be3382d498d4a05aa8fd0a13c07bcb"],["/css/style.css","35cd47b5e8b84d704f61ccd691bebfb5"],["/images/avatar.png","93aa915a77cef01956276aacaab48271"],["/images/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/images/code.png","3ff99963cd6b42ecffc51b6b098446a7"],["/images/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/images/logo.png","9a06864183821dda6b4bd6b4ab6f8b8b"],["/images/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/images/wechat.jpg","1c17fd2e5163b4d6959251cbc13f608c"],["/img/background-old.jpg","59acb3f7f13a1ef1a06a6914fb2f6516"],["/img/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/img/主席树.png","a7b53159041fdba938e1b2c936525fd8"],["/index.html","9e9c924f76489a5e78dd5c386c6fbcc7"],["/js/animation.js","0c794ad2b3712352ee0f751b7f78febd"],["/js/back-to-top.js","c2ce6f5cb6e89b35fdd8c1fc25a9668f"],["/js/clipboard.js","d29605a584c775c8ad5dcd1ae721a68d"],["/js/gallery.js","10a9538f92fbf8bf277d46fd2bb2b119"],["/js/insight.js","4fc742a9cf94f22db87bd41ba89902ba"],["/js/main.js","48a6031755b023be26385ad7871c6d21"],["/page/2/index.html","b729dcecfb1b148fb4e6219fa95ba3f3"],["/page/3/index.html","443ddfc4d925b2f7be4be9da7a26f07d"],["/page/4/index.html","cf5a6f9cd961ffdfd5b88fcc8943e968"],["/style.css","5590cce2d3e8cbd87db3f92465a54658"],["/sw-register.js","5211b9fb15819b1adf38440c33914a6f"],["/tags/AC自动机/index.html","3033daa90cd5633f60491c409e88a77f"],["/tags/FFT/index.html","6f1a0210546be24b550d211011207176"],["/tags/Hash/index.html","de42f7dff241a74c4006ce60b38080c0"],["/tags/Kruskal重构树/index.html","19763fa7ec5638a31fcc106ac2877698"],["/tags/WO-YE-BU-HUI/index.html","e6439557fd6cd56a1e8debec4aefc2d1"],["/tags/excrt/index.html","e709f3781042cc2befe9193f18779d04"],["/tags/index.html","cc01acd8c57c76abb6ea5de6fd23139f"],["/tags/lct/index.html","5d63eedfd94a4faddf0659c3e2273af3"],["/tags/主席树/index.html","861bb8e17151289c80cf9ff942b2b3a6"],["/tags/倍增/index.html","a40c8146d31a418aff5196dbfbe00d62"],["/tags/卡常/index.html","087f2853e774377470ca9731383e49c9"],["/tags/可并堆/index.html","a550bdd413a516344666c23425a550ce"],["/tags/坑/index.html","8f02d90e1643f74e9a2c3c6f9bd300a5"],["/tags/套路/index.html","01f85fac10e41a75ca8a2f818d6ad722"],["/tags/字符串/index.html","dd4e582e7b316c6571a86977de464810"],["/tags/容斥/index.html","4863305f4bf7183ee3c008b12f741a6d"],["/tags/左偏树/index.html","a22965b5daee58ffc18b774b38791fac"],["/tags/平衡树/index.html","980857e57a76854aba9c065a59cdd733"],["/tags/技巧/index.html","04fb0f4934344d524b9c41be7947222f"],["/tags/数论/index.html","7a18d6ecdb7ee4b99946e7a93c432e21"],["/tags/斜率优化/index.html","35631823a3f187bec3a1c166a925fb7b"],["/tags/树上莫队/index.html","c20baa59f6ae3198363b6cf79a9dc232"],["/tags/树套树/index.html","d3e5a19de49115aefc12100508d8e84d"],["/tags/毒瘤计数/index.html","3f78463eb97e1613e7ee38767269380a"],["/tags/网络流/index.html","45a9d9a59486707ae766039ae0707f8e"],["/tags/胡闹/index.html","0ff0c0cd5a97fc22c023eee5a1d345c5"],["/tags/胡闹系列/index.html","f5aa6c274ebc5c03d1b792be7bebe2f5"],["/tags/莫比乌斯反演/index.html","dbb4f36faef2dc8df45586f2876f1e20"],["/tags/高级数据结构/index.html","311736ae8816adc39500b396d319dae2"],["/tags/黑科技/index.html","c58d201221f563c8aea2abb478f747cb"]];
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
