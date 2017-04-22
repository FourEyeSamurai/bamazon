CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100),
    department_name VARCHAR (100),
    price DECIMAL (10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES
("Rogue One: A Star Wars Story", "Movies", 19.99, 5),
("Chicken Soup for the Coders Soul", "Books", 22.99, 10),
("How to Bamazon and So Can You", "Books", 19.99, 8 ),
("Harry and The Hendersons", "Movies", 9.99, 3),
("'Bea Arthur is Bae' T-Shirt", "Clothing", 12.99, 10),
("What Does My Dog Think of Me?", "Books", 25.99, 6 ),
("Columbo Meets Sherlock", "Movies", 19.99, 2 );

SELECT * FROM products;