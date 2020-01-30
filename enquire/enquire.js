const db = require('../db')

function addForm(form) {
  const newForm = new db.Enquire(form);
  console.log(form);
  return newForm.save();
}

exports.addForm = addForm;