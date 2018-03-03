const app = getApp();
Page({
  data: {
    citieList:[
      {
        id: 1,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-steam2',
        title: 'Steam',
        url: '',
        display: true,
        data:[]
      },
      {
        id: 2,
        size: 3,
        change: false,
        max: true,
        icon: 'icon-edge',
        title: 'Microsoft Edge',
        url: '',
        display: true,
        data: []
      },
      {
        id: 3,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-twitter',
        title: 'Twitter',
        url: '',
        display: true,
        data: []
      },
      {
        id: 4,
        size: 3,
        change: false,
        max: true,
        icon: 'icon-phone',
        title: '无SIM卡',
        url: '',
        display: true,
        data: []
      },
      {
        id: 5,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-camera',
        title: '相机',
        url: '',
        display: true,
        data: []
      },
      {
        id: 6,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-message',
        title: '消息',
        url: '',
        display: true,
        data: []
      },
      {
        id: 7,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-cog',
        title: '设置',
        url:'setting',
        display: true,
        data: []
      },
      {
        id: 8,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-map2',
        title: '地图',
        url: '',
        display: true,
        data: []
      },
      {
        id: 9,
        size: 3,
        change: false,
        max: true,
        icon: 'icon-image',
        title: '相册',
        url: '',
        display: true,
        data: []
      },
      {
        id: 10,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-skype2',
        title: 'Skype',
        url: '',
        display: true,
        data: []
      },
      {
        id: 11,
        size: 3,
        change: false,
        max: true,
        icon: 'icon-microsoftoutlook',
        title: 'Outlook',
        url: '',
        display: true,
        data: []
      },
      {
        id: 12,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-microsoftonenote',
        title: 'OneNote',
        url: '',
        display: true,
        data: []
      },
      {
        id: 13,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-microsoftexcel',
        title: 'Excel',
        url: '',
        display: true,
        data: []
      },
      {
        id: 14,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-microsoftpowerpoint',
        title: 'PowerPoint',
        url: '',
        display: true,
        data: []
      },
      {
        id: 15,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-microsoftword',
        title: 'Word',
        url: '',
        display: true,
        data: []
      },
      {
        id: 16,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-wechat',
        title: '微信',
        url: '',
        display: true,
        data: []
      },
      {
        id: 17,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-xbox',
        title: 'Xbox',
        url: '',
        display: true,
        data: []
      },
      {
        id: 18,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-newspaper',
        title: '资讯',
        url: '',
        display: true,
        data: []
      },
      {
        id: 19,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-folder-open',
        title: '资源管理器',
        url: '',
        display: true,
        data: []
      },
      {
        id: 20,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-cog',
        title: '指纹设置',
        url: 'zhiwen',
        display: true,
        data: []
      }
    ],
    change:false
  },
  onLoad: function () {
    var that = this;
    wx.checkIsSupportSoterAuthentication({
      success: function (res) {
        that.setData({
          supportMode: res.supportMode
        })
      }, fail: function (res) {
        console.log('fail', res);
      }, complete: function (res) {
        console.log('complete', res);
      }
    })
  },
  onShow:function(){
    app.onPageShow();
  },
  changeSize:function(e){
    var citieList = this.data.citieList,
    index = e.currentTarget.dataset.index;
    citieList[index].change = true
    this.setData({
      change:true,
      citieList: citieList
    })
  },
  ontapCitie:function(e){
    var citieList = this.data.citieList,
        index = e.currentTarget.dataset.index,
        change = this.data.change;
    if(change){
      for (var i in citieList) {
        citieList[i].change = false;
      }
      this.setData({
        citieList: citieList,
        change: false
      })
    }else{
      var url = e.currentTarget.dataset.url;
      if(url == 'zhiwen'){
        var checkAuthMode = this.data.supportMode;
        if (!checkAuthMode){
          wx.showToast({
            title: '暂不支持生物识别',
            icon:'none'
          })
          return;
        }
        wx.startSoterAuthentication({
          requestAuthModes: ['fingerPrint', 'facial', 'speech'],
          challenge: '123456',
          authContent: '请用指纹解锁',
          success(res) {
            wx.showToast({
              title: '验证成功！',
              icon:'success'
            })
          },
          fail:function(res){
            wx.showToast({
              title: '验证失败！',
              icon: 'none'
            })
          }
        })
      }else{
        let path = '/pages/' + url + '/' + url;
        wx.navigateTo({
          url: path,
        })
      }
      
    }
  },
  onMove:function(e){
    console.log(e);
  },
  cancelChange:function(){
    var citieList = this.data.citieList;
    for(var i in citieList){
      citieList[i].change = false
    }
    this.setData({
      citieList: citieList,
      change: false
    })
  },
  unLoadCitie:function(e){
    var index = e.currentTarget.dataset.index,
    citieList = this.data.citieList;
    citieList[index].display =  false;
    this.setData({
      citieList: citieList
    })
  },
  chooseSize:function(e){
    var size = this.data.size,
        max = this.data.max,
        index = e.currentTarget.dataset.index,
        citieList = this.data.citieList;
    if (citieList[index].max){
      citieList[index].size -= 1;
      if (citieList[index].size == 2){
        citieList[index].max = false;
      }
    }else{
      citieList[index].size += 1;
      if (citieList[index].size == 3){
        citieList[index].max = true;
      }
    }
    this.setData({
      citieList: citieList
    })
    
  }
})
