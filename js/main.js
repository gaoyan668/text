/**
 * Created by zyg on 2015/8/4.
 */
/*点击事件的方法*/
var tools = {
    click: function (ele, fn) {
        ele.addEventListener("touchstart", function (ev) {
            ev = ev || window.event;
            this.setAttribute("data-moved", "n");
            this.setAttribute("data-startx", ev.touches[0].clientX);
            this.setAttribute("data-starty", ev.touches[0].clientY);
        }, false);
        ele.addEventListener("touchmove", function (ev) {
            ev = ev || window.event;
            var startX = parseInt(this.getAttribute("data-startx"));
            var startY = parseInt(this.getAttribute("data-starty"));
            var moveX = ev.touches[0].clientX - startX;
            var moveY = ev.touches[0].clientY - startY;
            if (Math.abs(moveX) > 10 || Math.abs(moveY) > 10) {
                this.setAttribute("data-moved", "y")
            }

        });
        ele.addEventListener("touchcancle", function (ev) {
            ev = ev || window.event;
        }, false);
        ele.addEventListener("touchend", function (ev) {
            ev = ev || window.event;
            if (this.getAttribute("data-moved") && this.getAttribute("data-moved") == "y") {
                return false;
            }
            fn();
        }, false);
    },
    changeTab: function (eles, ele) {
        for (var i = 0; i < eles.length; i++) {
            eles[i].style.display = "none";
        }
        ele.style.display = "block";
    }


};

