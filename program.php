<?php

include('functions.php');
    //print_r($_POST);
    $home = getenv("HOME");
    $who = shell_exec('whoami');
    $pwd = trim(shell_exec('pwd'));


if ($_POST['action'] == 'check') {

    if (file_exists("/usr/local/opt/llvm@4/lib/libc++.1.dylib")){
        print('<span style="color:#009900;">&bullet; libc++ OK<br /></span>');
    } else { 
        print('<span style="color:red;">&bullet; libc++ FAIL<br /></span>');
        $error=true; }

    if (file_exists("/usr/local/opt/gettext/lib/libintl.8.dylib")){
        print('<span style="color:#009900;">&bullet; libintl OK<br /></span>');
    } else { 
        print('<span style="color:red;">&bullet; libintl FAIL<br /></span>');
        $error=true; }

    if (file_exists($pwd."/bin/cleos")){
        print('<span style="color:#009900;">&bullet; cleos OK<br /></span>');
    } else { 
        print('<span style="color:red;">&bullet; cleos FAIL<br /></span>');
        $error=true; }

    if (file_exists($pwd."/bin/keosd")){
        $keosdrun = shell_exec("ps auxw|pgrep 'keosd'");
        print('<span style="color:#009900;">&bullet; keosd OK');
        if ($keosdrun) {
            print('<span style="color:#009900;"> ... and running PID: '.$keosdrun.'</span>');
        }else{
            print('<span style="color:red;"> ... but not running<br /></span>');
        }
        print('<br /></span>');
    } else { 
        print('<span style="color:red;">&bullet; keosd FAIL<br /></span>');
        $error=true; }

    if ($error) { print("Ooops, something is wrong, you may run install-opt script again<br /<br />"); }
    else { print("Everythings looks good :)<br /<br />"); }
    
}

?>