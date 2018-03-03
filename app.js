App({
  onLaunch: function () {
    // wx.connectSocket({
    //   url: 'wss://anzhen9.com:9501'
    // });
    // wx.onSocketOpen(function(){
    //   wx.sendSocketMessage({
    //     data: ['Hello','World'],
    //     success:res=>{
    //       console.log(res);
    //     }
    //   })
    // });
    // wx.onSocketMessage(function(res){
    //   console.log(JSON.parse(res.data));
    // })
    wx.setStorageSync('main_color', '255, 255, 0');//主题颜色，r,g,b形式存储
  },
  onPageShow:function(){
    var that = this;
    let page = this.getAppCurrentPage();
    page.setData({
      main_color: that.getMainColor()
    })
  },
  getMainColor:function(){
    return wx.getStorageSync('main_color');
  },
  //获取当前页面，注：不能在onlaunch里使用
  getAppCurrentPage: function () {
    var pages = getCurrentPages();
    return pages[pages.length - 1];
  },
  globalData: {
    userInfo: null
  }
})