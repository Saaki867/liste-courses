<?php
header('Content-Type: application/json');

// Activer l'affichage des erreurs pour debug
ini_set('display_errors', 0);
error_reporting(E_ALL);

try {
    include 'config.php';

    // En attendant que la connexion SQL fonctionne, simulons des données
    $items = [
        ['id' => 1, 'name' => 'Pain', 'quantity' => 2],
        ['id' => 2, 'name' => 'Lait', 'quantity' => 1],
        ['id' => 3, 'name' => 'Œufs', 'quantity' => 12]
    ];

    echo json_encode($items);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
