//logs.js

Page({
  data: {
  },
  onLoad: function () {
    
  },
  message: function () {
    wx.showToast({
      title: '正在加载...',
      icon: 'loading',
      duration: 2000
  })
  },
  hide: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })

    setTimeout(function(){
      wx.hideToast()
    },2000)
  },
  showModal: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          }
        }
      })
  },
  menu: function (){
    wx.showActionSheet({
      itemList: ['取消', '增加', '删除'],
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  }
})
