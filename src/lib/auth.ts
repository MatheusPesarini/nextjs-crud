import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export async function hashPassword(password: string) {
    return bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePassword(password: string, hashedPassword: string) {
    return bcrypt.hash(password, hashedPassword);
}

