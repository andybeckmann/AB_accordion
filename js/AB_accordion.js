/**
 * AB_accordion
 * version: 2.0
 *
 * accordion() adds accordion functionality to a list
 *
 * @param {string} accordionId - HTML list class name
 */

function accordion(accordionId) {

	var headers = document.querySelectorAll('#' + accordionId + ' .header');

	for (var i=0; i<headers.length; i++) {

		headers[i].addEventListener('click', function () {

			var parentClassName = this.parentNode.parentNode.parentNode.parentNode.id;

			if (this.parentNode.classList.contains('current-item')) {

				clearAll(parentClassName);

			} else {

				clearAll(parentClassName);

				this.closest('.item').classList.add('current-item');

				var sectionHeight = document.querySelectorAll('#' + parentClassName + ' .current-item .body-text')[0].offsetHeight;

				document.querySelectorAll('#' + parentClassName + ' .current-item .body')[0].setAttribute('style', 'height: ' + sectionHeight + 'px');
			}
		});

		/**
		 * function: clearAll
		 */
		var clearAll = function (selector) {

			var currentlyDisplayed = document.querySelectorAll('#' + selector + ' .current-item');

			var currentSection = document.querySelectorAll('#' + selector + ' .current-item .body')[0];

			for (var e=0; e<currentlyDisplayed.length; e++) {

				currentlyDisplayed[e].classList.remove('current-item');

				currentSection.setAttribute('style', 'height: 0px');
			}
		};

		/**
		 * function: resizeAccordion
		 */
		var resizeAccordion = function () {

			var accordions = document.getElementsByClassName('accordion');

			for (var a = 0; a<accordions.length; a++) {

				var newHeight = document.querySelectorAll('.accordion .current-item .body-text')[a].offsetHeight;

				document.querySelectorAll('.accordion .current-item .body')[a].setAttribute('style', 'height: ' + newHeight + 'px');
			}

		};
		resizeAccordion();
		window.onresize = resizeAccordion;
	}
}