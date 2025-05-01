<?php
header('Content-Type: application/json');
include 'config.php';

if (isset($_GET['id'])) {
    $id = (int)$_GET['id'];
    
    $query = "DELETE FROM ShoppingItems WHERE id = ?";
    $params = [$id];
    
    $stmt = sqlsrv_query($conn, $query, $params);
    
    if ($stmt === false) {
        echo json_encode(['success' => false, 'message' => 'Erreur lors de la suppression']);
        die(print_r(sqlsrv_errors(), true));
    }
    
    echo json_encode(['success' => true]);
    sqlsrv_free_stmt($stmt);
} else {
    echo json_encode(['success' => false, 'message' => 'ID non fourni']);
}
?>