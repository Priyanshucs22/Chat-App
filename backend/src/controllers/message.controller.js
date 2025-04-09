import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getUsersForSidebar = async (req, res) => {
    try {
      const loggedInUserId = req.user._id;
      const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
  
      res.status(200).json(filteredUsers);
    } catch (error) {
      console.error("Error in getUsersForSidebar: ", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
};

export const getMessages = async (req, res) => {
    try{
        const { id:receiverId } = req.params;
        const loggedInUserId = req.user._id;
        const messages = await Message.find({
            $or: [
                { senderId: loggedInUserId, receiverId },
                { senderId: receiverId, receiverId: loggedInUserId },
            ],
        });
        res.status(200).json(messages);
    }catch(error){
        console.error("Error in getMessages: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const sendMessage = async (req, res) => {
    try{
        const { id: receiverId } = req.params;
        const loggedInUserId = req.user._id;
        const { text, image } = req.body;
        let imageUrl = null;
        if(image){
            const uploadedImage = await cloudinary.uploader.upload(image);
            imageUrl = uploadedImage.secure_url;
        }
        const newMessage = new Message({
            senderId: loggedInUserId,
            receiverId,
            text,
            imageUrl,
        });
        await newMessage.save();

        //todo

        res.status(201).json(newMessage);
    }catch(error){
        console.error("Error in sendMessage: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }   
}