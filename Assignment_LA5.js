// Hash function to generate a hash key for each customer
function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash;
}

// Initial customers in the hash table
let customerTable = {
    [hashFunction("Elaine")]: "Elaine",
    [hashFunction("Althea")]: "Althea",
    [hashFunction("Angelo")]: "Angelo",
    [hashFunction("Lito")]: "Lito",
    [hashFunction("Engelbert")]: "Engelbert"
};

// Function to display the current hash table
function displayHashTable(hashTable) {
    if (Object.keys(hashTable).length === 0) {
        console.log("The hash table is empty.");
        alert("The hash table is empty.");
    } else {
        let entries = Object.entries(hashTable).map(([key, value]) => `${key}: ${value}`).join(", ");
        console.log("Current Hash Table: " + entries);
        alert("Current Hash Table: " + entries);
    }
}

// function addCustomer() {
    let customerName = prompt("Enter the customer's name to add to the hash table:");
    if (customerName) {
        let hashKey = hashFunction(customerName);
        if (customerTable[hashKey]) {
            console.log(`Customer ${customerName} is already in the table.`);
            alert(`Customer ${customerName} is already in the table.`);
        } else {
            customerTable[hashKey] = customerName;
            console.log(`${customerName} is added to the hash table with key ${hashKey}.`);
            alert(`${customerName} is added to the hash table with key ${hashKey}.`);
        }
    } else {
        console.log("No name entered. No customer added.");
        alert("No name entered. No customer added.");
    }
    displayHashTable(customerTable);
}

// function serveCustomer() {
    if (Object.keys(customerTable).length === 0) {
        console.log("The hash table is empty. No customers to serve.");
        alert("The hash table is empty. No customers to serve.");
        return;
    }

    let hashKeyToServe = prompt("Enter the hash key of the customer to serve:");
    if (!customerTable[hashKeyToServe]) {
        console.log("Invalid key entered or no such customer exists. Please try again.");
        alert("Invalid key entered or no such customer exists. Please try again.");
    } else {
        let customerName = customerTable[hashKeyToServe];
        console.log(`Serving customer: ${customerName}`);
        alert(`Serving customer: ${customerName}`);
        delete customerTable[hashKeyToServe]; // Remove the served customer
        displayHashTable(customerTable);
    }
}

// Main program loop
function main() {
    while (true) {
        let action = prompt("Choose an action:\n1 - Add Customer\n2 - Serve Customer\n3 - Exit");
        if (action === "1") {
            addCustomer();
        } else if (action === "2") {
            serveCustomer();
        } else if (action === "3") {
            console.log("Exiting the program.");
            alert("Exiting the program.");
            break;
        } else {
            console.log("Invalid action. Please choose again.");
            alert("Invalid action. Please choose again.");
        }
    }
}

// Start the program
main();
