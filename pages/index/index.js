//index.js
//获取应用实例
const app = getApp()

Page({
 
 
  data: {
    imgUrls: [
      { urlImg: "../../images/index/banner1.jpg", url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html' },
      { urlImg: "../../images/index/banner2.jpg", url: 'https://cn.vuejs.org/v2/guide/conditional.html#v-show' },
      { urlImg: "../../images/index/banner3.jpg", url: 'https://baidui.com' },
    ],
    menu: {
      imgUrls: [
        'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1PlmNLVXXXXXEXFXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1RN0HMFXXXXXNXpXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1exaOLVXXXXXeXFXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://img.alicdn.com/tps/TB1GzMJLXXXXXXoXXXXXXXXXXXX-183-129.png',
        'http://gw.alicdn.com/tps/i3/TB1Ewu2KVXXXXXkapXXN4ls0XXX-183-129.png',
        'http://gw.alicdn.com/tps/TB1cniBJpXXXXataXXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://img.alicdn.com/tps/TB1caopLVXXXXaDaXXXXXXXXXXX-183-129.png',
        'http://gw.alicdn.com/tps/i1/TB1c1FMIpXXXXawXpXXN4ls0XXX-183-129.png?imgtag=avatar'
      ],
      descs: [
        '聚划算',
        '天猫',
        '天猫国际',
        '外卖',
        '天猫超市',
        '充值中心',
        '阿里旅行',
        '领金币',
        '到家',
        '分类'
      ]
    },
   
    activityImg1:"../../images/index/flowpool-1.png",
    activityImg2: "../../images/index/flowpool-2.png" ,
    activityImg3: "../../images/index/flowpool-3.png" ,
    activityImg4: "../../images/index/flowpool-4.png", 
    activityImg5: "../../images/index/activity.png" ,
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 300,
    
   
    
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
