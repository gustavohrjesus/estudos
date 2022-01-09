<?php

//* import output.php
require_once('output.php');

//* prepare response
$data['status'] = 'ERROR';
$data['data']   = [];


//* request
if(isset($_GET['option'])){
    //? OS BLOCOS CASE, DO SWITCH, SAO AS ROTAS
    switch ( $_GET['option'] ){
        case 'status':
            // define_response($data, 'API OK'); //? foi colocado em output.php
            api_status($data);            
            break;

        case 'random':
            api_random($data);
            //? ====== BLOCO ABAIXO REFEITO EM OUTPUT.PHP - BEGIN =======
            //* verify if has min and max values on the GET
            // $min = 0;
            // $max = 1000;

            // if(isset($_GET['min'])){
            //     $min = intval( $_GET['min'] ); //? intval: converte string ou boolear para inteiro
            // }
            // if(isset($_GET['max'])){
            //     $max = intval( $_GET['max'] );
            // }

            // if($min >= $max){
            //     response($data); //? cuida para emitir erro pois o min precisa ser menor que o max
            //     return; //? finaliza a execucao
            // }

            // define_response($data, rand($min,$max));
            //? ====== BLOCO ABAIXO REFEITO EM OUTPUT.PHP - END ===============
            break;

        case 'hash':
            api_hash($data);            
            break;
    }
} 

//* emitir a resposta da API
response($data);

//? ====== ESTAH EM OUTPUT.PHP - BEGIN ================================================
/*
//* ============================================================
function define_response(&$data, $value){
    $data['status'] = 'SUCCESS';
    $data['data']   = $value;
}

//* ============================================================
//* Construcao da response
function response($data_response){
    header("Content-Type:application/json");
    echo json_encode($data_response);
}
//*/
//? ====== ESTAH EM OUTPUT.PHP - END ================================================

?>