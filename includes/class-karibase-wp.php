<?php
/**
 * Karibase WP Helper
 *
 * Exposes shared helpers for team plugins: enqueue, asset version, and common
 * component renderers. Matches the convention used in intranet and ARC plugins.
 *
 * @package Karibase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Karibase_WP {

	private static $instance = null;

	private function __construct() {
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_frontend' ) );
	}

	public static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Enqueue Karibase admin assets. Other plugins can call this on their admin pages.
	 */
	public function enqueue_admin() {
		wp_enqueue_style(
			'karibase',
			KARIBASE_URL . 'src/styles/karibase.css',
			array(),
			karibase_asset_version( 'src/styles/karibase.css' )
		);
		wp_enqueue_script(
			'karibase',
			KARIBASE_URL . 'src/js/karibase.js',
			array(),
			karibase_asset_version( 'src/js/karibase.js' ),
			true
		);
	}

	/**
	 * Enqueue Karibase frontend assets.
	 */
	public function enqueue_frontend() {
		wp_enqueue_style(
			'karibase',
			KARIBASE_URL . 'src/styles/karibase.css',
			array(),
			karibase_asset_version( 'src/styles/karibase.css' )
		);
		wp_enqueue_script(
			'karibase',
			KARIBASE_URL . 'src/js/karibase.js',
			array(),
			karibase_asset_version( 'src/js/karibase.js' ),
			true
		);
	}

	/**
	 * Loads a generated JSON registry from src/config/ (cached per request).
	 * Registries are written by extract-plugin-styles.js / build-arc-themes.js.
	 *
	 * @param string $name Registry basename, e.g. 'plugins' or 'arc-templates'.
	 * @return array
	 */
	private static function registry( $name ) {
		static $cache = array();
		if ( isset( $cache[ $name ] ) ) {
			return $cache[ $name ];
		}
		$file = KARIBASE_DIR . 'src/config/' . $name . '.json';
		$data = is_readable( $file ) ? json_decode( (string) file_get_contents( $file ), true ) : null;
		$cache[ $name ] = is_array( $data ) ? $data : array();
		return $cache[ $name ];
	}

	/**
	 * Enqueue a generated ARC template kit theme, e.g. 'nomad' or 'vitalia'.
	 * Theme files live in src/styles/themes/karibase-theme-{slug}.css and are
	 * rebuilt from the plugin manifest with `npm run build:themes`.
	 *
	 * @param string $slug Kit slug.
	 * @return bool Whether the theme exists and was enqueued.
	 */
	public function enqueue_theme( $slug ) {
		$slug  = sanitize_key( $slug );
		$kits  = self::registry( 'arc-templates' );
		$theme = isset( $kits['templates'][ $slug ] ) ? $kits['templates'][ $slug ] : null;
		if ( ! $theme ) {
			return false;
		}
		$rel = 'src/styles/' . $theme['theme'];
		wp_enqueue_style(
			'karibase-theme-' . $slug,
			KARIBASE_URL . $rel,
			array( 'karibase' ),
			karibase_asset_version( $rel )
		);
		return true;
	}

	/**
	 * Enqueue every authored stylesheet extracted from a team plugin
	 * (vendor duplicates and PHP-interpolated inline blocks are skipped).
	 *
	 * @param string $slug Plugin slug, e.g. 'ix-projects'.
	 * @return int Number of styles enqueued.
	 */
	public function enqueue_plugin_styles( $slug ) {
		$plugins = self::registry( 'plugins' );
		$plugin  = isset( $plugins['plugins'][ $slug ] ) ? $plugins['plugins'][ $slug ] : null;
		if ( ! $plugin ) {
			return 0;
		}
		$files   = array_merge( (array) $plugin['styles'], (array) $plugin['inlineStyles'] );
		$count   = 0;
		foreach ( $files as $i => $style ) {
			$dynamic = ! empty( $style['dynamic'] );
			if ( 'source' !== $style['kind'] && ! ( 'inline' === $style['kind'] && ! $dynamic ) ) {
				continue;
			}
			$rel = 'src/styles/' . $style['file'];
			wp_enqueue_style(
				'karibase-plugin-' . $slug . '-' . $i,
				KARIBASE_URL . $rel,
				array( 'karibase' ),
				karibase_asset_version( $rel )
			);
			$count++;
		}
		return $count;
	}

	/**
	 * Helper for inline HTML attributes.
	 */
	public function attr( $attrs ) {
		$html = '';
		foreach ( $attrs as $key => $value ) {
			$html .= ' ' . esc_attr( $key ) . '="' . esc_attr( $value ) . '"';
		}
		return $html;
	}

	/**
	 * Render a button.
	 */
	public function button( $label, $args = array() ) {
		$args = wp_parse_args( $args, array(
			'type'    => 'button',
			'variant' => 'primary',
			'class'   => '',
			'attrs'   => array(),
		) );

		$variant_map = array(
			'primary'   => 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
			'secondary' => 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
			'success'   => 'bg-success-600 text-white hover:bg-success-700 focus:ring-success-500',
			'danger'    => 'bg-danger-600 text-white hover:bg-danger-700 focus:ring-danger-500',
			'warning'   => 'bg-warning-500 text-white hover:bg-warning-600 focus:ring-warning-500',
			'info'      => 'bg-info-600 text-white hover:bg-info-700 focus:ring-info-500',
			'ghost'     => 'bg-transparent text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
		);

		$base = 'inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2';
		$classes = $base . ' ' . ( $variant_map[ $args['variant'] ] ?? $variant_map['primary'] ) . ' ' . $args['class'];
		$attrs   = $this->attr( $args['attrs'] );

		return '<button type="' . esc_attr( $args['type'] ) . '" class="' . esc_attr( $classes ) . '"' . $attrs . '>' . esc_html( $label ) . '</button>';
	}

	/**
	 * Render an alert box.
	 */
	public function alert( $message, $type = 'info', $args = array() ) {
		$args = wp_parse_args( $args, array(
			'class' => '',
			'attrs' => array(),
		) );

		$types = array(
			'info'    => 'bg-info-50 text-info-800 border-info-200',
			'success' => 'bg-success-50 text-success-800 border-success-200',
			'warning' => 'bg-warning-50 text-warning-800 border-warning-200',
			'danger'  => 'bg-danger-50 text-danger-800 border-danger-200',
		);

		$classes = 'p-4 mb-4 rounded-md border ' . ( $types[ $type ] ?? $types['info'] ) . ' ' . $args['class'];
		$attrs   = $this->attr( $args['attrs'] );

		return '<div class="' . esc_attr( $classes ) . '"' . $attrs . '>' . esc_html( $message ) . '</div>';
	}

	/**
	 * Render a card.
	 */
	public function card( $content, $args = array() ) {
		$args = wp_parse_args( $args, array(
			'title' => '',
			'class' => '',
			'attrs' => array(),
		) );

		$classes = 'bg-white rounded-lg shadow-md p-6 ' . $args['class'];
		$attrs   = $this->attr( $args['attrs'] );
		$html    = '<div class="' . esc_attr( $classes ) . '"' . $attrs . '>';

		if ( ! empty( $args['title'] ) ) {
			$html .= '<h2 class="text-xl font-semibold mb-4">' . esc_html( $args['title'] ) . '</h2>';
		}

		$html .= $content;
		$html .= '</div>';

		return $html;
	}

	/**
	 * Render a badge.
	 */
	public function badge( $label, $type = 'primary', $args = array() ) {
		$args = wp_parse_args( $args, array(
			'class' => '',
			'attrs' => array(),
		) );

		$types = array(
			'primary'   => 'bg-primary-100 text-primary-800',
			'secondary' => 'bg-gray-100 text-gray-800',
			'success'   => 'bg-success-100 text-success-800',
			'warning'   => 'bg-warning-100 text-warning-800',
			'danger'    => 'bg-danger-100 text-danger-800',
			'info'      => 'bg-info-100 text-info-800',
		);

		$classes = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ' . ( $types[ $type ] ?? $types['primary'] ) . ' ' . $args['class'];
		$attrs   = $this->attr( $args['attrs'] );

		return '<span class="' . esc_attr( $classes ) . '"' . $attrs . '>' . esc_html( $label ) . '</span>';
	}

	/**
	 * Render a text input.
	 */
	public function input( $name, $value = '', $args = array() ) {
		$args = wp_parse_args( $args, array(
			'type'        => 'text',
			'label'       => '',
			'placeholder' => '',
			'class'       => '',
			'attrs'       => array(),
		) );

		$classes = 'w-full px-3 py-2 border border-gray-300 rounded-md text-base transition focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 ' . $args['class'];
		$attrs   = $this->attr( $args['attrs'] );

		$html = '';
		if ( ! empty( $args['label'] ) ) {
			$html .= '<label class="block text-sm font-medium mb-1">' . esc_html( $args['label'] ) . '</label>';
		}

		$html .= '<input type="' . esc_attr( $args['type'] ) . '" name="' . esc_attr( $name ) . '" value="' . esc_attr( $value ) . '"';

		if ( ! empty( $args['placeholder'] ) ) {
			$html .= ' placeholder="' . esc_attr( $args['placeholder'] ) . '"';
		}

		$html .= ' class="' . esc_attr( $classes ) . '"' . $attrs . ' />';

		return $html;
	}
}
