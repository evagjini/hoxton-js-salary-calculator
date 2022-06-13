let grossSalary = 500
let pensionContribution = 0.05 
let totalSalary = grossSalary*pensionContribution

console.log(totalSalary)


let taxableAmount = 25

console.log(grossSalary-taxableAmount)

let basicTax = 0/100
let tax80 = 80

const taxUnder80 = (basicTax*tax80)

console.log(taxUnder80)


const taxUnder250 = (4/100* (250-80))

console.log(taxUnder250)

const taxUnder450 = (8/100*(450-250))
console.log(taxUnder450)

const taxUp450 = (10/100*(475-450))
console.log(taxUp450)



let totalTaxes = taxUnder80 + taxUnder250 + taxUnder450 + taxUp450
 console.log(totalTaxes)

 let takeHomePay = grossSalary - totalTaxes - totalSalary
 console.log(takeHomePay)

 let myName = "Fevronia"
 let myLastName = "Gjini"

 let message = `I am ${myName} ${myLastName} and Iam paying ${totalTaxes} euro taxes to the governement`
 console.log(message + "!!")
