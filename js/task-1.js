"use strict"

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
}

user.mood = "happy"
user.hobby = "skydiving"
user.premium = false

const userItems = Object.keys(user)

for (const item of userItems) {
  console.log(`${item}: ${user[item]} `)
}

for (const item in user) {
  console.log(`${item}: ${user[item]}`)
}
