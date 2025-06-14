const notesListTag = document.getElementById('view-notes-list');

// Attach an event listener to the parent container
notesListTag.addEventListener('click', (event) => {
    
    // Check if the clicked element is a delete button

    if (event.target.classList.contains('delete-note-button')) {       
        // Remove the parent <li> element
        const noteItem = event.target.closest('.view-notes-block');
        noteItem.remove();
    }
});
