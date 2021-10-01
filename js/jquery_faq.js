// 2. In a HTML structure, create a definition list containing 10 FAQs about national parks.
//
// 3. Add a class to all dd elements named invisible.
//
// 4. Create some CSS rules that sets elements with the invisible class to visibility: hidden;.
//
// 5. Update the page with jQuery to add a link that toggles the class invisible on and off for all dd elements.


$('dd').addClass('invisible');
// $('.invisible').css('visibility', 'hidden');

$('a').click(function(e) {
    e.preventDefault();
    $('dd').toggleClass('invisible');
});


//Traversing

// 2.Under the FAQ, add 3 unordered lists like above.
// Each list should contain a national park name in an h3 element,
// and a ul of 4 facts about the park

// 3.Create a button that, when clicked, makes the last li in each ul have a yellow background.

// 4.When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.

// 5.When any list item is clicked, first li of the parent ul should have a font color of blue.

