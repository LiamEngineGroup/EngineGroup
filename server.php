<?php

$port = getenv('PORT') ?: 8079;
$app = require_once __DIR__.'/public/index.php';

header("Location: http://localhost:{$port}");
