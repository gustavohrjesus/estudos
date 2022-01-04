<?php

define('API_BASE', 'http://localhost/cursos-joaoribeiro/api/aula_03/api/?option=');

echo '<pre>APLICAÇÃO</pre>';

$resultado = api_request('status'); // var recebe a resposta da funcao abaixo (function api_request())

// echo $resultado;
echo '<pre>';
print_r($resultado);


function api_request($option){
    $client = curl_init(API_BASE . $option); // LOCAL onde irei fazer o pedido pela API
    curl_setopt($client, CURLOPT_RETURNTRANSFER, true); //
    $response = curl_exec($client); // resposta da API em formato JSON
    return json_decode( $response, true ); // decodifica o JSON para array associativo (OPCAO TRUE no 2º param), em $resultado
}

// echo API_BASE . 'status';

?>