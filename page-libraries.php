<?php
/**
 * Template Name: Libraries
 */

	$twitter_photo = '';
	$twitter_title = '';
	$twitter_description = '';
	$meta = twitter_card($twitter_photo, $twitter_title, $twitter_description);

	$styles = "<link rel='stylesheet' href='" . get_stylesheet_directory_uri() . "/immersive-stories/css/libraries/animsition.min.css' type='text/css' media='all' /><link rel='stylesheet' href='" . get_stylesheet_directory_uri() . "/campaign/css/header.css' type='text/css' media='all' /><link rel='stylesheet' href='" . get_stylesheet_directory_uri() . "/immersive-stories/css/common.css' type='text/css' media='all' /><link rel='stylesheet' href='" . get_stylesheet_directory_uri() . "/immersive-stories/css/libraries.css' type='text/css' media='all' />";
	$scripts = "<script src='" . get_stylesheet_directory_uri() . "/campaign/js/animationLibraries.min.js' type='text/javascript'></script><script src='" . get_stylesheet_directory_uri() . "/immersive-stories/js/libraries.min.js' type='text/javascript'></script>";
	$scripts .= "<script src='" . get_stylesheet_directory_uri() . "/immersive-stories/js/libraries/animsition.min.js' type='text/javascript'></script>";
	$storyCodes = '';
	$storyAppeal = 'Support undergraduate research and the future of invaluable library collections by contributing to the University Libraries.';
	get_header( "campaign-v2" );


?>

