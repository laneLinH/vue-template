const pageConfigs = {
  account: {
    searchConfig: {
      isSearch: true,
      queryFormItems: [
        {label: '登录账号', type: 'text', name: 'accountName', val: 'admin', labelWidth: 65, rules: [], opts: []},
        {label: '手机号码', type: 'type-text', name: 'accountPhone', val: null, labelWidth: 65, rules: [], opts: []},
        {label: '账号名字', type: 'type-text', name: 'nickName', labelWidth: 65, val: null, rules: [], opts: []}
      ],
      queryConData: {pageNo: 1, pageSize: 20}
    },
    tableConfig: {
      height: 500,
      queryUrl: '/system/account/list',
      idColumnKey: 'accountId',
      tableData: [],
      tableColumns: [
        {type: 'selection', width: 60, align: 'center'},
        {title: '登录账号', key: 'accountName', align: 'center'},
        {title: '手机号码', key: 'accountPhone', align: 'center'},
        {title: '邮箱地址', key: 'accountEmail', align: 'center'},
        {title: '账号名字', key: 'accountName', align: 'center'},
        {title: '创建时间', key: 'createDate', align: 'center'}
      ]
    },
    butConfig: {
      toolButtons: [
        {text: '增加账号', modalName: 'editPop', type: 'primary', optype: 'new', title: '新建账号', confirmText: '', getUrl: '/system/account/get', postUrl: '/system/account/add', handler: function (vm) {}},
        {text: '批量删除', modalName: '', type: 'primary', optype: 'confirm', title: '新建账号', confirmText: '确定要删除吗', postUrl: '', handler: function (vm) {}}
      ],
      actionButtons: [
        {text: '修改', modalName: 'editPop', type: 'primary', optype: 'edit', title: '修改账号', confirmText: '', getUrl: '', postUrl: '/system/account/update', handler: function (vm) {}},
        {text: '删除', modalName: '', type: 'primary', optype: 'confirm', title: '删除账号', confirmText: '你确定删除吗', postUrl: '/system/account/delete', handler: function (vm) {}}
      ]
    },
    modalConfig: {
      editPop: {
        modalWidth: 480,
        modalFormItems: [
          {label: 'ID', type: 'text', name: 'accountId', val: '', hidden: true, labelWidth: 65, rules: [], opts: []},
          {label: '登录账号', type: 'text', name: 'accountName', val: '', rules: [{type: 'string', required: true, max: 16, message: '账号必须填,并且小于16位', trigger: 'blur'}], opts: []},
          {label: '手机号码', type: 'type-text', name: 'accountPhone', val: '', rules: [], opts: []},
          {label: '邮箱地址', type: 'text', name: 'accountEmail', val: '', rules: [{type: 'email', max: 128, message: '请填写正确的邮箱格式,并且小于128位', trigger: 'blur'}], opts: []},
          {label: '账号名字', type: 'type-text', name: 'nickName', val: null, rules: [{type: 'string', max: 16, message: '名字小于8位', trigger: 'blur'}], opts: []}
        ],
        inline: false,
        labelPosition: 'right',
        labelWidth: 70
      }
    }
  },
  resInfo: {
    searchConfig: {
      isSearch: false
    },
    tableConfig: {
      queryUrl: '/system/resInfo/nodeList',
      idColumnKey: 'resourceId',
      rootId: '0',
      treeColumnKey: 'resourceName',
      parentColumnKey: 'parentId',
      leftPadding: '15',
      tableData: [],
      tableColumns: [
        {title: '资源名称', key: 'resourceName', minWidth: 200, align: 'left'},
        {title: '资源编码', key: 'resourceCode', tooltip: true, align: 'center'},
        {title: '序号', key: 'resourceOrder', width: 80, align: 'center'},
        {title: '资源类型', key: 'resourceType', align: 'center', dict: 'resType'}, // dict 为直接在字典中定义的名称 data 为直接在列中提供数据
        {title: '资源路径', key: 'resourcePath', tooltip: true, align: 'center'},
        {title: '图标', key: 'resourceIco', tooltip: true, width: 80, align: 'center'}
      ]
    },
    butConfig: {
      toolButtons: [
        {text: '增加资源', modalName: 'editPop', type: 'primary', optype: 'new', title: '新增资源', confirmText: '', getUrl: '', postUrl: '/system/resInfo/add', handler: function (vm) {}}
      ],
      actionButtons: [
        {text: '新增', modalName: 'editPop', type: 'primary', optype: 'new', title: '新增下级资源', confirmText: '', getUrl: '', postUrl: '/system/resInfo/add', handler: function (vm) {}},
        {text: '修改', modalName: 'editPop', type: 'primary', optype: 'edit', title: '修改当前资源', confirmText: '', getUrl: '', postUrl: '/system/resInfo/update', handler: function (vm) {}},
        {text: '删除', modalName: '', type: 'primary', optype: 'confirm', title: '删除当前资源', confirmText: '你确定删除吗', postUrl: '/system/resInfo/delete', handler: function (vm) {}}
      ]
    },
    modalConfig: {
      editPop: {
        modalWidth: 480,
        modalFormItems: [
          {label: 'ID', type: 'text', name: 'resourceId', val: '', hidden: true, rules: [], opts: []},
          {label: 'parentId', type: 'text', name: 'parentId', val: '', hidden: true, rules: [], opts: []},
          {label: '资源名称', type: 'text', name: 'resourceName', val: '', rules: [{type: 'string', required: true, max: 16, message: '资源名称必须填,并且小于16位', trigger: 'blur'}], opts: []}, // {name: 'mz', message: 'test', trigger: 'blur', parm: {url: 'dddd'}}
          {label: '排序顺序', type: 'number', name: 'resourceOrder', val: '', rules: [{type: 'integer', required: true, min: 1, max: 100, message: '序号必须填,范围为 1-100', trigger: 'blur'}], opts: []},
          {label: '资源编码', type: 'text', name: 'resourceCode', val: '', rules: [{type: 'string', required: true, max: 16, message: '资源代码必须填,并且小于16位', trigger: 'blur'}], opts: []},
          {label: '资源类型', type: 'select', name: 'resourceType', val: null, rules: [{type: 'integer', required: true, min: 1, message: '类型必须选择', trigger: 'blur'}], dict: 'resType'},
          {label: '资源图标', type: 'type-text', name: 'resourceIco', val: null, rules: [{type: 'string', max: 54, message: '长度须小于54', trigger: 'blur'}], opts: []},
          {label: '资源路径', type: 'type-text', name: 'resourcePath', val: null, rules: [{type: 'string', max: 128, message: '长度须小于128', trigger: 'blur'}], opts: []}
        ],
        inline: false,
        labelPosition: 'right',
        labelWidth: 70
      }
    }
  }
}

export const getHttpPageConfig = (name) => {
  name.name = ''
}

export const getPageConfig = (name) => {
  if (pageConfigs[name]) {
    return JSON.parse(JSON.stringify(pageConfigs[name]))
  } else {
    return getHttpPageConfig(name)
  }
}
