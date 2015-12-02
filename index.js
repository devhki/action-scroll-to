// @todo add unique
import $ from 'jquery';
import tweenMax from 'gsap';

class ActionScrollTo {

	constructor(link, animationTime = 400) {
		this.link = link;
		this.animationTime = animationTime;
		this.$link = $(link);

		this.$link.on('click.' + ActionScrollTo.MODULE_NAME, (e) => {
			let $target = $(this.$link.attr('href'));
			tweenMax.to('html, body', this.animationTime / 1000, {
				scrollTop : $target.offset().top,
				ease : Quart.easeInOut
			});
			return false;
		});
	}

	// Public methods

	destroy() {
		this.$link.off('.' + ActionScrollTo.MODULE_NAME);
	}
}

ActionScrollTo.MODULE_NAME = 'a-scroll-to';

export default ActionScrollTo;

export function autoInit() {
	let instances = [];

	$('.' + ActionScrollTo.MODULE_NAME).each((i, item) => {
		instances.push(new ActionScrollTo(item));
	});

	return instances;
};
