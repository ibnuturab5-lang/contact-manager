import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, place } = req.body;
    const contact = await Contact.create({ name, email, phone, place, user:req.user._id });
    return res.status(201).json(contact)
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};

//get all contacts

export const getAllContacts=async (req,res) => {
    try {
        const contacts =await Contact.find(req.user._id)
        if(!contacts){
            return res.status(404).json({message:"Contacts not found!"});
        }
        return res.json(contacts)
    } catch (error) {
        return res
      .status(500)
      .json({ message: "server error", error: error.message });
    }
}