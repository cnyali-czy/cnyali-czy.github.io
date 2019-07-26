/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/01/01/读入黑科技/index.html","a5426d3e89fe66d6402a538eaa8ab662"],["/2019/03/14/Todo-List/index.html","c391c5c712a40d85c08ebae4961b4c86"],["/2019/03/18/BZOJ-3110/index.html","43cc114572a20f869b83af9a9a800372"],["/2019/03/21/模板-静态区间第K小（主席树）/index.html","fa364ca83f4351f1c8d0d0102f8915db"],["/2019/03/22/BZOJ-1901（动态区间第K小）/index.html","2f84d1dfcb7f50768068a1c60668bf45"],["/2019/03/23/Luogu-3157/index.html","5ad4c8cb4aefee87a7cbd60138a9f0c9"],["/2019/03/26/BZOJ-4827/index.html","d678aa9f6f465bd622fdc9d997c690b2"],["/2019/03/28/BZOJ-3527/index.html","534658ae7de34733e47463d4628148fa"],["/2019/03/29/BZOJ-4503/index.html","2ce8a056063ac8ddba4ae784f3f1100e"],["/2019/03/29/模板-exCRT/index.html","40862448abd714febf5b4fe4a81ef63f"],["/2019/03/30/合集-斜率优化/index.html","339fa91feb5f67a9bf8099f7ac2044c6"],["/2019/04/02/Luogu-2444/index.html","699adf52524759f5b83acfa90d1c5d50"],["/2019/07/02/Luogu-4197-ONTAK2010-Peaks/index.html","2830c5feeb3df76c2ff8bd48929b1a5a"],["/2019/07/07/Luogu-2042-NOI2005-维护数列/index.html","7c5ed67cad5dc26c210581e0fe284989"],["/2019/07/07/模板-三维偏序/index.html","9b5adbb7697c9f4e6416dfb0d7f4f9f8"],["/2019/07/16/胡闹-多重集合问题/index.html","d62e51c1e387d5657895bfffd5433e8d"],["/2019/07/17/胡闹-文本编辑器/index.html","576890b5d86d9413199bd8d3be8c53d6"],["/2019/07/18/胡闹-最小质因数/index.html","65a778dcd0f8c7aa25f3e658ac60e51a"],["/2019/07/19/胡闹-一路畅通/index.html","e694d47b4ffc94be33cfc7c3397e1c82"],["/2019/07/19/胡闹-卷积练习题/index.html","a22eb5a7b60e296e2243e66781388b90"],["/2019/07/19/胡闹-斐波那契/index.html","1e404b7471d97c6251bd5d2ec1171218"],["/2019/07/20/胡闹-序列/index.html","87bf92ba78950e4ac00e56e6f7b118cd"],["/2019/07/21/胡闹-string/index.html","b4cd6c059ab40018544f94dbd7315837"],["/2019/07/21/胡闹-老园丁与小司机/index.html","e02230e3f3ba43cc70a76d500d24fdf1"],["/2019/07/22/胡闹-reform/index.html","aafdda73f78c33668183734e9e008c75"],["/2019/07/23/Luogu-2597-ZJOI2012-灾难/index.html","4f2e00617f39c5c0cd5df9fe3cb01453"],["/2019/07/23/胡闹-interval/index.html","e6ac11b03df6cfa19f9ea59be95ecfbc"],["/2019/07/24/Luogu-4074-WC2013-糖果公园/index.html","9dab4d09f93afca4b59e3a62dd9d3df1"],["/2019/07/24/胡闹-tree/index.html","f305771baab4cf95885d4285800e1aa4"],["/2019/07/25/胡闹-回文/index.html","a71a318969fa6e3e8483446fb69c612d"],["/2019/07/25/胡闹-填数/index.html","45a3214048161b49ae15c46a7137418c"],["/about/index.html","404cce1150db4d03775e5142e93257ad"],["/archives/2017/01/index.html","c685cf39789ddd5cfc808e51ee5a40a6"],["/archives/2017/index.html","8c2159c4d6f7580f7fb1d98ea19576e0"],["/archives/2019/03/index.html","95d956aff9f2b3ee41e23195e7f1abca"],["/archives/2019/04/index.html","7a872564796b4f85731eebf5af16831b"],["/archives/2019/07/index.html","3e15b15c391d487bb966353cb97511b3"],["/archives/2019/07/page/2/index.html","d7d5c9b67330f25b44fee31be6c2323c"],["/archives/2019/index.html","bc4b0bf00c1e42b57970f7ef4bef0ec3"],["/archives/2019/page/2/index.html","c334d30a186c23a5801842fca4fa9f76"],["/archives/2019/page/3/index.html","1db7608e4b14003be6b4e98d1062774e"],["/archives/index.html","1ac35004de0f577c50accdfb779fdbef"],["/archives/page/2/index.html","6b42fa50848e07a7f7bde8a51c3c256a"],["/archives/page/3/index.html","edfc83e7db37b4499645a4959c924a6d"],["/archives/page/4/index.html","9b4395d4e078e46d45cba0c46c9cc822"],["/bundle.js","56389d6b99fbe1b43673c06df3ae5da1"],["/categories/index.html","167182f2ce0bdceed218706a716a86c3"],["/categories/杂项/index.html","cc0a4c7ba7699b9a80425ec0ed6a6f01"],["/categories/模板/index.html","be0b7204e402a83c8ef49ae75355c165"],["/categories/题解/index.html","38d3efd79c1ef9bdc9076d2a9b6c1829"],["/categories/题解/page/2/index.html","be10bf46b885490d6fef3d6aa0156fe3"],["/categories/题解/page/3/index.html","1e272f90a5178dc5ee725592f23fab74"],["/categories/题解/合集/index.html","e02521800139689cca8d3716bb61a886"],["/css/back-to-top.css","556ad6f62ee8a83184272baca5468666"],["/css/insight.css","205755754637b723fae96c6c40622230"],["/css/progressbar.css","bf4b3eb4d2b9683e9bad95f36e88efe9"],["/css/search.css","12be3382d498d4a05aa8fd0a13c07bcb"],["/css/style.css","35cd47b5e8b84d704f61ccd691bebfb5"],["/images/avatar.png","93aa915a77cef01956276aacaab48271"],["/images/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/images/code.png","3ff99963cd6b42ecffc51b6b098446a7"],["/images/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/images/logo.png","9a06864183821dda6b4bd6b4ab6f8b8b"],["/images/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/images/wechat.jpg","1c17fd2e5163b4d6959251cbc13f608c"],["/img/background-old.jpg","59acb3f7f13a1ef1a06a6914fb2f6516"],["/img/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/img/主席树.png","a7b53159041fdba938e1b2c936525fd8"],["/index.html","149b8d6d87020b479832ea5362876afd"],["/js/animation.js","0c794ad2b3712352ee0f751b7f78febd"],["/js/back-to-top.js","c2ce6f5cb6e89b35fdd8c1fc25a9668f"],["/js/clipboard.js","d29605a584c775c8ad5dcd1ae721a68d"],["/js/gallery.js","10a9538f92fbf8bf277d46fd2bb2b119"],["/js/insight.js","4fc742a9cf94f22db87bd41ba89902ba"],["/js/main.js","48a6031755b023be26385ad7871c6d21"],["/page/2/index.html","ebc8c8297f6f65575f04261ace212c8d"],["/page/3/index.html","9c084e49fe954e43dc42cca1d0f3e5be"],["/page/4/index.html","b9e9c3f82ba8113b07e42087c4e939b3"],["/style.css","398949a380c8b185fc07a1bff8ab07d7"],["/sw-register.js","9e88247a802acb4c4fb4a128b68e7af8"],["/tags/AC自动机/index.html","65d9ebfe9e484f0e8b4b711437eafc11"],["/tags/FFT/index.html","912bb53dbb4f9ad0bfed90f74f77e5f5"],["/tags/Hash/index.html","ed020a9daf145169e9145310e46f86bd"],["/tags/Kruskal重构树/index.html","13854d045bf7e5c4a3d6480607472dfe"],["/tags/WO-YE-BU-HUI/index.html","023bbd8fb6cec7fe79aa389ecdf4b47f"],["/tags/excrt/index.html","32f50d3d17a6ba4d65bddde254a0d83b"],["/tags/index.html","c712e59ba8e454152fa0d3040e4a5a4f"],["/tags/lct/index.html","0ef4d7ad053662d04bf145ae8d1569f8"],["/tags/主席树/index.html","a8185c83a20044820011a6f937be251a"],["/tags/倍增/index.html","261a2994107f632a20395c25f23ede91"],["/tags/卡常/index.html","7845786b4e84cb5d28d2566e6d425a68"],["/tags/可并堆/index.html","1884af7809e09d13811efbc8a4c0b0f2"],["/tags/坑/index.html","81891d2543ef39da0f52154697821352"],["/tags/套路/index.html","018af1fa4dda7a0842938ee6615e970a"],["/tags/字符串/index.html","40c8324739aa129f5e661d1af8298f8b"],["/tags/容斥/index.html","d9c199c7859a6a8484b2579821fb3f66"],["/tags/左偏树/index.html","0b750820be37d209c0ecf7c291d9c9b8"],["/tags/平衡树/index.html","d6ca18810dc0e57b6535c22e01f0104b"],["/tags/技巧/index.html","ae2d5eb2a2e06be68d42183b02db6d88"],["/tags/数论/index.html","f1528bb10c7fa4f4173375e65a497eea"],["/tags/斜率优化/index.html","669414eabc7bd426b250b7f1060b6987"],["/tags/树上莫队/index.html","e8319d704c3b3a27393c124e7b76957a"],["/tags/树套树/index.html","fd6b16215cd2e33e3ff0510bd76c9270"],["/tags/毒瘤计数/index.html","a921b6dd3d2433c07598f4320994b18c"],["/tags/网络流/index.html","23ffe7aaca445ba0522215a7ad09a41f"],["/tags/胡闹/index.html","e153d8b8074ea9b7268951097559d7c4"],["/tags/胡闹系列/index.html","23e1a5e8fdeaed910b485512b527a5c2"],["/tags/莫比乌斯反演/index.html","56543bd90c017895f3eb2ea62044e3a8"],["/tags/高级数据结构/index.html","25f09829b67447c038fc0952db89e030"],["/tags/黑科技/index.html","c6b953edac234f8f5130d78a0c87d087"]];
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
