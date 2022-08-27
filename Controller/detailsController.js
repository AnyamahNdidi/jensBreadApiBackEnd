const details = require("../Model/userDetails")
const {userDelieveryMail, adminDelieveryMail} = require("../utils/email")
const otpGenerator = require("otp-generator");
const postDetaild = async (req, res) =>
{
    try
    {
        const {
            productOrder,
            otpCode,
            fullName,
            email,
          
            address,
            otp,
            done,
            activate,

        } = req.body
        const oppt = otpGenerator.generate(7, {
			upperCaseAlphabets: false,
			specialChars: false,
			digits: true,
			lowerCaseAlphabets: false,
		});
        
        const postData = await details.create({
            productOrder,
            activate,
            fullName,
            email,
          
            address,
            done:false,
            otpCode:oppt

        })
        res.status(200).json({ message: "deliver address", data: postData })
        
        userDelieveryMail(email, fullName, oppt).then((result) =>
        {
            console.log("sent to user", result)
        }).catch((error) =>
        {
            console.log("client error mail", error)
        })

        adminDelieveryMail("franklinanyamah@gmail.com", fullName, oppt)
            .then((result) =>
            {
            console.log("admin sent", result)
            }).catch((error) =>
            {
            console.log("admin error sent messagae",error)
            })
        
      

    } catch (error)
    {
        res.status(404).json({message:error.message})
    }
    
}


const getSingleOrder = async (req, res) =>
{
    try
    {
        const id = req.params.id
        getGetOne = await details.findById(req.params.id)
        res.status(200).json({
            message: "one bread",
            getGetOne
        })
        
    } catch (error)
    {
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    postDetaild,
    getSingleOrder
}