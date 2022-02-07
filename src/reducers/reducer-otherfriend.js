export default function reducerOtherfriendsData(){
    let otherFriends = [
        { "id": 1, "f_id": 1,  "otherfriends": 3, names: ["ob", "oki", "loki"]},
        { "id": 2, "f_id": 2,  "otherfriends": 4, names: ["ob", "omi", "lumi", "hui"] },
        { "id": 3, "f_id": 3,  "otherfriends": 2, names: ["hui", "rij"]},
        { "id": 4, "f_id": 4,  "otherfriends": 6, names: ["obh", "omi", "luka", "yui", "gia", "zxc"] }
    ]

    console.log("Reducer otherfriends created");

    return otherFriends
}