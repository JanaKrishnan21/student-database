import bcrypt from 'bcrypt'
const users=[];

export const regis =async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    const existing = users.find(u => u.username === username);
    if (existing) return res.status(400).send('User already exists');

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });

    res.send('User registered successfully');
};

export const log=async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user) return res.status(400).send('User does not exist');

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).send('Invalid password');

    req.session.user = user.username;
    res.send('User logged in successfully');
};

export const log2= (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error during logout');
        }
        res.send('Logged out successfully');
    });
};

