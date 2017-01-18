// pages/swiper-scroll/swiper-scroll.js
Page({
  data:{
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    tabs: [
      "图片一","图片二","图片三","图片四","图片五","图片六"
    ],
    current: 0,
    windowWidth: null,
    scrollLeft: 0
  },

  onLoad: function () {
    var that = this;
    //获取设备信息
    wx.getSystemInfo({
      success: function(res) {
        // 获取窗口的宽度
        console.log(res.windowWidth);
        that.setData({
            windowWidth: res.windowWidth
        })
      }
    })

  },

 swiperTo: function (ev) {
   console.log(ev);
   var current = ev.currentTarget.dataset.index;
   this.setData({
     current: current
   })
 },

 swiperChange: function (ev) {
   //窗口的宽度
   console.log(this.data.windowWidth);
    console.log(ev);
    var l = ev.detail.current*85-(this.data.windowWidth/2)+42;
    //ev.detail.current   swiper切换的时候的内容的索引
    this.setData({
      current: ev.detail.current,
      scrollLeft: l
    })
 }
})