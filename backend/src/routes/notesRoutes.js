import express from 'express'
import { createNote, deleteNote, getAllNotes, updateNote } from '../controllers/notesControllers.js';

const router = express.Router();

router.get("/", getAllNotes);
router.post("/",createNote)
router.get("/:id", updateNote)
router.delete("/:id", deleteNote) 

export default router;
