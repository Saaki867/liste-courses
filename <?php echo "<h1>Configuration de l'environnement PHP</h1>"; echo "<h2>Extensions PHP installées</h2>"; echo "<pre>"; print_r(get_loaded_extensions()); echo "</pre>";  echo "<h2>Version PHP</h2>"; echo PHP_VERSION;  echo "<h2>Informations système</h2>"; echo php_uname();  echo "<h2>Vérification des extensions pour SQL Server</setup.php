<?php
echo "<h1>Configuration de l'environnement PHP</h1>";
echo "<h2>Extensions PHP installées</h2>";
echo "<pre>";
print_r(get_loaded_extensions());
echo "</pre>";

echo "<h2>Version PHP</h2>";
echo PHP_VERSION;

echo "<h2>Informations système</h2>";
echo php_uname();

echo "<h2>Vérification des extensions pour SQL Server</h2>";
if (extension_loaded('sqlsrv')) {
    echo "Extension sqlsrv est chargée.";
} else {
    echo "Extension sqlsrv n'est pas chargée.";
}
?>
