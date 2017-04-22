var mysql = require("mysql");
var prompt = require("prompt");


var connection = mysql.createConnection({
  host: "localhost", 
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon" 
});


connection.connect(function(error){
  if(error) {
    console.log(error);
  }
});



prompt.start();
 
  prompt.get(['item', 'amount'], function (err, result) {
    
    console.log('Command-line input received:');
    console.log('  Item: ' + result.item);
    console.log('  Amount: ' + result.amount);
  });


var itemArray = [];
function showStore () {
	connection.query('SELECT * FROM products', function (error, result) {
		if(error) {
      		console.log(error);
    	} else {
      	console.log('-----------------------------------------------------------');
      		for (var i = 0; i < result.length; i++) {
        		console.log('Item ID: ' + result[i].item_id + '\nName: ' + result[i].product_name + '\nDepartment: ' + result[i].department_name + '\nPrice: ' + result[i].price + '\nQuantity: ' + result[i].stock_quantity);
        console.log('-----------------------------------------------------------');
        itemArray.push(JSON.stringify(result[i].item_id));
      }
    }

	})
};

 