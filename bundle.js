(function () {
    function $() {
        return Array.prototype.slice.call(document.querySelectorAll.apply(document, arguments));
    }

    $('body > .navbar, body > .section, body > .footer').forEach(function (element) {
        element.style.transition = '0s';
        element.style.opacity = '0';
    });
    document.querySelector('body > .navbar').style.transform = 'translateY(-100px)';
    ['.column-main > .card',
     '.column-left > .card, .column-right-shadow > .card',
     '.column-right > .card'].map(function (selector) {
        $(selector).forEach(function (element) {
            element.style.transition = '0s';
            element.style.opacity = '0';
            element.style.transform = 'scale(0.8)';
            element.style.transformOrigin = 'center top';
        });
    });
    setTimeout(function () {
        $('body > .navbar, body > .section, body > .footer').forEach(function (element) {
            element.style.opacity = '1';
            element.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        });
        document.querySelector('body > .navbar').style.transform = 'translateY(0)';
        ['.column-main > .card',
         '.column-left > .card, .column-right-shadow > .card',
         '.column-right > .card'].map(function (selector) {
            var i = 1;
            $(selector).forEach(function (element) {
                setTimeout(function () {
                    element.style.opacity = '1';
                    element.style.transform = '';
                    element.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
                }, i * 100);
                i++;
            });
        });
    });
})();;document.addEventListener('DOMContentLoaded', function () {
    if (typeof ($.fn.lightGallery) === 'function') {
        $('.article').lightGallery({ selector: '.gallery-item' });
    }
    if (typeof ($.fn.justifiedGallery) === 'function') {
        $('.justified-gallery').justifiedGallery();
    }
});;$(document).ready(function () {
    var $button = $('#back-to-top');
    var $footer = $('footer.footer');
    var $mainColumn = $('.column-main');
    var $leftSidebar = $('.column-left');
    var $rightSidebar = $('.column-right');
    var lastScrollTop = 0;
    var rightMargin = 20;
    var bottomMargin = 20;
    var lastState = null;
    var state = {
        base: {
            classname: 'card has-text-centered',
            left: '',
            width: 64,
            bottom: bottomMargin,
            'border-radius': 4
        }
    };
    state['desktop-hidden'] = Object.assign({}, state.base, {
        classname: state.base.classname + ' rise-up',
    });
    state['desktop-visible'] = Object.assign({}, state['desktop-hidden'], {
        classname: state['desktop-hidden'].classname + ' fade-in',
    });
    state['desktop-dock'] = Object.assign({}, state['desktop-visible'], {
        classname: state['desktop-visible'].classname + ' fade-in',
        width: 40,
        'border-radius': '50%'
    });
    state['mobile-hidden'] = Object.assign({}, state.base, {
        classname: state.base.classname + ' fade-in',
        right: rightMargin
    });
    state['mobile-visible'] = Object.assign({}, state['mobile-hidden'], {
        classname: state['mobile-hidden'].classname + ' rise-up',
    });

    function isStateEquals(prev, next) {
        for (var prop in prev) {
            if (!next.hasOwnProperty(prop) || next[prop] !== prev[prop]) {
                return false;
            }
        }
        for (var prop in next) {
            if (!prev.hasOwnProperty(prop) || prev[prop] !== prev[prop]) {
                return false;
            }
        }
        return true;
    }

    function applyState(state) {
        if (lastState !== null && isStateEquals(lastState, state)) {
            return;
        }
        $button.attr('class', state.classname);
        for (let prop in state) {
            if (prop === 'classname') {
                continue;
            }
            $button.css(prop, state[prop]);
        }
        lastState = state;
    }

    function isDesktop() {
        return window.innerWidth >= 1078;
    }

    function isTablet() {
        return window.innerWidth >= 768 && !isDesktop();
    }

    function isScrollUp() {
        return $(window).scrollTop() < lastScrollTop && $(window).scrollTop() > 0;
    }

    function hasLeftSidebar() {
        return $leftSidebar.length > 0;
    }

    function hasRightSidebar() {
        return $rightSidebar.length > 0;
    }

    function getRightSidebarBottom() {
        if (!hasRightSidebar()) {
            return 0;
        }
        return Math.max.apply(null, $rightSidebar.find('.widget').map(function () {
            return $(this).offset().top + $(this).outerHeight(true);
        }));
    }

    function getScrollTop() {
        return $(window).scrollTop();
    }

    function getScrollBottom() {
        return $(window).scrollTop() + $(window).height();
    }

    function getButtonWidth() {
        return $button.outerWidth(true);
    }

    function getButtonHeight() {
        return $button.outerHeight(true);
    }

    function updateScrollTop() {
        lastScrollTop = $(window).scrollTop();
    }

    function update() {
        // desktop mode or tablet mode with only right sidebar enabled
        if (isDesktop() || (isTablet() && !hasLeftSidebar() && hasRightSidebar())) {
            var nextState;
            var padding = ($mainColumn.outerWidth() - $mainColumn.width()) / 2;
            var maxLeft = $(window).width() - getButtonWidth() - rightMargin;
            var maxBottom = $footer.offset().top + getButtonHeight() / 2 + bottomMargin;
            if (getScrollTop() == 0 || getScrollBottom() < getRightSidebarBottom() + padding + getButtonHeight()) {
                nextState = state['desktop-hidden'];
            } else if (getScrollBottom() < maxBottom) {
                nextState = state['desktop-visible'];
            } else {
                nextState = Object.assign({}, state['desktop-dock'], {
                    bottom: getScrollBottom() - maxBottom + bottomMargin
                });
            }

            var left = $mainColumn.offset().left + $mainColumn.outerWidth() + padding;
            nextState = Object.assign({}, nextState, {
                left: Math.min(left, maxLeft)
            });
            applyState(nextState);
        } else {
            // mobile and tablet mode
            if (!isScrollUp()) {
                applyState(state['mobile-hidden']);
            } else {
                applyState(state['mobile-visible']);
            }
            updateScrollTop();
        }
    }

    update();
    $(window).resize(update);
    $(window).scroll(update);

    $('#back-to-top').on('click', function () {
        $('body, html').animate({ scrollTop: 0 }, 400);
    });
});;document.addEventListener('DOMContentLoaded', function () {
    if (typeof(ClipboardJS) !== 'undefined') {
        $('figure.highlight').each(function () {
            var id = 'code-' + Date.now() + (Math.random() * 1000 | 0);
            $(this).attr('id', id);
            $(this).prepend($(`<button class="button is-borderless is-radiusless is-small copy" data-clipboard-target="#${id} .code" title="Copy"><i class="fas fa-copy"></i></button>`));
        });
        new ClipboardJS('.highlight .copy');
    }
});;(function($){
    $('.article img:not(".not-gallery-item")').each(function () {
        // wrap images with link and add caption if possible
        if ($(this).parent('a').length === 0) {
            $(this).wrap('<a class="gallery-item" href="' + $(this).attr('src') + '"></a>');
            if (this.alt) {
                $(this).after('<div class="has-text-centered is-size-6 has-text-grey caption">' + this.alt + '</div>');
            }
        }
    });

    if (typeof(moment) === 'function') {
        $('.article-meta time').each(function () {
            $(this).text(moment($(this).attr('datetime')).fromNow());
        });
    }

    function adjustNavbar() {
        const navbarWidth = $('.navbar-main .navbar-start').outerWidth() + $('.navbar-main .navbar-end').outerWidth();
        if ($(document).outerWidth() < navbarWidth) {
            $('.navbar-main .navbar-menu').addClass('is-flex-start');
        } else {
            $('.navbar-main .navbar-menu').removeClass('is-flex-start');
        }
    }
    adjustNavbar();
    $(window).resize(adjustNavbar);

    var $toc = $('#toc');
    if ($toc.length > 0) {
    var $mask = $('<div>');
        $mask.attr('id', 'toc-mask');

        $('body').append($mask);

        function toggleToc() {
            $toc.toggleClass('is-active');
            $mask.toggleClass('is-active');
        }

        $toc.on('click', toggleToc);
        $mask.on('click', toggleToc);
        $('.navbar-main .catalogue').on('click', toggleToc);
    }
})(jQuery);;(function ($, CONFIG) {
    var $main = $('.ins-search');
    var $input = $main.find('.ins-search-input');
    var $wrapper = $main.find('.ins-section-wrapper');
    var $container = $main.find('.ins-section-container');
    $main.parent().remove('.ins-search');
    $('body').append($main);

    function section (title) {
        return $('<section>').addClass('ins-section')
            .append($('<header>').addClass('ins-section-header').text(title));
    }

    function searchItem (icon, title, slug, preview, url) {
        return $('<div>').addClass('ins-selectable').addClass('ins-search-item')
            .append($('<header>').append($('<i>').addClass('fa').addClass('fa-' + icon))
                .append($('<span>').addClass('ins-title').text(title != null && title !== '' ? title : CONFIG.TRANSLATION['UNTITLED']))
                .append(slug ? $('<span>').addClass('ins-slug').text(slug) : null))
            .append(preview ? $('<p>').addClass('ins-search-preview').text(preview) : null)
            .attr('data-url', url);
    }

    function sectionFactory (type, array) {
        var sectionTitle;
        var $searchItems;
        if (array.length === 0) return null;
        sectionTitle = CONFIG.TRANSLATION[type];
        switch (type) {
            case 'POSTS':
            case 'PAGES':
                $searchItems = array.map(function (item) {
                    // Use config.root instead of permalink to fix url issue
                    return searchItem('file', item.title, null, item.text.slice(0, 150), item.link);
                });
                break;
            case 'CATEGORIES':
            case 'TAGS':
                $searchItems = array.map(function (item) {
                    return searchItem(type === 'CATEGORIES' ? 'folder' : 'tag', item.name, item.slug, null, item.link);
                });
                break;
            default:
                return null;
        }
        return section(sectionTitle).append($searchItems);
    }

    function parseKeywords (keywords) {
        return keywords.split(' ').filter(function (keyword) {
            return !!keyword;
        }).map(function (keyword) {
            return keyword.toUpperCase();
        });
    }

    
    function filter (keywords, obj, fields) {
        var keywordArray = parseKeywords(keywords);
        var containKeywords = keywordArray.filter(function (keyword) {
            var containFields = fields.filter(function (field) {
                if (!obj.hasOwnProperty(field))
                    return false;
                if (obj[field].toUpperCase().indexOf(keyword) > -1)
                    return true;
            });
            if (containFields.length > 0)
                return true;
            return false;
        });
        return containKeywords.length === keywordArray.length;
    }

    function filterFactory (keywords) {
        return {
            POST: function (obj) {
                return filter(keywords, obj, ['title', 'text']);
            },
            PAGE: function (obj) {
                return filter(keywords, obj, ['title', 'text']);
            },
            CATEGORY: function (obj) {
                return filter(keywords, obj, ['name', 'slug']);
            },
            TAG: function (obj) {
                return filter(keywords, obj, ['name', 'slug']);
            }
        };
    }

    
    function weight (keywords, obj, fields, weights) {
        var value = 0;
        parseKeywords(keywords).forEach(function (keyword) {
            var pattern = new RegExp(keyword, 'img'); // Global, Multi-line, Case-insensitive
            fields.forEach(function (field, index) {
                if (obj.hasOwnProperty(field)) {
                    var matches = obj[field].match(pattern);
                    value += matches ? matches.length * weights[index] : 0;
                }
            });
        });
        return value;
    }

    function weightFactory (keywords) {
        return {
            POST: function (obj) {
                return weight(keywords, obj, ['title', 'text'], [3, 1]);
            },
            PAGE: function (obj) {
                return weight(keywords, obj, ['title', 'text'], [3, 1]);
            },
            CATEGORY: function (obj) {
                return weight(keywords, obj, ['name', 'slug'], [1, 1]);
            },
            TAG: function (obj) {
                return weight(keywords, obj, ['name', 'slug'], [1, 1]);
            }
        };
    }

    function search (json, keywords) {
        var WEIGHTS = weightFactory(keywords);
        var FILTERS = filterFactory(keywords);
        var posts = json.posts;
        var pages = json.pages;
        var tags = json.tags;
        var categories = json.categories;
        return {
            posts: posts.filter(FILTERS.POST).sort(function (a, b) { return WEIGHTS.POST(b) - WEIGHTS.POST(a); }).slice(0, 5),
            pages: pages.filter(FILTERS.PAGE).sort(function (a, b) { return WEIGHTS.PAGE(b) - WEIGHTS.PAGE(a); }).slice(0, 5),
            categories: categories.filter(FILTERS.CATEGORY).sort(function (a, b) { return WEIGHTS.CATEGORY(b) - WEIGHTS.CATEGORY(a); }).slice(0, 5),
            tags: tags.filter(FILTERS.TAG).sort(function (a, b) { return WEIGHTS.TAG(b) - WEIGHTS.TAG(a); }).slice(0, 5)
        };
    }

    function searchResultToDOM (searchResult) {
        $container.empty();
        for (var key in searchResult) {
            $container.append(sectionFactory(key.toUpperCase(), searchResult[key]));
        }
    }

    function scrollTo ($item) {
        if ($item.length === 0) return;
        var wrapperHeight = $wrapper[0].clientHeight;
        var itemTop = $item.position().top - $wrapper.scrollTop();
        var itemBottom = $item[0].clientHeight + $item.position().top;
        if (itemBottom > wrapperHeight + $wrapper.scrollTop()) {
            $wrapper.scrollTop(itemBottom - $wrapper[0].clientHeight);
        }
        if (itemTop < 0) {
            $wrapper.scrollTop($item.position().top);
        }
    }

    function selectItemByDiff (value) {
        var $items = $.makeArray($container.find('.ins-selectable'));
        var prevPosition = -1;
        $items.forEach(function (item, index) {
            if ($(item).hasClass('active')) {
                prevPosition = index;
                return;
            }
        });
        var nextPosition = ($items.length + prevPosition + value) % $items.length;
        $($items[prevPosition]).removeClass('active');
        $($items[nextPosition]).addClass('active');
        scrollTo($($items[nextPosition]));
    }

    function gotoLink ($item) {
        if ($item && $item.length) {
            location.href = $item.attr('data-url');
        }
    }

    $.getJSON(CONFIG.CONTENT_URL, function (json) {
        if (location.hash.trim() === '#ins-search') {
            $main.addClass('show');
        }
        $input.on('input', function () {
            var keywords = $(this).val();
            searchResultToDOM(search(json, keywords));
        });
        $input.trigger('input');
    });

    var touch = false;
    $(document).on('click focus', '.navbar-main .search', function () {
        $main.addClass('show');
        $main.find('.ins-search-input').focus();
    }).on('click touchend', '.ins-search-item', function (e) {
        if (e.type !== 'click' && !touch) {
            return;
        }
        gotoLink($(this));
        touch = false;
    }).on('click touchend', '.ins-close', function (e) {
        if (e.type !== 'click' && !touch) {
            return;
        }
        $('.navbar-main').css('pointer-events', 'none');
        setTimeout(function(){
            $('.navbar-main').css('pointer-events', 'auto');
        }, 400);
        $main.removeClass('show');
        touch = false;
    }).on('keydown', function (e) {
        if (!$main.hasClass('show')) return;
        switch (e.keyCode) {
            case 27: // ESC
                $main.removeClass('show'); break;
            case 38: // UP
                selectItemByDiff(-1); break;
            case 40: // DOWN
                selectItemByDiff(1); break;
            case 13: //ENTER
                gotoLink($container.find('.ins-selectable.active').eq(0)); break;
        }
    }).on('touchstart', function (e) {
        touch = true;
    }).on('touchmove', function (e) {
        touch = false;
    });
})(jQuery, window.INSIGHT_CONFIG);