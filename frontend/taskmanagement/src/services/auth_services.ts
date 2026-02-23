import axiosinstance from "./api";

const register =async(data:{
    name:string,
    email:string,
    password:string,
    role_id:number})=>{
           const rs=await axiosinstance.post('/auth/register')
           return rs.data

    };
const login =async(data:{
    email:string,
    password:string})=>{
        const res=await axiosinstance.post('/auth/login')
        localStorage.setItemt('access_token',res.data.access_token)
        return res.data

    };
const get_profile=async()=>{
    const res=await axiosinstance.get('/auth/me/')
    return res.data
};

const logout=()=>{
    const res=localStorage.removeItem('access_token')
    
}