db.getSiblingDB('api').createUser({
    user: "admin",
    pwd: "securepassword",
    roles: [
        { role: "dbOwner", db: "api" }
    ]
});