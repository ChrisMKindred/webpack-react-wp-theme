<?php
add_action('wp_enqueue_scripts', 'scripts');

function scripts(){
    // var_dump( filemtime( get_template_directory() . '/dist/style.css') );
    $style_path = get_template_directory_uri() . '/dist/style.css';
    $js_path = get_template_directory_uri() . '/dist/bundle.js';

    wp_enqueue_style( 'style1', $style_path, NULL, time(), 'all' );    
    wp_enqueue_script( 'bundle', $js_path, NULL, time(), false );

}
?>