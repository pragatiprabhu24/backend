export const handleLogin = (e, email, password, role) => {
    e.preventDefault();
    try{
        if(!role || !email || !password){
            alert("Please fill required details")
        }
        console.log(e, email, password, role)

    }catch(error){
        console.log(error)
    }
}

export const handleRegister = (e, name, email, password, role, organisationName, hospitalName, address, phone) => {
    e.preventDefault();
    try{
        if(!role || !name || !email || !password || !organisationName || !hospitalName || !address || !phone){
            alert("Please fill required details")
        }
        console.log(e, name, email, password, role, organisationName, hospitalName, address, phone)

    }catch(error){
        console.log(error)
    }
}