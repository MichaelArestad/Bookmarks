<?php
/**
 * The template part for displaying results in search pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package Bookmarks
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="entry-content">
		<?php
		/* translators: %s: Name of current post */
		the_content( sprintf(
		__( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'bookmarks' ),
		the_title( '<span class="screen-reader-text">"', '"</span>', false )
		) );
		?>

		<?php
		wp_link_pages( array(
			'before' => '<div class="page-links">' . __( 'Pages:', 'bookmarks' ),
			'after'  => '</div>',
			) );
			?>
		</div><!-- .entry-content -->

		<footer class="entry-footer">
			<?php bookmarks_entry_footer(); ?>
		</footer><!-- .entry-footer -->
</article><!-- #post-## -->
