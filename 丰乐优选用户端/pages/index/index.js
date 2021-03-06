var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    time: '',
    show_if: false,
    show_if_2: false,
    scrollTop:90,//页面滑动高度
    floorstatus: false,
    classify: [//店铺图标测试数据
      [
        { id: '0', name: '蔬菜馆', url: '/static/temp/c8.png' },
        { id: '1', name: '水果馆', url: '/static/temp/c1.png' },
        { id: '2', name: '蔬菜馆', url: '/static/temp/c2.png' },
        { id: '3', name: '肉肉馆', url: '/static/temp/c3.png' },
        { id: '4', name: '家禽馆', url: '/static/temp/c4.png' },
        { id: '5', name: '水产馆', url: '/static/temp/c5.png' },
        { id: '6', name: '蛋蛋馆', url: '/static/temp/c6.png' },
        { id: '7', name: '生鲜批发', url: '/static/temp/c7.png' },
      ],
      [
        { id: '9', name: '家庭批发', url: '/static/temp/c2.png' },
        { id: '10', name: '牛奶馆', url: '/static/temp/c4.png' },
        { id: '11', name: '烘焙馆', url: '/static/temp/c5.png' }
      ]
    ],
  },


  //消息通知
  news: function () {
    var that = this;
    let t = 0;
    that.setData({
      show_if_2: true,
      name: '李四',
      time: '10秒'
    })
    that.setData({
      marginTop: 100
    })
    //定时器
    var timer = setInterval(function () {
      t = t + 1;
      if (t > 3) { //消息停留时间
        clearInterval(timer)
        that.setData({
          show_if_2: false,
          marginTop: 150
        })
      }
    }, 1000)
  },
  //
  shop:function(e){
    let index = e.currentTarget.dataset.index;
    console.log(index)
  },
  //跳转到商品搜索页面
  toSearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  //跳转到商品详情页面
  toProduct:function(){
    wx.navigateTo({
      url: '../product/product',
    })
  },
  /*
  //跳到页面指定高度
  toScrollTop:function(){
    let top = this.data.scrollTop;
    wx.pageScrollTo({
      scrollTop: top,
      duration: 1000
    })
  },*/
  //上拉刷新
  upperBoundary:function(){
    console.log('上拉')
  },
  //下拉刷新
  belowBoundary: function() {
      var that = this
      //console.log('到底了！');
      wx.showToast({
        title: '加载完了哦！',
        icon: 'success',
        duration: 2000
      })
    },
  // 获取滚动条当前位置
  onPageScroll: function (e) {
    console.log(e)
    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },

  //回到顶部
  goTop: function (e) {
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  //回到顶部
  goShop: function (e) {
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 650
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.news();
    //this.getData();
    console.log('购物车：',wx.getStorageSync('goodsItem'));
  },
  getData:function(){
    wx.request({
      url: 'http://192.168.0.101:8080/wechat/api/index/getData',
      method: 'POST',
      header: {
        'Content-Type': "application/x-www-form-urlencoded"
      },
      success:function(res){
        console.log(res.data.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.upperBoundary();
  },
  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.belowBoundary();
  },
  
    /*
    wx.request({
      url: common.baseUrl + 'blog_rss.php',
      data: {
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var feeds = feed.getBlogs(res.data);
        wx.setStorage({
          key: "blog_feeds",
          data: feeds
        })

        that.setData({
          feeds: feeds
        })
      }
    })*/

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})