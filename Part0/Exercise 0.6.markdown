```mermaid
flowchart TD
        O["User inputs text and hits the save button "]
    -->K["Event in the javascript code prevents form submit's default behavior"]
    --> A["FORM sends a POST request to /new_note_spa"]
    --> G["Server responds 201 Created without a GET redirect"]
    --> B["Javascript code pushes new note's content and current date in notes list"]
    --> C["New note is rerendered in the page"]
    --> D["The new note is now sent to the server with content-type json"]
