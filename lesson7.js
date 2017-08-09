const race ='100m Dash'
const winners =['Carlos Pigeon', 'Caleb Pigeon', 'Frank Pigeon', 'Kay Pigeon', 'Romeo Pigeon']

const win = winners.map( (winner, i) => (
  {
    name: winner,
    race: race,
    place: i + 1
}))

// console.log(win)

const store = 'Walmart'
const items = ['ice', 'milk', 'bananas', 'soda', 'water']

const walmartList = items.map((item, i) => ({
  itemNumber: i+1,
  itemName: item,
  itemStore: store
})

)

// console.log(walmartList)



const ages = [12, 16, 25, 100, 22, 18, 37, 44, 61]

const olderThan60 = ages.filter( age => (age > 60))
const youngerThan30 = ages.filter( age => (age <= 30) )
console.log(youngerThan30)