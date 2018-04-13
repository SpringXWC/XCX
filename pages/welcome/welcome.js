// pages/welcome/welcome.js
Page({

  clickTo:function(){
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    wx.reLaunch({
      url:'../index/index'
    });
  },
 
})