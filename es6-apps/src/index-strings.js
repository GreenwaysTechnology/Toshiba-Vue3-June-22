//literals - strings - "",'',``(back tick notation with string interpolation)

//es 5 keyword not recommended in es 6 apps
//var firstName = "Subramanian"
//es 6 keyword recommended
let firstName = "Subramanian"
let lastName = 'Murugan'
//display -  string concatnation - + , ``
console.log("Name " + firstName + lastName)
console.log("Name ", firstName, lastName)
//es 6 style
console.log(`Name ${firstName} ${lastName}`)
//use case for back tick - multi line strings
let title = 'google'
//multi line in es 5
let doc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Hello</h1>" +
    "</body>";
console.log(doc)
//multi line in es 6
let docOne = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;
console.log(docOne)