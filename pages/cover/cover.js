// pages/cover/cover.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bg_img: '',//'http://s.cn.bing.net/az/hprichbg/rb/PuffinWales_ZH-CN12110916089_1920x1080.jpg'
    list: [
      {
        id: 'usefulService',
        name: '实用服务',
        open: false,
        pages: [['express', '快递服务'], ['qrQode','二维码服务']]
      }, {
        id: 'dailyLife',
        name: '日常生活',
        open: false,
        pages: [['date', '历史今天'], ['news', '今日新闻'], ['faceScore', '人脸打分']]
      }
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.img_url_request,
      success: function (res) {
        that.setData({
          bg_img: app.globalData.img_url_prefix + res.data.images[0].url
        });
      }
    })
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