document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const contactsList = document.getElementById('contacts');
  
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
  
      // this will Validate inputs with regular expressions
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;
  
      if (!name || !email || !phone || !emailRegex.test(email) || !phoneRegex.test(phone)) {
        alert('Invalid input data');
        return;
      }
  
      const newContact = { name, email, phone };
      displayContact(newContact);

      // to reset the form to clear variables..not needed
      contactForm.reset();
    });
  
    function displayContact(contact) {

      const listItem = document.createElement('li');
      console.log(contact)

      listItem.innerHTML = `<strong>${contact.name}</strong> (${contact.email}, ${contact.phone})
        <button onclick="editContact(this)">Edit</button>
        <button onclick="deleteContact(this)">Delete</button>`;
      contactsList.appendChild(listItem);
    }
  
    window.editContact = function(button) {

      const listItem = button.parentElement;

      const name = prompt('Enter new name:', listItem.querySelector('strong').innerText);
      const email = prompt('Enter new email:', listItem.innerText.split(',')[1].trim());
      const phone = prompt('Enter new phone:', listItem.innerText.split(',')[2].trim());
  
      // to validate inputs using regular expressions

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;
  
      if (!name || !email || !phone || !emailRegex.test(email) || !phoneRegex.test(phone)) {
        alert('Invalid input data');
        return;}
  
      listItem.innerHTML = `<strong>${name}</strong> (${email}, ${phone})
        <button onclick="editContact(this)">Edit</button>
        <button onclick="deleteContact(this)">Delete</button>`;
    };
  
    window.deleteContact = function(button) {

      if (confirm('Are you sure you want to delete this contact?')) {

        const listItem = button.parentElement;
        listItem.remove();
      }
    };
  });
  