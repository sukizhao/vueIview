import Mock from 'mockjs';
const car = Mock.mock(
  '/api/car', 'post', (req, res) => {
    return {
      code: 200,
      data: [{
        id: 1,
        name: 'BYD',

      }, {
        id: 1,
        name: 'baojun',
      }],
      message: '查询成功'
    }
  })
const user = Mock.mock(
  '/api/user', 'get', (req, res) => {
    return {
      code: 200,
      data: {
        id: 1,
        sex: 1,
        age: 25,
        createTime: '2017-04-01'
      },
      message: '查询成功'
    }
  })

export default {
  car,
  user
}
