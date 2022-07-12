import {API} from "../constant/index"
const authService ={
    login(data){
        return fetch(`${API}/login`,{
            method:"POST",
            // gửi đi
            headers:{
                "Content-Type":"application/json"// xem trong postman chỗ headers,khai báo thể loại dữ liệu về backend
            },body:JSON.stringify(data)// thực hiện gửi đi backend

        }).then(res=>res.json())// lấy về
    },
    register(data){
        return fetch(`${API}/register`,{
            method:"POST",
            // gửi đi
            headers:{
                "Content-Type":"application/json"// xem trong postman chỗ headers,khai báo thể loại dữ liệu về backend
            },body:JSON.stringify(data)// thực hiện gửi đi backend

        }).then(res=>res.json())// lấy về
    },
    searchProduct(data){
        return fetch(`${API}/product?name=${data}`,{
            method:"GET",
           
           

        }).then(res=>res.json())
    }
    
}
export default authService;