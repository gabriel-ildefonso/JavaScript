function show(){
  //getting one element by his Id
  const contactList = document.getElementById('contact-list')
  console.log(contactList)

  //getting a group of elements by their tags
  const listElements = document.getElementsByTagName('li')
  console.log(listElements)

  //getting a group of elements by their class
  const contactInputs = document.getElementsByClassName('contact-input')
  console.log(contactInputs)

  //getting elements by query (allows to select class just like in CSS, also allows to select classes within other classes, using '>')
    //An advantage of using the query selector is that it creates a NodeList, which allows the use of different methods that can be very useful.
  const contacts = document.querySelectorAll('#contact-list > li > label')
  console.log(contacts)

  //getting an element by his name (also returns a NodeList)
  const contact1 = document.getElementsByName('contact1')
  console.log(contact1)
  
  //another way to use the query selector, but this time to get only one element
  const fisrtContact = document.querySelector('#contact-list > li > label')
  console.log(fisrtContact)
    //the querySelector works the may as querySelectorAll does, but it stops its execution as soon as it finds an element that satisfies his query.
}


