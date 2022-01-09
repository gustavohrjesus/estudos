<?php

//! ====== FUNCTIONS FOR ENDPOINTS======  BEGIN =========================================
//* ============================================================
function api_status(&$data){
    define_response($data, 'API OK');
}

//* ============================================================
function api_random(&$data){
    $min = 0;
    $max = 1000;

    if(isset($_GET['min'])){
        $min = intval( $_GET['min'] ); //? intval: converte string ou boolear para inteiro
    }
    if(isset($_GET['max'])){
        $max = intval( $_GET['max'] );
    }

    if($min >= $max){
        response($data); //? cuida para emitir erro pois o min precisa ser menor que o max
        return; //? finaliza a execucao
    }

    define_response($data, rand($min,$max));
}

//* ============================================================
function api_hash(&$data){
    define_response($data, md5( sha1( uniqid() ) ));
}
//! ======  FUNCTIONS FOR ENDPOINTS======  END ================================================


//! ======  FUNCOES ESTRUTURAIS======  BEGIN ====================================
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
//! ======  FUNCOES ESTRUTURAIS======  END =======================================

?>