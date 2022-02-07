export default function reducerFriendsData() {
    let allfriends = [
        { "id": 1, "name": "Florina", "location": "eu", "since": 2, "active": false },
        { "id": 2, "name": "Ricca", "location": "platea dictumst", "since": 11, "active": true },
        { "id": 3, "name": "Julina", "location": "pede", "since": 12, "active": true },
        { "id": 4, "name": "Sallyanne", "location": "nulla mollis", "since": 3, "active": true }
    ]
    console.log("Reducer allfriends created");
    return allfriends
}