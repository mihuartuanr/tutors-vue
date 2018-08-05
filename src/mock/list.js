import { mock, Random } from "mockjs";

export default mock({
  'list|0-50': [
    {
      'approveId': '@id',
      'applier': {
        'userId': '@guid',
        'userName': '@cname',
        'sectionId': '@id',
        'sectionName': '@ctitle',
      }
    }
  ]
})
