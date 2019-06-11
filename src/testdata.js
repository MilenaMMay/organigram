export const person1 = { firstname: 'Person' , lastname: 'One', role: 'no1' }
export const person2 = { firstname: 'Person' , lastname: 'Two', role: 'no2' }
export const person3 = { firstname: 'Person' , lastname: 'Three', role: 'no3' }
export const person4 = { firstname: 'Person' , lastname: 'Four', role: 'no4' }
export const person5 = { firstname: 'Person' , lastname: 'Five', role: 'no5' }
export const person6 = { firstname: 'Person' , lastname: 'Six', role: 'no6' }

export const group1 = { groupname: 'Group 1', members: [ person4, person6 ] }

export const smalltree = { name: 'Small tree' , parent: person1, children: [ person2, person3, group1 ] }

export const group2 = { groupname: 'Group 2', members: [ smalltree ] }

export const bigtree = { name: 'Big tree' , parent: group2, children: [ smalltree, person5 ] }

// TODO Rename trees because it may also contain groups
export const view1 = { name: 'View One' , trees: [ smalltree, bigtree, group1 ] }
export const view2 = { name: 'View Two' , trees: [ bigtree ] }

export const data = { views: [ view1, view2 ] }
