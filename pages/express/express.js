// pages/express/express.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    expressNo: '',
    expressNoValue: '',
    expressCompany: '',
    expressInfoList: []
  
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
  
  },

  updateExpressNo: function (e) {
    var that = this
    that.setData({
      expressNo: e.detail.value
    })
  },

  queryInfo:function(e)
  {
    var that=this
    wx.request({
      url: app.globalData.express_request_get_company,
      data:
      {
        text: that.data.expressNo
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var length=res.data.auto.length
        if(length>1)
        {
          // that.setData(
          //   {
          //     expressCompany: res.data.auto[0].comCode
          //   }
          // )
          wx.request({
            url: app.globalData.express_request_get_express,
            data:
            {
              type: res.data.auto[0].comCode,
              postid: that.data.expressNo
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success: function (res) {
              var status= res.data.status
              if(status=='200')
              {
                that.setData({
                  expressInfoList: res.data.data
                })
              }
              else
              {
                that.setData(
                  {
                    expressNoValue: '',
                    expressInfoList: []
                  }
                )
                wx.showToast({
                  title: '订单号错误！',
                })
              }
            }

          })
        }
        else
        {
          that.setData(
            {
              expressNoValue: '',
              expressInfoList: []
            }
          )
          wx.showToast({
            title: '订单号错误！',
          })
        }
      }
    })
  }
})