
String.prototype.startWith = function (str) {
    var reg = new RegExp("^" + str);
    return reg.test(this);
}

String.prototype.endWith = function (str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
}


//main.js
var canvas, loader, stage, container, stageWidth, stageHeight, stageScale, bitmap;
var scale = 1 / window.devicePixelRatio;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width,width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');

var data = [
    { 'category': 'tomato', 'step': 3 },
    { 'category': 'tomato', 'step': 3 },
    { 'category': 'tomato', 'step': 3 },
    { 'category': 'tomato', 'step': 3 },
    { 'category': 'tomato', 'step': 3 },
    { 'category': 'tomato', 'step': 3 },
    { 'category': 'tomato', 'step': 3 },
    { 'category': 'tomato', 'step': 3 },
    { 'category': 'tomato', 'step': 3 },
    { 'category': 'tomato', 'step': 3 },
    { 'category': 'expand', 'step': 3 },
    { 'category': 'grass', 'step': 3 },
    { 'category': 'grass', 'step': 3 },
    { 'category': 'grass', 'step': 3 },
    { 'category': 'grass', 'step': 3 }
]

function init() {
    canvas = document.getElementById("mainView");

    stageScaleY = stageHeight / 1334;//锁屏的强制横屏标题栏在左边所以要减去128
    stageScaleX = stageWidth / (750);

    stage = new createjs.Stage(canvas);
    container = new createjs.Container();
    stage.addChild(container);
    bitmap_loading = new createjs.Bitmap('img/logo2.png');
    bitmap_loading.image.onload = function () {

        bounds = bitmap_loading.getBounds();
        bitmap_loading.y = stage.canvas.width - bounds.width >> 1;
        bitmap_loading.x = stage.canvas.height - bounds.height >> 1;
        container.addChild(bitmap_loading);
        createjs.Tween.get(bitmap_loading, { loop: true }).to({ y: bitmap_loading.y + 30 }, 1000).to({ y: bitmap_loading.y }, 800);

        preload();

        //stageBreakHandler();

        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", stageBreakHandler);

    }

}
function stageBreakHandler(event) {
    if (stageWidth != document.documentElement.clientWidth || stageHeight != document.documentElement.clientHeight) {
        stageWidth = document.documentElement.clientWidth;
        stageHeight = document.documentElement.clientHeight;

        //alert(document.documentElement.clientWidth)
        //alert(document.documentElement.clientHeight)

        //alert(document.body.clientWidth)
        //alert(document.body.clientHeight)

        //alert(stageHeight / 1334)
        //alert(stageWidth /750)

        //新的自适应方式
        canvas.width = stageWidth;
        canvas.height = stageHeight;
        //if (stageWidth < stageHeight) {
        //    stageScaleY = stageHeight / 1334;//锁屏的强制横屏标题栏在左边所以要减去128
        //    stageScaleX = stageWidth / (750 + 128);
        //    container.rotation = 90;
        //    container.x = stageWidth;
        //    //container.scaleX = stageScaleX;
        //    //container.scaleY = stageScaleY;

        //    container.scaleX = stageScaleX;
        //    container.scaleY = stageScaleY;
        //}
        //else {
        //    stageScaleY = stageHeight / 1334;
        //    stageScaleX = stageWidth / 750;
        //    container.rotation = 0;
        //    container.x = 0;
        //    container.scaleX = stageScaleX;
        //    container.scaleY = stageScaleY;
        //}

        if (stageWidth < stageHeight) {
            stageScaleY = stageHeight / 1334;//锁屏的强制横屏标题栏在左边所以要减去128
            stageScaleX = stageWidth / (750);
            container.rotation = 90;
            container.x = stageWidth;
            container.scaleX = stageScaleY;
            container.scaleY = stageScaleX;

            //stage.scaleX = stageScaleX;
            //stage.scaleY = stageScaleY;
        }
        else {
            stageScaleY = stageHeight / 1334;
            stageScaleX = stageWidth / 750;
            container.rotation = 0;
            container.x = 0;
            container.scaleX = stageScaleX;
            container.scaleY = stageScaleY;
        }
    }
    stage.update();
}

