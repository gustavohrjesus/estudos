<?php

define('API_BASE', 'http://localhost/cursos-joaoribeiro/api/aula_04/api/?option=');

echo '<pre>APLICAÇÃO</pre>';

for($i=0; $i<10; $i++){
    $resultado = api_request('random'); // var recebe a resposta da funcao abaixo (function api_request())

    //* verify is response is ok (success)
    if( $resultado['status'] == 'ERROR'){
        die('Aconteceu um erro na minha chamada a API');
    }

    echo 'O valor randomico: ' . $resultado['data'] . '<br>' ;
}

echo "TERMINADO!";

// $resultado = api_request('status'); // var recebe a resposta da funcao abaixo (function api_request())
// $resultado = api_request('random'); // var recebe a resposta da funcao abaixo (function api_request())

// //* verify is response is ok (success)
// if( $resultado['status'] == 'ERROR'){
//     die('Aconteceu um erro na minha chamada a API');
// }

// echo $resultado;
// echo '<pre>';
// print_r($resultado);


function api_request($option){
    $client = curl_init(API_BASE . $option); // LOCAL onde irei fazer o pedido pela API
    curl_setopt($client, CURLOPT_RETURNTRANSFER, true); //
    $response = curl_exec($client); // resposta da API em formato JSON
    return json_decode( $response, true ); // decodifica o JSON para array associativo (OPCAO TRUE no 2º param), em $resultado
}

// echo API_BASE . 'status';

?>