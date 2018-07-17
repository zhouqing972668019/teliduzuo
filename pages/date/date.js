// pages/date/date.js
var date = new Date()
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    contentList: []
  
  },

  dateDetail: function(e)
  {
    var title = e.currentTarget.dataset.item.title
    var time = e.currentTarget.dataset.item.year + '/' + e.currentTarget.dataset.item.month + '/' + e.currentTarget.dataset.item.day+'('+e.currentTarget.dataset.item.lunar+')'
    var pic = e.currentTarget.dataset.item.pic
    var des = e.currentTarget.dataset.item.des
    wx.navigateTo({
      url: '../dateDetail/dateDetail?title='+title+'&time='+time+'&pic='+pic+'&des='+des,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      url: app.globalData.date_url,
      data:
      {
        v: 1,
        month: date.getMonth() + 1,
        day: date.getDate(),
        key: app.globalData.appKey_date
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res)
      {
        that.setData({
          contentList: res.data.result
        })
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