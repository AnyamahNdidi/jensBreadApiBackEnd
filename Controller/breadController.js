const breadModel = require("../Model/breadModel")
const cloudinary = require("../utils/cloudinary")
const path = require("path")

const postBread = async (req, res) =>
{
    try
    {
        const {
           name, avatar,price, des, avatarID
        } = req.body

        const image = await cloudinary.uploader.upload(req.file.path)
        
        const creatData = await breadModel.create({
            name,
            price,
            des,
            avatar:image.secure_url
        })

        res.status(201).json({
            message: "data created",
            data:creatData
        })
        

    } catch (error)
    {
        res.status(400).json({message:error.message})
   }
}

const getAll = async (req, res) =>
{
    try
    {
        const getData = await breadModel.find()
        res.status(200).json({
            message: "all data",
            data:getData
        })
    } catch (error)
    {
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    postBread,
    getAll
}