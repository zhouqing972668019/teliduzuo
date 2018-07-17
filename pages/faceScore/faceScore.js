// pages/faceScore/faceScore.js
var app=getApp()
var Bmob = require('../../utils/bmob.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_url: '',
    upload_url: '',
    isShow: ''
  },

  upload:function(e){
    var that=this
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        var tempFilePaths=res.tempFilePaths
        if (tempFilePaths.length > 0) {
          that.setData({
            img_url: res.tempFilePaths,
          })
          var name = Math.random().toString(36)+".jpg";//上传的图片的别名，建议可以用日期命名
          var file = new Bmob.File(name, tempFilePaths);
          file.save().then(function (res) {
            console.log(res.url());
            that.setData({
              upload_url: res.url(),
              isShow: ''
            })
            wx.showToast({
              title: '图片上传成功！',
            })
            
          }, function (error) {
            console.log(error);
            wx.showToast({
              title: '图片上传失败！',
            })
          })
        }
      }
    })
  },

  score: function(e)
  {
    var that=this
    wx.request({
      url: app.globalData.baidu_get_token,
      data:{
        grant_type: 'client_credentials', 
        client_id: app.globalData.baidu_face_APIKey,
        client_secret: app.globalData.baidu_face_secretKey
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.access_token)
        if(that.data.upload_url=='')
        {
          wx.showToast({
            title: '请先上传图片！',
          })
          return;
        }
        wx.request({
          url: app.globalData.baidu_face_url+res.data.access_token,
          data: {
            image: that.data.upload_url,
            image_type: 'URL',
            face_field: 'age,beauty,face_shape'
          }, 
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            console.log(res.data)
            if(res.data.error_code==0)
            {
              that.setData({
                isShow: 'yes',
                age: res.data.result.face_list[0].age,
                beauty: Math.floor(res.data.result.face_list[0].beauty)
              })
            }
            else
            {
              wx.showToast({
                title: '未识别出人脸！',
              })
            }
          }
        })
      }
    })
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