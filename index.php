<?php get_header(); ?>
    <div class="container">
        <div class="row">
            <?php 
            if ( have_posts() ) {
                while ( have_posts() ) {
                    the_post(); 
                    the_title('<h2>','</h2>');
                    the_content();
                } // end while
            } // end if
            ?>
        </div>
    </div>
<?php get_footer(); ?>