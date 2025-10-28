import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createContact, deleteContact, getAllContacts, getContactById, updateContact } from "../controllers/contactController.js";

const router =express.Router()
router.get('/',protect, getAllContacts )
router.get('/:id',protect, getContactById )
router.post('/',protect, createContact)
router.put('/:id',protect, updateContact)
router.delete('/:id',protect, deleteContact)

export default router