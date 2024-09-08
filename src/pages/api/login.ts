import type { NextApiRequest, NextApiResponse } from "next";
import { getUserByUsername } from "@/src/lib/db";
import { comparePassword } from "@/src/lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        
       const user = await getUserByUsername(username);
       
       if (user && await comparePassword(password, user.password)) {
           res.status(200).json({ message: 'Login successful' });
       } else {
           res.status(401).json({ message: 'Invalid username or password' });
       }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
} 