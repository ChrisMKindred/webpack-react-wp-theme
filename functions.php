<?php
add_action('wp_enqueue_scripts', 'scripts');

function scripts(){
    $style_path = get_template_directory_uri() . '/dist/style.css';
    $js_path = get_template_directory_uri() . '/dist/bundle.js';
    wp_enqueue_style( 'style1', $style_path, NULL, filemtime(get_template_directory() . '/dist/style.css'), 'all' );    
    wp_enqueue_script( 'bundle', $js_path, NULL, filemtime(get_template_directory() . '/dist/bundle.js'), true );
}
?>