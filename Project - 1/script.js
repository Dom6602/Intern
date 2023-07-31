// const newData = {
//     card_list: [
//         {
//             Image: "",
//             Name: "name1",
//             Price: "price1",
//             Description: "desc1"
//         },
//         {
//             Image: "",
//             Name: "name2",
//             Price: "price2",
//             Description: "desc2"
//         },
//         {
//             Image: "",
//             Name: "name3",
//             Price: "price3",
//             Description: "desc3"
//         },
//         {
//             Image: ",
//             Name: "name4",
//             Price: "price4",
//             Description: "desc4"
//         },
//         {
//             Image: "",
//             Name: "name5",
//             Price: "price5",
//             Description: "desc5"
//         },
//         {
//             Image: "",
//             Name: "name6",
//             Price: "price6",
//             Description: "desc6"
//         },
//         {
//             Image: "",
//             Name: "name7",
//             Price: "price7",
//             Description: "desc7"
//         },
//         {
//             Image: "",
//             Name: "name8",
//             Price: "price8",
//             Description: "desc8"
//         },
//         {
//             Image: "",
//             Name: "name9",
//             Price: "price9",
//             Description: "desc9"
//         },
//         {
//             Image: "",
//             Name: "name10",
//             Price: "price10",
//             Description: "desc10"
//         }
//     ]
// };


        
//         function post() {
//             let firebaseURL = `https://darkworld-24142-default-rtdb.firebaseio.com/card_store.json`;
//             fetch(firebaseURL, {
//                 method: 'POST',
//                 body: JSON.stringify(newData)
//             })
//             alert('Added Card Successfully!')
//             // console.log(JSON.stringify(newData));
//             // console.log(typeof JSON.stringify(newData)); 
//         }

//         post()



              
function redirect() {
    alert("Redirected to Description page")
  }

  function buy() {
      


  }

  function read() {
      const firebaseURL_GET = `https://darkworld-24142-default-rtdb.firebaseio.com/test1.json`;
      fetch(firebaseURL_GET, {
        method: 'GET'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to read data');
        }
        console.log(response)
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log(typeof data);

        let keys = Object.keys(data)
        let values = Object.values(data)

        console.log(keys)
        console.log(values)


        values.map((list, index) => {
          console.log(list, index);
          finalKey = Object.keys(list)
          finalValues = Object.values(list)
          console.log(finalKey);
          console.log(finalValues)

          // fetch(`https://darkworld-24142-default-rtdb.firebaseio.com/images.json`)
          //   .then(response => response.json())
          //   .then(data => {
          //       console.log(data)
          //       console.log(typeof data)
          //       const imageBase64String = data.image;

         
          
          document.getElementById("container").innerHTML += `
          <div class="card mb-5 ml-3 mr-3">
              <div class="card-body">
                  <button type="button" onclick="redirect()" style="border: none;"><img id="cardImg" style="border-radius: 15px;" src="data:image/jpeg;base64,${finalValues[1]}"></button>
                  <h5 class="card-title" style="text-align:center">${finalValues[2]}</h5>
                  <h5 class="card-title" style="text-align:center">${finalValues[3]}</h5>
                  <p class="card-text" style="text-align:center">${finalValues[0]}</p>
                  <div id="center">
                      <a href="#" id="buy" onclick="buy()" class="btn btn-primary">Buy Now</a>
                      <a href="#" id="cart" onclick="cart()" class="btn btn-primary">Add to Cart</a>
                  </div>
              </div>
          </div>

      `
        })

        // })

       })                      //<img id="cardImg" src="data:image/jpeg;base64,${imageBase64String}">  


      .catch(error => {
        console.log(error);

      });
    };


  read();