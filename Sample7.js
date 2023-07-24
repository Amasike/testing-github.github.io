const preview = document.querySelector('.preview');

//HTTPREQUEST METHOD
// const getUser = (endpoint, callback) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () => {
//         if(request.readyState === 4 && request.status ===200) {
//             const data = JSON.parse(request.responseText)
//             callback(undefined, data);
//         } else if(request.readyState === 4) {
//             callback("could not get data", undefined)
//         }
//     })
//     request.open('GET', endpoint)
//     request.send();
// }

// getUser("/mydatabase/db.json", (err, data) => {
//     if(err) {
//         console.log('error', err);
//     } else {
//         console.log('success', data);
//     }
// });

// //PROMISE

// const getNewUser = (endpoint) => {
//     const request = new XMLHttpRequest();
//     return new Promise((resolve, reject) => {
//         request.onreadystatechange = () => {
//             if(request.readyState === 4 && request.status ===200) {
//                 const data = JSON.parse(request.responseText)
//                 resolve(data)
//             } else if (request.readyState === 4) {
//                 reject("could not fetch data")
//             }
//         }
//         request.open('GET', endpoint)
//         request.send();
//     })
// }

// getNewUser('/mydatabase/db.json')
// //whatever returns a promise '.then' method can be used to access the actual data
// .then(data => {
//     data.forEach(data => {
//         preview.innerHTML += data.name + "<br>";
//     })
//     //console.log('Promise data', data)
//     return getNewUser('/mydatabase/db2.json')

// }). then(data2 => {
//     data2.forEach(data => {
//         preview.innerHTML += data.name + "<br>"
//     })
//     return getNewUser('/mydatabase/db3.json')
// }). then(data3 => {
//     data3.forEach(data => {
//         preview.innerHTML += data.name + "<br>"
//     })
// })

//FETCH METHOD
fetch('/mydatabase/db.json'/*, {method: 'GET'}*/)
//the 'GET' method can be removed because the method is 'GET' by default
.then(response => response.json())
.then(data => {
    data.forEach(data => {
        //preview.innerHTML += data.work +'<br>'
    })
}) 

async function getNewNames() {
    const response = await fetch('/mydatabase/db.json')
    const data = await response.json()
    // data.forEach(data => {
    //     preview.innerHTML += data.work + '<br>'
    // })
    return data
}
 
getNewNames()
.then(data => {
    console.log('New data', data)
})