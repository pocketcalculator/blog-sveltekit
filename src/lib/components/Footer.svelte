<script>
	import { siteAuthor } from '$lib/config';
</script>

<footer>
	<div class="footer__container">
		<p>&copy;{new Date().getFullYear()} {siteAuthor}.</p>
		<nav>
			<ul>
				<li>
					<a href="/api/rss.xml" data-sveltekit-reload><i class='bx bx-rss'></i></a>
				</li>
				<li>
					<a href="https://www.pocketcalculator.io"><i class='bx bx-home' ></i></a>
				</li>
				<li>
					<a href="https://github.com/pocketcalculator" title="GitHub"><i class="bx bxl-github"></i></a>
				</li>
			</ul>
		</nav>
	</div>
</footer>
