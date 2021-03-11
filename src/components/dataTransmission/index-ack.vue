<template>

  <!--动效显示-->
  <div class="flasheffectoutbox" >

    <div style="width: 1000px; height: 500px; position: relative;">
      <div class="line2 line"></div>

      <!--主动效-->
      <div class="maineffectoutbox circleeffectclass">
        <a href="http://www.txgis.com" target="_blank">
          <img class="effectposition maindataeffect" src="../../assets/img/data-transmission/maindataeffect.png" style="width: 100%">
          <div class="effectposition acrossremindeffectout" >
            <div class="acrossremindeffectin" style="width: 46px; height: 46px; margin: 4px;"></div>
          </div>
          <img class="effectposition maindataspecialeffect" src="../../assets/img/data-transmission/maindataspecialeffect.png" style="width: 100%">
          <img class="effectposition acrossremindeffecindex" src="../../assets/img/data-transmission/maindataicon.png" style="width: 100%">
          <span class="stagetitle">xxxxxxx数据中心</span>
        </a>
      </div>
      <!--卫星动效-->
      <div class="circleeffectclass aroundfunctioneffect"  id="client" style="left: 283px;top: 280px;">
        <img class="effectposition arounddataeffect02" src="../../assets/img/data-transmission/aroundeffect.png" style="width: 100%">
        <div class="effectposition acrossremindeffectout acrossremindeffectoutard">
          <div class="acrossremindeffectin acrossremindeffectinard"></div>
        </div>
        <img class="effectposition acrossremindeffecindex" src="../../assets/img/data-transmission/xingzhengshenpi.png" style="width: 100%">
        <span class="stagetitle stagearoundtitle">xxxxxx系统一</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index.vue"
}
</script>

<style scoped>

/*动效栏*/
.flasheffectoutbox{z-index: 99999999999999999999;   width: 1000px; height: 500px;margin: auto; margin-top: 100px;  background-repeat: no-repeat; background-position: center;position: relative}
.circleeffectclass{ border-radius: 50%; border: rgba(0,168,255,0.6) 1px solid; cursor: pointer; position: absolute;}
.effectposition{ position: absolute;}
.acrossremindeffectout{ background-color: rgba(0,126,255,0.05); border-radius: 50%;}
.acrossremindeffectin{ background-color: rgba(0,126,255,0.3); border-radius: 50%; margin: auto;}
.stagetitle{color: #00e4ff; top: 104px; font-size: 14px; font-family: "Microsoft YaHei"; font-weight: lighter; display: block;width: auto; text-align: center; position: absolute;left: -10%;}
.stagearoundtitle{left: -25%;top:85px;}

.line{position: absolute;transform-origin:left;animation-iteration-count:infinite}
.line2{z-index: 1;left: 323px;top: 300.8px;width: 0;height: 3px;/*transform: rotate(21deg)*/;animation: mm2 2s ;
  animation-delay:2s;animation-iteration-count:infinite;
  background-image: url("../../assets/img/data-transmission/linght_ef.png");
  background-repeat: no-repeat;
  background-position: 100%;
}
/*光标移动多远*/
@keyframes mm2{
  0%{width: 0}
  100%{width: 305px}
}
/*主动效*/
.maineffectoutbox{border: rgba(0,168,255,0.6) 3px solid; width: 60px; height: 60px;top: 270px;left: 630px;}
#client:after {
  margin-left: 40px;
  margin-top: 20px;
  padding: 0;
  content: '';
  height: 1px;
  width: 304px;
  background: #1c5997;
  display: inline-block;
  vertical-align: top;
  border-radius: 99px;
  box-shadow: #1c5997 0px 0px 10px inset;
  border: 1px solid black;
}
.maindataeffect{ animation: scrolleffect 6.5s infinite linear;}
.maindataspecialeffectct{animation: maindataspecialeffect 0.6s forwards;}
@keyframes scrolleffect {
  0%{transfrom: rotate(0deg);}
  25%{transform: rotate(90deg);}
  50%{transform: rotate(180deg);}
  75%{transform: rotate(270deg);}
  100%{transform: rotate(360deg);}
}
@keyframes maindataspecialeffect {
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
}

/*卫星动效*/
.aroundfunctioneffect{ width: 40px; height: 40px;}
.acrossremindeffectoutard{width: 60px; height: 60px; margin: 8px;}
.acrossremindeffectinard{width: 32px; height: 32px; margin: -5px;}
.arounddataeffect01{ animation: scrolleffectarround01 linear infinite 4s forwards;}
.arounddataeffect02{ animation: scrolleffectarround01 linear infinite 3.8s forwards;}
.arounddataeffect03{ animation: scrolleffectarround01 linear infinite 4.2s forwards;}

@keyframes scrolleffectarround01 {
  0%{transfrom: rotate(0deg);}
  25%{transform: rotate(-90deg);}
  50%{transform: rotate(-180deg);}
  75%{transform: rotate(-270deg);}
  100%{transform: rotate(-360deg);}
}

/*修饰卫星*/
.decarround01{ width: 37px; height: 37px; cursor: auto;}
.decarroundin01{ width: 33px; height: 33px; margin: 2px;background-color: rgba(0,126,255,0.8);}
.decarroundin01:hover{ background-color: rgba(0,126,255,0.9);}
.decarround02{ width: 27px; height: 27px; cursor: auto;}
.decarroundin02{ width: 23px; height: 23px; margin: 2px;background-color: rgba(0,126,255,0.7);}
.decarroundin02:hover{ background-color: rgba(0,126,255,0.8);}

</style>
