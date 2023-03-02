import { Router } from "express";


const router= Router()

type Usuario ={
    id: string,
    name: string
}

router.get("/", (req, res) => {
    res.send('Hola Mundo')
});

router.post("/", (req, res) => {
    const { name } = req.body as Usuario
    console.log(name);
    
    res.send("Ok")
});
export default router