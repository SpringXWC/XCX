// pages/cart/cart.js
Page({
  data: {
    iscart: false,
    cart: [],  
    count: 1,    
    total: 0,    
    goodsCount: 0 
  },
  onLoad: function (options) {

  },
  onShow: function () {
    var that = this;
    var arr = wx.getStorageSync('cart') || [];    
    if (arr.length > 0) {
      for (var i in arr) {
        that.data.total += Number(arr[i].price) * Number(arr[i].count);
        that.data.goodsCount += Number(arr[i].count);
      }
     
      this.setData({
        iscart: true,
        cart: arr,
        total: that.data.total,
        goodsCount: that.data.goodsCount
      });
    }
  },
  onHide: function () {
   
    this.setData({
      iscart: false,
      cart: [],   
      total: 0,     
      goodsCount: 0   
    });
  },
  /* 减数 */
  delCount: function (e) {
    console.log(e)
  
    if (this.data.cart[e.target.id.substring(3)].count <= 1) {
      return;
    }
    
    this.data.goodsCount -= 1;
   
    this.data.total -= Number(this.data.cart[e.target.id.substring(3)].price);
      
    this.data.cart[e.target.id.substring(3)].count = --this.data.cart[e.target.id.substring(3)].count;
   
    this.setData({
      cart: this.data.cart,
      total: this.data.total,
      goodsCount: this.data.goodsCount
    })
   
    try {
      wx.setStorageSync('cart', this.data.cart)
    } catch (e) {
      console.log(e)
    }
  },
  /* 加数 */
  addCount: function (e) {
     
    this.data.goodsCount += 1;
      
    this.data.total += Number(this.data.cart[e.target.id.substring(3)].price);
     
    this.data.cart[e.target.id.substring(3)].count = ++this.data.cart[e.target.id.substring(3)].count;
  
    this.setData({
      cart: this.data.cart,
      total: this.data.total,
      goodsCount: this.data.goodsCount
    })
   
    try {
      wx.setStorageSync('cart', this.data.cart)
    } catch (e) {
      console.log(e)
    }
  },

  delGoods: function (e) {
    
    this.data.goodsCount = this.data.goodsCount - this.data.cart[e.target.id.substring(3)].count;
   
    this.data.total -= this.data.cart[e.target.id.substring(3)].price * this.data.cart[e.target.id.substring(3)].count;
    
    this.data.cart.splice(e.target.id.substring(3), 1);
     
    this.setData({
      cart: this.data.cart,
      total: this.data.total,
      goodsCount: this.data.goodsCount
    })
   
    try {
      wx.setStorageSync('cart', this.data.cart)
    } catch (e) {
      console.log(e)
    }
  }
})
