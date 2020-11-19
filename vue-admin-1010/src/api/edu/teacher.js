import request from '@/utils/request'

const api_name = '/edu/teacher'

export default {
    //1 讲师分页
 getTeacherListPage(current,limit,teacherQuery){
     return request({
         url:`${api_name}/${current}/${limit}`,
         method:'post',
         //data表示把对象转换json传递到接口里
         data:teacherQuery
     })
 },
    //删除讲师
    deleteTeacherId(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'delete'
        })
    },
    //添加讲师
    addTeacher(teacher) {
        return request({
            url: `${api_name}`,
            method: 'post',
            data: teacher
        })
    },
    //根据id查询讲师
    getTeacherInfo(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'get'
        })
    },
   
     //修改讲师
     updateTeacherInfo(teacher) {
        return request({
            url: `${api_name}/updateTeacher`,
            method: 'post',
            data: teacher
          })
    }
}