<?php
header('Content-Type: application/json');

// Activer l'affichage des erreurs pour debug
ini_set('display_errors', 0);
error_reporting(E_ALL);

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = isset($_POST['name']) ? $_POST['name'] : '';
        $quantity = isset($_POST['quantity']) ? (int)$_POST['quantity'] : 1;
        
        // Simuler un ajout réussi
        echo json_encode(['success' => true, 'name' => $name, 'quantity' => $quantity]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
