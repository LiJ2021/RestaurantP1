window.onload = function exampleFunction() {
    fetch("http://localhost:3456/menu")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            data.menu.forEach(menu => {
                
                let heading = document.createElement('h3')
                heading.innerHTML = menu.name
                document.body.append(heading)

                let description = document.createElement('p')
                description.innerHTML = menu.description
                document.body.append(description)

                let price = document.createElement('h6')
                price.innerHTML = menu.price
                document.body.append(price)
            })
            //idea - create a div and append the card 
            //pug files and the data just pulls the stuff in, it doesnt really handle anything.  The backend stores all the data and sends it to the front end 
            //keep the roles separated as much as i can
        })
}
