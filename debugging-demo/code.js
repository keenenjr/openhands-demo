const express = require("express");
const app = express();
const PORT = 3000;

// Simulated database
const usersDB = {
    1: { id: 1, name: "Alice", age: 25 },
    2: { id: 2, name: "Bob", age: 30 }
};

// Cache to store fetched user data
const cache = {};

function getUserFromDatabase(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!usersDB[userId]) {
                reject("User not found");
            } else {
                resolve(usersDB[userId]);
            }
        }, 1000);
    });
}

// API Route: Get User Info
app.get("/user/:id", async (req, res) => {
    const userId = req.params.id;

    if (cache[parseInt(userId)]) {
        console.log("Returning cached data");
        return res.json(cache[parseInt(userId)]); // ✅ Cached response
    }

    try {
        const user = await getUserFromDatabase(userId);
        cache[userId] = user; // ✅ Store in cache
        res.json(user);
    } catch (error) {
        res.status(404).json({ error });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));