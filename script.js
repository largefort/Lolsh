let resources = {};

// Define the names of your 165 minable resources
const resourceNames = [
    "wood", "stone", "gold", "iron", "coal", "copper", "silver", "oil", "food", // Add more resource names here...
];

// Initialize the resources object with default values
for (const resourceName of resourceNames) {
    resources[resourceName] = 0;
}

// Function to handle clicking
function click(resource) {
    resources[resource]++;
    updateInventory();
}

// Function to update the inventory
function updateInventory() {
    const inventoryElement = document.getElementById('inventory');
    inventoryElement.innerHTML = "<h2>Inventory:</h2>";
    for (const resource in resources) {
        inventoryElement.innerHTML += `<p>${resource}: ${resources[resource]}</p>`;
    }
}

// Function to generate resource buttons dynamically
function generateResourceButtons() {
    const resourceButtonsContainer = document.getElementById('resource-buttons');
    for (const resourceName of resourceNames) {
        const button = document.createElement('button');
        button.id = `mine-${resourceName}`;
        button.textContent = `Mine ${resourceName}`;
        button.addEventListener('click', () => click(resourceName));
        resourceButtonsContainer.appendChild(button);
    }
}

// Call the function to generate resource buttons
generateResourceButtons();

// Initial inventory update
updateInventory();
