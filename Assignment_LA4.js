// Initial customers in the queue
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to display the current queue
function displayQueue(queue) {
    if (queue.length === 0) {
        console.log("The queue is empty.");
        alert("The queue is empty.");
    } else {
        console.log("Current Queue: " + queue.join(", "));
        alert("Current Queue: " + queue.join(", "));
    }
}

// function addCustomer() {
    let customerName = prompt("Enter the customer's name to add to the queue:");
    if (customerName) {
        customerQueue.push(customerName);
        let position = customerQueue.length; // Position in the queue
        console.log(`${customerName} is added to the queue at position ${position}.`);
        alert(`${customerName} is added to the queue at position ${position}.`);
    } else {
        console.log("No name entered. No customer added.");
        alert("No name entered. No customer added.");
    }
    displayQueue(customerQueue);
}

// Serve a customer based on their number
function serveCustomer() {
    if (customerQueue.length === 0) {
        console.log("The queue is empty. No customers to serve.");
        alert("The queue is empty. No customers to serve.");
        return;
    }

    let numberToServe = parseInt(prompt("Enter the number of the customer to serve (1 to " + customerQueue.length + "):"), 10);
    if (isNaN(numberToServe) || numberToServe < 1 || numberToServe > customerQueue.length) {
        console.log("Invalid number entered. Please try again.");
        alert("Invalid number entered. Please try again.");
    } else {
        let customerName = customerQueue[numberToServe - 1]; // Get the customer name
        console.log(`Serving customer: ${customerName}`);
        alert(`Serving customer: ${customerName}`);
        customerQueue.splice(numberToServe - 1, 1); // Remove the served customer
        displayQueue(customerQueue);
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

