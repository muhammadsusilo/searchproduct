const search = () => {
    const searchbox = document.getElementById("search").value.toUpperCase();
    const productItem = document.getElementsByClassName("product-list")[0];
    const product = document.querySelectorAll(".product");
    const h2Name = productItem.getElementsByTagName("h2");


    for (let index = 0; index < h2Name.length; index++) {
        let match = product[index].getElementsByTagName("h2")[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML

            if (textValue.toUpperCase().indexOf(searchbox) > -1) {
                product[index].style.display = " ";
            } else {
                product[index].style.display = "none";
            }
        }
    }
}

search()