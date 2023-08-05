// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName(){
    customerName= customerName.toUpperCase()
}

function setBestCustomer(){
    bestCustomer = 'not bob'
    return bestCustomer
}

function overwriteBestCustomer(name){
    bestCustomer = name
}

const leastFavoriteCustomer = 'me'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'not me'
}