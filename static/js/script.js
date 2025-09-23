console.log('%cCopyright © 2024 zyyo.net',
    'background-color: #ff00ff; color: white; font-size: 24px; font-weight: bold; padding: 10px;'
);
console.log('%c   /\\_/\\', 'color: #8B4513; font-size: 20px;');
console.log('%c  ( o.o )', 'color: #8B4513; font-size: 20px;');
console.log(' %c  > ^ <', 'color: #8B4513; font-size: 20px;');
console.log('  %c /  ~ \\', 'color: #8B4513; font-size: 20px;');
console.log('  %c/______\\', 'color: #8B4513; font-size: 20px;');

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

function handlePress(event) {
    this.classList.add('pressed');
}

function handleRelease(event) {
    this.classList.remove('pressed');
}

function handleCancel(event) {
    this.classList.remove('pressed');
}

var buttons = document.querySelectorAll('.projectItem');
buttons.forEach(function (button) {
    button.addEventListener('mousedown', handlePress);
    button.addEventListener('mouseup', handleRelease);
    button.addEventListener('mouseleave', handleCancel);
    button.addEventListener('touchstart', handlePress);
    button.addEventListener('touchend', handleRelease);
    button.addEventListener('touchcancel', handleCancel);
});

function toggleClass(selector, className) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.toggle(className);
    });
}

function pop(imageURL) {
    var main = document.querySelector('.tc-main');
    var img = document.querySelector('.tc-img');
    if (imageURL && img) {
        img.src = imageURL;
    }
    toggleClass('.tc-main', 'active');
    toggleClass('.tc', 'active');
    var tcElem = document.querySelector('.tc');
    if (tcElem && !tcElem.classList.contains('active') && main) {
        if (main.dataset.restore) {
            main.innerHTML = main.dataset.restore;
            delete main.dataset.restore;
        }
        if (main.dataset.restoreStyle) {
            main.style.cssText = main.dataset.restoreStyle;
            delete main.dataset.restoreStyle;
        }
    }
}

function showEmail() {
    var tcMainElement = document.querySelector('.tc-main');
    if (tcMainElement && !tcMainElement.dataset.restore) {
        tcMainElement.dataset.restore = tcMainElement.innerHTML;
        tcMainElement.dataset.restoreStyle = tcMainElement.style.cssText || '';
    }
    tcMainElement.style.width = '90%';
    tcMainElement.style.maxWidth = '640px';
    tcMainElement.innerHTML = '<div style="padding:20px;max-width:320px;text-align:center">'
        + '<h3 style="margin-bottom:10px;color:#333">联系邮箱</h3>'
        + '<a href="https://wx.mail.qq.com/home/index#/compose" target="_blank" style="display:inline-block;color:#3366cc;text-decoration:underline;word-break:break-all">195224642@qq.com</a>'
        + '<div style="margin-top:10px">'
        +   '<button id="copyEmail" style="padding:6px 12px;border-radius:6px;border:1px solid #ddd;cursor:pointer">复制邮箱号</button>'
        + '</div>'
        + '<div style="margin-top:8px;color:#888;font-size:12px">点击邮箱将在新标签打开新版写信页</div>'
        + '</div>';
    toggleClass('.tc-main', 'active');
    toggleClass('.tc', 'active');
    setTimeout(function(){
        var copyBtn = document.getElementById('copyEmail');
        if(copyBtn){
            copyBtn.onclick = function(){
                navigator.clipboard.writeText('195224642@qq.com');
                copyBtn.textContent = '已复制';
            };
        }
    },0);
}

function showQQCard() {
    var tcMainElement = document.querySelector('.tc-main');
    if (tcMainElement && !tcMainElement.dataset.restore) {
        tcMainElement.dataset.restore = tcMainElement.innerHTML;
        tcMainElement.dataset.restoreStyle = tcMainElement.style.cssText || '';
    }
    tcMainElement.style.width = '90%';
    tcMainElement.style.maxWidth = '640px';
    var card = ''
        + '<div style="background:#ffffff;border-radius:16px;padding:22px 24px;max-width:620px;width:90vw;display:flex;gap:20px;align-items:center;box-shadow:0 6px 24px rgba(0,0,0,.08)">'
        +   '<div style="flex:1;min-width:260px">'
        +     '<div style="font-weight:800;font-size:28px;color:#111;letter-spacing:.3px">QQ</div>'
        +     '<div style="margin-top:16px;font-size:16px;color:#111;font-weight:700">User Name：<span style="font-weight:600">十五</span></div>'
        +     '<div style="margin-top:8px;font-size:16px;color:#333">ID：<span style="font-weight:700">195224642</span></div>'
        +     '<div style="margin-top:12px;font-size:12px;color:#888">使用 QQ 扫码添加好友</div>'
        +   '</div>'
        +   '<div style="width:210px;height:210px;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:14px;flex-shrink:0;overflow:hidden">'
        +     '<img src="./static/img/qq.jpg" alt="QQ二维码" style="width:260px;height:260px;object-fit:cover;object-position:center 50%">'
        +   '</div>'
        + '</div>'
        + '<style>@media(max-width:520px){.tc-main .qq-card-left{min-width:0} }</style>';
    tcMainElement.innerHTML = card;
    toggleClass('.tc-main', 'active');
    toggleClass('.tc', 'active');
}

