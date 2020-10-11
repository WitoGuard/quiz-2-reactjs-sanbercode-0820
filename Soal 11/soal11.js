function filterBookPromise (colorful,amountOfPage) {
    return new Promise(function(resolve, reject) {
        var books = [
            {name: "sinchan", totalPage: 50, isColorful: true },
            {name: "kalkulus", totalPage: 250, isColorful: false},
            {name: "doraemon", totalPage: 40, isColorful: true },
            {name: "algoritma", totalPage: 300, isColorful: false },
            ]
    if (amountOfPage > 0) {
        resolve(books.filter(x => x.totalPage >= amountOfPage && x.isColorful == colorful));
    } else {
        var reason = new Error ("maaf parameter salah")
        reject(reason);
    }
    });
}
var colorful = books.filter(function(e){
    return e.isColorful;
}) 

function execute(colorful,amountOfPage){
    filterBookPromise
    .then(function(fulfilled){
        console.log(fulfilled);
    })
    .catch(function(error){
        console.log(error.message);
    });
}

execute(colorful)