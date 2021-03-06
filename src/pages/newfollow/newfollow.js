// 获取全局应用程序实例对象
const app = getApp()
const useUrl = require('../../utils/service')
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'newfollow',
    page: 1,
    people: []
  },
  // 关注
  follow (e) {
    // let id = e.currentTarget.dataset.id
    let that = this
    let index = e.currentTarget.dataset.index
    let peopleArr = this.data.people
    let type = Math.abs(e.currentTarget.dataset.type * 1 - 1)
    let fbj = {
      url: useUrl.doIgnore,
      data: {
        session_key: wx.getStorageSync('session_key'),
        id: e.currentTarget.dataset.id,
        type: type
      },
      success (res) {
        console.log(res)
        if (res.data.code === 400) {
          return wx.showToast({
            title: '哎呀，服务器出小差了，请稍后重试~',
            mask: true
          })
        }
        peopleArr[index]['is_ignore'] = type
        console.log('peopleInfo', peopleArr)
        that.setData({
          people: peopleArr
        })
      }
    }
    app.wxrequest(fbj)
    // if (peopleArr[index]['is_ignore'] === 1) {
    //   peopleArr[index]['is_ignore'] = 0
    // } else {
    //   peopleArr[index]['is_ignore'] = 1
    // }
  },
  // 获取陌生人提醒列表
  getstranger (page) {
    let that = this
    let gsbj = {
      url: useUrl.getStranger,
      data: {
        session_key: wx.getStorageSync('session_key'),
        page: page
      },
      success (res) {
        if (!res.data.data.length === 0) {
          return wx.showToast({
            title: '亲，没有更多内容啦~',
            mask: true
          })
        }
        let s = that.data.people.concat(res.data.data)
        that.setData({
          people: s
        })
      }
    }
    app.wxrequest(gsbj)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // TODO: onLoad
    this.getstranger(1)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  },
  onReachBottom () {
    this.getstranger(++this.data.page)
  }
})
