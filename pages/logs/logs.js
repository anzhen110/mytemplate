//logs.js
const util = require('../../utils/util.js')

Page({
  data: {},
  onLoad: function () {
    var that = this;
    wx.chooseInvoiceTitle({
      success(res) {
        that.setData({
          info:res
        })
      },
      fail:function(res){
        console.log(res);
      }
    })
  }
})
