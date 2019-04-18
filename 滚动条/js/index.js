(function () {

    var ele_container = document.getElementsByClassName('container')[0];
    var ele_content = document.getElementsByClassName('content')[0];
    var ele_duration = document.getElementsByClassName('duration')[0];
    var ele_bar = document.getElementsByClassName('bar')[0];
    var persent = Math.floor((ele_container.offsetHeight / ele_content.offsetHeight) * ele_duration.offsetHeight);
    ele_bar.style.height = persent + 'px';

    init();
    function init() {
        scrollDrage(ele_bar);//滚动条拖拽
        scrollBtn(ele_bar);//点击移动
        scrollWheen(ele_bar, ele_container);//中间滑轮
    }


    function scrollDrage(item) {
        item.onmousedown = function (e) {
            e = e || window.event;
            e.preventDefault();
            var e_x = e.pageY;
            document.onmousemove = function (e) {
                var chay = e.pageY - e_x;
                item.style.top = item.offsetTop + chay + 'px';
                e_x = e.pageY;
                if ((item.offsetTop + item.offsetHeight) > ele_duration.offsetHeight) {
                    item.style.top = ele_duration.offsetHeight - item.offsetHeight + 'px';
                } else if (item.offsetTop < 0) {
                    item.style.top = 0 + 'px';
                }
                contentMove(item)
            }
            document.onmouseup = function (e) {
                document.onmousemove = null;
                // ele_bar.onmousedown  = null;
            }
        }


    };
    function contentMove(item) {
        var persentH = item.offsetTop / (ele_duration.offsetHeight - item.offsetHeight);
        var moveHeight = Math.floor(persentH * (ele_content.offsetHeight - ele_container.offsetHeight));
        ele_content.style.top = -moveHeight + 'px';

    };

    //鼠标点击

    function scrollBtn(item) {
        var scroll_ul = document.getElementsByClassName('scroll')[0];
        var num = 5;
        scroll_ul.onclick = function (e) {
            console.log(e.target.id)
            if (e.target.id == 'up') {
                // console.log('点击上面')
                item.style.top = item.offsetTop - num + 'px';
                if (item.offsetTop < 0) {
                    item.style.top = 0 + 'px';
                }

            } else if (e.target.id == 'down') {
                // console.log('点击下面')
                item.style.top = item.offsetTop + num + 'px';
                if ((item.offsetTop + item.offsetHeight) > ele_duration.offsetHeight) {
                    item.style.top = ele_duration.offsetHeight - item.offsetHeight + 'px';
                }

            }
            contentMove(item)//滚动条让content移动 
        }
    }

    //滑轮

    function scrollWheen(item, container) {
        var num = 5;
        container.onmousewheel = function (e) {
            // conso   le.log(e.wheelDelta)
            e.preventDefault();
            if(e.wheelDelta == -180){ //向下滑

                item.style.top = item.offsetTop + num + 'px';
                if ((item.offsetTop + item.offsetHeight) > ele_duration.offsetHeight) {
                    item.style.top = ele_duration.offsetHeight - item.offsetHeight + 'px';
                }

            }else if(e.wheelDelta == 180){//向上滑

                item.style.top = item.offsetTop - num + 'px';
                if (item.offsetTop < 0) {
                    item.style.top = 0 + 'px';
                }

            }
            contentMove(item)//滚动条让content移动

        }
    }


})()