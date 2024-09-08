import type { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "@/src/lib/db";
import { hashPassword } from "@/src/lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        
        const hashedPassword = await hashPassword(password);
        
        const user = await createUser(username, hashedPassword);
        
        res.status(201).json({ message: 'User created', user });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
} 