<?php

$data = [];

//* request
if(isset($_GET['option'])){

    switch ( $_GET['option'] ){
        case 'status':
            $data['status'] = 'SUCCESS';
            $data['data']   = 'API RUNNING OK!';
            break;

        default:
            $data['status'] = 'ERROR';
            break;
    }

} else {
    $data['status'] = 'ERROR';
}

//* emitir a resposta da API
response($data);

//* ============================================================
//* Construcao da response
function response($data_response){
    header("Content-Type:application/json");
    echo json_encode($data_response);
}

?>