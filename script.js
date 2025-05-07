document.addEventListener('DOMContentLoaded', function() {
    // Charger les éléments initiaux (simulés)
    loadItems();
    
    // Ajouter un écouteur d'événement sur le bouton d'ajout
    document.getElementById('addButton').addEventListener('click', addItem);
});

// Simuler la liste des articles (stockage local)
let items = [
    { id: 1, name: "Pain", quantity: 2 },
    { id: 2, name: "Lait", quantity: 1 }
];

// Fonction pour charger les articles (simulation sans backend)
function loadItems() {
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '';
    
    items.forEach(item => {
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

// Fonction pour ajouter un article (simulation sans backend)
function addItem() {
    const nameInput = document.getElementById('itemName');
    const quantityInput = document.getElementById('itemQuantity');
    
    const name = nameInput.value.trim();
    const quantity = parseInt(quantityInput.value) || 1;
    
    if (name === '') {
        alert('Veuillez entrer un nom d\'article');
        return;
    }
    
    // Simuler l'ajout d'un article
    const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
    items.push({ id: newId, name: name, quantity: quantity });
    
    // Vider les champs
    nameInput.value = '';
    quantityInput.value = '1';
    
    // Recharger la liste
    loadItems();
}

// Fonction pour supprimer un article (simulation sans backend)
function deleteItem(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
        // Simuler la suppression
        items = items.filter(item => item.id != id);
        
        // Recharger la liste
        loadItems();
    }
}