function showWeChatCard() {
    var tcMainElement = document.querySelector('.tc-main');
    if (tcMainElement && !tcMainElement.dataset.restore) {
        tcMainElement.dataset.restore = tcMainElement.innerHTML;
        tcMainElement.dataset.restoreStyle = tcMainElement.style.cssText || '';
    }
    tcMainElement.style.width = '90%';
    tcMainElement.style.maxWidth = '640px';
    var card = ''
        + '<div style="background:#ffffff;border-radius:16px;padding:22px 24px;max-width:620px;width:90vw;display:flex;gap:20px;align-items:center;box-shadow:0 6px 24px rgba(0,0,0,.08)">'
        +   '<div style="flex:1;min-width:260px">'
        +     '<div style="font-weight:800;font-size:28px;color:#111;letter-spacing:.3px">WeChat</div>'
        +     '<div style="margin-top:16px;font-size:16px;color:#111;font-weight:700">User Name：<span style="font-weight:600">十五</span></div>'
        +     '<div style="margin-top:8px;font-size:16px;color:#333">ID：<span style="font-weight:700">yzh195224642</span></div>'
        +     '<div style="margin-top:12px;font-size:12px;color:#888">使用 微信 扫码添加好友</div>'
        +   '</div>'
        +   '<div style="width:210px;height:210px;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:14px;flex-shrink:0;overflow:hidden">'
        +     '<img src="./static/img/wxjpg.jpg" alt="微信二维码" style="width:340px;height:340px;object-fit:cover;transform:translateY(-10px);">'
        +   '</div>'
        + '</div>';
    tcMainElement.innerHTML = card;
    toggleClass('.tc-main', 'active');
    toggleClass('.tc', 'active');
}

var tc = document.getElementsByClassName('tc');
var tc_main = document.getElementsByClassName('tc-main');
tc[0].addEventListener('click', function (event) {
    pop();
});
tc_main[0].addEventListener('click', function (event) {
    event.stopPropagation();
});



function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}















document.addEventListener('DOMContentLoaded', function () {






    var html = document.querySelector('html');
    var themeState = getCookie("themeState") || "Light";
    var tanChiShe = document.getElementById("tanChiShe");






    function changeTheme(theme) {
        tanChiShe.src = "./static/svg/snake-" + theme + ".svg";
        html.dataset.theme = theme;
        setCookie("themeState", theme, 365);
        themeState = theme;
    }







    var Checkbox = document.getElementById('myonoffswitch')
    Checkbox.addEventListener('change', function () {
        if (themeState == "Dark") {
            changeTheme("Light");
        } else if (themeState == "Light") {
            changeTheme("Dark");
        } else {
            changeTheme("Dark");
        }
    });



    if (themeState == "Dark") {
        Checkbox.checked = false;
    }

    changeTheme(themeState);

















   

    var fpsElement = document.createElement('div');
    fpsElement.id = 'fps';
    fpsElement.style.zIndex = '10000';
    fpsElement.style.position = 'fixed';
    fpsElement.style.left = '0';
    document.body.insertBefore(fpsElement, document.body.firstChild);

    var showFPS = (function () {
        var requestAnimationFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };

        var fps = 0,
            last = Date.now(),
            offset, step, appendFps;

        step = function () {
            offset = Date.now() - last;
            fps += 1;

            if (offset >= 1000) {
                last += offset;
                appendFps(fps);
                fps = 0;
            }

            requestAnimationFrame(step);
        };

        appendFps = function (fpsValue) {
            fpsElement.textContent = 'FPS: ' + fpsValue;
        };

        step();
    })();
    
    
    
    //pop('./static/img/tz.jpg')
    
    
    
});




var pageLoading = document.querySelector("#zyyo-loading");
window.addEventListener('load', function() {
    setTimeout(function () {
        pageLoading.style.opacity = '0';
    }, 100);
});

