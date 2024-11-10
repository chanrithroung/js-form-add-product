// const promise = new Promise((resolve, reject) => {
//     // resolve("You're success");
//     reject("Have something when wrong");
// });

// promise.then(respone => console.log(respone)).catch( error => {
//     console.log(error);
// } );

const userData = {
    name: "Domino jesper",
    gender: "gay",
}

const searchUser = (name) => {
    return new Promise((resolve, reject) => {
        const isFound = userData.name == name;
        if (isFound) {
            resolve(userData)
        } else {
            reject("The user you want to find not found!!");
        }
    })
}


searchUser("chanrith").then((response)=> {
    console.log(response);
}).catch( error => {
    console.log(error)
})