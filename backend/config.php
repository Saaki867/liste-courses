<?php
// Activer l'affichage des erreurs pour le débogage
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

try {
    // Vérifier si l'extension est chargée
    if (!extension_loaded('sqlsrv')) {
        throw new Exception("Extension sqlsrv PHP non chargée");
    }
    
    // Informations de connexion à Azure SQL
    $serverName = "shoppinglist-server-tp.database.windows.net";
    $connectionOptions = array(
        "Database" => "ShoppingListDB",
        "Uid" => "adminuser",
        "PWD" => "Cisco91*"
    );

    // Établir la connexion
    $conn = sqlsrv_connect($serverName, $connectionOptions);

    if(!$conn) {
        throw new Exception("Erreur de connexion SQL: " . print_r(sqlsrv_errors(), true));
    }
    
    // Définir une variable pour montrer que la connexion est réussie
    $status = ["status" => "connected", "message" => "Connexion à la base de données réussie"];
    echo json_encode($status);
    
} catch (Exception $e) {
    echo json_encode([
        "error" => true,
        "message" => $e->getMessage()
    ]);
}
?>
