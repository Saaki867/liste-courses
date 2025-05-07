<?php
// Activer l'affichage des erreurs
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Tester la connexion à la base de données
$serverName = "shoppinglist-server-tp.database.windows.net";
$connectionOptions = array(
    "Database" => "ShoppingListDB",
    "Uid" => "adminuser",
    "PWD" => "Cisco91*"
);

echo "Tentative de connexion à SQL Server...<br>";
$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn) {
    echo "Connexion réussie!<br>";
} else {
    echo "Échec de la connexion. Erreurs:<br>";
    print_r(sqlsrv_errors());
}

// Vérifier les extensions chargées
echo "<br>Extensions PHP chargées:<br>";
print_r(get_loaded_extensions());
?>
