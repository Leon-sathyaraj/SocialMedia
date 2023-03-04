import { db } from "../connect"

export const login = (req,res) =>{
//test

const q = "SELECT FROM users where username = ?"

db.query(q,[req.body.username], (err,data)=>{
    if(err) return res.status(500).json(err)
    if(data.length) return res.status(409).son("User is already taken! ")
})

const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(req.body.password, salt)
    
}

export const logout = (req,res) =>{
    
}

export const register = (req,res) =>{
    
}