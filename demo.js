let incre = 0;
// Creating Dynamic button
const btn = document.createElement("button");
btn.id = "btnData";
btn.innerHTML = `Get ${++incre} User Data`;
document.getElementById("btns").appendChild(btn);


let count = -1;

// Promises Chaining 
const getData = () => {
    PromiseAPI1()
    .then((res) =>{
        if(res){
            return PromiseAPI2();
        }
    })
    .then((res) => {
        if(res){
            return PromiseAPI3();
        }
    })
    .catch((error) => {
        console.log(error)
    })

    btn.innerHTML = `Get ${++incre} User Data`;
    if(incre >= 31){
        btn.innerHTML = `Refresh Data`;
    }
    count++;
};



const PromiseAPI1 = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/posts")
                .then((res) => res.json())
                .then((posts) => {
                    if(count<=30){
                        showData1(posts);
                    }
                   
                    resolve(true);
                })
                .catch((err) => reject(err))
        }, 1000)
    });
};


const PromiseAPI2 = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/products")
                .then((res) => res.json())
                .then((products) => {
                    if(count <= 30){
                        showData2(products);
                    }
                    
                    resolve(true);
                })
                .catch((err) => reject(err))
        }, 2000)
    })
}


const PromiseAPI3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/todos")
                .then((res) => res.json())
                .then((todos) => {
                    if(count <= 30){
                        showData3(todos);
                    }
                    
                    resolve(true);
                })
                .catch((err) => reject(err))
        }, 3000)
    })
}




const showData1 = (data) => {

    const tbody = document.getElementById("tBody");
    const posts = data.posts;
        const row = document.createElement("tr");
        const td = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        td.innerHTML = posts[count].id;
        td2.innerHTML = posts[count].title;
        td3.innerHTML = posts[count].body;
        td4.innerHTML = posts[count].userId;
        td5.innerHTML = posts[count].tags;
        td6.innerHTML = posts[count].reactions;
        row.appendChild(td);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        row.appendChild(td6);
        tbody.appendChild(row);
}


const showData2 = (data) => {

    const tbody = document.getElementById("tBody2");
    const products = data.products;
    // products.map((curElem) => {
        const row = document.createElement("tr");
        const td = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        const td7 = document.createElement("td");
        const td8 = document.createElement("td");
        const td9 = document.createElement("td");
        const td10 = document.createElement("td");
        const td11 = document.createElement("td11");
        td.innerHTML = products[count].id;
        td2.innerHTML = products[count].title;
        td3.innerHTML = products[count].description;
        td4.innerHTML = products[count].price;
        td5.innerHTML = products[count].discountPercentage;
        td6.innerHTML = products[count].rating;
        td7.innerHTML = products[count].stock;
        td8.innerHTML = products[count].brand;
        td9.innerHTML = products[count].category;
        const img = document.createElement("img");
        img.className = "thumb"
        img.src = products[count].thumbnail;
        td10.appendChild(img);

         products[count].images.map((cE) => {
            const img = document.createElement("img");
            img.className = "imagesStyle"
            img.src = cE;
            td11.appendChild(img);
         })

        row.appendChild(td);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        row.appendChild(td6);
        row.appendChild(td7);
        row.appendChild(td8);
        row.appendChild(td9);
        row.appendChild(td10);
        row.appendChild(td11);
        tbody.appendChild(row);

    // })

    // tbody.innerHTML = `
    //        <tr>
    //           <td>${products[count].id}</td>
    //           <td>${products[count].title}</td>
    //           <td>${products[count].description}</td>
    //           <td>${products[count].price}</td>
    //           <td>${products[count].discountPercentage}</td>
    //           <td>${products[count].rating}</td>
    //           <td>${products[count].stock}</td>
    //           <td>${products[count].brand}</td>
    //           <td>${products[count].category}</td>
    //           <td><img src=${products[count].thumbnail} class="thumb"></td>
    //        </tr>
    // `
        
}

const showData3 = (data) => {

    const tbody = document.getElementById("tBody3");
    const todos = data.todos;
    console.log(todos)
    // todos.map((curElem) => {
        const row = document.createElement("tr");
        const td = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        td.innerHTML = todos[count].id;
        td2.innerHTML = todos[count].todo;
        td3.innerHTML = todos[count].completed;
        td4.innerHTML = todos[count].userId;
        row.appendChild(td);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        tbody.appendChild(row);
    // })
}

document.getElementById("btnData").addEventListener("click",getData);
