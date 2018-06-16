<?php

include('functions.php');
    //print_r($_POST);
    $home = getenv("HOME");
    $who = shell_exec('whoami');
    $pwd = trim(shell_exec('pwd'));




if ($_POST['action'] == 'vote') {


    $bptovote=str_replace(',', ' ', $_POST['bplist']);
    $voter = $_POST['voter'];
    
    exec('./cleos system voteproducer prods '.$voter.' '.$bptovote.' -p '.$voter.' 2>&1',$o,$r);
    //print('./cleos system voteproducer prods '.$voter.' '.$bptovote.' -p '.$voter);
    if ($o) { $o = implode(" ",$o); }
    if (strpos($o,'Error') !== false) {
        $o = clear($o);
        $o = explode('Error', $o);
        print("ERROR: $o[1]");
    } else {
        print("$o");
    }

}

if ($_POST['action'] == 'changeaddress') {

    $s = shell_exec('grep -Ei '.$_POST['address'].' ./snapshot.csv ');
    if ($s){
        
            $storefilename = $pwd.'/your_snapshot_record.txt';
            $r = file_put_contents($storefilename,$s);
            if ($r === false) {
                $status = 'ERROR';
                $kom = "ERROR - something went wrong, try again";
            }else{
                $status = 'OK';
                $kom = "OK - your data is stored now";
            }

    }else{
                $status = 'ERROR';
                $kom = "ERROR - address not exist!";
    }
    
    $data = [status => $status,
            kom => $kom,];

    header('Content-Type: application/json');
    echo json_encode($data);    

}




if ($_POST['action'] == 'storefoundaccount') {

    $s = shell_exec('grep -Ei '.$_POST['address'].' ./snapshot.csv ');
    $storefilename = $pwd.'/your_snapshot_record.txt';
    $r = file_put_contents($storefilename,$s);
    if ($r === false) {
        $status = 'ERROR';
        $kom = "ERROR - something went wrong, try again";
    }else{
        $status = 'OK';
        $kom = "OK - your data is stored now";
    }
    $data = [status => $status,
            kom => $kom,];

    header('Content-Type: application/json');
    echo json_encode($data);    

}

if ($_POST['action'] == 'findaddress') {

    //print("Checking, please wait .... <br />");
    $s = shell_exec('grep -Ei '.$_POST['address'].' ./snapshot.csv ');
    if ($s) {
        $status = 'OK';
        $kom = "Found record!";
        $s = str_replace('"', '', $s);
        $s = str_replace("\n", '', $s);
        $s = explode(',',$s);
        $ethaddress = $s[0];
        $eosaddress = $s[1];
        $eospubkey = $s[2];
        $tokens = $s[3];
        $data = [ethaddress => $ethaddress,
                eosaddress => $eosaddress,
                eospubkey => $eospubkey,
                tokens => $tokens,
                status => $status,
                kom => $kom,
                registered => $$registered,];

        header('Content-Type: application/json');
        echo json_encode($data);    
        //exit();
    }else{
        $kom = "Not found - checking unregistered accounts <br />";
        $s = shell_exec('grep -Ei '.$_POST['address'].' ./snapshot_unregistered.csv ');
        if ($s){
        $status = 'NOOK';
        $kom .= "Found unregistered account!";
        $s = str_replace('"', '', $s);
        $s = str_replace("\n", '', $s);
        $s = explode(',',$s);
        $ethaddress = $s[0];
        $eosaddress = $s[1];
        $eospubkey = '';
        $tokens = $s[2];
        $data = [ethaddress => $ethaddress,
                eosaddress => $eosaddress,
                eospubkey => $eospubkey,
                tokens => $tokens,
                status => $status,
                kom => $kom,
                registered => $$registered,];

        header('Content-Type: application/json');
        echo json_encode($data);    
        //exit();

        }else{
            $kom = "Not found - checking unregistered accounts.<br />Not found - try again.<br />";
            $status = "ERROR";
            $data = [status => $status,
                    kom => $kom,
                    registered => $$registered,];
    
            header('Content-Type: application/json');
            echo json_encode($data);    
            //exit();
        }
    }
}


if ($_POST['action'] == 'accountinfo') {

    $info = shell_exec('./cleos get account -j '.$_POST['address']);

    header('Content-Type: application/json');
    echo $info;
}

if ($_POST['action'] == 'getproducers') {


    $list = exec('./cleos system listproducers -j -l 1000'.' 2>&1',$o,$r);

    if ($o) { $o = implode(" ",$o); }
    $o = clear("$o");
    $o = str_replace("Producer", "", $o);
    $o = str_replace("key", "", $o);
    $o = str_replace("Url", "", $o);
    $o = str_replace("Scaled", "", $o);
    $o = str_replace("votes", "", $o);
    $z = json_decode($o);
    //print('<span style="text-align:center">*** select max 30 ***</span><br />');
    print('<form id="bplist" name="bplist">');
    foreach($z->rows as $info)
    {
        unset($s);
        unset($slocation);
        if ($info -> location > 0){
            $s = shell_exec('grep -Ei '.$info -> location.' ./country.csv ');
            if ($s) {
                $s = str_replace('"', '', $s);
                $s = str_replace("\n", '', $s);
                $s = explode(';',$s);
                $slocation = strtoupper($s[1]);
                } else {$slocation = ''; }
        }

       print('<span class="producerrow">
                <span style="width:30%;display:inline-block;">'.$info -> owner.'</span>
                <span style="width:50%;display:inline-block;">'.$info -> url.'</span>
                <span style="width:10%;display:inline-block;">'.$slocation.'</span>
                <input type="checkbox" class="voted" id="v-'.$info -> owner.'" name="'.$info -> owner.'" /></span><br />');
    }
    print('</form>');
    //print("$o"); 
    //header('Content-Type: application/json');
    //echo ($o);    
} 

if ($_POST['action'] == 'checkstoredaccount') {

    $storefilename = $pwd.'/your_snapshot_record.txt';
    if (is_file($storefilename)) {
        $s = file_get_contents($storefilename);
        $s = str_replace('"', '', $s);
        $s = str_replace("\n", '', $s);
        $s = explode(',',$s);
        if (count($s) == 4){
            $ethaddress = $s[0];
            $eosaddress = $s[1];
            $eospubkey = $s[2];
            $tokens = $s[3];
            $registered = 'OK';
        } else {
            $ethaddress = $s[0];
            $eosaddress = $s[1];
            $eospubkey = '';
            $tokens = $s[2];
            $registered = 'error';
        }
        $status = 'OK';
    }else{
        $ethaddress = '';
        $eosaddress = '';
        $eospubkey = '';
        $tokens = '';
        $status = 'error';
        $registered = '';
    }
    $data = [ethaddress => $ethaddress,
            eosaddress => $eosaddress,
            eospubkey => $eospubkey,
            tokens => $tokens,
            status => $status,
            registered => $$registered,];

    header('Content-Type: application/json');
    echo json_encode($data);    
} 


?>