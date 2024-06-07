```mermaid
flowchart TD
        O["User inputs text and hits the save button "]
    -->K["Event in the javascript code prevents form submit's default behavior"]
    --> A["Javascript code pushes data from form into the notes list "]
    --> G["New note gets rerendered in the page without additional GET requests "]
    --> B["The new note is now sent to the server with content-type:json"]
    --> C["Consequently, FORM sends a POST request to /new_note_spa"]
    --> D["Server responds 201 Created without a GET redirect"]
