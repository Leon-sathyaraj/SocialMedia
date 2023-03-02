import express from "express";
import { getUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/test",(req,res)=> {
    res.send("testing and it works")
})

router.get("/find/:userId", getUser);
router.put("/", updateUser);

export default router;
