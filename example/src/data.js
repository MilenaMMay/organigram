const person1 = { firstname: 'Person' , lastname: 'One', role: 'no1' }
const person2 = { firstname: 'Person' , lastname: 'Two', role: 'no2' }
const person3 = { firstname: 'Person' , lastname: 'Three', role: 'no3' }
const person4 = { firstname: 'Person' , lastname: 'Four', role: 'no4' }
const person5 = { firstname: 'Person' , lastname: 'Five', role: 'no5' }

const smalltree = { name: 'Small tree' , parent: person1, children: [ person2, person3 ] }
const bigtree = { name: 'Big tree' , parent: person4, children: [ smalltree, person5 ] }

const view1 = { name: 'View One' , trees: [ smalltree, bigtree ] }
const view2 = { name: 'View Two' , trees: [ bigtree ] }

export default { views: [ view1, view2 ] }
