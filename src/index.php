<?php
    define( 'ELECTRO_ROOT', dirname(__FILE__) );
    require_once ELECTRO_ROOT . '/inc/components/product.php';
    require_once ELECTRO_ROOT . '/inc/components/product-card.php';
    require_once ELECTRO_ROOT . '/inc/components/product-category.php';
?>

<?php
    // Define the root folder and base URL for the application
    function baseURL(){
        return sprintf(
            "%s://%s%s",
            isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
            $_SERVER['SERVER_NAME'],
            dirname($_SERVER['REQUEST_URI'])
        );
    }

    define('BASE_URL', baseURL());
    $page = isset($_GET['page']) ? $_GET['page'] : 'home';
    $bodyClass = 'page home page-template-default';
    $headerclass = 'v1';

    switch($page){

        case 'about':
            $bodyClass = 'about full-width page page-template-default';
        break;
        case 'home-v2':
            $bodyClass = 'home-v2';
        break;
        case 'home-v3-full-color':
            $bodyClass = 'home page-template page-template-template-homepage-v3 full-color-background';
        break;
        case 'single-product':
            $bodyClass = 'single-product full-width';
        break;
        case 'single-product-sidebar':
        case 'single-product-sidebar-accessories':
        case 'single-product-sidebar-specification':
        case 'single-product-sidebar-reviews':
            $bodyClass = 'single-product';
        break;
         case 'single-product-extended':
            $bodyClass = 'single-product full-width extended';
        break;
        case 'blog':
            $bodyClass = 'blog';
        break;
        case 'blog-fw':
            $bodyClass = 'blog full-width';
        break;
        case 'blog-v3':
            $bodyClass = 'blog blog-list right-sidebar';
        break;
         case 'contact-v2':
         case 'terms-and-conditions':
            $bodyClass = 'page full-width';
        break;
        case 'blog-single':
           $bodyClass = 'single-post right-sidebar';
        break;
        case 'blog-v1':
        case 'shop-right-side-bar':
           $bodyClass = 'right-sidebar';
        break;
        case 'blog-v2':
           $bodyClass = 'right-sidebar blog-grid';
        break;
        case 'contact-v1':
           $bodyClass = 'page-template-default contact-v1';
        break;
        case 'cat-3-col':
        case 'cat-4-col':
        case 'shop':
        case 'home-v2':
           $bodyClass = 'left-sidebar';
        break;
    }
?>


