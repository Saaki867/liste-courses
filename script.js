// Stockage local des articles (simule une base de données)
let shoppingItems = [
    { id: 1, name: "Pain", quantity: 2 },
    { id: 2, name: "Lait", quantity: 1 },
    { id: 3, name: "Œufs", quantity: 12 }
];

document.addEventListener('DOMContentLoaded', function() {
    // Créer l'élément de liste s'il n'existe pas
    if (!document.getElementById('itemsList')) {
        const container = document.querySelector('.items-container') || document.querySelector('body');
        const itemsList = document.createElement('ul');
        itemsList.id = 'itemsList';
        container.appendChild(itemsList);
    }

    // Charger les articles au démarrage
    loadItems();
    
    // Ajouter un écouteur d'événement sur le bouton d'ajout
    const addButton = document.getElementById('addButton');
    if (addButton) {
        addButton.addEventListener('click', addItem);
    }
});

// Fonction pour charger les articles (version locale)
function loadItems() {
    const itemsList = document.getElementById('itemsList');
    if (!itemsList) return;
    
    itemsList.innerHTML = '';
    
    shoppingItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <button class="delete-btn" data-id="${item.id}">Supprimer</button>
        `;
        itemsList.appendChild(li);
    });
    
    // Ajouter des écouteurs d'événements sur les boutons de suppression
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            deleteItem(this.getAttribute('data-id'));
        });
    });
}

// Fonction pour ajouter un article (version locale)
function addItem() {
    const nameInput = document.getElementById('itemName');
    const quantityInput = document.getElementById('itemQuantity');
    
    if (!nameInput || !quantityInput) return;
    
    const name = nameInput.value.trim();
    const quantity = parseInt(quantityInput.value) || 1;
    
    if (name === '') {
        alert('Veuillez entrer un nom d\'article');
        return;
    }
    
    // Générer un nouvel ID
    const newId = shoppingItems.length > 0 ? Math.max(...shoppingItems.map(item => item.id)) + 1 : 1;
    
    // Ajouter l'article à la liste locale
    shoppingItems.push({ id: newId, name: name, quantity: quantity });
    
    // Vider les champs
    nameInput.value = '';
    quantityInput.value = '1';
    
    // Recharger la liste
    loadItems();
}

// Fonction pour supprimer un article (version locale)
function deleteItem(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
        // Supprimer l'article de la liste locale
        shoppingItems = shoppingItems.filter(item => item.id != id);
        
        // Recharger la liste
        loadItems();
    }
}