<div id="immersive-body">
	<section class="intro" id="intro-vid">
		<div id="version-switch">
			<button id="korean" href="libraries" class="animsition-link" data-animsition-out-class="fade-out" data-animsition-out-duration="1000">View Korean Version</button>
		</div>
		<button id="pause">Pause</button>
		<video  autoplay loop muted playsinline class="media" data-object-fit poster="<?php echo get_stylesheet_directory_uri() . '/immersive-stories/img/built-env/header.jpg' ?>" class="fullscreen-bg__video">
			<source src="<?php echo get_stylesheet_directory_uri() . '/immersive-stories/video/built-env/header-slow.mp4' ?>" type="video/mp4">
		</video>

		<div class="intro-body">
			<div class="row">
				<div class="col-md-7 col-lg-5 col-md-offset-1 col-xs-11 col-lg-offset-2 col-xs-offset-1" id='intro-text'>
					<h1>The heart <br>of research</h1>
					<span class="udub-slant"><span></span></span>
					<p>For help with her senior thesis on Korean dramas, Kristy Kwon reached out to the UW’s East Asia Library. What she found there opened up her world.</p>
				</div>
			</div>
		</div>
		<section class="scrollit read-more">
			<p>Scroll Down</p>
			<div class="mouse">
				<div class="scroll"></div>
			</div>
		</section>
	</section>

	<main id="main_content">

		<!-- Kristy Intro + Slideshow + Libraries Stats x 3 -->
		<section class="text-block transparent no-pad">
			<div class="container">
				<div class="row">
					<div class="col-md-10 col-md-offset-1 copy">
						<div class="row">
							<div class="col-md-6">

								<p><a href="libraries" class="animsition-link" data-animsition-out-class="fade-out" data-animsition-out-duration="1000">When Kristy Kwon</a> her family moved from South Korea to Kent, Washington. Until last year, she hadn’t had the chance to go back — so when it came time to plan her senior honors thesis at the University of Washington, the economics and international studies major knew she wanted to study the homeland she’d always heard about.</p>

								<p>But an entire country isn’t a thesis topic. How could she narrow it down? Kwon found her answer at the <a href="http://www.lib.washington.edu/east-asia">East Asia Library</a>, part of the <a href="http://www.lib.washington.edu/">University Libraries</a> system.</p>

								<p>Undergraduate research is a hallmark of the Husky Experience: Four out of five UW undergraduates participate in research, creative work or scholarship. With 16 locations stretching from Tacoma to Friday Harbor, University Libraries provides a multimillion-volume print and digital collection to fuel all that research.</p>

								<p>The Libraries also offers an even more valuable resource for students: librarians and catalogers who have deep knowledge of wide-ranging subjects — and who can help undergraduates navigate each step of the research process.</p>


							</div>                 
							<div class="col-md-5 col-md-offset-1">

								<div id="eng-slideshow" class="library-slideshow">
									<div><img data-lazy="<?php echo get_stylesheet_directory_uri() . '/immersive-stories/img/libraries/1600x1128.png' ?>" alt="ADD ALT TEXT">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>

									<div><img data-lazy="<?php echo get_stylesheet_directory_uri() . '/immersive-stories/img/libraries/1600x1128.png' ?>" alt="ADD ALT TEXT">
									<p>Sed fringilla, erat a venenatis volutpat, nunc nibh mollis tortor, sit amet suscipit tortor ante eu elit.</p></div>

									<div><img data-lazy="<?php echo get_stylesheet_directory_uri() . '/immersive-stories/img/libraries/1600x1128.png' ?>" alt="ADD ALT TEXT">
									<p>Mauris consequat risus eu orci blandit dignissim. Ut dignissim mollis urna, a vestibulum metus congue et. Pellentesque mattis auctor egestas.</p></div>    

								</div>

							</div> 
						</div>
						<div class="row">
							<div class="col-md-10 col-md-offset-1">
								<div class="col-md-4">
									<img src="<?php echo get_stylesheet_directory_uri() ?>/immersive-stories/img/libraries/707x707.png" alt="ADD ALT TEXT" id="gif1" class="img-responsive" />
								</div>
								<div class="col-md-4">
									<img src="<?php echo get_stylesheet_directory_uri() ?>/immersive-stories/img/libraries/707x707.png" alt="ADD ALT TEXT" id="gif2" class="img-responsive" />
								</div>
								<div class="col-md-4">
									<img src="<?php echo get_stylesheet_directory_uri() ?>/immersive-stories/img/libraries/707x707.png" alt="ADD ALT TEXT" id="gif3" class="img-responsive" />
								</div>
							</div>
						</div>
					</div>
				</div> 
			</div>   
		</section>


		<!-- Interview Video -->
		<iframe width="2560" height="1440" src="https://www.youtube.com/embed/Uq4PUmE06Pc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>



		<!-- Turning TV into a cultural lens + Pull quote + Slideshow -->
		<section class="text-block transparent no-pad">
			<div class="container">
				<div class="row">
					<div class="col-md-10 col-md-offset-1 copy">
						<div class="row">
							<div class="col-md-6">
								<h2>Turning TV into a cultural lens</h2>
								<p>“I’ve always wanted to research Korea because I feel a strong sense of pride for my country, but I’ve never had the chance to explore it academically,” says Kwon. So she had an easy time deciding on a direction for her honors thesis: “Of course, I chose South Korea.”</p>

								<p>But the next step wasn’t as simple, and Kwon struggled to narrow down her research topic. Then her thesis adviser, Deborah Porter, an associate professor at the Jackson School of International Studies, suggested that Kwon use Korean television dramas — or “K-dramas” — as a lens through which to study women’s roles in Korean society.</p> 

								<p>Similar to American soap operas, K-dramas feature idealized characters on quests for true love. Nearly 67 percent of Korea watched the finale of the late ’90s drama “You and I,” and audiences from Spain to Zimbabwe have been captivated by these hugely popular shows: “Dae Jang Geum” (“Jewel in the Palace”), about an orphan who becomes the first female royal physician, was distributed to 91 countries.</p> 

								<p>“Dramas are a huge cultural thing in Korea,” says Kwon. “I grew up watching them. And since I was born there, I feel a sense of belonging when I watch the shows.”</p>

								<p>But in 2016, while watching an episode of “Father Is Strange,” Kwon grew frustrated. “Usually in Korean society, the eldest son is preferred,” she explains. “This drama focused on a woman who graduated from a prestigious university and became a very successful lawyer, while her brother did not.” Yet the brother’s misbehavior was treated lightly, Kwon says, while the daughter’s resulted in harsher punishment. This imbalance gave her pause.</p>

								<p>South Korean women have made huge strides toward equality, particularly in the workplace. Even so, many young professional women watch dramas that depict more conservative gender roles.</p>

								<p>For her thesis project, Kwon decided to explore this apparent paradox, as well as its economic and social implications. Her current hypothesis argues that when modern Korean women watch K-dramas, they differentiate the conservative world of the shows from the more progressive reality in which they were raised and educated.</p>


							</div>                 
							<div class="col-md-5 col-md-offset-1">
								<blockquote><span>&ldquo;</span>I’ve always wanted to research Korea because I feel a strong sense of pride for my country, but I’ve never had the chance to explore it academically.<span>&rdquo;</span></blockquote>
								<p class="attribute">Kristy Kwon, ’18</p>

								<div id="portrait-slideshow" class="library-slideshow">
				                   <div><img data-lazy="<?php echo get_stylesheet_directory_uri() . '/immersive-stories/img/libraries/1600x1128.png' ?>" alt="ADD ALT TEXT">
				                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>

				                   <div><img data-lazy="<?php echo get_stylesheet_directory_uri() . '/immersive-stories/img/libraries/1600x1128.png' ?>" alt="ADD ALT TEXT">
				                    <p>Sed fringilla, erat a venenatis volutpat, nunc nibh mollis tortor, sit amet suscipit tortor ante eu elit.</p>
				                  </div>
				                
				                   <div><img data-lazy="<?php echo get_stylesheet_directory_uri() . '/immersive-stories/img/libraries/1600x1128.png' ?>" alt="ADD ALT TEXT">
				                      <p>Mauris consequat risus eu orci blandit dignissim. Ut dignissim mollis urna, a vestibulum metus congue et. Pellentesque mattis auctor egestas.</p></div>    

				                </div>

							</div> 
						</div>
					</div>
				</div> 
			</div>   
		</section>


		<!-- Kdrama stats? -->
		<section>
			<img src="<?php echo get_stylesheet_directory_uri() ?>/immersive-stories/img/libraries/kdrama-stats-placeholder.png" alt="ADD ALT TEXT" class="img-responsive" />
		</section>


		<!-- Going right to the source Text -->
		<section class="text-block transparent no-pad">
			<div class="container">
				<div class="row">
					<div class="col-md-10 col-md-offset-1 copy">
						<h2>Going right to the source</h2>
						<p>After settling on a hypothesis, Kwon began to read existing studies on K-drama consumption. Many were available only through Korean-language databases, which most students can’t access or navigate on their own. So Kwon reached out to the East Asia Library.</p>

						<p>Located on the UW campus in Seattle, the East Asia Library houses more than 770,000 volumes — including the second-largest Korean-language collection in the country.</p>

						<p>Hyokyoung Yi, the Korean Studies librarian, began working closely with Kwon. “From the first meeting, I could see her great curiosity and passion for her paper,” Yi says. Together, they navigated relevant databases to find the material Kwon needed. </p>

						<p>“Even though it took hours, Ms. Yi was so passionate about helping me,” says Kwon. “I was really thankful for that dedication.”</p>

						<p>After combing through the available materials, Kwon decided to collect her own data by traveling to Seoul to interview South Korean women. The trip would also give her a chance to reunite with her grandmother and aunts, whom she hadn’t seen in more than a decade.</p>

					</div>
				</div> 
			</div>   
		</section>


		<!-- Giving Widget -->
		<section class="text-block giving-widget-promoted">
			<div class="row">
				<div class="first-col col-md-5 col-md-offset-4 col-sm-8 col-sm-offset-1 col-xs-offset-1 col-xs-10">
					<div>             
						<h2 class="headline-gold">Advance undergraduate research</h2>
						<p>By supporting University Libraries, you can help students like Kristy Kwon access the resources they need to do research that makes an impact.</p>
					</div>
				</div>
				<div class="col-md-2 col-md-offset-1 col-sm-3 col-xs-offset-1 ">
					<div>                                 
						<div class="boundless-button sm dark give"><span><a id="immersive-give-promoted" data-fund="CPEDGE" href="#giving-widget-promoted">Give now</a></span></div>
						<button id="close-give">Close</button>
					</div>
				</div>
			</div>
			<div id="immersive-give-iframe-promoted"></div>
		</section>


		<!-- Returning to her roots Text + Breakout Quote + Putting her thesis to the test Text -->
		<section class="text-block transparent no-pad">
			<div class="container">
				<div class="row">
					<div class="col-md-10 col-md-offset-1 copy">
						<h2>Returning to her roots</h2>
						<p>To make the most of her time in Seoul, Kwon wanted to improve her spoken and written Korean — and make sure that her research methods wouldn’t clash with Korean societal norms.</p>

						<p>Yi, who travels to Korea frequently, was happy to help prepare Kwon for the cultural aspects of her trip. She also introduced Kwon to Hwasook Nam, the James B. Palais Endowed Associate Professor in Korea Studies at the Jackson School and the Department of History. Nam connected Kwon with a colleague at Ewha Womans University in Seoul who invited Kwon to visit her classroom and recruit interview participants. </p>

						<p>By September 2017, Kwon was ready to return to South Korea. She spent two weeks interviewing women for her research and visiting with her family — and thanks to the help she received from Nam and Yi, all her conversations went smoothly.</p>

						<blockquote class="breakout-quote">By September 2017, Kwon was ready to return to South Korea. She spent two weeks interviewing women for her research and visiting with her family — and thanks to the help she received from Nam and Yi, all her conversations went smoothly.</blockquote>

						<h2>Putting her thesis to the test</h2>
						<p>There was a lot riding on the trip: As she analyzes her interviews over the next few months, Kwon might find that they disprove her hypothesis entirely.</p>

						<p>That may sound defeating, but Kwon’s thesis adviser believes it can create another opportunity. “I love it when that happens, because it means we’re on to something,” says Porter. “Kristy is really seeing how we let data speak to us.”</p>

						<p>Kwon will defend her thesis in the spring. After graduation, she hopes to earn a J.D. in immigrant or criminal law and study the impact of U.S. government policies on the lives of marginalized communities. </p>
						
						<p>She credits the East Asia Library with providing crucial help for her work, as well as the connections to pursue a topic so close to her heart. “I want to use this research to show that although South Korea created a lot of laws to ensure positive change for women, it’s not enough,” Kwon says. “We need to keep having these conversations.”</p>
						
						<p>Through University Libraries, students like Kwon gain access to knowledge in every format from everywhere around the globe — and the journey that begins with undergraduate research can end up changing the world.</p>
					</div>
				</div> 
			</div>   
		</section>


		<!-- Donor Appeal Section w/ background + Video -->
		<section class="text-block grey no-pad donor-appeal">
			<div class="container">
				<div class="row">
					<div class="col-md-10 col-md-offset-1 copy">
						<h2>Preserving a historic collection</h2>
						<p>The extensive Korean Collection that Kristy Kwon used for her research is maintained in large part because of donors like Heija Ryoo, who also works as a cataloger at the East Asia Library.</p>

						<p>When she noticed a glut of backlogged items in the Korean Collection, Ryoo saw an opportunity. In partnership with librarian Hyokyoung Yi, she established the <a href="http://www.lib.washington.edu/support/priorities/other-needs/korean-cataloging-project">Korean Cataloging Fund</a>. Supported by generous local donors, the fund enables the East Asia Library to enter backlogged items into the University Libraries online database and WorldCat, an international bibliographic database. These resources are now available to students, researchers, faculty and other users worldwide for the first time in decades.</p>

						<p>The library’s efforts are already attracting attention: Visitors from the National Library of Korea have come to see if the collection includes any treasures that have been hiding in plain sight.</p>

						<p>“It’s an asset for people to know that this collection will be kept for the next generation,” Ryoo says. “Second-generation, third-generation Korean Americans will be able to access these resources, many of which are not available anywhere else in the U.S.”</p>

						<iframe width="1308" height="700" src="https://www.youtube.com/embed/DV-b0YrwWi0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
					</div>
				</div> 
			</div>
			<div id="version-switch">
				<button id="korean" href="libraries" class="animsition-link" data-animsition-out-class="fade-out" data-animsition-out-duration="1000">View Korean Version</button>
			</div>
		</section>

	</main>

</div>
<script type="text/javascript">
	$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 500,
    outDuration: 500,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});
</script>
<?php
	include(locate_template('include-giving.php'));
	get_template_part('footer','campaign-v2');
?>