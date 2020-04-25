// 专门处理漫画相关的接口请求

// 引入封装好的axios
import request from '@/utils/request'

// 获取轮播图
export const getBanner = () => {
  return request({
    url: '/api/comic_v2/getproad',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web - app',
      adgroupid: 123
    }
  })
}
