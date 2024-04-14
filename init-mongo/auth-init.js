db.getSiblingDB('auth').createUser({
    user: "admin",
    pwd: "securepassword",
    roles: [
        { role: "dbOwner", db: "auth" }
    ]
});