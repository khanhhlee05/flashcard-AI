"use client"

import { db } from "@/firebase"
import { writeBatch } from "firebase/firestore"

export default function Generate(){
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [text, setText] = useState("")
    const [name, setName] = useState("")
    const [open, setOpen] = useState(false)
    const router = useRouter()


    const handleSubmit = async () => {
        fetch("/api/generate", {
            method: "POST",
            body: text,

        }).then((res) => res.json()).then((data) => setFlashcards(data))
    }

    const handleCardClck = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const saveFlashcards = async () => {
        if (!name) {
            alert("Please enter a name for your flashcards")
            return
        }
        const batch = writeBatch(db)
        const userDocRef = doc(collection(db, "users"), user.id)
        const docSnap = await getDoc(userDocRef)

        if (docSnap.exists()){
            const collections = docSnap.data().flashcards || []
            if (collections.find((f) => f.name === name )){
                alert("Flashcards with this name already exist")
                return 
            } else {
                collections.push({name})
                batch.set(userDocRef, {flashcards: collections}, {merge : true})
            }
        } else {
            batch.set(userDocRef, {flashcards: [{name}]})
        }

        const columnRef = collection(userDocRef, name)
        flashcards.forEach((flashcard) => {
            const cardDocRef = doc(colRef)
            batch.set(cardDocRef, flashcard)
        })

        await batch.commit()
        handleClose()
        router.push("/flashcards")
    }



}