<template lang="pug">
	section.section.section--demo-1
		div.container
			div.row
				div.col-xs-12
					h2.section__title #[strong #0] demo
						code-pen(id="EJRNMM")
					p.section__description vue-agile vertical with default settings and minimal styles

			div.row
				div.col-xs-12.agile-wrap
					agile(pause-on-hover pause-on-dots-hover vertical)
						div.slide(v-for="n in 6", :key="n", :class="`slide--${n}`")
							h3 {{ n }}

						template(slot="prevButton")
							i.fas.fa-chevron-left

						template(slot="nextButton")
							i.fas.fa-chevron-right

</template>


<script>
	export default {
		name: 'Example1'
	}
</script>

<style lang="scss">
.agile-wrap {
  height: 200px;
}
</style>


<style lang="sass">
	.section--demo-1
		.agile
			&__actions
				margin-top: -150px

			&__nav-button
				background: transparent
				border: none
				color: #ccc
				cursor: pointer
				font-size: 24px
				transition-duration: .3s

				&:hover
					color: #888
			&__dots
				margin-right: -200px

			&__dot
				margin: 5px 10px

				button
					background-color: #eee
					border: none
					border-radius: 50%
					cursor: pointer
					display: block
					height: 10px
					font-size: 0
					line-height: 0
					margin: 0
					padding: 0
					transition-duration: .3s
					width: 10px

				&--current,
				&:hover
					button
						background-color: #888

		// Slides styles
		.slide
			align-items: center
			color: #fff
			display: flex
			justify-content: center

			h3
				font-size: 32px
				font-weight: 300

		// Slides backgrounds
		$colors: #f1c40f #e67e22 #e74c3c #9b59b6 #3498db #2ecc71

		@for $i from 1 through length($colors)
			$color: nth($colors, $i)

			.slide--#{$i}
				background-color: $color
</style>
