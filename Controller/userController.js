const userModle = require("../Model/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userReg = async (req, res) =>
{
    try
    {
        const { name, email, password } = req.body
        
        const checkEmail = await userModle.findOne({ email: req.body.email })
        
        if (checkEmail)
        {
            return res.status(401).json({message:"user already exist"})
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = await userModle.create({
            name,
            email,
            password: hash
        });

        res.status(201).json({message: "user created", data:user})

    } catch (error)
    {
        res.status(400).json({message: error.message})
    }
}
const adminReg = async (req, res) =>
{
    try
    {
        const { name, email, password } = req.body
        
        const checkEmail = await userModle.findOne({ email: req.body.email })
        
        if (checkEmail)
        {
            return res.status(401).json({message:"user already exist"})
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = await userModle.create({
            name,
            email,
            password: hash,
            isAdmin:true
        });

        res.status(201).json({message: "user created", data:user})

    } catch (error)
    {
        res.status(400).json({message: error.message})
    }
}


const signInUser = async (req, res) =>
{
    try
    {
        const { email, password } = req.body
        const user = await userModle.findOne({ email })
        if (user)
        {
            const check = await bcrypt.compare(password, user.password);

            if (check)
            {
                const {password, ...info} = user._doc
                const myToken = jwt.sign(
                    {
                        _id: user._id,
                        isAdmin:user.isAdmin
                    },
                    "jensbread",
                    {expiresIn: "2d"}
                )

                res.status(201).json({
                    message: "welcome user",
                    data:{myToken, ...info}
                })
            } else
            {
                res.json({
                    message: "password is not correct",
                    correctPassword: user.password
                })
            }
            
        } else
        {
           res.status(404).json({message :"user is not register"}) 
        }
    } catch (error)
    {
        res.status(404).json({message : error.message})
    }
}



module.exports = {
    userReg,
    adminReg,
    signInUser
}