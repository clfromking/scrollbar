(function () {
    var container = document.getElementsByClassName('container')[0];
    var content = document.getElementsByClassName('content')[0];
    var duration = document.getElementsByClassName('duration')[0];
    var bar = document.getElementsByClassName('bar')[0];
    var up = document.getElementsByClassName('up')[0];
    var down = document.getElementsByClassName('down')[0];
    var persent = Math.floor(container.offsetHeight / content.offsetHeight * duration.offsetHeight);
    bar.style.height = persent + 'px';
    function init() {
        scrollDrage(bar); //滚动条拖拽
        // scrollBtn(); //点击移动
        // scrollWheen(); //中间滑轮
    }
    init();

    function scrollDrage(item) {
        item.onmousedown = function (e) {
            e = e || window.event;
            e.preventDefault();
            var e_x = e.pageY;
            document.onmousemove = function (e) {
                var chay = e.pageY - e_x;
                item.style.top = item.offsetTop + chay + 'px';
                e_x = e.pageY;
                if ((item.offsetTop + item.offsetHeight) > duration.offsetHeight) {
                    item.style.top = duration.offsetHeight - item.offsetHeight + 'px';
                }else{
                    item.style.top = 0 + 'px';
                }
                contentMove(item);
            }
            document.onmouseup = function (e) {
                document.onmousemove = null;
            }
        }
    };
    function contentMove (item) {
        var persentH = item.offsetTop / (duration.offsetHeight - item.offsetHeight);
        var moveHeight = Math.floor(persentH * (duration.offsetHeight - item.offsetHeight));
        content.style.top = -moveHeight + 'px';
    }



})();
