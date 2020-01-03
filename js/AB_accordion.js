/**
 * AB_accordion
 * version: 1.1.0
 *
 * accordion() adds accordion functionality to a list
 *
 * @param {string} accordionId - HTML list class name
 */

function accordion(accordionId) {

	// Find items within list
	var headers = document.querySelectorAll('#' + accordionId + ' .header');

	// For each item
	for (var i=0; i<headers.length; i++) {

		// Add event listener to each header to trigger toggleDisplay
		headers[i].addEventListener('click', toggleDisplay);

		// Function used to clear all open sections
		function clearAll(selector) {

			// Set variable for currently selected item
			var currentlyDisplayed = document.querySelectorAll('#' + selector + ' .current-item');

			// Set variable for the body text section inside of our current-item
			var currentSection = document.querySelectorAll('#' + selector + ' .current-item .body')[0];

			// For each currently selected item
			for (var e=0; e<currentlyDisplayed.length; e++) {

				// Remove the class current-item
				currentlyDisplayed[e].classList.remove('current-item');

				// Reset height of current-item body text
				currentSection.setAttribute('style', 'height: 0px')

			}
		}

		// Function used on click to toggle display of child body when clicking child
		function toggleDisplay() {

			var parentClassName = this.parentNode.parentNode.parentNode.parentNode.id;

			// Detect if the section being clicked already appears open
			if (this.parentNode.classList.contains('current-item')) {

				// Clear all open sections
				clearAll(parentClassName);

			// If the section does not already appear open 
			} else {

				// Clear all open sections
				clearAll(parentClassName);

				// Add class current-item to toggle display of body
				this.closest('.item').classList.add('current-item');

				// Set variable for sectionHeight using offsetHeight
				var sectionHeight = document.querySelectorAll('#' + parentClassName + ' .current-item .body-text')[0].offsetHeight;

				// Modify the height of the section within the current-item
				document.querySelectorAll('#' + parentClassName + ' .current-item .body')[0].setAttribute('style', 'height: ' + sectionHeight + 'px');

			}
		}

		// Function used to resize accordion section height for transition
		function resizeAccordion() {

			// Set variable for all accordions on page to iterate through
			var accordions = document.getElementsByClassName('accordion');

			// For each accordion on the page
			for (var a = 0; a<accordions.length; a++) {

				// Set variable for the new height of the section
				var newHeight = document.querySelectorAll('.accordion .current-item .body-text')[a].offsetHeight;

				// Modify the height of the current section to match offsetHeight
				document.querySelectorAll('.accordion .current-item .body')[a].setAttribute('style', 'height: ' + newHeight + 'px');
			}

		}

		// Resize sections on load
		resizeAccordion();

		// Resize sections on resize
		window.onresize = resizeAccordion;
	}
}