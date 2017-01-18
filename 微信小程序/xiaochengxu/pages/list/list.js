Page({
    data:{
         notRefresh:true,
         notMore: true,           footerballApi:"https://liaman.duapp.com/footerball",
        title:"列表页面",
        name: "weiChat",
        listData:[],
   
    },
    onLoad: function(){
        console.log("1");
        var that = this;
        //数据请求
        wx.request({
            url: "https://liaman.duapp.com/footerball/mock/list.json",
            
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                console.log(res.data)
                that.setData({
                    listData: res.data
                })
            }
        })
    },
    //下拉刷新
onPullDownRefresh:function () {
      console.log("刷新");
        var that = this;
        this.setData({
            notRefresh:false
        });

        setTimeout(function () {
            wx.stopPullDownRefresh();
            that.setData({
                notRefresh:true
            });
        },2000)
    },

    //上拉加载
    onReachBottom: function () {
        console.log("加载更多！");
        var that = this;
        this.setData({
            notMore: false
        });
        setTimeout(function () {
             //数据请求
        wx.request({
            url: "https://liaman.duapp.com/footerball/mock/list.json",
            
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                console.log(res.data)
                that.setData({
                    listData: that.data.listData.concat(res.data),
                    notMore: true
                })
            }
        });
        },1000)

    },


    itemtap: function (ev) {
        console.log(ev);
        console.log(ev.currentTarget.id);
        wx.navigateTo({
            url: '../detail/detail?id='+ev.currentTarget.id
        });
    }
})