/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/01/01/读入黑科技/index.html","fc361769d4a72d173336d9e7a4c30589"],["/2019/03/14/Todo-List/index.html","145aaa794b3ed5afda408ee8957a9242"],["/2019/03/18/BZOJ-3110/index.html","4fd5615147e3bfcba47e4263482b49d8"],["/2019/03/21/模板-静态区间第K小（主席树）/index.html","00dbabee6a5150293a756ed55a4b4676"],["/2019/03/22/BZOJ-1901（动态区间第K小）/index.html","eb8aef45880dde1f32e7f732bf691f81"],["/2019/03/23/Luogu-3157/index.html","d5168f9eb71464e0685013b9f126810d"],["/2019/03/26/BZOJ-4827/index.html","4414782fd2470db17720585c082b5668"],["/2019/03/28/BZOJ-3527/index.html","f4089a1ede23624e6dac3eff7cd663c4"],["/2019/03/29/BZOJ-4503/index.html","3fa80f5cb157b6dcc667c19a1d4f657c"],["/2019/03/29/模板-exCRT/index.html","b1b31deb57a7ddb0e5c0aa86efb56843"],["/2019/03/30/合集-斜率优化/index.html","b2ebebeff9b030b7e8958409ca6027ad"],["/2019/04/02/Luogu-2444/index.html","45dcfb06050c430c248dcda31a9f01ae"],["/2019/07/02/Luogu-4197-ONTAK2010-Peaks/index.html","e0858bff159e5b1afbe06d20bf63d82d"],["/2019/07/07/Luogu-2042-NOI2005-维护数列/index.html","edd490d663ddb66b913598be84af0aa3"],["/2019/07/07/模板-三维偏序/index.html","946a1738980d95e8cdffaca388757a47"],["/2019/07/16/胡闹-多重集合问题/index.html","d4a3e488ba7db37e2fd060714f9f94df"],["/2019/07/17/胡闹-文本编辑器/index.html","e6c4487129cc6cd5fe6796f63f63e1f7"],["/2019/07/18/胡闹-最小质因数/index.html","6e14a92480c5f1aee8f9983d5dce0fdc"],["/2019/07/19/胡闹-一路畅通/index.html","f11135653fe412908042ded9fc1bc749"],["/2019/07/19/胡闹-卷积练习题/index.html","e8d76398c0c25b7b9ec99195ad835415"],["/2019/07/19/胡闹-斐波那契/index.html","f1937821b5336d88b1fd3cd8bfaabe75"],["/2019/07/20/胡闹-序列/index.html","a4a1fa3a901226b95711ec39b519a183"],["/2019/07/21/胡闹-string/index.html","4a7d0c0ddbc9db396104806c3058b48c"],["/2019/07/21/胡闹-老园丁与小司机/index.html","69bf0a418d620ae0ddf5ae013f5a5ddc"],["/2019/07/22/胡闹-reform/index.html","fbd195b072a58941070d9f53192e3651"],["/2019/07/23/Luogu-2597-ZJOI2012-灾难/index.html","1b1c51138fb987a0a446e20fb35f4dc6"],["/2019/07/23/胡闹-interval/index.html","e9f1ec0cbf209cf8afeb8d0e34283781"],["/2019/07/24/Luogu-4074-WC2013-糖果公园/index.html","74bebc1a8233f15384d3f5e709ee4cb7"],["/2019/07/24/胡闹-tree/index.html","1bf4f691e4b1c5ec672f235d2dad120e"],["/2019/07/25/胡闹-回文/index.html","8bc54b0fa0a2b64dac1cfd2564cc1deb"],["/2019/07/25/胡闹-填数/index.html","796c97a5bab101334f846367d10789e2"],["/2019/07/26/口胡-字符串最小等价串/index.html","52179d28dc97a589c47076f99955367d"],["/about/index.html","4143465bde0a79e786e3aefd31485f0b"],["/archives/2017/01/index.html","1fed59f1dfbdaec5af5a47fccfa037ae"],["/archives/2017/index.html","68f65c34cc324f06bbbd39757ee45df4"],["/archives/2019/03/index.html","3836d84defe970427a87a58213241f4f"],["/archives/2019/04/index.html","cb619957925361b5a4d8bd54d74d3d90"],["/archives/2019/07/index.html","f45b9f860879b1c569f1bd0428f65059"],["/archives/2019/07/page/2/index.html","3cc5f3218e5718f57752d8bcc2141cd3"],["/archives/2019/index.html","271aa76e7ead1d07e9e1530d588a1eed"],["/archives/2019/page/2/index.html","b6cacb97331091b385acf9c01e4c6454"],["/archives/2019/page/3/index.html","d82dcaacbcdf370ea7bdb7ec8df8658b"],["/archives/2019/page/4/index.html","6218df4591675ea19521093dd2f6d7e8"],["/archives/index.html","09324bfd97193b92bdc02eeb5784eae9"],["/archives/page/2/index.html","19dbd10fc6e0ddaa7dc1f531ae06146e"],["/archives/page/3/index.html","f211c93b566e21a4a747f99f326b856f"],["/archives/page/4/index.html","55a025716013ee84159afe42f649a3e0"],["/bundle.js","56389d6b99fbe1b43673c06df3ae5da1"],["/categories/index.html","79acc635ee2eb75e2e0aa7988f022905"],["/categories/杂项/index.html","c9e397b98fb23ca081e3ad85ceebb00a"],["/categories/模板/index.html","cf769c8dfbb018c086ebfa0a3d2c7d33"],["/categories/题解/index.html","f27b57a8e8b66a917f004b5e3494aeb8"],["/categories/题解/page/2/index.html","fbe8cc1d4c4d6c0d844c6a0de28fc6c1"],["/categories/题解/page/3/index.html","675052750cc29d2f0a31ade5945cfa33"],["/categories/题解/合集/index.html","0bd8adfa8d0bb4a48879d48032cdd145"],["/categories/题解（口胡）/index.html","f742ab78d9213b12215ae4afcd6a5c13"],["/css/back-to-top.css","556ad6f62ee8a83184272baca5468666"],["/css/insight.css","205755754637b723fae96c6c40622230"],["/css/progressbar.css","bf4b3eb4d2b9683e9bad95f36e88efe9"],["/css/search.css","12be3382d498d4a05aa8fd0a13c07bcb"],["/css/style.css","35cd47b5e8b84d704f61ccd691bebfb5"],["/images/avatar.png","93aa915a77cef01956276aacaab48271"],["/images/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/images/code.png","3ff99963cd6b42ecffc51b6b098446a7"],["/images/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/images/logo.png","9a06864183821dda6b4bd6b4ab6f8b8b"],["/images/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/images/wechat.jpg","1c17fd2e5163b4d6959251cbc13f608c"],["/img/background-old.jpg","59acb3f7f13a1ef1a06a6914fb2f6516"],["/img/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/img/主席树.png","a7b53159041fdba938e1b2c936525fd8"],["/index.html","4f64692b00726f0c98930425af14d66f"],["/js/animation.js","0c794ad2b3712352ee0f751b7f78febd"],["/js/back-to-top.js","c2ce6f5cb6e89b35fdd8c1fc25a9668f"],["/js/clipboard.js","d29605a584c775c8ad5dcd1ae721a68d"],["/js/gallery.js","10a9538f92fbf8bf277d46fd2bb2b119"],["/js/insight.js","4fc742a9cf94f22db87bd41ba89902ba"],["/js/main.js","48a6031755b023be26385ad7871c6d21"],["/page/2/index.html","2db504f15293f4839dc5081f5989b8c4"],["/page/3/index.html","8b069517a62bb5a2a6e5633d25e82d76"],["/page/4/index.html","e0d49adcef3d7e69ba3c060d7aaa036b"],["/style.css","398949a380c8b185fc07a1bff8ab07d7"],["/sw-register.js","bce80fa861cff42b1b389248e2f41f7a"],["/tags/AC自动机/index.html","174dae29ed36c478bde65d4866eaefa7"],["/tags/FFT/index.html","5b7fa176aa21cec85ff31693a4ca234a"],["/tags/Hash/index.html","263cd8771772c167497b09da6630effe"],["/tags/Kruskal重构树/index.html","7902fa599c14e60ff29ad5f36e405792"],["/tags/WO-YE-BU-HUI/index.html","61fd7291ae387a1a484d531706d13c90"],["/tags/excrt/index.html","d47bc124a63228914adede7b7427066b"],["/tags/index.html","71ab17e8117099ce70c52eac54bf0f43"],["/tags/lct/index.html","d9f17582399b0f6be19e907b02327961"],["/tags/主席树/index.html","92cdfa744503c800ab5dbb576072fdbd"],["/tags/倍增/index.html","3e0d209486630eee680156fbd85dfe7e"],["/tags/卡常/index.html","923ccf8ff9d0f315d97254cee2f3cb78"],["/tags/口胡系列/index.html","eb95fe9d3cd44fed23a48582dae53b05"],["/tags/可并堆/index.html","d35fcb3a3f3e4bb9f2787050fe153605"],["/tags/坑/index.html","44181a44ebb81065b88b4fc556de3c87"],["/tags/套路/index.html","e3d21bf451dcea42944fa75d974cdc22"],["/tags/字符串/index.html","65d9f884aa39d23ba0cc9b2274036e6b"],["/tags/容斥/index.html","a4c45323d16282898185d0274a2e9c10"],["/tags/左偏树/index.html","74c9275ee57f3587db654cd57b5519ba"],["/tags/平衡树/index.html","6c060dca634393e1569b82c92a2fa838"],["/tags/技巧/index.html","cc0efd3da841acc9813bac04d0af7b0d"],["/tags/数论/index.html","5a3b36f7786561a31472b85a53ae95af"],["/tags/斜率优化/index.html","26599210f38edd4fd92da92030a36934"],["/tags/树上莫队/index.html","3b05c9122f29755f83f741c7ce879222"],["/tags/树套树/index.html","cf75c8ae79b36771ecf1bfec1229a0fc"],["/tags/毒瘤计数/index.html","9aec821f00cf220ad9570b414d68dc8f"],["/tags/网络流/index.html","e6248dc5ffd5c482411fa7f53cbcc279"],["/tags/胡闹/index.html","a07878d9135771e77378f9422cbd8fc7"],["/tags/胡闹系列/index.html","90f564c15c1f5461fc751eb950cb245b"],["/tags/莫比乌斯反演/index.html","163b9e8b2bd477ecf843be3ed064c186"],["/tags/高级数据结构/index.html","81307cbb73b59ab79c53bc55d657a46e"],["/tags/黑科技/index.html","5236257a7931b583227b3f25a0e3c602"]];
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
