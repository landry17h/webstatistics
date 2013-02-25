(function () {
    var params = {};
    //Document对象数据
    if(document) {
        params.domain = document.domain || '';
        params.url = document.URL || '';
        params.title = document.title || '';
        params.referrer = document.referrer || '';
    }
    //Window对象数据
    if(window && window.screen) {
        params.sh = window.screen.height || 0;
        params.sw = window.screen.width || 0;
        params.cd = window.screen.colorDepth || 0;
    }
    //navigator对象数据
    if(navigator) {
        params.lang = navigator.language || '';
    }
    //解析_daq配置
    if(_daq) {
        for(var i in _daq) {
            switch(_daq[i][0]) {
                case '_setAccount':
                    params.account = _daq[i][1];
                    break;
                default:
                    break;
            }
        }
    }
    //拼接参数串
    var args = '';
    for(var i in params) {
        if(args != '') {
            args += '&';
        }
        args += i + '=' + encodeURIComponent(params[i]);
    }

    //通过Image对象请求后端脚本
    var img = new Image(1, 1);
    //alert(args);
    img.src = 'http://159.226.57.10:8000/logger/tracking.gif?' + args;
})();