function preload() {
    var i = 0,
        manifest = [
            { src: 'img/farm-background.png', id: 'bg' },

            { src: 'img/farm-field-1.png', id: 'field_1' },
            { src: 'img/farm-field-2.png', id: 'field_2' },
            { src: 'img/farm-field-3.png', id: 'field_3' },
            { src: 'img/farm-field-4.png', id: 'field_4' },
            { src: 'img/farm-field-5.png', id: 'field_5' },
            { src: 'img/farm-field-6.png', id: 'field_6' },
            { src: 'img/farm-field-7.png', id: 'field_7' },
            { src: 'img/farm-field-8.png', id: 'field_8' },
            { src: 'img/farm-field-9.png', id: 'field_9' },
            { src: 'img/farm-field-10.png', id: 'field_10' },
            { src: 'img/farm-field-11.png', id: 'field_11' },
            { src: 'img/farm-field-12.png', id: 'field_12' },
            { src: 'img/farm-field-13.png', id: 'field_13' },
            { src: 'img/farm-field-14.png', id: 'field_14' },
            { src: 'img/farm-field-15.png', id: 'field_15' },

            { src: 'img/farm-grass-1.png', id: 'grass_1' },
            { src: 'img/farm-grass-2.png', id: 'grass_2' },
            { src: 'img/farm-grass-3.png', id: 'grass_3' },
            { src: 'img/farm-grass-4.png', id: 'grass_4' },
            { src: 'img/farm-grass-5.png', id: 'grass_5' },
            { src: 'img/farm-grass-6.png', id: 'grass_6' },
            { src: 'img/farm-grass-7.png', id: 'grass_7' },
            { src: 'img/farm-grass-8.png', id: 'grass_8' },
            { src: 'img/farm-grass-9.png', id: 'grass_9' },
            { src: 'img/farm-grass-10.png', id: 'grass_10' },
            { src: 'img/farm-grass-11.png', id: 'grass_11' },
            { src: 'img/farm-grass-12.png', id: 'grass_12' },
            { src: 'img/farm-grass-13.png', id: 'grass_13' },
            { src: 'img/farm-grass-14.png', id: 'grass_14' },
            { src: 'img/farm-grass-15.png', id: 'grass_15' },

            { src: 'img/farm-expand-1.png', id: 'expand_1' },
            { src: 'img/farm-expand-2.png', id: 'expand_2' },
            { src: 'img/farm-expand-3.png', id: 'expand_3' },
            { src: 'img/farm-expand-4.png', id: 'expand_4' },
            { src: 'img/farm-expand-5.png', id: 'expand_5' },
            { src: 'img/farm-expand-6.png', id: 'expand_6' },
            { src: 'img/farm-expand-7.png', id: 'expand_7' },
            { src: 'img/farm-expand-8.png', id: 'expand_8' },
            { src: 'img/farm-expand-9.png', id: 'expand_9' },
            { src: 'img/farm-expand-10.png', id: 'expand_10' },
            { src: 'img/farm-expand-11.png', id: 'expand_11' },
            { src: 'img/farm-expand-12.png', id: 'expand_12' },
            { src: 'img/farm-expand-13.png', id: 'expand_13' },
            { src: 'img/farm-expand-14.png', id: 'expand_14' },
            { src: 'img/farm-expand-15.png', id: 'expand_15' },

            { src: 'img/tomato-1.png', id: 'tomato_1' },
            { src: 'img/tomato-2.png', id: 'tomato_2' },
            { src: 'img/tomato-3.png', id: 'tomato_3' },
            { src: 'img/tomato-4.png', id: 'tomato_4' },
            { src: 'img/tomato-5.png', id: 'tomato_5' },
            { src: 'img/tomato-6.png', id: 'tomato_6' },
            { src: 'img/tomato-7.png', id: 'tomato_7' },
            { src: 'img/tomato-8.png', id: 'tomato_8' },
            { src: 'img/tomato-9.png', id: 'tomato_9' },
            { src: 'img/tomato-10.png', id: 'tomato_10' },
            { src: 'img/tomato-11.png', id: 'tomato_11' },
            { src: 'img/tomato-12.png', id: 'tomato_12' },
            { src: 'img/tomato-13.png', id: 'tomato_13' },
            { src: 'img/tomato-14.png', id: 'tomato_14' },
            { src: 'img/tomato-15.png', id: 'tomato_15' },

            { src: 'img/icon-warehouse.png', id: 'icon-warehouse' },
            { src: 'img/icon-seed.png', id: 'icon-seed' },
            { src: 'img/icon-golden.png', id: 'icon-golden' },
            { src: 'img/icon-envelope.png', id: 'icon-envelope' },
            { src: 'img/icon-taskbook.png', id: 'icon-taskbook' },
            { src: 'img/icon-gloves.png', id: 'icon-gloves' },
            { src: 'img/icon-kettle.png', id: 'icon-kettle' },
            { src: 'img/icon-pesticide.png', id: 'icon-pesticide' },
            { src: 'img/icon-shovel.png', id: 'icon-shovel' }
        ];

    loader = new createjs.LoadQueue();//采用标签形式加载
    loader.loadManifest(manifest);
    loader.addEventListener('fileload', function () {
        i++;
        console.log((i / (manifest.length).toFixed(2) + '%'));
    });
    loader.addEventListener('complete', handleComplete);
}

