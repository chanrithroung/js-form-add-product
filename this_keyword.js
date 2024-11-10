// const object = {
//     name: "Chanrith",
//     gender: "Male",
//     myfunction: function() {
//         console.log(this.name, this.gender);
//     }
// }

const { rejects } = require("assert");



// object.myfunction();


// const object = {
//     name: "Chanrith",
//     gender: "Male",
//     myfunction: () => {
//         console.log(this.name, this.gender);
//         // In this case it refer to windows object
//     }
// }


// object.myfunction(); // 

// const object = {
//     name: "Chanrith",
//     gender: "Male",
//     myfunction: function() {
//         const self = this;
//         setTimeout(function() {
//             console.log(self.name);
//         }, 2000);
//     }
// }



// const object = {
//     name: "Chanrith",
//     gender: "Male",
//     myfunction: function() {
//         // const self = this;
//         setTimeout( () => {
//             console.log(this.name);
//         }, 2000);
//     }
// }

// object.myfunction();


// try {
//     // Code that my throw an error
// } catch (error) {
//     // Code to handle the error
// }


// try {
//     let result = 10 / 0;
//     console.log(result);
//     let data = JSON.parse('{invalid JSON}');
// } catch (error) {
//     console.error("An error occurend : ", error.message);
// }


// async function fetchData()  {
//     try {
//         let response = await fetch('https://fakestoreapi.com/products?limit=5');
//         if(!response.ok) {
//             throw new Error("Fial to fetch data");
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error.message)
//     }
// }


// fetchData()


// async function fetchData() {
//     try {
//         let response = await fetch('https://fakestoreapi.com/products?limit=5');
//         if (!response.ok) {
//             throw new Error("Fail to fetch data");
//         }
//         const data = await response.json();
//         console.log(data); 
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// fetchData();



// async function fetchData() {
//     try {
//         let respone = await fetch('https://fakestoreapi.com/products?limit=5');
        
//     }
// }


const promise = new Promise(resolve, rejects )