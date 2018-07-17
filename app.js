//app.js
var Bmob = require('utils/bmob.js');
Bmob.initialize("ce742243108c704e5b982e1137df91d9", "62d72e24441a18e8e8347510422fe592");
App({
  onLaunch: function() {
    // wx.redirectTo({
    //   url: 'pages/cover/cover'
    // })
    // // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    img_url_prefix: 'http://s.cn.bing.net',
    img_url_request: 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=1&n=1',
    express_request_get_company: 'http://www.kuaidi100.com/autonumber/autoComNum',
    express_request_get_express: 'http://www.kuaidi100.com/query',
    appKey_date: '78f0b0786b3fc8bfb8771ec0ac5f400c',
    appKey_news: '8d335629813246977fcc71abe5a92261',
    date_url: 'http://api.juheapi.com/japi/toh',
    news_url: 'http://v.juhe.cn/toutiao/index',
    appKey_qrcode: '1aca121df4afae75f1f18c8fc74826cf',
    generate_qrcode_url: 'http://apis.juhe.cn/qrcode/api',
    qrCode_url_new: "http://qr.liantu.com/api.php?text=",
    baidu_get_token: "https://aip.baidubce.com/oauth/2.0/token?",
    baidu_face_APIKey: "GK2rVqfElQQI9mOoHu9Bx6LO",
    baidu_face_secretKey: 'o0NZQhbnFzl0VkhBmf2rh29D0qAHsjSx',
    baidu_face_url: 'https://aip.baidubce.com/rest/2.0/face/v3/detect?access_token='
  }
})