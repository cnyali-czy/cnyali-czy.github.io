/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/01/01/读入黑科技/index.html","0c60864e89d52f5676c96a89451d7895"],["/2019/03/18/BZOJ-3110/index.html","099bb2afe4a32bd5b7c6e6bd4636a5fc"],["/2019/03/21/模板-静态区间第K小（主席树）/index.html","5f4ef862a27d015818172cf97d7dffcb"],["/2019/03/22/BZOJ-1901（动态区间第K小）/index.html","9c314fc5c8aa22de5c47638c6aa51a0e"],["/2019/03/23/Luogu-3157/index.html","fe94712e139d1ab30e792fd6e2e0bdf2"],["/2019/03/26/BZOJ-4827/index.html","d223c24ad125385a13abf2f4d8c5d701"],["/2019/03/28/BZOJ-3527/index.html","fb8dc60556945e188184c8294ef2d433"],["/2019/03/29/BZOJ-4503/index.html","e610a1dc9b2ed4b08b70aa1e531faaa4"],["/2019/03/29/模板-exCRT/index.html","8d03214056cf85f631690449196eac5f"],["/2019/03/30/合集-斜率优化/index.html","1dc344b8c85e278b4c868d82bb18fac4"],["/2019/04/02/Luogu-2444/index.html","72ee5d4dafab888c7b6ea47b3228e0ac"],["/2019/07/02/Luogu-4197-ONTAK2010-Peaks/index.html","91157f3233a105ea00629b00d5571d1d"],["/2019/07/07/Luogu-2042-NOI2005-维护数列/index.html","3e5f0736ab7a6de98508c34c9643123e"],["/2019/07/07/模板-三维偏序/index.html","911e15a9248043132e282bb2bd801fed"],["/2019/07/16/胡闹-多重集合问题/index.html","1d7a855e02036351bcf4d6a28bfb977d"],["/2019/07/17/胡闹-文本编辑器/index.html","082ed8cdb03122f619b1904b2b7e244e"],["/2019/07/18/胡闹-最小质因数/index.html","21c986d401965fa96105f855f0f80d5a"],["/2019/07/19/胡闹-一路畅通/index.html","b092368575acb7392360b14444cf5fb6"],["/2019/07/19/胡闹-卷积练习题/index.html","5a94a45602ed09a9b97c8e932d61d1ef"],["/2019/07/19/胡闹-斐波那契/index.html","fb09f977139f9906c7dfb50bed8b95f5"],["/2019/07/20/胡闹-序列/index.html","8494f543f90da0abce4b1c4dd2224065"],["/2019/07/21/胡闹-string/index.html","22e2b8081bde335266a7d50ecf2e6881"],["/2019/07/21/胡闹-老园丁与小司机/index.html","253c311291770baf0d7caaf587e8877d"],["/2019/07/22/胡闹-reform/index.html","97161f28de524da5842f6dd67a9f05f0"],["/2019/07/23/Luogu-2597-ZJOI2012-灾难/index.html","f431bf7e1b6f65b3ab5ea609b175e547"],["/2019/07/23/胡闹-interval/index.html","a3e6160c5b36de000c9d9d41953cbd4b"],["/2019/07/24/Luogu-4074-WC2013-糖果公园/index.html","e4307af7d63ef3c2594af28c8f74d826"],["/2019/07/24/胡闹-tree/index.html","295e0934a0c3f3693f0dc6590434a2ee"],["/2019/07/25/胡闹-回文/index.html","86ba6dc368474a54ca88d85237d7fc60"],["/2019/07/25/胡闹-填数/index.html","841dac7ab39b8081ae98694ceb30d75b"],["/2019/07/26/口胡-字符串最小等价串/index.html","7148e3187ad57c7257bc7f4838125156"],["/2019/07/27/口胡-最小K覆盖圆/index.html","28ef884552db7ef41cf104f3df72ec8e"],["/2019/07/28/胡闹-交互程序/index.html","876050f4ec1fa84688ba5dd193a210e9"],["/2019/07/28/胡闹-统计三角形/index.html","e44f720948852b09b89079c0f79b0f9f"],["/6667/12/03/Todo-List/index.html","b3313e194f1937f6279ea0a59f529d27"],["/about/index.html","188009331e007a0e1dde2b323ba9511d"],["/archives/2017/01/index.html","466e70e978773602ad7033d3938b9caf"],["/archives/2017/index.html","6ea81b60dc8e9cc639028f15491fb625"],["/archives/2019/03/index.html","3ae99ade4fdb77ddc2b1dce23784e57b"],["/archives/2019/04/index.html","00004bd43932d4cd9e0e8ec7ddb5bcad"],["/archives/2019/07/index.html","ada5f8d4357c8d44e77fef2075e86c0c"],["/archives/2019/07/page/2/index.html","0cdd223cbcb07f30738d983cbec19cd0"],["/archives/2019/07/page/3/index.html","00eaf1581e0fa416507ea7d92bd0f916"],["/archives/2019/index.html","a71793221ad0ef38231ad4dd7b6ab5a0"],["/archives/2019/page/2/index.html","8541c8a917ff33867a99c2e767812806"],["/archives/2019/page/3/index.html","b26a4d04dbbdda268aa4702543843429"],["/archives/2019/page/4/index.html","fe09ddc6174198f17be0cf8e03b99275"],["/archives/6667/12/index.html","194c04eb4f8db6c05c55911a4f32ef8d"],["/archives/6667/index.html","c5d5443412dd7d9b5ff530f2b1994028"],["/archives/index.html","d26cf84374874920b58641c60c3d32e8"],["/archives/page/2/index.html","9c82df2f3ef88c27da2dd68d020d70c8"],["/archives/page/3/index.html","e1c3c0a32c22c11872e8c6cea94c0d28"],["/archives/page/4/index.html","aacc20c856c6530a49fba82a059c818c"],["/bundle.js","56389d6b99fbe1b43673c06df3ae5da1"],["/categories/index.html","35143570ceead5042c20cf4949cfaa2d"],["/categories/杂项/index.html","698730629e9db9e0ed9b025ff0be9776"],["/categories/模板/index.html","07352a626b157fb290ba933bcfb8076e"],["/categories/题解/index.html","b891a7aa4d05dd596f93d19903a6cb20"],["/categories/题解/page/2/index.html","ba70d4029969146fb7d68bcf6cfc8fe9"],["/categories/题解/page/3/index.html","e483ee3e526b041dae963414383493d3"],["/categories/题解/合集/index.html","270d8b84f474d52439ef38dec91d0cb8"],["/categories/题解（口胡）/index.html","88f67758ce26207de7c586d4c92b706b"],["/css/back-to-top.css","c3a102a897acd8fb8907585675ca6382"],["/css/insight.css","205755754637b723fae96c6c40622230"],["/css/progressbar.css","bf4b3eb4d2b9683e9bad95f36e88efe9"],["/css/search.css","12be3382d498d4a05aa8fd0a13c07bcb"],["/css/style.css","35cd47b5e8b84d704f61ccd691bebfb5"],["/images/avatar.png","93aa915a77cef01956276aacaab48271"],["/images/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/images/code.png","3ff99963cd6b42ecffc51b6b098446a7"],["/images/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/images/logo.png","9a06864183821dda6b4bd6b4ab6f8b8b"],["/images/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/images/wechat.jpg","1c17fd2e5163b4d6959251cbc13f608c"],["/img/background-old.jpg","59acb3f7f13a1ef1a06a6914fb2f6516"],["/img/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/img/主席树.png","a7b53159041fdba938e1b2c936525fd8"],["/index.html","271887935d91cd460fbcf94dbc2f5b8c"],["/js/animation.js","0c794ad2b3712352ee0f751b7f78febd"],["/js/back-to-top.js","c2ce6f5cb6e89b35fdd8c1fc25a9668f"],["/js/clipboard.js","d29605a584c775c8ad5dcd1ae721a68d"],["/js/gallery.js","10a9538f92fbf8bf277d46fd2bb2b119"],["/js/insight.js","4fc742a9cf94f22db87bd41ba89902ba"],["/js/main.js","48a6031755b023be26385ad7871c6d21"],["/page/2/index.html","1dd214ba220a66d1908d74e8f699a9bf"],["/page/3/index.html","61d49810c8fda865ca7e6e79545fd1c9"],["/page/4/index.html","55b2d442efc4548410cbe309d81301c6"],["/page/5/index.html","73e946be690401a1f87c6c617304cba8"],["/style.css","90566a4472809c6c9f25e265cb42fe21"],["/sw-register.js","9c21b2b70ad303560f797b26d39bf1dc"],["/tags/AC自动机/index.html","f06bdb6b225d3cd542b40600465ac4bc"],["/tags/FFT、NTT/index.html","26a3a9956c1f832c74c7ea8a31bc9b00"],["/tags/Hash/index.html","940a2a80ce14ca91312c4ee001601be5"],["/tags/Kruskal重构树/index.html","fc29ac1dc46110b82af4f30aec85060b"],["/tags/WO-YE-BU-HUI/index.html","085f6fa5686d5a674f08ea27b773116f"],["/tags/excrt/index.html","e56b140ebfb74e8181d91f89e1b73c81"],["/tags/index.html","40f30fd1ae3fcfff3a2b2e4758818452"],["/tags/lct/index.html","b4d4ecf15362fb1317d8a63e072f932f"],["/tags/主席树/index.html","c54d4ac69aec7cd3db46ece4901af399"],["/tags/交互/index.html","c2450fad7b100c82c52f7a3c6ecf4724"],["/tags/倍增/index.html","c0a127557e46187676491216b75cc6ba"],["/tags/卡常/index.html","d7e2cea269ceb487f9687fcb5efd812e"],["/tags/口胡系列/index.html","cf073264e0d601d035203531ad6e5f11"],["/tags/可并堆/index.html","ef244c5a90709bcc43ce815cb8c50411"],["/tags/坑/index.html","c4b0a0135a744b83653950e02542e7ac"],["/tags/套路/index.html","c9af9ddb27936d822c4b18bdaf171f3c"],["/tags/字符串/index.html","4662e8b32b6c5e7f7eff1581a33235d4"],["/tags/容斥/index.html","e2bbfef9eb1faf875071fc8cc69ee34a"],["/tags/左偏树/index.html","8d44adf5fd623d9245eba1bcc92e4862"],["/tags/平衡树/index.html","4f562c613b24be186986bb1816c9c581"],["/tags/技巧/index.html","597a61fc8c3834c4d54a57401a256431"],["/tags/数论/index.html","905b52153c9343b7a0e700056f746917"],["/tags/斜率优化/index.html","029fdec231472d87239e141b73fe40bd"],["/tags/树上莫队/index.html","b7eb0ef836edd7a4821b8d2fa0fa0c42"],["/tags/树套树/index.html","84dcf8c4bfe70860ba0426d3c0f5c29b"],["/tags/毒瘤计数/index.html","6344f691e68349412abdfcda8a050bb1"],["/tags/生成函数/index.html","ee8d1cf80e5ccab2a60abe5de04b5d20"],["/tags/网络流/index.html","2a495c7334cbb3f19362e6770c68dd90"],["/tags/胡闹/index.html","9ae5b29c03114a85a630f2ed082e9346"],["/tags/胡闹系列/index.html","6966b54d4d1ef15ee5cf7bf94dbbf974"],["/tags/胡闹系列/page/2/index.html","d87c8acd98dce6e0bc6377ae69e11e46"],["/tags/莫比乌斯反演/index.html","14e6faaeb3864d410bcf25761629ca8b"],["/tags/计算几何/index.html","793259e9de15ded537d2eb9da27b6d64"],["/tags/高级数据结构/index.html","55fc8e31379eb896c7a877218b3350c4"],["/tags/黑科技/index.html","28c0f1ac9d723b3448138e17ae4df0c8"]];
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
