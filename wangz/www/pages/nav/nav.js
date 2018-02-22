// pages/tabs-view/index.js
Page({
  data: {
    //窗口
    winWidth: 0,
    winHeight: 0,
    //底部菜单
    tabID: 0,
    tabs: [
      { name: '首页' },
      { name: '攻略库' },
      { name: '我的' }
    ]
  },
  //菜单切换
  menuSwitch: function (e) {
    var swid = e.currentTarget.dataset.swid;
    if (this.data.tabID === swid) { return false; }
    //真实切换
    this.setData({ tabID: swid });
    wx.pageScrollTo({ scrollTop: 0, duration: 10 });
  },
  //左右滑动
  bindChange: function (e) {
    this.setData({ tabID: e.detail.current });
    //wx.pageScrollTo({ scrollTop: 0, duration: 10 });
  },
  //生命周期函数--监听页面加载
  onLoad: function(opt){
    //定位菜单
    this.setData({ tabID: opt.swid || 0 });
    //获取系统信息
    var tis = this;
    wx.getSystemInfo({
      success: function (res) {
        tis.setData({ winWidth: res.windowWidth, winHeight: res.windowHeight });
      }
    });
  }
});