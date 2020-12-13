"use strict"

const countTotalSalary = function (employees) {
  let all = 0
  const allSalary = Object.values(employees)
  for (const salary of allSalary) {
    all += salary
  }
  return all
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
