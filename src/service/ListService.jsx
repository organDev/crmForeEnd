import request from '../utils/request';
/**
 * 查询列表
 */
export function queryList(){
    return request('/dev/cards/queryList');
}

export function addOne(data) {
  error();
    return request('/dev/cards/add', {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
}

export function deleteOne(id) {
    return request(`/api/cards/${id}`, {
      method: 'DELETE'
    });
  }

export function error(){
  return request('/api/consumer/error',{
    method: 'GET'
  });
}  