const mealsInDay = ["Breakfast", "Lunch", "Dinner", "Supper"];

// TODO: use array destructuring
//const firstMeal = mealsInDay[0];
//const secondMeal = mealsInDay[1];
//const thirdMeal = mealsInDay[2];

const [firstMeal, secondMeal, thirdMeal] = mealsInDay;

console.log(firstMeal, "should be Breakfast")

// export so the values can be tested - but you can ignore this
export { mealsInDay, firstMeal, secondMeal, thirdMeal };
