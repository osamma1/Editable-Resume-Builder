function updatePreview() {
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var phoneInput = document.getElementById("phone").value;
    var educationInput = document.getElementById("education").value;
    var experienceInput = document.getElementById("experience").value;
    var skillsInput = document.getElementById("skills").value;
    // Update the resume preview section
    document.getElementById("preview-name").innerText = nameInput;
    document.getElementById("preview-email").innerText = emailInput;
    document.getElementById("preview-phone").innerText = phoneInput;
    document.getElementById("preview-education").innerText = educationInput;
    document.getElementById("preview-experience").innerText = experienceInput;
    document.getElementById("preview-skills").innerText = skillsInput;
}
// Function to make a section editable
function makeEditable(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('click', function () {
            var currentText = element.innerText;
            var inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = currentText;
            // Replace element with input field
            element.innerHTML = '';
            element.appendChild(inputField);
            inputField.focus();
            // On blur, update the preview
            inputField.addEventListener('blur', function () {
                element.innerText = inputField.value || 'Click to edit';
                updatePreview();
            });
            // On Enter key, update the preview
            inputField.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    inputField.blur();
                }
            });
        });
    }
}
function addEventListeners() {
    var form = document.getElementById("resume-form");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading the page
        updatePreview();
    });
    // Make sections editable
    ['preview-name', 'preview-email', 'preview-phone', 'preview-education', 'preview-experience', 'preview-skills'].forEach(makeEditable);
}
document.addEventListener("DOMContentLoaded", function () {
    addEventListeners();
});
