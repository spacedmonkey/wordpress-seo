<?php
/**
 * Homepage Builder for the indexables.
 *
 * @package Yoast\YoastSEO\Builders
 */

namespace Yoast\WP\SEO\Builders;

use Yoast\WP\SEO\Helpers\Options_Helper;
use Yoast\WP\SEO\Helpers\Url_Helper;

/**
 * Formats the homepage meta to indexable format.
 */
class Indexable_Home_Page_Builder {
	use Indexable_Social_Image_Trait;

	/**
	 * @var Options_Helper
	 */
	private $options;

	/**
	 * @var Url_Helper
	 */
	private $url;

	/**
	 * Indexable_Home_Page_Builder constructor.
	 *
	 * @param Options_Helper $options The options helper.
	 * @param Url_Helper     $url     The url helper.
	 */
	public function __construct(
		Options_Helper $options,
		Url_Helper $url
	) {
		$this->options = $options;
		$this->url     = $url;
	}

	/**
	 * Formats the data.
	 *
	 * @param \Yoast\WP\SEO\Models\Indexable $indexable The indexable to format.
	 *
	 * @return \Yoast\WP\SEO\Models\Indexable The extended indexable.
	 */
	public function build( $indexable ) {
		$indexable->object_type      = 'home-page';
		$indexable->title            = $this->options->get( 'title-home-wpseo' );
		$indexable->breadcrumb_title = $this->options->get( 'breadcrumbs-home' );
		$indexable->permalink        = $this->url->home();
		$indexable->description      = $this->options->get( 'metadesc-home-wpseo' );
		if ( empty( $indexable->description ) ) {
			$indexable->description = \get_bloginfo( 'description' );
		}

		$indexable->is_robots_noindex = \get_option( 'blog_public' ) === '0';

		$indexable->open_graph_title       = $this->options->get( 'og_frontpage_title' );
		$indexable->open_graph_image       = $this->options->get( 'og_frontpage_image' );
		$indexable->open_graph_image_id    = $this->options->get( 'og_frontpage_image_id' );
		$indexable->open_graph_description = $this->options->get( 'og_frontpage_desc' );

		// When the image or image id is set.
		if ( $indexable->open_graph_image || $indexable->open_graph_image_id ) {
			$indexable->open_graph_image_source = 'set-by-user';

			$this->set_open_graph_image_meta_data( $indexable );
		}

		return $indexable;
	}
}
