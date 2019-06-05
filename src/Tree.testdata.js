export const person1 = { firstname: 'Person' , lastname: 'One', role: 'no1' }
export const person2 = { firstname: 'Person' , lastname: 'Two', role: 'no2' }
export const person3 = { firstname: 'Person' , lastname: 'Three', role: 'no3' }
export const person4 = { firstname: 'Person' , lastname: 'Four', role: 'no4' }
export const person5 = { firstname: 'Person' , lastname: 'Five', role: 'no5' }

export const smalltree = { name: 'Small tree' , parent: person1, children: [ person2, person3 ] }
export const bigtree = { name: 'Big tree' , parent: person4, children: [ smalltree, person5 ] }
