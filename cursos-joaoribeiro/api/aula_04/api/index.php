<?php

//prepare response
$data['status'] = 'ERROR';
$data['data']   = null;


//* request
if(isset($_GET['option'])){

    switch ( $_GET['option'] ){
        case 'status':
            // $data['status'] = 'SUCCESS';
            // success($data);
            define_response($data, 'API running OK!!!');
            // $data['data']   = 'API running OK!...';
            break;

        case 'random':
            define_response($data, rand(0,1000));
            break;

        // default:
        //     $data['status'] = 'ERROR';
        //     break;
    }

} 
// else nao mais necessario pois foi criado o data-status e data-data com valores default
// else {
//     $data['status'] = 'ERROR';
// }

//* emitir a resposta da API
response($data);

//* ============================================================
// function success(&$data){ // o '&' indica que o $data foi passado por referencia, ou seja, o $data definido no inicio do cod eh o que sera alterado
//     $data['status'] = 'SUCCESS';
// }
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

?>