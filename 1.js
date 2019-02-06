const domain = 'http://localhost:3001/api'

export default {
    baseUrl: domain,
    //登录
    signIn: `${domain}/user/signIn`,
    //操作数据
    createTable: `${domain}/data/createTable`,
    dropTable: `${domain}/data/dropTable`,
    getRows: `${domain}/data/getRows`,
    insertData: `${domain}/data/insertData`,
    deleteData: `${domain}/data/deleteData`,
    delRow: `${domain}/data/deleteDataById`,
    modifyRow111: `${domain}/data/updateData222`,
    modifyRow333: `${domain}/data/updateData333`,
}

