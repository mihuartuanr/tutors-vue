import { mock, Random } from "mockjs";

export default mock({
  'list|0-50': [
    {
      'approveId': '@id',
      'approveType': '0',//0:事假；1：年假；2：病假
      'approveTime': Random.datetime('yyyy-mm-dd mm:ss'),
      'startTime': Random.datetime('yyyy-mm-dd mm:ss'),
      'endTime': Random.datetime('yyyy-mm-dd mm:ss'),
      'approveStatus':0,//0：审批中，1：已同意，2：已拒绝，3：执行中，4：已结束
      'applier': {
        'userId': '@guid',
        'userName': '@cname',
        'sectionId': '@id',
        'sectionName': '@ctitle',
      },
      'taskBases|3': [
        {
          'taskStatus': '0',//0：未到达，1：待处理，2已同意，3：已拒绝
          'taskOrder': '0',
          'comment': '@cparagraph',
          'userItem': {
            'userId': '@guid',
            'userName': '@cname',
            'sectionId': '@id',
            'sectionName': '@ctitle',
          }
        }
      ]
    }
  ]
})
