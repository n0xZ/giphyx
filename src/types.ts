// Generated by https://quicktype.io

export interface Category {
	data: Data[]
	pagination: Pagination
	meta: Meta
}
export interface SearchResultsI {
	id: null
	result: {
		data: {
			data: GIF[]
			meta: Meta
		}
		type: 'data'
	}
}
export interface Data {
	name: string
	name_encoded: string
	subcategories: Subcategory[]
	gif: GIF
}

export interface GIF {
	type: Type
	id: string
	url: string
	slug: string
	bitly_gif_url: string
	bitly_url: string
	embed_url: string
	username: string
	source: string
	title: string
	rating: Rating
	content_url: string
	source_tld: string
	source_post_url: string
	is_sticker: number
	import_datetime: Date
	trending_datetime: Date | TrendingDatetimeEnum
	create_datetime: Date
	update_datetime: Date
	images: Images
	user?: User
}

export interface Images {
	'480w_still': The480_WStill
	fixed_width_still: The480_WStill
	fixed_height_downsampled: FixedHeight
	preview_gif: The480_WStill
	preview: DownsizedSmall
	fixed_height_small: FixedHeight
	downsized: The480_WStill
	fixed_width_downsampled: FixedHeight
	fixed_width: FixedHeight
	downsized_still: The480_WStill
	downsized_medium: The480_WStill
	original_mp4: DownsizedSmall
	downsized_large: The480_WStill
	preview_webp: The480_WStill
	original: FixedHeight
	original_still: The480_WStill
	fixed_height_small_still: The480_WStill
	fixed_width_small: FixedHeight
	looping: Looping
	downsized_small: DownsizedSmall
	fixed_width_small_still: The480_WStill
	fixed_height_still: The480_WStill
	fixed_height: FixedHeight
	hd?: DownsizedSmall
}

export interface The480_WStill {
	height: string
	size?: string
	url: string
	width: string
}

export interface DownsizedSmall {
	height: string
	mp4: string
	mp4_size: string
	width: string
}

export interface FixedHeight {
	height: string
	mp4?: string
	mp4_size?: string
	size: string
	url: string
	webp: string
	webp_size: string
	width: string
	frames?: string
	hash?: string
}

export interface Looping {
	mp4: string
	mp4_size: string
}

export enum Rating {
	G = 'g',
	PG = 'pg',
}

export enum TrendingDatetimeEnum {
	The00000000000000 = '0000-00-00 00:00:00',
}

export enum Type {
	GIF = 'gif',
	Text = 'text',
}

export interface User {
	avatar_url: string
	banner_image: string
	banner_url: string
	profile_url: string
	username: string
	display_name: string
	description: string
	is_verified: boolean
	website_url: string
	instagram_url: string
}

export interface Subcategory {
	name: string
	name_encoded: string
}

export interface Meta {
	msg: string
	status: number
	response_id: string
}

export interface Pagination {
	total_count: number
	count: number
}
