/*eslint-env browser*/

function display() {
    "use strict";
    window.console.log("Welcome to the Inventory Management System!");
    window.console.log("");
    window.console.log("Choose one of the following commands:");
    window.console.log("View - View all the products");
    window.console.log("Update - Add a new product");
    window.console.log("Exit - Exit the program");
    window.console.log("");
}

function view(inventory) {
    "use strict";
    for (let i = 0; i < inventory.length; i++) {
        window.console.log(inventory[i]);
    }
}

function update(inventory) {
    "use strict";
    var sku = parseInt(window.prompt("Enter Sku number:"));
    var quantity = parseInt(window.prompt("Enter new stock quantity:"));
    
    for (let i = 0; i < inventory.length; i += 1) {
        if (inventory[i][0] === sku) {
            inventory[i][2] = quantity;
            window.console.log("The inventory is successfully updated!");
            break;
        }
    }
}

function main() {
    "use strict";
    display();

    var inventory = [];
    inventory[0] = [4824, "Shirt", 10, 15.99];
    inventory[1] = [6343, "Jeans", 22, 39.99];
    inventory[2] = [3223, "Socks", 36, 9.99];
    inventory[3] = [2233, "Hat", 12, 14.99];
    inventory[4] = [9382, "Jacket", 5, 49.99];

    while (true) {
        var command = window.prompt("Enter a command:");
        
        if (command) {
            if (command.toLowerCase() === "view") {
                view(inventory);
            }
            else if (command.toLowerCase() === "update") {
                update(inventory);
            }
            else if (command.toLowerCase() === "exit") {
                break;
            }
            else {
                window.console.log("Please enter a valid command!");
            }
        }
        else {
            break;
        }
    }
    window.console.log("Program Terminated!");
}

main();