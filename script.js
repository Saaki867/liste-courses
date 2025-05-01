document.addEventListener('DOMContentLoaded', function() {
    // Charger les articles au démarrage
    loadItems();
    
    // Ajouter un écouteur d'événement sur le bouton d'ajout
    document.getElementById('addButton').addEventListener('click', addItem);
});

// Fonction pour charger les articles depuis le backend
function loadItems() {
    fetch('backend/get-items.php')
        .then(response => response.json())
        .then(data => {
            const itemsList = document.getElementById('itemsList');
            itemsList.innerHTML = '';
            
            data.forEach(item => {
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
        })
        .catch(error => console.error('Erreur:', error));
}

// Fonction pour ajouter un article
function addItem() {
    const nameInput = document.getElementById('itemName');
    const quantityInput = document.getElementById('itemQuantity');
    
    const name = nameInput.value.trim();
    const quantity = quantityInput.value;
    
    if (name === '') {
        alert('Veuillez entrer un nom d\'article');
        return;
    }
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('quantity', quantity);
    
    fetch('backend/add-item.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Vider les champs
            nameInput.value = '';
            quantityInput.value = '1';
            
            // Recharger la liste
            loadItems();
        } else {
            alert('Erreur lors de l\'ajout de l\'article');
        }
    })
    .catch(error => console.error('Erreur:', error));
}

// Fonction pour supprimer un article
function deleteItem(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
        fetch(`backend/delete-item.php?id=${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Recharger la liste
                    loadItems();
                } else {
                    alert('Erreur lors de la suppression');
                }
            })
            .catch(error => console.error('Erreur:', error));
    }
}