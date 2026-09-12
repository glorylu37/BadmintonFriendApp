Page({
  data: {
    submitted: false,
    tags: []
  },

  submitAssessment() {
    this.setData({
      submitted: true,
      tags: ["入门水平", "高远球待提升", "移动恢复待练习"]
    })
  }
})
