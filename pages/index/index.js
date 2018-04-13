//index.js
//获取应用实例
const app = getApp()

Page({
 
 
  data: {
    imgUrls: [
      { urlImg: "../../images/index/banner.jpg", url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html' },
      { urlImg: "../../images/index/banner.jpg", url: 'https://cn.vuejs.org/v2/guide/conditional.html#v-show' },
      { urlImg: "../../images/index/banner.jpg", url: 'https://baidui.com' },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 300,
    
    winWidth:0,
    winheight:0,
    currentTab:0,
    
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
        
      })
    }
  },


  // onLoad: function() {
  //  var _this = this;

  //  wx.getSystemInfo({

  //    success: function(res) {
  //      _this.setData({
         
  //        winWidth:res.windowWidth,
  //        winheight:res.windowHeight
  //      })
  //    },
  //  })
  // },
  // bindChange: function(e){
  //   var _this = this;
  //   _this.setData({currentTab: e.detail.current}) 
    
  //   console.log(1);
  // },

  // swichNav: function(e){
  //   var _this = this;
  //   if (this.data.currentTab === e.target.dataset.current){
  //     return false;
  //   }else{
  //     _this.setData({
  //       currentTab: e.target.dataset.current
  //     }) 
  //   }
   
  // },



  //转发
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '小怪兽养成',
      path: '/page/user?id=123',
      success: function (res) {
        wx.showToast({
          title: '转发成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '转发失败',
          icon: 'success',
          duration: 2000
        })
      }
    }
  },



 
})
