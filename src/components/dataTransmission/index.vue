<template>
  <!--动效显示-->
    <div style="width: 700px; height: auto; position: relative; margin: auto">
      <div class="line1 line" style="animation-delay: 1s"></div>
      <div class="line1 line" style="animation-delay: 3s"></div>
      <div class="line1 line" style="animation-delay: 5s"></div>
      <div class="line2 line" style="animation-delay: 1s"></div>
      <div class="line2 line" style="animation-delay: 3s"></div>
      <div class="line2 line" style="animation-delay: 5s"></div>

      <!--云端-->
      <div  class="server">
<!--       zhuanzhuanquana -->
          <img class="effectposition maindataeffect" src="../../assets/img/data-transmission/maindataeffect.png">
<!--        tianchong -->
          <div class="effectposition acrossremindeffectout" >
            <div class="acrossremindeffectin" style="width: 46px; height: 46px; margin: 4px;"></div>
          </div>
<!--        2 icons-->
          <img class="effectposition" src="../../assets/img/data-transmission/maindataspecialeffect.png">
          <img class="effectposition" src="../../assets/img/data-transmission/maindataicon.png">
          <span class="stagetitle">数据中心</span>
      </div>
      <!--客户端-->
      <div   class="client-left client">
        <img class="effectposition arounddataeffect02" src="../../assets/img/data-transmission/aroundeffect.png">
        <div class="effectposition acrossremindeffectout acrossremindeffectoutard">
          <div class="acrossremindeffectin acrossremindeffectinard"></div>
        </div>
        <img class="effectposition acrossremindeffecindex" src="../../assets/img/data-transmission/xingzhengshenpi.png">
        <span class="stagetitle">Client</span>
      </div> <!--客户端-->
      <div class="client-right client">
        <img class="effectposition arounddataeffect02" src="../../assets/img/data-transmission/aroundeffect.png">
        <div class="effectposition acrossremindeffectout acrossremindeffectoutard">
          <div class="acrossremindeffectin acrossremindeffectinard"></div>
        </div>
        <img class="effectposition acrossremindeffecindex" src="../../assets/img/data-transmission/xingzhengshenpi.png" >
        <span class="stagetitle">Client</span>
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
.flasheffectoutbox{z-index: 1000;   width: 1000px; height: 500px;margin: auto; margin-top: 100px;  background-repeat: no-repeat; background-position: center;position: relative}
.effectposition{ position: absolute;width: 100%}
.acrossremindeffectout{ background-color: rgba(0,126,255,0.05); border-radius: 50%;}
.acrossremindeffectin{ background-color: rgba(0,126,255,0.3); border-radius: 50%; margin: auto;}
.stagetitle{color: #00e4ff; top: 110%; font-size: 1em; font-family: "Microsoft YaHei"; font-weight: lighter;  width: 100%; text-align: center; position: absolute; }

.line{position: absolute;transform-origin:left;animation-iteration-count:infinite}
.line1{
  z-index: 99999999;
  width: 0;
  left: 35px;
  top: 96px;
  height: 3px;
  transform: rotate(-16deg);
  animation: mm2 4s;
  animation-timing-function:linear;
  animation-iteration-count: infinite;
  background-image: url("../../assets/img/data-transmission/linght_ef.png");
  background-repeat: no-repeat;
  background-position: 100%;
}
.line2{z-index: 1;
  left: 664px;
  top: 96px;
  width: 0;
  height: 3px;
  transform: rotate(-164deg);
  animation: mm2 4s;
  animation-timing-function:linear;
  animation-iteration-count: infinite;
  background-image: url("../../assets/img/data-transmission/linght_ef.png");
  background-repeat: no-repeat;
  background-position: 100%;
 }
/*光标移动多远*/
@keyframes mm2{
  0%{width: 0}
  100%{width: 305px}
}
.server{
  border-radius: 50%; cursor: pointer; position: absolute;
  border: rgba(0,168,255,0.6) 3px solid; width: 60px; height: 60px; position: absolute; left: 0; top: 0; right: 0; bottom: 0;margin: auto; /* 有了这个就自动居中了 */
}
.client{
  border-radius: 50%; border: rgba(0,168,255,0.6) 1px solid; cursor: pointer; position: absolute; width: 40px; height: 40px; top: 80px;
}
.client-left{left: 0px ;}
.client-left:after {
  transform: rotate(-16deg);
  margin-left: 35px;
  margin-top: -27px;
  padding: 0;
  content: '';
  height: 1px;
  width: 289px;
  background: #1c5997;
  display: inline-block;
  vertical-align: top;
  border-radius: 99px;
  box-shadow: #1c5997 0px 0px 10px inset;
  border: 1px solid black;
}
.client-right{right: 0px ;}
.client-right:after {
  transform: rotate(16deg);
  margin-left: -289px;
  margin-top: -27px;
  padding: 0;
  content: '';
  height: 1px;
  width: 288px;
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
