Diwata Pares: Food Stall Feature

- `header` contains the page title and navigation.
- `nav` groups the page navigation links.
- `main` contains the main page content.
- Each `article` is a standalone topic: the food highlights and the business story.
- `section` groups related content under its own heading.
- `div` groups the food gallery figures as one layout grouping; it has no special semantic meaning.
- `aside` contains related visitor information.
- `footer` contains the educational-use notice.

Task 3 - Break it, watch the repair, then validate Challenge

1. Delete one </div> in the middle of the page. Compare View Source with DevTools → Elements. Where did the content actually end up? :

   Observation: I noticed that the browser automatically fixed the HTML, but some content ended up inside the wrong element.

2. Put a <ul> inside a <p>. In the Elements panel — is it still inside the paragraph? :

   Observation: I noticed that the browser automatically closed the paragraph before the list.

3. Give two elements the same id and click a link pointing at it. Which one wins? :

   Observation: I noticed that the link went to the first element with the matching ID.

4. Remove alt from one image, then set it to alt="". Turn on your operating system's screen reader (Narrator on Windows, VoiceOver on Mac) and listen to the difference. :

   Observation: Narrator may announce the image, while an empty alt makes it skip decorative images.