// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodslist: [
      {
        id: "001",
        imgUrl: "../../images/list/1.jpg",
        name: "挣钱是一种能力，花钱是一种技术，我能力有限，技术却很高",
        price: "888.00"
      },
      {
        id: "002",
        imgUrl: "../../images/list/2.jpg",
        name: "生活会让你苦上一阵子，等你适应以后，再让你苦上一辈子",
        price: "998.00"
      },
      {
        id: "003",
        imgUrl: "../../images/list/3.jpg",
        name: "爱笑的姑娘，总是比别人更容易长眼纹，干纹，细纹，鱼尾纹",
        price: "660.00"
      },
      {
        id: "004",
        imgUrl: "../../images/list/4.jpg",
        name: "有些人出现在你的生命里就是为了告诉你，你真好骗",
        price: "119.00"
      },
      {
        id: "005",
        imgUrl: "../../images/list/5.jpg",
        name: "上帝为你关上了一扇门，然后就去洗洗睡了",
        price: "999.00"
      },
      {
        id: "006",
        imgUrl: "../../images/list/6.jpg",
        name: "转角一般不会遇到爱，只会遇到乞丐",
        price: "86.00"
      },
      {
        id: "007",
        imgUrl: "../../images/list/7.jpg",
        name: "别说你一无所长，熬夜玩手机你是一把好手",
        price: "119.00"
      },
      {
        id: "008",
        imgUrl: "../../images/list/8.jpg",
        name: "想牵你的手一生不放开，只怕一松手，你就去买买买",
        price: "666.00"
      },
    ]  
  },
  addcart: function (e) {
    this.setData({
      toastHidden: false
    });
    for (var i in this.data.goodslist) {
      if (this.data.goodslist[i].id == e.target.id) {
        this.data.goodslist[i].count = 1;  
        var arr = wx.getStorageSync('cart') || [];  
        if (arr.length > 0) {
          for (var j in arr) { 
            if (arr[j].id == e.target.id) { 
              arr[j].count = arr[j].count + 1;
              try {
                wx.setStorageSync('cart', arr)
              } catch (e) {
                console.log(e)
              }
              return;
            }
          }
          arr.push(this.data.goodslist[i]);
        }
        else {
          arr.push(this.data.goodslist[i]);
        }
        try {
          wx.setStorageSync('cart', arr) 
          return;
        } catch (e) {
          console.log(e)
        }
      }
    }
  }  
 
})