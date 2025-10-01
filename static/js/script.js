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
    tcMainElement.style.maxWidth = '360px';
    var card = ''
        + '<div style="background:#fff;opacity:1;filter:none;backdrop-filter:none;border-radius:16px;padding:14px;max-width:360px;width:90vw;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:0 6px 24px background:#fff">'
        +   '<div style="flex:1;min-width:0;text-align:center">'
        +     '<div style="font-weight:900;font-size:20px;color:#111;letter-spacing:.2px">Mail</div>'
        +     '<div style="margin-top:10px;font-size:14px;color:#111;font-weight:800;white-space:nowrap">'
        +       '<a href="mailto:195224642@qq.com" style="color:#3366cc;text-decoration:underline;word-break:break-all">195224642@qq.com</a>'
        +     '</div>'
        +     '<div style="margin-top:8px;display:flex;justify-content:center">'
        +       '<button id="copyEmail" style="padding:6px 12px;border-radius:8px;border:1px solid #ddd;cursor:pointer;background:#fff">复制邮箱号</button>'
        +     '</div>'
        + '</div>';
    tcMainElement.innerHTML = card;
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
    tcMainElement.style.maxWidth = '360px';
    var card = ''
        + '<div style="background:#fff;opacity:1;filter:none;backdrop-filter:none;border-radius:16px;padding:14px;max-width:360px;width:90vw;display:flex;align-items:center;justify-content:space-between;gap:12px;box-shadow:0 6px 24px rgba(0,0,0,.08)">'
        +   '<div style="flex:1;min-width:0">'
        +     '<div style="font-weight:900;font-size:20px;color:#111;letter-spacing:.2px">QQ</div>'
        +     '<div style="margin-top:10px;font-size:14px;color:#111;font-weight:800;white-space:nowrap">User Name：<span style="font-weight:600">十五</span></div>'
        +     '<div style="margin-top:6px;font-size:14px;color:#333;white-space:nowrap">ID：<span style="font-weight:700">195224642</span></div>'
        +   '</div>'
        +   '<div style="width:170px;height:170px;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:12px;flex-shrink:0;overflow:hidden;border:2px solid rgba(0,0,0,0.06)">'
        +     '<img src="./static/img/qq.jpg" alt="QQ二维码" style="width:260px;height:260px;object-fit:cover;object-position:center;transform:scale(1.03) translateY(-10px)">'
        +   '</div>'
        + '</div>'
        + '<style>@media(max-width:520px){.tc-main .qq-card-left{min-width:0}}</style>';
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
    tcMainElement.style.maxWidth = '360px';
    var card = ''
        + '<div style="background:#fff;opacity:1;filter:none;backdrop-filter:none;border-radius:16px;padding:14px;max-width:360px;width:90vw;display:flex;align-items:center;justify-content:space-between;gap:12px;box-shadow:0 6px 24px rgba(0,0,0,.08)">'
        +   '<div style="flex:1;min-width:0">'
        +     '<div style="font-weight:900;font-size:20px;color:#111;letter-spacing:.2px">WeChat</div>'
        +     '<div style="margin-top:10px;font-size:14px;color:#111;font-weight:800;white-space:nowrap">User Name：<span style="font-weight:600;margin-left:4px">十五</span></div>'
        +     '<div style="margin-top:6px;font-size:14px;color:#111;font-weight:800;white-space:nowrap">ID：<span style="font-weight:600;margin-left:4px">yzh195224642</span></div>'
        +   '</div>'
        +   '<div style="width:170px;height:170px;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:12px;flex-shrink:0;overflow:hidden;border:2px solid rgba(0,0,0,0.06)">'
        +     '<img src="./static/img/wxjpg.jpg" alt="微信二维码" style="width:260px;height:260px;object-fit:cover;object-position:center;transform:scale(1.05) translateY(-6px)">'
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
	// footer poem switcher
	var poemLink = document.getElementById('poemLink');
	if (poemLink) {
		var poems = [
			'欲买桂花同载酒，终不似少年游',
            '年年岁岁花相似，岁岁年年人不同',
            '人面不知何处去，桃花依旧笑春风',
            '春花秋月何时了，往事知多少',
            '此情可待成追忆？只是当时已惘然',
            '人生若只如初见，何事秋风悲画扇',
            '花有重开日，人无再少年'
		];

		function randomPoem(currentText) {
			if (poems.length === 0) return currentText;
			var next = currentText;
			var guard = 0;
			while (next === currentText && guard < 10) {
				next = poems[Math.floor(Math.random() * poems.length)];
				guard++;
			}
			return next;
		}

		poemLink.addEventListener('click', function (e) {
			e.preventDefault();
			poemLink.textContent = randomPoem(poemLink.textContent.trim());
		});

		// press feedback for scaling
		poemLink.addEventListener('mousedown', function(){
			poemLink.classList.add('pressed');
		});
		poemLink.addEventListener('mouseup', function(){
			poemLink.classList.remove('pressed');
		});
		poemLink.addEventListener('mouseleave', function(){
			poemLink.classList.remove('pressed');
		});
		poemLink.addEventListener('touchstart', function(){
			poemLink.classList.add('pressed');
		}, {passive:true});
		poemLink.addEventListener('touchend', function(){
			poemLink.classList.remove('pressed');
		});
	}







   

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
    
    
    
    // lightweight snow effect
    (function(){
        var MAX_FLAKES = 120;
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var flakes = [];
        var width, height, running = true;
        canvas.id = 'snow-canvas';
        canvas.style.cssText = 'position:fixed;left:0;top:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;mix-blend-mode:lighten;';
        document.body.appendChild(canvas);

        function rand(min, max){ return Math.random() * (max - min) + min; }

        function resize(){
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        function makeFlake(){
            return {
                x: rand(0, width),
                y: rand(-height, 0),
                r: rand(1.2, 3.6),
                speedY: rand(0.5, 1.8),
                wind: rand(-0.6, 0.6),
                swing: rand(0, Math.PI * 2),
                swingSpeed: rand(0.002, 0.01),
                rot: rand(0, Math.PI*2),
                rotSpeed: rand(-0.01, 0.01)
            };
        }

        function init(){
            resize();
            flakes.length = 0;
            for(var i=0;i<MAX_FLAKES;i++){ flakes.push(makeFlake()); }
        }

        function drawFlakeShape(f){
            ctx.save();
            ctx.translate(f.x, f.y);
            ctx.rotate(f.rot);
            var L = f.r * 2.2; // arm length
            ctx.strokeStyle = 'rgba(255,255,255,0.9)';
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';
            for(var a=0; a<6; a++){
                var angle = a * Math.PI/3; // 60 degrees
                var x = Math.cos(angle) * L;
                var y = Math.sin(angle) * L;
                ctx.beginPath();
                ctx.moveTo(0,0);
                ctx.lineTo(x,y);
                // small branches
                var bx = x*0.6, by = y*0.6;
                var perp = angle + Math.PI/2;
                ctx.moveTo(bx,by);
                ctx.lineTo(bx + Math.cos(perp)*f.r*0.8, by + Math.sin(perp)*f.r*0.8);
                ctx.moveTo(bx,by);
                ctx.lineTo(bx - Math.cos(perp)*f.r*0.8, by - Math.sin(perp)*f.r*0.8);
                ctx.stroke();
            }
            ctx.restore();
        }

        function draw(){
            if(!running) return;
            ctx.clearRect(0,0,width,height);
            for(var i=0;i<flakes.length;i++){
                var f = flakes[i];
                f.y += f.speedY;
                f.swing += f.swingSpeed;
                f.x += f.wind + Math.cos(f.swing) * 0.3;
                f.rot += f.rotSpeed;
                if(f.y > height + 10){ f.y = -10; f.x = rand(0,width); }
                if(f.x < -5){ f.x = width + 5; }
                if(f.x > width + 5){ f.x = -5; }
                drawFlakeShape(f);
            }
            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', function(){
            resize();
        });

        document.addEventListener('visibilitychange', function(){
            running = !document.hidden;
            if(running) requestAnimationFrame(draw);
        });

        init();
        requestAnimationFrame(draw);
    })();
    
});




var pageLoading = document.querySelector("#zyyo-loading");
window.addEventListener('load', function() {
    setTimeout(function () {
        pageLoading.style.opacity = '0';
    }, 100);
});

