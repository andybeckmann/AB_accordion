/**
 * AB_accordion
 * version: 1.0.0
 *
 * accordion() adds accordion functionality to a list
 *
 * @param {string} listClassName - HTML list class name
 */

function accordion(listClassName) {

	// Find items within list
	var headers = document.querySelectorAll('.' + listClassName + ' .header');

	// For each item
	for (var i=0; i<headers.length; i++) {

		// Add event listener to each header to trigger toggleDisplay
		headers[i].addEventListener('click', toggleDisplay);

		// Toggle display of child body when clicking child
		function toggleDisplay() {

			// Set variable for currently selected item
			var currentlyDisplayed = document.querySelectorAll('.current-item');

			// For each currently selected item
			for (var e=0; e<currentlyDisplayed.length; e++) {

				// Remove the class current-item
				currentlyDisplayed[e].classList.remove('current-item');
			}

			// Add class current-item to toggle display of body
			this.closest('.item').classList.add('current-item');
		}

	}

}