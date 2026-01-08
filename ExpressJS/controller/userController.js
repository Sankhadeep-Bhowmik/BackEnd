import { userList } from "../model/userList.js";


export function userController(req,res){
    const users = userList();
    return res.render('userList',{users:users});
}