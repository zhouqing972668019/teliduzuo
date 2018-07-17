const app = getApp()

Page({
  data: {
    navData: [
      {
        text: '头条'
      },
      {
        text: '国内'
      },
      {
        text: '国际'
      },
      {
        text: '社会'
      },
      {
        text: '娱乐'
      },
      {
        text: '体育'
      },
      {
        text: '军事'
      },
      {
        text: '科技'
      },
      {
        text: '财经'
      },
      {
        text: '时尚'
      }
    ],
    currentTab: 0,
    navScrollLeft: 0,
    params: ['top','guonei','guoji','shehui','yule','tiyu','keji','caijing','shishang'],
    newsList: []
  },
  //事件处理函数
  onLoad: function () {
    var that=this
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
    })
    wx.request({
      url: app.globalData.news_url,
      data:
      {
        type: that.data.params[that.data.currentTab],
        key: app.globalData.appKey_news
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          newsList: res.data.result.data
        })
      }
    })
  },
  newsDetail: function (e) {
    var pageUrl = e.currentTarget.dataset.item.url
    wx.navigateTo({
      url: '../newsDetail/newsDetail?pageUrl=' + pageUrl,
    })
  },
  switchNav(event) {
    var that = this
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
      wx.request({
        url: app.globalData.news_url,
        data:
        {
          type: that.data.params[that.data.currentTab],
          key: app.globalData.appKey_news
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          that.setData({
            newsList: res.data.result.data
          })
        }
      })
    }
  }
})