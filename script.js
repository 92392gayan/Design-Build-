function openTab(tabName, event) {
    if (event) {
        event.preventDefault();
    }

    // Hide all tab content
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    // Remove active class from all buttons
    const buttons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // Show selected tab content and highlight button
    const tabElement = document.getElementById(tabName);
    if (tabElement) {
        tabElement.classList.add("active");
    }
    
    // Make the clicked button active
    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }
    
    // Scroll to top of the page when changing tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
