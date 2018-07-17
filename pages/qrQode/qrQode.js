// pages/qrQode/qrQode.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_url: '',
    qrCode: '',
    qrCodeValue: '',
    is_show: false
  },

  updateQrCodeValue: function (e) {
    var that = this
    that.setData({
      qrCode: e.detail.value
    })
  },

  generateQrCode: function(e)
  {
    var that=this
    // wx.request({
    //   url: app.globalData.generate_qrcode_url,
    //   data: {
    //     key: app.globalData.appKey_qrcode,
    //     text: that.data.qrCode
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     var array = wx.base64ToArrayBuffer(res.data.result.base64_image);
    //     var base64 = wx.arrayBufferToBase64(array);
    //     //将转后的信息赋值给image的src 
    //     that.setData({
    //       img_url: "data:image/png;base64," + base64,
    //       qrCodeValue: ''
    //     })
    //     wx.showToast({
    //       title: res.data.result.base64_image,
    //     })
    //   }
    // })
    that.setData({
      img_url: app.globalData.qrCode_url_new+that.data.qrCode,
      qrCodeValue: ''
    })
    that.setData({
      is_show: true
    })
  },

  previewImage:function(e)
  {
    var current=e.target.dataset.src;
    if(this.data.is_show)
    {
      wx.previewImage({
        current: current,
        urls: [current]
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})