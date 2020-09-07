var lButton = document.getElementById('left-btn')
var rButton = document.getElementById('right-btn')

var customerImage = document.getElementsByTagName('img')[0]
var customerName = document.getElementsByClassName('client-name')[0]
var customerRating = document.getElementsByClassName('ratings')[0]

function customer(name, photo, ratings) {
    this.name = name
    this.photo = photo
    this.ratings = ratings
}

let c1 = new customer("Customer name", "customer-0.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus provident repudiandae alias deserunt facere sunt magnam ullam minusipsam facilis.")
let c2 = new customer("Sandy", "customer-1.jpg", "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock")
let c3 = new customer("Amy", "customer-2.jpg", "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.")
let c4 = new customer("Tyrell", "customer-3.jpg", "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.")
let c5 = new customer("Wanda", "customer-4.jpg", "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")

var Customers = [c1, c2, c3, c4, c5]

var value = 0

function checkValue(v) {
    if (value < 0) {
        value = 4
    }
    else if (value > 4) {
        value = 0
    }
    else {
        value += 0
    }
}

function setInformations(v) {
    customerName.innerHTML = Customers[v].name.toUpperCase()
    customerImage.src = "images/" + Customers[v].photo
    customerRating.innerHTML = Customers[v].ratings
}

lButton.addEventListener('click', () => {
    value -= 1
    checkValue()
    setInformations(value)
})

rButton.addEventListener('click', () => {
    value += 1
    checkValue()
    setInformations(value)
})