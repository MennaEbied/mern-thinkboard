export const getAllNotes =  (req,res)=>{
    res.status(200).send("you just fetched the notes")
}

export const createNote = (req,res)=>{
    res.status(201).json({message:"Note created successfuly"})
}

export const updateNote = (req,res)=>{
    res.status(200).json({message:"Note updated successfuly"})
}

export const deleteNote = (req,res)=>{
    res.status(200).json({message:"Note deleted successfuly"})
}