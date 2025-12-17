import * as authService from '../services/authService.js';

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await authService.registerUser(name, email, password);
        res.status(201).json({ message: "New user created" });
    } catch (err) {
        res.status(400).json({ error_message: err.message });
    }
};

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authService.loginUser(email, password);
        res.status(200).json({
            msg: `Successfully signedIn ${result.user.name}`,
            token: result.token
        });
    } catch (err) {
        res.status(401).json({ msg: err.message });
    }
};