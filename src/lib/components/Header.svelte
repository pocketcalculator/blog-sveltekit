<script>
	import MainNav from './MainNav.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteTitle } from '$lib/config';

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	};
</script>

<header>
	<div class="header__container">
		<div class="header__body">
			<div class="header__leftside">
				<a href="/" class="site-title">
					{siteTitle}
				</a>
			</div>
			<div class="header__rightside">
				<HamburgerMenuButton />
				<MainNav />
			</div>
		</div>
	</div>
</header>
