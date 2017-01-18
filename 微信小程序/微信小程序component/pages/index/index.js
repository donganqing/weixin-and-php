//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    title: "我是头部",
    list: ["img1","img2","img3"],
    es6T: {
      title: "haha",
      list: ["1","2","3"]
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
