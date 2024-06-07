```mermaid
flowchart TD
        O["User inputs text and hits the save button "]
    -->K["FORM sends a POST request to /new_note along with form data as 'body'"]
    --> A["Javascript at the server handles this request and uses the req.body to create a note object using user's data"]
    --> G["Note object containing 'content' and 'date' is pushed into a notes array"]
    --> B["The server now responds with a URL redirect to the Notes page"]
    --> C["This causes browser to refresh and retreive the main.css, main.jss and data.json file"]
    --> D["The notes page is rendered now with the new note added. "]
