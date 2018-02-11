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
        url: 'setting',
        display: true
      },
      {
        id: 2,
        size: 3,
        change: false,
        max: true,
        icon: 'icon-edge',
        title: 'Microsoft Edge',
        url: 'setting',
        display: true
      },
      {
        id: 3,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-twitter',
        title: 'Twitter',
        url: 'setting',
        display: true
      },
      {
        id: 4,
        size: 3,
        change: false,
        max: true,
        icon: 'icon-phone',
        title: '无SIM卡',
        url: 'setting',
        display: true
      },
      {
        id: 5,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-camera',
        title: '相机',
        url: 'camera',
        display: true
      },
      {
        id: 6,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-message',
        title: '消息',
        url: 'setting',
        display: true
      },
      {
        id: 7,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-cog',
        title: '设置',
        url:'setting',
        display: true
      },
      {
        id: 8,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-map2',
        title: '地图',
        url: 'setting',
        display: true
      },
      {
        id: 9,
        size: 3,
        change: false,
        max: true,
        icon: 'icon-image',
        title: '相册',
        url: 'setting',
        display: true
      },
      {
        id: 10,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-skype2',
        title: 'Skype',
        url: 'setting',
        display: true
      },
      {
        id: 11,
        size: 3,
        change: false,
        max: true,
        icon: 'icon-microsoftoutlook',
        title: 'Outlook',
        url: 'setting',
        display: true
      },
      {
        id: 12,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-microsoftonenote',
        title: 'OneNote',
        url: 'setting',
        display: true
      },
      {
        id: 13,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-microsoftexcel',
        title: 'Excel',
        url: 'setting',
        display: true
      },
      {
        id: 14,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-microsoftpowerpoint',
        title: 'PowerPoint',
        url: 'setting',
        display: true
      },
      {
        id: 15,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-microsoftword',
        title: 'Word',
        url: 'setting',
        display: true
      },
      {
        id: 16,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-wechat',
        title: '微信',
        url: 'setting',
        display: true
      },
      {
        id: 17,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-xbox',
        title: 'Xbox',
        url: 'setting',
        display: true
      },
      {
        id: 18,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-newspaper',
        title: '资讯',
        url: 'setting',
        display: true
      },
      {
        id: 19,
        size: 2,
        change: false,
        max: false,
        icon: 'icon-folder-open',
        title: '资源管理器',
        url: 'setting',
        display: true
      }
    ],
    change:false
  },
  onLoad: function () {
    
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
      if (url != 'camera'){
        let path = '/pages/' + url + '/' + url;
        wx.navigateTo({
          url: path,
        })
      }else{
        
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
