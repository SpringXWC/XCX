//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    tel:'',
    password:''
  },
 
  telInput:function(e){
      this.setData({
        tel: e.detail.value
      })
  },
  password:function(e){
    this.setData({
      password:e.detail.value,
      
    })
  },
  login:function(){
    // if (this.data.tel.length == 0 || this.data.password.length == 0){
    //   wx.showModal({
    //     content: '请输入用户名或密码',
    //     confirmColor:'#1f87c6',
    //   })
    // }else{
    wx.showModal({
        content: '登录成功',
        confirmColor:'#1f87c6',
        showCancel:false,
        success: function (res) {
          if (res.confirm) {
            wx.reLaunch({
              url: '../index/index'
            })
          }
        }
      }) 
    }
  // }
  
})
