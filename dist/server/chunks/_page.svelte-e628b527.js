import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from './index2-64ea2edd.js';

const css = {
  code: "nav.svelte-sjam0>ul.svelte-sjam0>li.svelte-sjam0{margin-left:30px;font-size:30px;color:black}#favicon.svelte-sjam0.svelte-sjam0.svelte-sjam0{height:25px;margin-top:-5px;margin-right:5px}main.svelte-sjam0.svelte-sjam0.svelte-sjam0{margin:auto;width:90%;max-width:1100px;margin-top:100px;margin-bottom:100px}.bold.svelte-sjam0.svelte-sjam0.svelte-sjam0{font-family:'Arial Black', Helvetica, sans-serif;font-weight:900}.created.svelte-sjam0.svelte-sjam0.svelte-sjam0{font-size:12px;width:min-content;color:'#eee';margin-top:-20px;float:right}.comment.svelte-sjam0.svelte-sjam0.svelte-sjam0{margin-bottom:20px;border-bottom:#eee 2px solid}.content.svelte-sjam0.svelte-sjam0.svelte-sjam0{margin-bottom:5px}.greybg.svelte-sjam0.svelte-sjam0.svelte-sjam0{background:#eee;padding:20px;border-radius:10px}.whitebg.svelte-sjam0.svelte-sjam0.svelte-sjam0{background:#fff;padding:20px;border-radius:10px}code.svelte-sjam0.svelte-sjam0.svelte-sjam0{max-width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let contents = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-161rure_START -->${$$result.title = `<title>LOW</title>`, ""}<!-- HEAD_svelte-161rure_END -->`, ""}

<nav class="${"svelte-sjam0"}"><ul class="${"svelte-sjam0"}"><li class="${"svelte-sjam0"}"><img id="${"favicon"}" src="${"/logo.png"}" alt="${"Logo"}" class="${"svelte-sjam0"}"><strong class="${"bold svelte-sjam0"}">LOW</strong></li></ul></nav>

<main class="${"svelte-sjam0"}"><h1 class="${"bold svelte-sjam0"}">Our Sites</h1>
	<details open><summary class="${"bold svelte-sjam0"}">DECODE</summary>
		<p><img src="${"./decode_logo.webp"}" alt="${"Decode Logo"}">
			DECODE is a website featuring high quality tutorials on programming and other topics. Our goal
			is to help you learn and grow in your field, whether you&#39;re a beginner or an experienced developer.
			Our tutorials are carefully crafted to provide you with the knowledge and skills you need to succeed.
			Explore our diverse range of topics and start learning today!
		</p></details>
	<details><summary class="${"bold svelte-sjam0"}">HANDY</summary>
		<p><img src="${"./handy_logo.webp"}" alt="${"Handy Logo"}">
			Handy is your go-to source for tutorials on everyday tasks like home improvement and car repairs.
			Our website offers step-by-step guides and videos to help you tackle projects big and small. From
			changing a light bulb to rebuilding an engine, our experts have you covered. We also offer product
			reviews and recommendations to help you make informed decisions when purchasing tools and equipment.
			With Handy, you&#39;ll have the confidence and skills to tackle any project.
		</p></details>
	<details><summary class="${"bold svelte-sjam0"}">TASTE</summary>
		<p><img src="${"./taste_logo.webp"}" alt="${"Taste Logo"}">
			Taste is your ultimate guide to delicious and easy home cooking. Our website offers a wide variety
			of cooking tutorials, covering everything from quick weeknight meals to more elaborate dishes for
			special occasions. Our easy-to-follow recipes and step-by-step instructions make it simple to create
			delicious meals that you and your family will love. We also provide tips and tricks on how to make
			the most out of your ingredients, and how to prepare meals that are healthy and nutritious. We
			understand how important it is to make every meal count, that&#39;s why our website is dedicated to
			providing you with practical and easy recipes that you can make in your own kitchen. Visit Taste
			today and start cooking like a pro!
		</p></details>
	<h1 class="${"bold svelte-sjam0"}">API&#39;s</h1>
	<p>LOW&#39;s API is the perfect solution for website developers looking to add a commenting feature to
		their site. With just a few simple requests, developers can easily integrate a powerful
		commenting system that allows users to post and view comments in real-time.
	</p>
	<p>Using the API is simple. To upload a new comment, developers simply make a POST request to the
		API with the comment data, and it will automatically be added to the comment section of the
		website. To load the comments, developers can make a GET request to the API, and it will return
		all the comments associated with the current URL.
	</p>
	<p>What sets LOW&#39;s API apart is its ability to work with any website, regardless of the platform
		it&#39;s built on. Whether you&#39;re using Wordpress, Shopify, or a custom-built solution, the API can
		be easily integrated to provide a seamless commenting experience for your users.
	</p>
	<p>In summary, LOW&#39;s API is a powerful and easy-to-use solution for adding a commenting feature to
		your website. With just a few requests, developers can quickly and easily integrate a powerful
		commenting system that works with any website.
	</p>
	<div class="${"greybg svelte-sjam0"}"><h3>COMMENTS</h3>
		Below is the output of the api.
		<code class="${"svelte-sjam0"}">${escape(JSON.stringify(data.comments))}</code>
		<br>
		<br>
		<h5>DEMO</h5>
		<div class="${"whitebg svelte-sjam0"}">${each(data.comments, (comment) => {
    return `<div class="${"comment svelte-sjam0"}"><div class="${"content svelte-sjam0"}">${escape(comment.contents)}</div>
						<div class="${"created svelte-sjam0"}">${escape(comment.created)}</div>
					</div>`;
  })}

			<br>
			<form><input type="${"text"}" name="${"content"}"${add_attribute("value", contents, 0)}>
				<input type="${"submit"}" value="${"Submit"}"></form></div></div>
</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e628b527.js.map