//预加载完成
function handleComplete() {

    console.log('load complete!');

    createjs.Touch.enable(stage);//开启触摸
    createjs.Ticker.addEventListener('tick', stage);//监听舞台并更新舞台
    w = stage.canvas.width;
    h = stage.canvas.height;

    //var paramH = 2.6;

    var countH = h / 123;
    var countW = w / 123;

    var preH = h / countH;
    var preW = w / countW;

    var bg = new createjs.Bitmap(loader.getResult('bg'));

    container.addChild(bg);

    for (var i = 1; i <= 15; i++) {

        var field = new createjs.Bitmap(loader.getResult('field_' + i));
        container.addChild(field);
        field.addEventListener("click", function () {
            alert('field' + i)
        });
    }

    var imgArr = [];

    for (var i = 1; i <= data.length; i++) {

        var cate = data[i - 1].category
        var name = cate + '_' + i;
        var img = new createjs.Bitmap(loader.getResult(name));
        img.name = name
        container.addChild(img.setTransform(0, 0));
        img.addEventListener("click", function () {
            alert('grass')
        });

        imgArr.push(img);
    }


    var icon_warehouse = new createjs.Bitmap(loader.getResult('icon-warehouse'));
    icon_warehouse.shadow = new createjs.Shadow("yellow", -1, -1, 30);

    icon_warehouse.addEventListener("click", function () {
        alert('仓库功能暂未开放')
    });

    container.addChild(icon_warehouse.setTransform(h - icon_warehouse.image.height * 4));

    createjs.Tween.get(icon_warehouse, { loop: true }).to({ y: icon_warehouse.y + 5 }, 1000).to({ y: icon_warehouse.y }, 800);

    var icon_seed = new createjs.Bitmap(loader.getResult('icon-seed'));
    icon_seed.shadow = new createjs.Shadow("yellow", -1, -1, 30);
    icon_seed.addEventListener("click", function () {
        alert('种子袋功能暂未开放')
    });

    container.addChild(icon_seed.setTransform(h - icon_seed.image.height * 3));

    createjs.Tween.get(icon_seed, { loop: true }).to({ y: icon_seed.y + 5 }, 1000).to({ y: icon_seed.y }, 800);

    var icon_golden = new createjs.Bitmap(loader.getResult('icon-golden'));
    icon_golden.shadow = new createjs.Shadow("yellow", -1, -1, 30);
    icon_golden.addEventListener("click", function () {
        alert('钱袋功能暂未开放')
    });

    container.addChild(icon_golden.setTransform(h - icon_golden.image.height * 2));

    createjs.Tween.get(icon_golden, { loop: true }).to({ y: icon_seed.y + 5 }, 1000).to({ y: icon_seed.y }, 800);


    var icon_envelope = new createjs.Bitmap(loader.getResult('icon-envelope'));
    icon_envelope.shadow = new createjs.Shadow("yellow", -1, -1, 30);
    icon_envelope.addEventListener("click", function () {
        alert('书信功能暂未开放')
    });

    container.addChild(icon_envelope.setTransform(h - icon_envelope.image.height * 1));

    createjs.Tween.get(icon_envelope, { loop: true }).to({ y: icon_seed.y + 5 }, 1000).to({ y: icon_seed.y }, 800);


    var icon_taskbook = new createjs.Bitmap(loader.getResult('icon-taskbook'));
    icon_taskbook.shadow = new createjs.Shadow("yellow", -1, -1, 30);
    icon_taskbook.addEventListener("click", function () {
        alert('任务功能暂未开放')
    });

    container.addChild(icon_taskbook.setTransform(h - icon_taskbook.image.height * 0));

    createjs.Tween.get(icon_taskbook, { loop: true }).to({ y: icon_seed.y + 5 }, 1000).to({ y: icon_seed.y }, 800);

    var icon_kettle = new createjs.Bitmap(loader.getResult('icon-kettle'));
    icon_kettle.shadow = new createjs.Shadow("yellow", -1, -1, 30);
    icon_kettle.addEventListener("click", function () {
        alert('水壶')
    });

    container.addChild(icon_kettle.setTransform(0, w - icon_kettle.image.width));

    //createjs.Tween.get(icon_kettle, { loop: true }).to({ x: icon_seed.x + 5 }, 1000).to({ x: icon_seed.x }, 800);

    var icon_pesticide = new createjs.Bitmap(loader.getResult('icon-pesticide'));
    icon_pesticide.shadow = new createjs.Shadow("yellow", -1, -1, 30);
    icon_pesticide.addEventListener("click", function () {
        alert('药壶')
    });

    container.addChild(icon_pesticide.setTransform(icon_pesticide.image.height, w - icon_pesticide.image.width));

    //createjs.Tween.get(icon_kettle, { loop: true }).to({ x: icon_seed.x + 5 }, 1000).to({ x: icon_seed.x }, 800);

    var icon_shovel = new createjs.Bitmap(loader.getResult('icon-shovel'));
    icon_shovel.shadow = new createjs.Shadow("yellow", -1, -1, 30);
    icon_shovel.addEventListener("click", function () {
        alert('铁铲')
    });

    container.addChild(icon_shovel.setTransform(icon_seed.x , w - icon_shovel.image.width));

    //createjs.Tween.get(icon_kettle, { loop: true }).to({ x: icon_seed.x + 5 }, 1000).to({ x: icon_seed.x }, 800);

    var icon_gloves = new createjs.Bitmap(loader.getResult('icon-gloves'));
    icon_gloves.shadow = new createjs.Shadow("yellow", -1, -1, 30);
    icon_gloves.addEventListener("click", function () {
        removeAllRipe(imgArr)
    });

    container.addChild(icon_gloves.setTransform(icon_golden.x, w - icon_gloves.image.width));

    createjs.Tween.get(icon_gloves, { loop: true }).to({ y: icon_gloves.y + 5 }, 500).to({ y: icon_gloves.y }, 800);

    stageBreakHandler();

    console.log(container)
}


function removeAllRipe(imgArr) {
    for (var i = 0; i < imgArr.length; i++) {
        if (!imgArr[i].name.startWith('grass')) {

            createjs.Tween.get(imgArr[i]).wait(100).to({ y: -20, alpha: 0, visible: false }, 1000).call(function () {
                stage.removeChild(imgArr[i])
            });

        }
    }
}
