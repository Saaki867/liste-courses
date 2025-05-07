<?php
header('Content-Type: application/json');

// Activer l'affichage des erreurs pour debug
ini_set('display_errors', 0);
error_reporting(E_ALL);

try {
    if (isset($_GET['id'])) {
        $id = (int)$_GET['id'];
        
        // Simuler une suppression réussie
        echo json_encode(['success' => true, 'id' => $id]);
    } else {
        echo json_encode(['success' => false, 'message' => 'ID non fourni']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
