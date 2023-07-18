async function loadData() {
	const response = await fetch("https://dummyjson.com/products/");
    const result = await response.json();

  //console.log(result)
    let final = ""

    result.products.map((values) => {
        final += `<tr class="font-family-sans-serif text-center font-monospace">
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.brand}</td>
        <td>${values.category}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td>${values.rating}</td>
        <td>${values.stock}</td>
        <td><img src="${values.images[0]}" /></td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=final;
// console.log(result.products[0].id)
}

loadData()

async function filter_data() {
	const response2 = await fetch("https://dummyjson.com/products/");
    const result2 = await response2.json();

    var input = document.getElementById("hold_filter").value;
    // alert(input)

    let final2 = ""

    result2.products.filter((values) => {
        if(values.price < input) {
        final2 += `<tr class="font-family-sans-serif text-center font-monospace">
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.brand}</td>
        <td>${values.category}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td>${values.rating}</td>
        <td>${values.stock}</td>
        <td><img src="${values.images[0]}" /></td>
        </tr>`;
        } else {
            return null
        }
    });
    document.getElementById("table_body").innerHTML=final2;
  

}

async function search_data() {
    const response3 = await fetch("https://dummyjson.com/products/");
    // console.log(response3)
    const result3 = await response3.json();

    let input2 = document.getElementById("hold_search").value;
    
    //console.log(typeof(input2))

    let final3 = ""
    // console.log(result3.products)
    //console.log(Object.keys(result3.products))
    result3.products.filter((values) => {
    //     //input2.localeCompare(values.id, undefined, { sensitivity: 'accent' });
    //     //if(input2.localeCompare(values.id, undefined, { sensitivity: 'accent' })||input2.localeCompare(values.title, undefined, { sensitivity: 'accent' })||input2.localeCompare(values.brand, undefined, { sensitivity: 'accent' })||input2.localeCompare(values.category, undefined, { sensitivity: 'accent' })||input2.localeCompare(values.price, undefined, { sensitivity: 'accent' })){
    //     // result3.products.map((value) => {
    //     //     //console.log(value.columns)
    //     //     if(input2 == value) {
        //   console.log(Object.keys(values))
        
        let new_object = Object.keys(values)
        new_object.map((value2) => {

        if(input2 == values[value2]) {

    //  if(input2 == values.id || input2 == values.title || input2 == values.brand || input2 == values.category || input2 == values.price) {
        final3 += `<tr class="font-family-sans-serif text-center font-monospace">
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.brand}</td>
        <td>${values.category}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td>${values.rating}</td>
        <td>${values.stock}</td>
        <td><img src="${values.images[0]}" /></td>
        </tr>`;
           
        } else {
            let input3 = input2.toLowerCase()
            if(input3 == values[value2]) {

                //  if(input2 == values.id || input2 == values.title || input2 == values.brand || input2 == values.category || input2 == values.price) {
                    final3 += `<tr class="font-family-sans-serif text-center font-monospace">
                    <td>${values.id}</td>
                    <td>${values.title}</td>
                    <td>${values.brand}</td>
                    <td>${values.category}</td>
                    <td>${values.description}</td>
                    <td>${values.price}</td>
                    <td>${values.rating}</td>
                    <td>${values.stock}</td>
                    <td><img src="${values.images[0]}" /></td>
                    </tr>`;
        } else {
            return null
        }
    }
        })
     });
    document.getElementById("table_body").innerHTML=final3;

  

}

// async function category_types() {
//     const response4 = await fetch("https://dummyjson.com/products/");
//     const result4 = await response4.json();

//     let final4 = ""
//     // let cat1 = document.getElementById('flexCheck1').value
//     // let cat2 = document.getElementById('flexCheck2').value
//     // let cat3 = document.getElementById('flexCheck3').value
//     // let cat4 = document.getElementById('flexCheck4').value
//     // let cat5 = document.getElementById('flexCheck5').value
//     // let cat6 = document.getElementById('flexCheck6').value
//     console.log(document.getElementById('flexCheck1').value)


//     result4.products.filter((values) => {
//         if(values.category === 'smartphones') {
//         final4 += `<tr class="font-family-sans-serif text-center font-monospace">
//         <td>${values.id}</td>
//         <td>${values.title}</td>
//         <td>${values.brand}</td>
//         <td>${values.category}</td>
//         <td>${values.description}</td>
//         <td>${values.price}</td>
//         <td>${values.rating}</td>
//         <td>${values.stock}</td>
//         <td><img src="${values.images[0]}" /></td>
//         </tr>`;
//         } else {
//             return null
//         }
//     });
//     document.getElementById("table_body").innerHTML=final4;
  
// } 

async function categories2() {
    const response4 = await fetch("https://dummyjson.com/products/");
    const result4 = await response4.json();
    
    let final4 = ""
    let arr = [];
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (let i = 0 ; i < checkboxes.length; i++) {
     arr.push(checkboxes[i].value)
    }
    if(arr.length != 0) {
    result4.products.filter((values) => {
         arr.map((value3) => {
         if(values.category === value3) {
         final4 += `<tr class="font-family-sans-serif text-center font-monospace">
         <td>${values.id}</td>
         <td>${values.title}</td>
         <td>${values.brand}</td>
         <td>${values.category}</td>
         <td>${values.description}</td>
         <td>${values.price}</td>
         <td>${values.rating}</td>
         <td>${values.stock}</td>
         <td><img src="${values.images[0]}" /></td>
         </tr>`;
         } else {
            return null
         }
         document.getElementById("table_body").innerHTML=final4;
        });
    })
    }  else {
       return loadData()
      }
    }