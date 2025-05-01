<?php
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
    die(print_r(sqlsrv_errors(), true));
}
?>