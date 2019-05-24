<template lang="pug">
	main.main
		// Examples
		exampleVertical
</template>

<script>
  import ExampleVertical from './examples/ExampleVertical'

  import SiteHeader from './components/SiteHeader'
	import SiteFooter from './components/SiteFooter'

	export default {
		name: 'Demo',

		components: {
      SiteHeader,
      SiteFooter,
      ExampleVertical
		}
	}
</script>

<style lang="scss" type="text/scss">
  @import './scss/main.scss';
  body {
    height: 90vh;
    overflow: hidden;
}
</style>
