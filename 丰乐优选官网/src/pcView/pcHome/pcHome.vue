<template>
  <div>
    <div class="slideshow wow bounceInDown">
      <img src="../../../static/pcImgs/home/banner.png" alt />
    </div>
    <div class="brief ">
      <div  class="wow bounceInUp">
        <div>Company Profile</div>
        <div>———— 公司简介 ————</div>
        <div>
          <img src="../../../static/pcImgs/home/brief.png" alt />
          <div>
            <p>河南丰乐优选网络科技有限公司，坐落于河南省周口市，是一家互联网“新零售”平台，帮助商家实现线上线下融合经营。</p>
            <p>平台主要定位是解决家庭消费者的日常需求，提供包括蔬菜水果，肉禽水产，米面粮油，日用百货等全品类精选商品。依托社区实体便利店，通过 “预售+自提” 的模式为用户提供服务。</p>
            <p>丰乐优选，是一个基于互联网思维，已用户场景化需求为导向，精准连接人与服务的S2C服务平台，以大数据为依托，企业服务商和个人都可以通过丰乐优选为用户提供服务，让产能和效率的价值最大化。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="title wow flipInX">
      <div>corporate culture</div>
      <div>———— 企业文化 ————</div>
    </div>
    <div class="Sudoku">
      <div>
        <div class="wow bounceInLeft">
          <img src="../../../static/pcImgs/home/culture_1.png" alt />
        </div>
        <div class="wow slideInDown">
          <p>公司理念</p>
          <p>诚信合作，成人达己，诚人之本，信誉之名，诚信你我，携手展望未来宏图。</p>
        </div>
        <div class="wow slideInRight">
          <img src="../../../static/pcImgs/home/culture_2.png" alt />
        </div>
      </div>
      <div>
        <div class="wow bounceInLeft">
          <p>价值观</p>
          <p>诚信、协作、卓越、正直、尊重、平等、积极乐观、待人以诚。</p>
        </div>
        <div class="wow slideInUp">
          <img src="../../../static/pcImgs/home/culture_3.png" alt />
        </div>
        <div class="wow slideInRight">
          <p>公司使命</p>
          <p>助力每一位合作伙伴持续创造价值，实现自我梦想，通过互联网引领技术的发展。</p>
        </div>
      </div>
    </div>
    <div class="title bgColor wow flipInX">
      <div>our advantage</div>
      <div>———— 我们的优势 ————</div>
    </div>
    <div class="advantage">
      <div>
        <div class="wow wobble">
          <img src="../../../static/pcImgs/home/advantage_1.png" alt />
          <p>精挑细选</p>
          <p>专业的买手精选商品的能力，确保挑选出来的商品，是消费者所需要的。</p>
        </div>
        <div class="wow wobble">
          <img src="../../../static/pcImgs/home/advantage_2.png" alt />
          <p>及时送达</p>
          <p>专业的物流配送能力，确保订单能及时配送到门店，到达客户手中。</p>
        </div>
        <div class="wow wobble">
          <img src="../../../static/pcImgs/home/advantage_3.png" alt />
          <p>售后保障</p>
          <p>100%商品售后，让购物没有任何售后之忧</p>
        </div>
        <div class="wow wobble">
          <img src="../../../static/pcImgs/home/advantage_4.png" alt />
          <p>一站式</p>
          <p>互联网“新零售”平台，线上线下融合经营，足不出户就能拥有。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
export default {
  name: "pcHome",
  data() {
    return {};
  },
  mounted() {
    new WOW().init();
  }
};
</script>


<style scoped  type="text/ecmascript-6">
.slideshow {
  width: 100%;
  height: 40vh;
}
.slideshow img {
  width: 100%;
  height: 100%;
  z-index: 1;
}
.brief {
  width: 100%;
  height: 60vh;
  background: #eee;
  position: relative;
}
.brief > div:first-child {
  width: 60%;
  height: 60vh;
  margin-left: 20%;
  background: #fff;
  margin-top: -4vh;
  z-index: 9;
  position: absolute;
}
.brief > div:first-child > div:first-child {
  font-size: 18px;
  font-family: Arial;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  text-align: center;
  padding-top: 20px;
}
.brief > div:first-child > div:nth-child(2) {
  font-size: 30px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  padding-bottom: 20px;
}
.brief > div:first-child > div:nth-child(3) > img {
  width: 20vw;
  height: 30vh;
  margin: 5vh 4%;
  float: left;
  position: absolute;
}
.brief > div:first-child > div:nth-child(3) > div:nth-child(2) {
  float: left;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 36px;
  position: absolute;
  width: 34vw;
  height: 20vh;
  margin-left: 24vw;
}
.title {
  width: 100%;
  text-align: center;
}
.bgColor {
  background: rgba(245, 245, 245, 1);
}
.title > div:first-child {
  font-size: 28px;
  font-family: Arial;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  text-align: center;
  padding-top: 20px;
}
.title > div:nth-child(2) {
  font-size: 30px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  padding-bottom: 20px;
}
.Sudoku {
  width: 80%;
  /* height: 430px; */
  margin-left: 10%;
}
.Sudoku > div {
  display: flex;
  padding: 20px 0;
}
.Sudoku > div > div {
  width: 50%;
  height: 200px;
  background: rgba(243, 242, 242, 1);
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
}
.Sudoku > div > div:first-child {
  margin-left: 0;
}
.Sudoku > div > div > img {
  width: 100%;
  height: 100%;
}
/**/
.advantage {
  width: 100%;
  background: rgba(245, 245, 245, 1);
}
.advantage > div {
  width: 80%;
  margin-left: 10%;
  display: flex;
  padding: 20px 0;
}
.advantage > div > div {
  width: 20%;
  height: 350px;
  margin: 0 2.5%;
  background: #fff;
  text-align: center;
  padding: 0 20px;
}
.advantage > div > div > img {
  width: 60%;
  height: 40%;
  margin-top: 30px;
}
.advantage > div > div > p:nth-child(2) {
  font-size: 28px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 13px;
}
.advantage > div > div > p:nth-child(3) {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 30px;
}
</style>