/*touch事件部分*/
~function () {

    var money1, money2, money3, money4, sales1, sales2, sales3, sales4, n1, n2, n3, n4,
        title="看看你在帝都能买几环的房？",
        desc1="辛苦半年，经手N套房，测算身价。",
        desc = "辛苦半年，经手N套房，测算身价，看看你在帝都能买几环的房？",
        backMusic=document.querySelector("#backMusic"),
        backMusicStop=document.querySelector("#backMusicStop"),
        music=document.querySelector("#music"),
        pages = document.querySelectorAll("body>div"),
        firstPage = document.querySelector("#startTest"),
        secondPage = document.querySelector("#pageTwo"),
        thirdPage = document.querySelector("#pageThree"),
        forthPage = document.querySelector("#pageFour"),
        fifthPage = document.querySelector("#pageFive"),
        fxPage = document.querySelector("#pageFx"),
        fx = document.querySelectorAll(".fx")[0],
        oTest = document.querySelectorAll(".test")[0],
        oTestStart = document.querySelectorAll(".test")[1],
        layers = forthPage.querySelectorAll(".layer"),
        layer1 = forthPage.querySelectorAll(".layer1")[0],
        layer2 = forthPage.querySelectorAll(".layer2")[0],
        layer3 = forthPage.querySelectorAll(".layer3")[0],
        layer4 = forthPage.querySelectorAll(".layer4")[0],
        layer5 = forthPage.querySelectorAll(".layer5")[0],
        layer6 = forthPage.querySelectorAll(".layer6")[0],
        layer7 = forthPage.querySelectorAll(".layer7")[0],
        headTitle = forthPage.querySelectorAll(".headTitle")[0],
        para = forthPage.querySelectorAll(".para"),
        headWords = headTitle.querySelectorAll("h3")[0],
        upPara = forthPage.querySelectorAll(".upPara")[0],
        downPara = forthPage.querySelectorAll(".downPara")[0],
        flaunt = forthPage.querySelectorAll(".flaunt")[0],
        flaunt1 = fifthPage.querySelectorAll(".flaunt1")[0],
        income = forthPage.querySelectorAll(".income")[0],
        yellowPerson = forthPage.querySelectorAll(".yellowPerson")[0],
        backPage = forthPage.querySelectorAll(".backPage")[0],
        backPage1=fifthPage.querySelectorAll(".backPage")[0],
        rank1 = fifthPage.querySelectorAll(".rank1")[0],
        rank2 = fifthPage.querySelectorAll(".rank2")[0],
        rank3 = fifthPage.querySelectorAll(".rank3")[0],
        rank4 = fifthPage.querySelectorAll(".rank4")[0],
        column1 = fifthPage.querySelectorAll(".column1")[0],
        column2 = fifthPage.querySelectorAll(".column2")[0],
        column3 = fifthPage.querySelectorAll(".column3")[0],
        column4 = fifthPage.querySelectorAll(".column4")[0],
        houseNum1 = fifthPage.querySelectorAll(".houseNum1")[0],
        houseNum2 = fifthPage.querySelectorAll(".houseNum2")[0],
        houseNum3 = fifthPage.querySelectorAll(".houseNum3")[0],
        houseNum4 = fifthPage.querySelectorAll(".houseNum4")[0],
        point1 = fifthPage.querySelectorAll(".point1")[0],
        point2 = fifthPage.querySelectorAll(".point2")[0],
        point3 = fifthPage.querySelectorAll(".point3")[0],
        point4 = fifthPage.querySelectorAll(".point4")[0],
        lineWords1 = fifthPage.querySelectorAll(".lineWords1")[0],
        lineWords2 = fifthPage.querySelectorAll(".lineWords2")[0],
        lineWords3 = fifthPage.querySelectorAll(".lineWords3")[0],
        lineWords4 = fifthPage.querySelectorAll(".lineWords4")[0],
        lamp2 = thirdPage.querySelectorAll(".lamp2")[0];


    tools.click(oTest, function () {
        tools.changeTab(pages, secondPage);
    });
    tools.click(backMusicStop, function () {
        music.play();
        backMusic.style.display="block";
        backMusicStop.style.display="none";
    });
    tools.click(backMusic, function () {
        music.pause();
        backMusic.style.display="none";
        backMusicStop.style.display="block";
    });

    /*输入框正则验证*/
    var inputNum = document.querySelector("#inputNum"), reg = /^(?:0|\d+)(?:\.\d{1,4})?$/;

    function getCss(ele, attr) {
        return parseFloat(window.getComputedStyle(ele, null)[attr]);
    }

    /*点击开始测算跳转到第三页*/
    tools.click(oTestStart, function () {
        if (inputNum.value) {
            if (reg.test(inputNum.value)) {
                if (Number(inputNum.value) >= 500) {
                    tools.changeTab(pages, forthPage);
                    tools.changeTab(layers, layer7);
                    headWords.innerHTML = jsonData[6];
                    for (var i = 0; i < para.length; i++) {
                        para[i].style.display = "none";
                    }
                } else {
                    tools.changeTab(pages, thirdPage);
                    if (thirdPage.style.display == "block") {
                        thirdPage.timer = window.setInterval(function () {
                            if (lamp2.style.display == "block") {
                                lamp2.style.display = "none";
                            } else {
                                lamp2.style.display = "block";
                            }
                        }, 100);
                    }
                       var number = Math.ceil(Number(inputNum.value) * 35);
                       var wholeNum = Math.round(number);
                       /*身价*/
                       var inputStr = "" + number;
                       var len = inputStr.length;
                       for (var i = 0; i < 7 - len; i++) {
                           inputStr = 0 + inputStr;
                       }




                    /*page3老虎机*/
                    if (thirdPage.style.display == "block") {
                        var container0 = document.getElementById("container0");
                        var container1 = document.getElementById("container1");
                        var container2 = document.getElementById("container2");
                        var container3 = document.getElementById("container3");
                        var container4 = document.getElementById("container4");
                        var container5 = document.getElementById("container5");
                        var container6 = document.getElementById("container6");

                        function move(ele, tar, num) {
                            clearTimeout(ele.timer);
                            _move();
                            function _move() {
                                var cur = ele.scrollTop;
                                if (cur < tar) {
                                    if (cur + 5 >= tar) {
                                        ele.scrollTop = tar;
                                        return;
                                    }
                                    ele.scrollTop = cur + 5;
                                } else if (cur > tar) {
                                    if (cur - 5 <= tar) {
                                        ele.scrollTop = tar;
                                        return;
                                    }
                                    ele.scrollTop = cur - 5;
                                }
                                ele.timer = window.setTimeout(_move, 0);
                            }
                        }

                        function autoMove(ele, index, num) {
                            ele.flag = 0;
                            ele.step = 0;
                            clearTimeout(ele.timer);
                            clearTimeout(ele.timer1);
                            _autoMove();
                            function _autoMove() {
                                clearTimeout(ele.timer);
                                ele.step++;
                                if (ele.step == 10) {
                                    move(ele, 11 * 53, num);
                                    ele.scrollTop = 0;
                                    ele.step = 1;
                                    ele.flag++;
                                    if (ele.flag == num) {
                                        move(ele, index * 53, num);
                                        return;
                                    }
                                }
                                move(ele, ele.step * 53, num);
                                /*  if (ele.flag < num) {*/

                                ele.timer1 = window.setTimeout(_autoMove, 30);
                                /* } else {

                                 ele.timer1 = window.setTimeout(_autoMove, 200);
                                 }*/

                            }

                        }

                        work();
                        function work() {
                            autoMove(container0, inputStr.charAt(0), 1);
                            autoMove(container1, inputStr.charAt(1), 3);
                            autoMove(container2, inputStr.charAt(2), 5);
                            autoMove(container3, inputStr.charAt(3), 7);
                            autoMove(container4, inputStr.charAt(4), 9);
                            autoMove(container5, inputStr.charAt(5), 11);
                            autoMove(container6, inputStr.charAt(6), 13);
                        }

                        /*老虎机完成后跳转页面*/

                        window.setTimeout(function () {
                            tools.changeTab(pages, forthPage);
                            clearInterval(thirdPage.timer);
                            yellowPerson.style.width = 163 * percent(Number(inputNum.value)) / 100 + "px";
                        }, 7000)
                    }

                }
                tools.click(backPage, function () {
                    tools.changeTab(pages, secondPage);
                });
                tools.click(backPage1, function () {
                    tools.changeTab(pages, secondPage);
                    column1.style.height=0+"px";
                    column2.style.height=0+"px";
                    column3.style.height=0+"px";
                    column4.style.height=0+"px";
                });
                tools.click(flaunt, function () {

                    fxPage.style.display = "block";
                    tools.click(fx, function () {
                        fxPage.style.display = "none";
                    });
                });
                woAi(Number(inputNum.value));
                lianJia(Number(inputNum.value));
                maiTian(Number(inputNum.value));
                zhongYuan(Number(inputNum.value));
                var salesSum = sales1 + sales2 + sales3 + sales4;
                n1 = 300 * sales1 / salesSum;
                n2 = 300 * sales2 / salesSum;
                n3 = 300 * sales3 / salesSum;
                n4 = 300 * sales4 / salesSum;
                tools.click(income, function () {
                    tools.changeTab(pages, fifthPage);

                    move1(column1, n1);
                    move1(column2, n2);
                    move1(column3, n3);
                    move1(column4, n4);
                    function move1(ele, tar) {
                        clearTimeout(ele.timer);
                        _move1();
                        function _move1() {
                            var cur = getCss(ele, "height");
                            if (cur < tar) {
                                if (cur + 1 >= tar) {
                                    ele.style.height = tar + "px";
                                    return;
                                }
                                ele.style.height = cur + 1 + "px";
                            } else if (cur > tar) {
                                if (cur - 1 <= tar) {
                                    ele.style.height = tar + "px";
                                    return;
                                }
                                ele.style.height = cur - 1 + "px";
                            }
                            ele.timer = window.setTimeout(_move1, 10);
                        }
                    }


                    tools.click(flaunt1, function () {
                        fxPage.style.display = "block";

                    });
                    tools.click(fx, function () {
                        fxPage.style.display = "none";
                    });

                    /*column1.style.height=n1+"px";
                     column2.style.height=n2+"px";
                     column3.style.height=n3+"px";
                     column4.style.height=n4+"px";*/
                    houseNum1.innerHTML = sales1 + "套";
                    houseNum2.innerHTML = sales2 + "套";
                    houseNum3.innerHTML = sales3 + "套";
                    houseNum4.innerHTML = sales4 + "套";

                    point1.style.bottom = (n1 + 40) + "px";
                    point2.style.bottom = (n2 + 40) + "px";
                    point3.style.bottom = (n3 + 40) + "px";
                    point4.style.bottom = (n4 + 40) + "px";
                    lineWords1.innerHTML = money1 + "W";
                    lineWords2.innerHTML = money2 + "W";
                    lineWords3.innerHTML = money3 + "W";
                    lineWords4.innerHTML = money4 + "W";


                });
                /*我爱我家*/
                function woAi(n) {
                    sales1 = Math.ceil(n / (0.018 * 0.85 * 295));
                    if (n > 0 && n <= 4) {
                        rank1.innerHTML = "S1";
                        if (n * .3 < 1) {
                            money1 = Number((n  * .3).toFixed(2));
                            return;
                        }
                        money1 = Math.round(n  * .3);
                    } else if (n > 4 && n <= 8) {
                        rank1.innerHTML = "S2";
                        money1 = Math.round(n * .3);
                    } else if (n > 8 && n <= 12) {
                        rank1.innerHTML = "S3";
                        money1 = Math.round(n * .35);
                    } else if (n > 12 && n <= 15) {
                        rank1.innerHTML = "S4";
                        money1 = Math.round(n * .4);
                    } else if (n > 15 && n <= 18) {
                        rank1.innerHTML = "S5";
                        money1 = Math.round(n * .45);
                    } else if (n > 18 && n <= 21) {
                        rank1.innerHTML = "S6";
                        money1 = Math.round(n * .5);
                    } else if (n > 21 && n <= 25) {
                        rank1.innerHTML = "S7";
                        money1 = Math.round(n * .55);
                    } else if (n > 25 && n <= 30) {
                        rank1.innerHTML = "S8";
                        money1 = Math.round(n * .6);
                    } else if (n > 30 && n <= 40) {
                        rank1.innerHTML = "S9";
                        money1 = Math.round(n * .65);
                    } else if (n > 40 && n <= 50) {
                        rank1.innerHTML = "S10";
                        money1 = Math.round(n * .7);
                    } else if (n > 50 && n <= 60) {
                        rank1.innerHTML = "S11";
                        money1 = Math.round(n * .75);
                    } else if (n > 60) {
                        rank1.innerHTML = "S12";
                        money1 = Math.round(n * .8);
                    }
                }

                /*链家*/
                function lianJia(n) {
                    sales2 = Math.ceil(n / (0.025 * 0.85 * 295));
                    if (n > 0 && n <= 8) {
                        rank2.innerHTML = "A1";
                        if (n * .3 < 1) {
                            money2 = Number((n * .3).toFixed(2));
                            return;
                        }
                        money2 = Math.round(n * .3);
                    } else if (n > 8 && n <= 12) {
                        rank2.innerHTML = "A2";
                        money2 = Math.round(n * .35);
                    } else if (n > 12 && n <= 15) {
                        rank2.innerHTML = "A3";
                        money2 = Math.round(n * .4);
                    } else if (n > 15 && n <= 18) {
                        rank2.innerHTML = "A4";
                        money2 = Math.round(n * .45);
                    } else if (n > 18 && n <= 21) {
                        rank2.innerHTML = "M4";
                        money2 = Math.round(n * .45);
                    } else if (n > 21 && n <= 25) {
                        rank2.innerHTML = "M5";
                        money2 = Math.round(n * .5);
                    } else if (n > 25 && n <= 30) {
                        rank2.innerHTML = "M6";
                        money2 = Math.round(n * .55);
                    } else if (n > 30 && n <= 40) {
                        rank2.innerHTML = "M7";
                        money2 = Math.round(n * .6);
                    } else if (n > 40 && n <= 50) {
                        rank2.innerHTML = "M8";
                        money2 = Math.round(n * .65);
                    } else if (n > 50 && n <= 60) {
                        rank2.innerHTML = "M9";
                        money2 = Math.round(n * .7);
                    } else if (n > 60) {
                        rank2.innerHTML = "M10";
                        money2 = Math.round(n * .75);
                    }
                }


                /*麦田*/
                function maiTian(n) {
                    sales3 = Math.ceil(n / (0.022 * 295));
                    if (n > 0 && n <= 8) {
                        rank3.innerHTML = "一星";
                        if (n * .19 < 1) {
                            money3 = Number((n * .19).toFixed(2));
                            return;
                        }
                        money3 = Math.round(n * .19);
                    } else if (n > 8 && n <= 15) {
                        rank3.innerHTML = "二星";
                        money3 = Math.round(n * .21);
                    } else if (n > 15 && n <= 20) {
                        rank3.innerHTML = "三星";
                        money3 = Math.round(n * .23);
                    } else if (n > 20 && n <= 25) {
                        rank3.innerHTML = "四星";
                        money3 = Math.round(n * .25);
                    } else if (n > 25 && n <= 32) {
                        rank3.innerHTML = "五星";
                        money3 = Math.round(n * .27);
                    } else if (n > 32 && n <= 38) {
                        rank3.innerHTML = "六星";
                        money3 = Math.round(n * .29);
                    } else if (n > 38 && n <= 45) {
                        rank3.innerHTML = "七星";
                        money3 = Math.round(n * .31);
                    } else if (n > 45 && n <= 55) {
                        rank3.innerHTML = "八星";
                        money3 = Math.round(n * .33);
                    } else if (n > 55) {
                        rank3.innerHTML = "九星";
                        money3 = Math.round(n * .35);
                    }
                }

                /*中原*/
                function zhongYuan(n) {
                    sales4 = Math.ceil(n / (0.015 * 295));
                    if (n > 0 && n <= 6) {
                        rank4.innerHTML = "见习";
                        if (n * .15 < 1) {
                            money4 = Number((n * .15).toFixed(2));
                            return;
                        }
                        money4 = Math.round(n * .15);
                    } else if (n > 6 && n <= 12) {
                        rank4.innerHTML = "培养";
                        money4 = Math.round(n * .20);
                    } else if (n > 12 && n <= 24) {
                        rank4.innerHTML = "物业顾问";
                        money4 = Math.round(n * .25);
                    } else if (n > 24 && n <= 48) {
                        rank4.innerHTML = "客户经理";
                        money4 = Math.round(n * .3);
                    } else if (n > 48 && n <= 96) {
                        rank4.innerHTML = "优秀经理";
                        money4 = Math.round(n * .35);
                    } else if (n > 96) {
                        rank4.innerHTML = "高级经理";
                        money4 = Math.round(n * .4);
                    }
                }

                /*求百分比方法*/
                function percent(n) {
                    if (n >= 0 && n < 5) {
                        tools.changeTab(layers, layer1);
                        headWords.innerHTML = jsonData[0];
                        if ((n * 35) < 1) {
                            upPara.innerHTML = (n * 35).toFixed(2) + "<span>w</span>";
                            downPara.innerHTML = (6 * n).toFixed(1) + "<span>%</span>";
                            return;
                        }
                        upPara.innerHTML = wholeNum + "<span>w</span>";
                        downPara.innerHTML = (6 * n).toFixed(1) + "<span>%</span>";
                        return (6 * n).toFixed(1);
                    } else if (n >= 5 && n < 10) {
                        tools.changeTab(layers, layer2);
                        headWords.innerHTML = jsonData[1];
                        upPara.innerHTML = wholeNum + "<span>w</span>";
                        downPara.innerHTML = (30 + (n - 5) * 4).toFixed(1) + "<span>%</span>";
                        return (30 + (n - 5) * 4).toFixed(1);
                    } else if (n >= 10 && n < 20) {
                        tools.changeTab(layers, layer3);
                        headWords.innerHTML = jsonData[2];
                        upPara.innerHTML = wholeNum + "<span>w</span>";
                        downPara.innerHTML = (50 + (n - 10) * 2.5).toFixed(1) + "<span>%</span>";
                        return (50 + (n - 10) * 2.5).toFixed(1);
                    }
                    else if (n >= 20 && n < 45) {
                        upPara.innerHTML = wholeNum + "<span>w</span>";
                        downPara.innerHTML = (75 + (n - 20) * 0.8).toFixed(1) + "<span>%</span>";
                        tools.changeTab(layers, layer4);
                        headWords.innerHTML = jsonData[3];
                        return (75 + (n - 20) * 0.8).toFixed(1);
                    }
                    else if (n >= 45 && n < 145) {
                        upPara.innerHTML = wholeNum + "<span>w</span>";
                        downPara.innerHTML = (95 + (n - 45) * 0.04).toFixed(1) + "<span>%</span>";
                        tools.changeTab(layers, layer5);
                        headWords.innerHTML = jsonData[4];
                        return (95 + (n - 45) * 0.04).toFixed(1);
                    }
                    else if (n >= 145 && n < 500) {
                        upPara.innerHTML = wholeNum + "<span>w</span>";
                        downPara.innerHTML = (99 + (n - 145) * 0.0028).toFixed(1) + "<span>%</span>";
                        tools.changeTab(layers, layer6);
                        headWords.innerHTML = jsonData[5];
                        return (99 + (n - 145) * 0.0028).toFixed(1);
                    } else {
                        tools.changeTab(layers, layer7);
                        headWords.innerHTML = jsonData[6];
                        return;
                    }
                }
            }else{
                alert("格式不对哦！");
            }
        }
        else {
            alert("格式不对哦！");
        }
        /*分享页面*/

        var n = Number(inputNum.value);
        if (n >= 0 && n < 5) {
            title = "辛苦半年，经手N套房，测算身价，看看你在帝都能买几环的房？";
            desc = "您的身价为" + wholeNum + "w,打败了帝都" + percent(n) + "%的经纪人,可以“置业七环”啦！";
        } else if (n >= 5 && n < 10) {
            title = "辛苦半年，经手N套房，测算身价，看看你在帝都能买几环的房？";
            desc = "您的身价为" + wholeNum + "w,打败了帝都" + percent(n) + "%的经纪人,可以“置业六环”啦！";
        } else if (n >= 10 && n < 20) {
            title = "辛苦半年，经手N套房，测算身价，看看你在帝都能买几环的房？";
            desc = "您的身价为" + wholeNum + "w,打败了帝都" + percent(n) + "%的经纪人,可以“置业五环”啦！";
        } else if (n >= 20 && n < 45) {
            title = "辛苦半年，经手N套房，测算身价，看看你在帝都能买几环的房？";
            desc = "您的身价为" + wholeNum + "w,打败了帝都" + percent(n) + "%的经纪人,可以“置业四环”啦！";
        } else if (n >= 45 && n < 145) {
            title = "辛苦半年，经手N套房，测算身价，看看你在帝都能买几环的房？";
            desc = "您的身价为" + wholeNum + "w,打败了帝都" + percent(n) + "%的经纪人,可以“置业三环”啦！";
        } else if (n >= 145 && n < 500) {
            title = "辛苦半年，经手N套房，测算身价，看看你在帝都能买几环的房？";
            desc = "您的身价为" + wholeNum + "w,打败了帝都" + percent(n) + "%的经纪人,可以“置业二环”啦！";
        } else if (n >= 500) {
            title = "辛苦半年，经手N套房，测算身价，看看你在帝都能买几环的房？";
            desc = "地球上没有这么牛的半年业绩，你还是回火星吧！";
        }
        $(function () {
            var url = encodeURIComponent(window.location.href);
            $.ajax({
                type: "GET",
                dataType: "jsonp",
                url: "http://sso.h6app.com/jssdk/config?url=" + url + "&callback=?",
                data: {},
                success: function (result) {
                    if (result.code == 0) {
                        callback(result.data);
                    }
                }
            });
            function callback(config) {
                wx.config(config);
                wx.ready(function () {
                    wx.onMenuShareAppMessage({
                        title: title,
                        desc: desc,
                        link: location.href,
                        imgUrl: 'http://www.h6app.com/data/case/lianjia/img/2.jpg',
                        success: function (res) {
                            _czc.push(["_trackEvent", "分享", "朋友"]);
                        }
                    });
                    wx.onMenuShareTimeline({
                        title: desc,
                        /*desc: desc,*/
                        link: location.href,
                        imgUrl: 'http://www.h6app.com/data/case/lianjia/img/2.jpg',
                        success: function () {
                            _czc.push(["_trackEvent", "分享", "朋友圈"]);
                        }
                    });


                });
            }
        });
    });

    $(function () {
        console.log(window.location.href);
        var url = encodeURIComponent(window.location.href);
        console.log(decodeURIComponent(url));
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: "http://sso.h6app.com/jssdk/config?url=" + url + "&callback=?",
            data: {},
            success: function (result) {
                if (result.code == 0) {
                    callback(result.data);
                }
            }
        });
        function callback(config) {
            wx.config(config);
            wx.ready(function () {
                wx.onMenuShareAppMessage({
                    title:title,
                    desc: desc1,
                    link: location.href,
                    imgUrl: 'http://www.h6app.com/data/case/lianjia/img/2.jpg',
                    success: function (res) {
                        _czc.push(["_trackEvent", "分享", "朋友"]);
                    }
                });
                wx.onMenuShareTimeline({
                    title: desc,
                    link: location.href,
                    imgUrl: 'http://www.h6app.com/data/case/lianjia/img/2.jpg',
                    success: function () {
                        _czc.push(["_trackEvent", "分享", "朋友圈"]);
                    }
                });


            });
        }
    });
}();









