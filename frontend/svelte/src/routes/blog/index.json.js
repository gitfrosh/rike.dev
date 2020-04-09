import posts from './_posts.js';

let contents;

if (posts.length > 0) {
	contents = JSON.stringify(posts.map(post => {
		return {
			title: post.title,
			slug: post.slug
		};
	}));
}

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
