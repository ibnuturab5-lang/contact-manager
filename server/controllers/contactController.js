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
        const contacts =await Contact.find({user:req.user._id})
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
//get contact by id
export const getContactById=async (req,res) => {
    try {
        const contact =await Contact.findById(req.params.id)
        if(!contact){
            return res.status(404).json({message:"Contact not found!"});
        }
        return res.json(contact)
    } catch (error) {
        return res
      .status(500)
      .json({ message: "server error", error: error.message });
    }
}
//delete contact
export const deleteContact=async (req,res) => {
    try {
        const contact =await Contact.findById(req.params.id)
        if(!contact){
            return res.status(404).json({message:"Contact not found!"});
        }
        if(req.user._id.toString() !==contact.user.toString()){
          return res.status(401).json({message:"Not authorized to delete this contact"})
        }
        await contact.deleteOne()
        return res.status(200).json({message:"Contact deleted!"})
    } catch (error) {
        return res
      .status(500)
      .json({ message: "server error", error: error.message });
    }
}

//get contact by id
export const updateContact=async (req,res) => {
    try {

    const { name, email, phone, place } = req.body;
        const contact =await Contact.findById(req.params.id)
        if(!contact){
            return res.status(404).json({message:"Contact not found!"});
        }

        if(req.user._id.toString() !==contact.user.toString()){
          return res.status(401).json({message:"Not authorized to update this contact"})
        }
        contact.name = name || contact.name;
        contact.email = email || contact.email;
        contact.place = place || contact.place;
        contact.phone = phone || contact.phone;
        const updatedContact =await contact.save()
        return res.json(updatedContact)
    } catch (error) {
        return res
      .status(500)
      .json({ message: "server error", error: error.message });
    }
}