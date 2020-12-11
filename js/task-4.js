"use strict"

const countTotalSalary = function (employees) {
  let all = 0
  const allSalary = Object.values(employees)
  for (const employee in employees) {
    all = all + employees[employee]
  }
  console.log(all)
}

console.log(countTotalSalary({}))

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
)

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
)
