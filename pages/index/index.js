Page({
  data: {
    profile: {
      nickname: "羽球新人",
      level: "待测评",
      tags: ["等待首次测评"]
    }
  },

  goAssessment() {
    wx.navigateTo({ url: "/pages/assessment/assessment" })
  },

  goMatches() {
    wx.navigateTo({ url: "/pages/matches/matches" })
  }
})
