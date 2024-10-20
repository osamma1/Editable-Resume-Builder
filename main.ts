function updatePreview() {
  const nameInput = (<HTMLInputElement>document.getElementById("name")).value;
  const emailInput = (<HTMLInputElement>document.getElementById("email")).value;
  const phoneInput = (<HTMLInputElement>document.getElementById("phone")).value;
  const educationInput = (<HTMLTextAreaElement>document.getElementById("education")).value;
  const experienceInput = (<HTMLTextAreaElement>document.getElementById("experience")).value;
  const skillsInput = (<HTMLTextAreaElement>document.getElementById("skills")).value;

  // Update the resume preview section
  document.getElementById("preview-name")!.innerText = nameInput;
  document.getElementById("preview-email")!.innerText = emailInput;
  document.getElementById("preview-phone")!.innerText = phoneInput;
  document.getElementById("preview-education")!.innerText = educationInput;
  document.getElementById("preview-experience")!.innerText = experienceInput;
  document.getElementById("preview-skills")!.innerText = skillsInput;
}

// Function to make a section editable
function makeEditable(elementId: string) {
  const element = document.getElementById(elementId);
  
  if (element) {
    element.addEventListener('click', () => {
      const currentText = element.innerText;
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.value = currentText;
      
      // Replace element with input field
      element.innerHTML = '';
      element.appendChild(inputField);
      inputField.focus();

      // On blur, update the preview
      inputField.addEventListener('blur', () => {
        element.innerText = inputField.value || 'Click to edit';
        updatePreview();
      });

      // On Enter key, update the preview
      inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          inputField.blur();
        }
      });
    });
  }
}

function addEventListeners() {
  const form = document.getElementById("resume-form");

  form?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page
    updatePreview();
  });

  // Make sections editable
  ['preview-name', 'preview-email', 'preview-phone', 'preview-education', 'preview-experience', 'preview-skills'].forEach(makeEditable);
}

document.addEventListener("DOMContentLoaded", () => {
  addEventListeners();
});
