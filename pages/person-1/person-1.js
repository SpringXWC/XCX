// pages/person-1/person-1.js
var util = require('../../utils/util.js'); 
Page({

  data: {
    winWidth: 0,
    winheight: 0,
    currentTab: 0,
    
    imgUrls: [
      '../../images/index/banner1.jpg',
      '../../images/index/banner2.jpg',
      '../../images/index/banner3.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0

    
  },

  onLoad: function () {
    var that = this;
    this.refresh();
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
  
  bindItemTap: function () {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },

  bindQueTap: function () {
    wx.navigateTo({
      url: '../question/question'
    })
  },
  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000);
  },
  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      that.nextLoad();
    }, 1000);
    console.log("lower")
  },
  // refresh0: function () {
  //   var index_api = '';
  //   util.getData(index_api)
  //     .then(function (data) {
  //       //this.setData({
  //       //
  //       //});
  //       console.log(data);
  //     });
  // },
  refresh: function () {
    var feed = util.getPerson();
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
  },
  nextLoad: function () {
    var next = util.getPersonNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    });
  }
})