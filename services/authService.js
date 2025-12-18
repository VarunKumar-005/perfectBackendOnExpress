import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as userRepository from '../repository/userRepository.js';

export const registerUser = async (name, email, password) => {
    const existingUser = await userRepository.findUserByEmail(email);
    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await userRepository.createUser({
        name, email, password: hashPassword
    });

    return newUser;
};

export const loginUser = async (email, password) => {
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
        throw new Error("User does not exist");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Wrong email or password");
    }

    const payload = { username: user.name, id: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET , { expiresIn: "1h" });

    return { user, token };
};