<!DOCTYPE html>
<html lang="en-US" itemscope="itemscope" itemtype="http://schema.org/WebPage">
    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Electro &#8211; Electronics Ecommerce Theme</title>

        <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" media="all" />
        <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css" media="all" />
        <link rel="stylesheet" type="text/css" href="assets/css/animate.min.css" media="all" />
        <link rel="stylesheet" type="text/css" href="assets/css/font-electro.css" media="all" />
        <link rel="stylesheet" type="text/css" href="assets/css/owl-carousel.css" media="all" />
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" media="all" />
        <link rel="stylesheet" type="text/css" href="assets/css/colors/yellow.css" media="all" />

        <!-- Demo Purpose Only. Should be removed in production -->
        <link rel="stylesheet" href="assets/css/config.css">

        <link href="assets/css/colors/green.css" rel="alternate stylesheet" title="Green color">
        <link href="assets/css/colors/pink.css" rel="alternate stylesheet" title="Pink color">
        <link href="assets/css/colors/blue.css" rel="alternate stylesheet" title="Blue color">
        <link href="assets/css/colors/red.css" rel="alternate stylesheet" title="Red color">
        <link href="assets/css/colors/orange.css" rel="alternate stylesheet" title="Orange color">
        <link href="assets/css/colors/black.css" rel="alternate stylesheet" title="Black color">
        <link href="assets/css/colors/gold.css" rel="alternate stylesheet" title="Gold color">
        <link href="assets/css/colors/yellow.css" rel="alternate stylesheet" title="Yellow color">
        <link href="assets/css/colors/flat-blue.css" rel="alternate stylesheet" title="Flat Blue color">
        <!-- Demo Purpose Only. Should be removed in production : END -->

        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,700italic,800,800italic,600italic,400italic,300italic' rel='stylesheet' type='text/css'>

        <link rel="shortcut icon" href="assets/images/fav-icon.png">
    </head>

    <body class="<?php echo $bodyClass;?>">
        <div id="page" class="hfeed site">
            <a class="skip-link screen-reader-text" href="#site-navigation">Skip to navigation</a>
            <a class="skip-link screen-reader-text" href="#content">Skip to content</a>

            <?php require_once 'inc/header/top-bar.php'; ?>

            <?php require_once 'inc/header/header.php'; ?>

            <?php require_once ELECTRO_ROOT.'/pages/'.$page.'.php'; ?>

            <?php require_once 'inc/footer/brands-carousel.php'; ?>
            <?php require_once 'inc/footer/footer.php'; ?>

        </div><!-- #page -->

        <!-- For demo purposes – can be removed on production -->
        <div id="config" class="config">
            <div id="config_wrapper">
                <?php $demo_url = 'http://transvelo.github.io/electro/html/'; ?>
                <div id="config_container">
                    <div class="style-main-title">Style Selector</div>
                    <div class="box-title">Choose Home &#038; Static Pages</div>
                    <div class="input-box">
                        <div class="input">
                            <select id="home-pages" name="home_page">
                                <option value="">Choose</option>
                                <option value="<?php echo $demo_url; ?>home.html">Home v1</option>
                                <option value="<?php echo $demo_url; ?>home-v2.html">Home v2</option>
                                <option value="<?php echo $demo_url; ?>home-v3.html">Home v3</option>
                                <option value="<?php echo $demo_url; ?>home-v3-full-color.html">Home v3 Full Color</option>
                                <option value="<?php echo $demo_url; ?>about.html">About</option>
                                <option value="<?php echo $demo_url; ?>cart.html">Cart</option>
                                <option value="<?php echo $demo_url; ?>contact-v1.html">contact-v1</option>
                                <option value="<?php echo $demo_url; ?>contact-v2.html">contact-v2</option>
                                <option value="<?php echo $demo_url; ?>faq.html">FAQ</option>
                                <option value="<?php echo $demo_url; ?>store-directory.html">Store Directory</option>
                                <option value="<?php echo $demo_url; ?>terms-and-conditions.html">Terms and Conditions</option>
                                <option value="<?php echo $demo_url; ?>404.html">404</option>
                            </select>
                        </div>
                    </div>

                    <div class="box-title">Choose Ecommerce Page</div>
                    <div class="input-box">
                        <div class="input">
                            <select id="demo-pages" name="demo-shop">
                                <option value="">Choose</option>
                                <option value="<?php echo $demo_url; ?>shop.html">Shop</option>
                                <option value="<?php echo $demo_url; ?>cart.html">Cart</option>
                                <option value="<?php echo $demo_url; ?>checkout.html">Checkout</option>
                                <option value="<?php echo $demo_url; ?>my-account.html">My Account</option>
                                <option value="<?php echo $demo_url; ?>compare.html">Compare</option>
                                <option value="<?php echo $demo_url; ?>wishlist.html">Wishlist</option>
                            </select>
                        </div>
                    </div>

                    <div class="box-title">Choose Blog Style</div>
                    <div class="input-box">
                        <div class="input">
                            <select id="header-style" name="header">
                                <option value="">Choose</option>
                                <option value="<?php echo $demo_url; ?>blog-v1.html">Blog v1</option>
                                <option value="<?php echo $demo_url; ?>blog-v2.html">Blog v2</option>
                                <option value="<?php echo $demo_url; ?>blog-v3.html">Blog v3</option>
                                <option value="<?php echo $demo_url; ?>blog-single.html">Blog Single Post</option>
                                <option value="<?php echo $demo_url; ?>blog-fw.html">Blog Full Width</option>
                            </select>
                        </div>
                    </div>

                    <div class="box-title">Choose Shop Pages</div>
                    <div class="input-box">
                        <div class="input">
                            <select id="shop-style" name="shop-style">
                                <option value="">Choose</option>
                                <option value="<?php echo $demo_url; ?>shop.html">Shop Grid</option>
                                <option value="<?php echo $demo_url; ?>shop.html#grid-extended">Shop Extended</option>
                                <option value="<?php echo $demo_url; ?>shop.html#list-view">Shop List View</option>
                                <option value="<?php echo $demo_url; ?>shop.html#list-view-small">Shop List View Small</option>
                                <option value="<?php echo $demo_url; ?>shop-fw.html">Shop Full Width</option>
                                <option value="<?php echo $demo_url; ?>shop-right-side-bar.html">Shop Right Sidebar</option>
                            </select>
                        </div>
                    </div>

                    <div class="box-title">Choose Single Product Pages</div>
                    <div class="input-box">
                        <div class="input">
                            <select id="single-products" name="single-product">
                                <option value="">Choose</option>
                                <option value="<?php echo $demo_url; ?>single-product.html">Single Product</option>
                                <option value="<?php echo $demo_url; ?>single-product-extended.html">Single Product Extended</option>
                                <option value="<?php echo $demo_url; ?>single-product-sidebar.html">Single Product Sidebar</option>
                            </select>
                        </div>
                    </div>

                    <div class="box-title">Choose Product Category </div>
                    <div class="input-box">
                        <div class="input">
                            <select id="product-category-col" name="product-category">
                                <option value="">Choose</option>
                                <option value="<?php echo $demo_url; ?>cat-3-col.html">3 Column Sidebar</option>
                                <option value="<?php echo $demo_url; ?>cat-4-col.html">4 Column Sidebar</option>
                                <option value="<?php echo $demo_url; ?>cat-4-fw.html">4 Column Full width</option>
                                <option value="<?php echo $demo_url; ?>product-category-6-column.html">6 Columns Full width</option>
                                <option value="<?php echo $demo_url; ?>shop-fw.html">Shop Full Width</option>
                            </select>
                        </div>
                    </div>

                    <div class="box-title">Colors</div>
                    <div id="colors" class="colors">
                        <a class="changecolor green" href="#" title="Green color">Green</a>
                        <a class="changecolor pink" href="#" title="Pink color">Pink</a>
                        <a class="changecolor black" href="#" title="Black color">Black</a>
                        <a class="changecolor gold" href="#" title="Gold color">Gold</a>
                        <a class="changecolor yellow" href="#" title="Yellow color">Yellow</a>
                        <a class="changecolor blue" href="#" title="Blue color">Blue</a>
                        <a class="changecolor red" href="#" title="Red color">Red</a>
                        <a class="changecolor orange" href="#" title="Orange color">Orange</a>
                        <a class="changecolor flat-blue" href="#" title="Flat Blue color">Flat Blue</a>
                    </div>
                    <div class="box-title-text"><strong>Tons</strong> of customization you can do through Sass...</div>
                </div>
            </div>

            <div class="style-toggle open"><i class="fa fa-wrench"></i></div>
        </div>
        <!-- For demo purposes – can be removed on production : End -->

        <script type="text/javascript" src="assets/js/jquery.min.js"></script>
        <script type="text/javascript" src="assets/js/tether.min.js"></script>
        <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="assets/js/bootstrap-hover-dropdown.min.js"></script>
        <script type="text/javascript" src="assets/js/owl.carousel.min.js"></script>
        <script type="text/javascript" src="assets/js/echo.min.js"></script>
        <script type="text/javascript" src="assets/js/wow.min.js"></script>
        <script type="text/javascript" src="assets/js/jquery.easing.min.js"></script>
        <script type="text/javascript" src="assets/js/jquery.waypoints.min.js"></script>
        <script type="text/javascript" src="assets/js/electro.js"></script>

        <!-- For demo purposes – can be removed on production -->

        <script src="switchstylesheet/switchstylesheet.js"></script>

           <script>
           (function($) {
               $(document).ready(function(){
                   $(".changecolor").switchstylesheet( { seperator:"color"} );
                   $('.show-theme-options').click(function(){
                       $(this).parent().toggleClass('open');
                       return false;
                   });

                   $('#home-pages').on( 'change', function() {
                       $.ajax({
                           url : $('#home-pages option:selected').val(),
                           success:function(res) {
                               location.href = $('#home-pages option:selected').val();
                           }
                       });
                   });

                    $('#demo-pages').on( 'change', function() {
            			$.ajax({
            				url : $('#demo-pages option:selected').val(),
            				success:function(res) {
            					location.href = $('#demo-pages option:selected').val();
            				}
            			});
            		});

                    $('#header-style').on( 'change', function() {
            			$.ajax({
            				url : $('#header-style option:selected').val(),
            				success:function(res) {
            					location.href = $('#header-style option:selected').val();
            				}
            			});
            		});

                    $('#shop-style').on( 'change', function() {
            			$.ajax({
            				url : $('#shop-style option:selected').val(),
            				success:function(res) {
            					location.href = $('#shop-style option:selected').val();
            				}
            			});
            		});

                    $('#product-category-col').on( 'change', function() {
            			$.ajax({
            				url : $('#product-category-col option:selected').val(),
            				success:function(res) {
            					location.href = $('#product-category-col option:selected').val();
            				}
            			});
            		});

                    $('#single-products').on( 'change', function() {
            			$.ajax({
            				url : $('#single-products option:selected').val(),
            				success:function(res) {
            					location.href = $('#single-products option:selected').val();
            				}
            			});
            		});

                    $('.style-toggle').on( 'click', function() {
            			$(this).parent('.config').toggleClass( 'open' );
            		});
               });
        })(jQuery);
        </script>
        <!-- For demo purposes – can be removed on production : End -->

    </body>
</html>
