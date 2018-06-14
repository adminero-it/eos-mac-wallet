<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>EOS Emerge Poland - Mac OS Wallet</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Cabin:700" rel="stylesheet" type="text/css">

    <!-- Custom styles for this template -->
    <link href="css/grayscale.min.css" rel="stylesheet">

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>


    <!-- Custom scripts for this template -->
    <script src="js/grayscale.min.js"></script>


    <script src="js/func.js"></script>
  </head>
  <body id="page-top">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="img/eosemergelogo-m.png" alt="eosemergelogo-m" width="100" height="100">EOS Emerge Poland</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#wallet">Wallet</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#vote">Vote</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#cleos">Cleos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    <!-- Intro Header -->
    <header class="masthead">
      <div class="intro-body">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h1 class="brand-heading">EOS Mac Wallet</h1>
              <p class="intro-text" style="margin-top: 60px;">A secure, local and free Wallet for EOS blockchain
                <br>based on official EOSIO cleos </p>
              <a href="#wallet" class="btn btn-circle js-scroll-trigger">
                <i class="fa fa-angle-double-down animated"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Wallet Section -->
    <section id="wallet" class="content-section text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mx-auto" style="text-align:left;">
            <p>
                <input id="showcreate" class="bt/n btn-default" type="button" value="create new wallet" />
                <input id="keylistbtn" class="bt/n btn-default" type="button" value="list keys (from all unlocked wallets)" />
                <input id="lockallbtn" class="bt/n btn-default" type="button" value="lock all wallets" />
                <input id="checkbtn" class="bt/n btn-default" type="button" value="check installation" /> 
            </p>
          </div>

          <div id="create" class="col-lg-12 mx-auto" style="text-align:left;display:none;">
            <p>Create new wallet name (empty for default): 
                <input id="newname" name="walletname" type="text" placeholder="wallet name" />
                <input id="newbtn" type="button" value="create" class="bt/n btn-default" />
                <input id="savepass" type="checkbox" name="savepass" /> <span style="font-size:0.8em;">save password to local file</span>
            </p>

          </div>

          <div class="col-8 mx-auto" align="left" style="text-align: left;">
                <h3 id="refreshwallets">List of Your WALLETS:</h3>
          </div>
          <div id="walletsbox" class="col-8 mx-auto" align="left">
                <br />
          </div>
          <div class="col-4 mx-auto" align="left" style="border:1px solid white;width:100%;height:100%;min-height:250px;max-height:350px;overflow:auto;">
              <h4 style="border-bottom:1px solid white;">infobox</h4>
              <span id="infobox" style="font-size: 0.7em;">
                &nbsp;
              </span>
          </div>

        </div>
      </div>
    </section>

    <!-- Vote Section -->
    <section id="vote" class="content-section text-center">
      <div class="container">
        <div class="col-lg-8 mx-auto">
          <h2>VOTE</h2>
          <p style="margin-bottom:100px;">* * * comming soon * * *</p>
          <a href="http://eosemerge.io/" class="btn btn-default btn-lg">Visit our Page</a> <a href="https://gitlab.com/emergepoland/eos-mac-wallet" class="btn btn-default btn-lg">check gitlab repo</a>
        </div>
      </div>
    </section>

    <!-- Cleos Section -->
    <section id="cleos" class="content-section text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>cleos</h2>
              <p style="margin-bottom:100px;">* * * comming soon * * *</p>
              <a href="http://eosemerge.io/" class="btn btn-default btn-lg">Visit our Page</a> <a href="https://gitlab.com/emergepoland/eos-mac-wallet" class="btn btn-default btn-lg">check gitlab repo</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="about" class="content-section text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>Feel free to contact us</h2>
            <p>We are a group of strong IT and blockchain enthusiasts from Poland with background and IT experience in private companies (precious metals - idfmetale.pl, mutual funds, insurance), with a 14-yr history in the financial market and extensive knowledge about most of the financial instruments that appeared in the last decade, indicating our ability to adapt to the changing environments of business.</p>
            <p>As such, we are extremely excited and ready to use our financial background, IT knowledge, and innovation skills to serve the EOS project.</p>
            <ul class="list-inline banner-social-buttons">
              <li class="list-inline-item">
                <a href="https://twitter.com/eos_emerge" class="btn btn-default btn-lg">
                  <i class="fa fa-twitter fa-fw"></i>
                  <span class="network-name">Twitter</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://gitlab.com/emergepoland/" class="btn btn-default btn-lg">
                  <i class="fa fa-gitlab fa-fw"></i>
                  <span class="network-name">Gitlab</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://t.me/eosemerge" class="btn btn-default btn-lg">
                  <i class="fa fa-telegram fa-fw"></i>
                  <span class="network-name">Telegram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>


    <!-- Footer -->
    <footer>
      <div class="container text-center">
        <p>Copyright &copy; EOS Emerge Poland 2018</p>
      </div>
    </footer>


  </body>
</html>