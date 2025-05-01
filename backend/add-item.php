<?php
header('Content-Type: application/json');
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $quantity = (int)$_POST['quantity'];
    
    if (empty($name)) {
        echo json_encode(['success' => false, 'message' => 'Le nom est requis']);
        exit;
    }
    
    $query = "INSERT INTO ShoppingItems (name, quantity) VALUES (?, ?)";
    $params = [$name, $quantity];
    
    $stmt = sqlsrv_query($conn, $query, $params);
    
    if ($stmt === false) {
        echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'ajout de l\'article']);
        die(print_r(sqlsrv_errors(), true));
    }
    
    echo json_encode(['success' => true]);
    sqlsrv_free_stmt($stmt);
} else {
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
}
?>