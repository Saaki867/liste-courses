<?php
header('Content-Type: application/json');
include 'config.php';

$query = "SELECT id, name, quantity FROM ShoppingItems ORDER BY id DESC";
$stmt = sqlsrv_query($conn, $query);

if ($stmt === false) {
    echo json_encode(['error' => 'Erreur lors de la récupération des articles']);
    die(print_r(sqlsrv_errors(), true));
}

$items = [];
while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    $items[] = $row;
}

echo json_encode($items);
sqlsrv_free_stmt($stmt);
?>