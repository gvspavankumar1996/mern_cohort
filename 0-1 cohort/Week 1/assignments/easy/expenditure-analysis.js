/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const trs = [
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: "Food",
      itemName: "Pizza",
    },
    {
      id: 1,
      timestamp: 1656076800000,
      price: 12,
      category: "Food",
      itemName: "burger",
    },
    {
      id: 1,
      timestamp: 1656076800000,
      price: 20,
      category: "clothing",
      itemName: "shirt",
    },
    {
      id: 1,
      timestamp: 1656076800000,
      price: 100,
      category: "electronics",
      itemName: "mobile",
    },
  ];

  let result = {};
  trs.map((exp) => {
    if (result[exp.category]) {
      result[exp.category] = result[exp.category] + exp.price;
    } else {
      result[exp.category] = exp.price;
    }
  });
  
  const ans=Object.keys(result)
  
  console.log(ans, "anss");
  return [];
}


calculateTotalSpentByCategory()
module.exports = calculateTotalSpentByCategory;
