/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/01/01/读入黑科技/index.html","e71dd37fac7334daeb853f36f57d04b0"],["/2019/03/14/Todo-List/index.html","c4584cf47353705b7ef280cad4d0b825"],["/2019/03/18/BZOJ-3110/index.html","fb7dcb801881c966d6640c546d5f2638"],["/2019/03/21/模板-静态区间第K小（主席树）/index.html","69a70ad54574504fed440b1f9f4a9c92"],["/2019/03/22/BZOJ-1901（动态区间第K小）/index.html","a437a0dc6a0c4e1f2de4c04f27846862"],["/2019/03/23/Luogu-3157/index.html","6f78cbee356407e186e8918ed1587d19"],["/2019/03/26/BZOJ-4827/index.html","24563b8b693c83b45397e7c36390b2aa"],["/2019/03/28/BZOJ-3527/index.html","67c756dbb8f4635a0be1194aa751dbb8"],["/2019/03/29/BZOJ-4503/index.html","0492a468a8e2ff0bb8d9f2cd9a6fc510"],["/2019/03/29/模板-exCRT/index.html","e171776e59d1d8f176229a3748a09bde"],["/2019/03/30/合集-斜率优化/index.html","63a102bed574c4dbe19838cc86665c24"],["/2019/04/02/Luogu-2444/index.html","2e261dfb0b7c79211f94ad6331535563"],["/2019/07/02/Luogu-4197-ONTAK2010-Peaks/index.html","841df43ccfee1f304567b7bfe45da4a8"],["/2019/07/07/Luogu-2042-NOI2005-维护数列/index.html","9b4d9eb5a2474ff7030734a0380e4d11"],["/2019/07/07/模板-三维偏序/index.html","367b7eff3da76884c4ad7de8e15cbffa"],["/2019/07/16/胡闹-多重集合问题/index.html","43a8347e27bf72af21d7c48c78bb8b3c"],["/2019/07/17/胡闹-文本编辑器/index.html","805a328da42d605e800adc246beb6825"],["/2019/07/18/胡闹-最小质因数/index.html","2b7d11c5bc488243d2b944702a8c6ac8"],["/2019/07/19/胡闹-一路畅通/index.html","95d10b25e1fab950c1cecad09b759baf"],["/2019/07/19/胡闹-卷积练习题/index.html","9381c251b69e4f4a6e5c4d88dde0eafd"],["/2019/07/19/胡闹-斐波那契/index.html","4450e6bc89843a23d1c08fe2a351542e"],["/2019/07/20/胡闹-序列/index.html","fa8cb6874ebe83f76f6cfcc3b1f3a36a"],["/2019/07/21/胡闹-string/index.html","73e80904143cea15f99e3061b9bb0c48"],["/2019/07/21/胡闹-老园丁与小司机/index.html","b36f7ff9827de77f9afda80057281c73"],["/2019/07/22/胡闹-reform/index.html","706b0b7a888cb970bacd57e1cc2bc63d"],["/2019/07/23/Luogu-2597-ZJOI2012-灾难/index.html","359db63c2b8d516ca6a4c8677074d140"],["/2019/07/23/胡闹-interval/index.html","1adebbdd1934f5a9f054ff384162256b"],["/2019/07/24/Luogu-4074-WC2013-糖果公园/index.html","1253a6b052134b2971cd9ec4e60de4ad"],["/2019/07/24/胡闹-tree/index.html","0a80ad64e113a7680695fab53ea3ed9c"],["/2019/07/25/胡闹-回文/index.html","89e62ba70ff4cf8c151092b43a887bc0"],["/2019/07/25/胡闹-填数/index.html","0247ea2b8272fed15fe23947e3658613"],["/2019/07/26/口胡-字符串最小等价串/index.html","d2e64c381933c3bcd54dbd6e8ae403cf"],["/2019/07/27/口胡-最小K覆盖圆/index.html","beac55bc0581ae5286dcc78ce3734da4"],["/2019/07/28/胡闹-交互程序/index.html","4869ab008d634b68973d969916c48f1d"],["/2019/07/28/胡闹-统计三角形/index.html","293f75ba0a3b9405d4ee25689fcc6c2f"],["/about/index.html","c97c0c2cec0e765ac3a9269cf653c647"],["/archives/2017/01/index.html","4a6b7505d4a9a7f51ebdde4bd208ce04"],["/archives/2017/index.html","ce812da72acfa1ed342424bca419b80f"],["/archives/2019/03/index.html","209c32cb296de0edec76474f242cb8f5"],["/archives/2019/04/index.html","a3a23604d48ccd3701d293387c0536db"],["/archives/2019/07/index.html","aa51978a52b08e873e13db2a7ce89027"],["/archives/2019/07/page/2/index.html","1b44ad7941a7e45ef1fb76a394913b75"],["/archives/2019/07/page/3/index.html","b63a5b5f6c3a811ee293b5ccb5eeee29"],["/archives/2019/index.html","83c93c09b1389dc3b661c9b108453a53"],["/archives/2019/page/2/index.html","f2b59c3d8476bbd9cabbf4d06585d488"],["/archives/2019/page/3/index.html","193e462f3deeb1d601a7b63bb9147580"],["/archives/2019/page/4/index.html","056e1963cd140173e66f891c78d2694c"],["/archives/index.html","0724fd32af084649827ad9a11d043bd5"],["/archives/page/2/index.html","d020622112b9324bf0975f462283851d"],["/archives/page/3/index.html","bd271adcd1846f14bad67a7ae1c630ac"],["/archives/page/4/index.html","daa7259289705d50eeaaa1df007b5302"],["/bundle.js","56389d6b99fbe1b43673c06df3ae5da1"],["/categories/index.html","60ac320d23089121232aeddeea616940"],["/categories/杂项/index.html","9faa7b8dfac8d34fbe8a6e323e31a4f3"],["/categories/模板/index.html","e63d2f3fa0625d0df52410fcc798d820"],["/categories/题解/index.html","98ab06a06d35b60b2831263e138cbfb3"],["/categories/题解/page/2/index.html","3a2bf5421207f024069eee54ec1613cf"],["/categories/题解/page/3/index.html","f7e6805013ef2436eae2bcb23a8acbb6"],["/categories/题解/合集/index.html","0f7279b77d2eda36f5d9fc2380a70c99"],["/categories/题解（口胡）/index.html","0ac78b2eb8c7b2287deae7e157845b1a"],["/css/back-to-top.css","c3a102a897acd8fb8907585675ca6382"],["/css/insight.css","205755754637b723fae96c6c40622230"],["/css/progressbar.css","bf4b3eb4d2b9683e9bad95f36e88efe9"],["/css/search.css","12be3382d498d4a05aa8fd0a13c07bcb"],["/css/style.css","35cd47b5e8b84d704f61ccd691bebfb5"],["/images/avatar.png","93aa915a77cef01956276aacaab48271"],["/images/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/images/code.png","3ff99963cd6b42ecffc51b6b098446a7"],["/images/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/images/logo.png","9a06864183821dda6b4bd6b4ab6f8b8b"],["/images/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/images/wechat.jpg","1c17fd2e5163b4d6959251cbc13f608c"],["/img/background-old.jpg","59acb3f7f13a1ef1a06a6914fb2f6516"],["/img/background.jpg","84a356ec3487f9bce1b7fbfaae37d664"],["/img/主席树.png","a7b53159041fdba938e1b2c936525fd8"],["/index.html","696cf5b49cb4fd9ccc72326f63bb2ffe"],["/js/animation.js","0c794ad2b3712352ee0f751b7f78febd"],["/js/back-to-top.js","c2ce6f5cb6e89b35fdd8c1fc25a9668f"],["/js/clipboard.js","d29605a584c775c8ad5dcd1ae721a68d"],["/js/gallery.js","10a9538f92fbf8bf277d46fd2bb2b119"],["/js/insight.js","4fc742a9cf94f22db87bd41ba89902ba"],["/js/main.js","48a6031755b023be26385ad7871c6d21"],["/page/2/index.html","11594695f0b67b8cebac6d58a7915e0b"],["/page/3/index.html","6bda54e234effa016cf7b4e1111da7bc"],["/page/4/index.html","9d415f348f11c8100cac391139f0c5d8"],["/page/5/index.html","26c414b52d047de76d6b829d7ebf7013"],["/style.css","90566a4472809c6c9f25e265cb42fe21"],["/sw-register.js","97d4e266ac0129202f975a0efb6f11e0"],["/tags/AC自动机/index.html","2e3d8c144ca263cc9f60e18cdb237fc9"],["/tags/FFT、NTT/index.html","11f2dd6ef23125b9cbc423e1aa3f56e7"],["/tags/Hash/index.html","80e93653a8d5c5e34f589ad61b772d2c"],["/tags/Kruskal重构树/index.html","370842678953e828b8eb5eac513c4d98"],["/tags/WO-YE-BU-HUI/index.html","12bd1d66459ef108884a2327743b8b80"],["/tags/excrt/index.html","ea4f113880d59a5b19c95af8a8791fbc"],["/tags/index.html","09c1b9ae9ac45d0785adb68a0e34f42d"],["/tags/lct/index.html","20a3be17c58213cd1d7adc8907a7f19e"],["/tags/主席树/index.html","cc8191e70d20ceae84f9cfea50139862"],["/tags/交互/index.html","0092d647952a6a177d9478913f216589"],["/tags/倍增/index.html","6d9afaa09ee107f309a087c0e8170976"],["/tags/卡常/index.html","ca4e288b4463a48d7912f0259a67218e"],["/tags/口胡系列/index.html","7046354dc92aa943e65380331f651c7f"],["/tags/可并堆/index.html","a356881c648cfe9d2d843a54190c5a03"],["/tags/坑/index.html","5020ea70549cec7c4cb9736e33a5286a"],["/tags/套路/index.html","5978adbd2d86c3f4a9d09e3af561d728"],["/tags/字符串/index.html","26fec33a7d37421cd5150e649974cf06"],["/tags/容斥/index.html","ab156d6374f8071c30c730d98fe7f11e"],["/tags/左偏树/index.html","4634684df2a9634f8ee497ec45d57703"],["/tags/平衡树/index.html","6023983e32713f2220759e906190ef89"],["/tags/技巧/index.html","80a3696731a90cae76dcdca9e34eb1bd"],["/tags/数论/index.html","e2f7262e4a17ae6c3ba663c9fa7bc5d9"],["/tags/斜率优化/index.html","18f98a6d79a50d38be3206bdd7a4dafd"],["/tags/树上莫队/index.html","5eca26aba1a9756ee13fba3858f4e512"],["/tags/树套树/index.html","5c309feed219fc361ccf271c98a63554"],["/tags/毒瘤计数/index.html","3a672602fa794b517a88427d829cbc9a"],["/tags/生成函数/index.html","d054a7f74e9651e89ecd8b7eb1e505a3"],["/tags/网络流/index.html","01aab8a72abf8f2f2229b78e21de1f24"],["/tags/胡闹/index.html","8c953380d181d66fd080b13fa92ae6d6"],["/tags/胡闹系列/index.html","5149c8776fa9f64beaa37c1b206bbffd"],["/tags/胡闹系列/page/2/index.html","0dd6860627936043f1cbf7175af1ccd3"],["/tags/莫比乌斯反演/index.html","fa5b84c4e99cf26afd02d8c60b10d4e2"],["/tags/计算几何/index.html","01c553024ce2b61749208ac40d877efd"],["/tags/高级数据结构/index.html","71ae95ec96468de153d7a9e7b07e2a39"],["/tags/黑科技/index.html","5ef1a4c6745532c17bf62a1074977083"]];
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
