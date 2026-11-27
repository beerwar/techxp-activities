Diwata Pares: Food Stall Feature

- `header` contains the page title and navigation.
- `nav` groups the page navigation links.
- `main` contains the main page content.
- Each `article` is a standalone topic: the food highlights and the business story.
- `section` groups related content under its own heading.
- `div` groups the food gallery figures as one layout grouping; it has no special semantic meaning.
- `aside` contains related visitor information.
- `footer` contains the educational-use notice.

Week 3 Lesson 1 - Task 3: Break it, watch the repair, then validate Challenge

1. Delete one </div> in the middle of the page. Compare View Source with DevTools → Elements. Where did the content actually end up? :

   Observation: I noticed that the browser automatically fixed the HTML, but some content ended up inside the wrong element.

2. Put a <ul> inside a <p>. In the Elements panel — is it still inside the paragraph? :

   Observation: I noticed that the browser automatically closed the paragraph before the list.

3. Give two elements the same id and click a link pointing at it. Which one wins? :

   Observation: I noticed that the link went to the first element with the matching ID.

4. Remove alt from one image, then set it to alt="". Turn on your operating system's screen reader (Narrator on Windows, VoiceOver on Mac) and listen to the difference. :

   Observation: Narrator may announce the image, while an empty alt makes it skip decorative images.


Week 3 Lesson 2 - Task 3: Defeat your own validation Challenge

1. Submit with a required field empty — blocked. Now delete required in DevTools and submit again. What happened?

   Observation: I noticed that the browser blocked the form when a required field was empty. After I removed the required attribute in DevTools, the form submitted even though the field was empty.

2. Add novalidate to the <form>. What happens to all your rules?

   Observation: I noticed that adding novalidate disabled the browser's built-in validation, allowing the form to submit even when some fields did not follow the validation rules.

3. Remove the name from one field and submit with method="get". Is it in the URL?

   Observation: I noticed that the field's value was missing from the URL because the browser only submits form fields that have a name attribute.

4. Leave every checkbox unticked and submit. Are the checkbox keys in the URL at all?

   Observation: I noticed that the unchecked checkboxes did not appear in the URL because the browser only submits checkboxes that are selected.

5. Why Week 8 has to validate everything a second time on the server?

   Observation: I learned that browser validation can be bypassed or disabled, so the server must validate the submitted data again to prevent invalid or incomplete information from being accepted.