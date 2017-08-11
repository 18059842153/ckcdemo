export default {
    'pageName': 'salaryRecord',
    'pageLable': '考勤记录',
    'pageSearch': [],
    'pageTableField': [
        {
            'type': 'text',
            'label': '班级',
            'prop': 'classes',
        },
        {
            'type': 'text',
            'label': '上课老师',
            'prop': 'employee'
        },
        {
            'type': 'datetime',
            'label': '考勤时间',
            'prop': 'arrangestart'
        },
        {
            'type': 'text',
            'label': '出勤状态',
            'prop': ''
        }
    ],
    'pageTable': 'attendance',
    'pageTemplate': 'table1',
    'pagePath': '/student/info'
}