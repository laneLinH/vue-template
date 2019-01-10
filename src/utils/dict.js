import HttpUtils from '@/libs/HttpUtils'
const dict = {
  accType: [[1, '员工账号'], [2, '门店用户'], [3, '商家用户']],
  resType: [[1, '模块菜单'], [11, '查询表格'], [12, '树型表格'], [99, '定制页面'], [101, '动作ACTION']],
  supStatis: [[-1, '退回'], [0, '待提交'], [2, '待审核'], [4, '待入库'], [5, '已入库']],
  transactionType: [[1, '收款'], [2, '付款'], [3, '收款退款'], [4, '付款退款'], [5, '充值'], [6, '提现']],
  reChargeState: [[1, '提交'], [2, '回退'], [3, '成功'], [4, '失败']],
  orderState: [[1, '成功'], [2, '失败'], [3, '支付中']],
  orderType: [[1, '余额'], [2, '支付宝'], [3, '微信']],
  authtype: [[1, '快捷支付授权码'], [2, '余额查询授权码']],
  rechanl: [[1, '银行卡转账']],
  mathType: [[-1, '支出'], [1, '收入']],
  withdrawStatus: [[1, '提交'], [2, '回退'], [3, '成功'], [4, '失败']],
  userType: [[1, '员工账号'], [2, '门店用户'], [3, '商家用户']],
  getLableForData (val, data) {
    if (data) {
      for (let i in data) {
        let item = data[i]
        if (item[0] === val) {
          return item[1]
        }
      }
    }
    return val
  },
  getLableForDict (val, typeName) {
    if (this[typeName]) {
      for (let i in this[typeName]) {
        let item = this[typeName][i]
        if (item[0] === val) {
          return item[1]
        }
      }
    }
    return val
  },
  getDictForAjax (url, parms, mapping) {
    HttpUtils.post(url, parms).then((res) => {
      if (!res.success) {
        this.$Message.success('获取数据错误:' + url)
      } else {
        let data = res.data
        let fd = []
        for (let i in data) {
          let item = [data[i][mapping[0]], data[i][mapping[1]]]
          fd.push(item)
        }
        return fd
      }
    })
  }
}
dict.install = function (Vue, options) {
  Vue.prototype.$dict = dict
}
export default dict
