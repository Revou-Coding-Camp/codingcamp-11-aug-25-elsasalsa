// js/script.js

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function validateForm(form) {
  if (!form.name || !form.email || !form.phone || !form.message) {
    alert("Please fill in all fields!");
    return false;
  }
  return true;
}

// helper untuk submit form dari Vue
export function handleFormSubmit(form, updateDisplayName) {
  if (!validateForm(form)) return null;
  updateDisplayName(form.name);
  return { ...form }; 
}
