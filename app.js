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
        if(values.price > input) {
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
    const result3 = await response3.json();

    let input2 = document.getElementById("hold_search").value;
    //console.log(typeof(input2))

    let final3 = ""

    result3.products.filter((values) => {
        //input2.localeCompare(values.id, undefined, { sensitivity: 'accent' });
        //if(input2.localeCompare(values.id, undefined, { sensitivity: 'accent' })||input2.localeCompare(values.title, undefined, { sensitivity: 'accent' })||input2.localeCompare(values.brand, undefined, { sensitivity: 'accent' })||input2.localeCompare(values.category, undefined, { sensitivity: 'accent' })||input2.localeCompare(values.price, undefined, { sensitivity: 'accent' })){
        if(input2 == values.id || input2 == values.title || input2 == values.brand || input2 == values.category || input2 == values.price) {
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
    });
    document.getElementById("table_body").innerHTML=final3;
  

}


