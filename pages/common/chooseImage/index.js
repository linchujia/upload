// pages/files/company/index/index.js
Component({ 
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    count: String   //父子传参
  },
  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],
    count:1,
    ishide:false
  },
  // 上传图片
  methods: { 
    chooseImg: function (e) {
      var that = this;
      var imgs = this.data.imgs;
      if (imgs.length >= 9) {
        this.setData({
          lenMore: 1
        });
        setTimeout(function () {
          that.setData({
            lenMore: 0
          });
        }, 2500);
        return false;
      }
      wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          var imgs = that.data.imgs;
          // console.log(tempFilePaths + '----');
          console.log(that.data.count);
          for (var i = 0; i < tempFilePaths.length; i++) {
            if (imgs.length > that.data.count-1) {
              that.setData({
                imgs: imgs
              });
              return false;
            } else {
              imgs.push(tempFilePaths[i]);
              if (imgs.length > that.data.count-1){
                that.setData({
                  ishide: true
                });
              }
            }
          }
          // console.log(imgs);
          that.setData({
            imgs: imgs
          });
          that.triggerEvent("chooseImg");//触发回调
        }
      });
    },
    // 删除图片
    deleteImg: function  (e) {
      var imgs = this.data.imgs;
      var index = e.currentTarget.dataset.index;
      imgs.splice(index, 1);
      this.setData({
        imgs: imgs
      });
      if (imgs.length < this.data.count) {
        // console.log(imgs.length);
        this.setData({
          ishide: false
        });
      }
      this.triggerEvent("deleteImg");//触发回调
    },
    // 预览图片
    previewImg: function  (e) {
      //获取当前图片的下标
      var index = e.currentTarget.dataset.index;
      //所有图片
      var imgs = this.data.imgs;
      wx.previewImage({
        //当前显示图片
        current: imgs[index],
        //所有图片
        urls: imgs
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