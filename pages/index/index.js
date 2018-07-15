// pages/files/company/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   imgs:[],
   imgsnum: [],
   count:1,
   countnum:2
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获得pop组件
    this.pop = this.selectComponent("#pop");
    this.popnum = this.selectComponent("#popnum");
  },
  chooseImg: function (e) {
    // console.log(this.pop.data.imgs);
    this.setData({
      imgs: this.pop.data.imgs
    })
  },
  deleteImg: function (e) {
    // console.log(this.pop.data.imgs);
    this.setData({
      imgs: this.pop.data.imgs
    })
  },
  chooseImgnum: function (e) {
    // console.log(this.pop.data.imgs);
    this.setData({
      imgsnum: this.popnum.data.imgs
    })
  },
  deleteImgnum: function (e) {
    // console.log(this.pop.data.imgs);
    this.setData({
      imgsnum: this.popnum.data.imgs
    })
  },
  submitBtn: function(){
    console.log(this.data.imgs);
    console.log(this.data.imgsnum);
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