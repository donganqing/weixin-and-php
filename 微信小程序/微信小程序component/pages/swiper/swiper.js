// pages/swiper/swiper.js
Page({
  data:{
    img: ""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.chooseImage({
  success: function(res) {
    var tempFilePaths = res.tempFilePaths
    wx.uploadFile({
      url: 'http://liaman.duapp.com/xiaochengxu/upload.php', //仅为示例，非真实的接口地址
      filePath: tempFilePaths[0],
      name: 'file',
      formData:{
        'user': 'test'
      },
      header: {
         'content-type': 'multipart/form-data'
      },
      success: function(res){
        console.log(res);
        var data = res.data.replace(/\s/g,"");
        //do something
       that.setData({
           img: data
        })
      },                                              
      fail: function (res) {
        console.log(res);
      }
    })
  }
})

  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})