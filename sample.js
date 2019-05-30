// SAMPLE QUERY, MUTATION, FRAGMENT, ETC
// # Welcome to GraphiQL
// # An example GraphQL query might look like:
// #
// #     {
// #       field(arg: "value") {
// #         subField
// #       }
// #     }
// # Keyboard shortcuts:
// #
// #  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
// #
// #       Run Query:  Ctrl-Enter (or press the play button above)
// #
// #   Auto Complete:  Ctrl-Space (or just start typing)
// #
// # {
// #   user (id:"50") {
// #     firstName
// #     company{
// #       id
// #       name
// #       description
// #     }
// #   },
// #   google: company (id: "2") {
// #     ...companyDetails
// #   },
// #   apple: company (id: "1") {
// #     ...companyDetails
// #   },
// #   gp:company (id: "3") {
// #     ...companyDetails
// #   },
// # }
// # mutation {
// #   addUser (firstName: "Geoffrey", age: 32) {
// #     id
// #     firstName
// #     age
// #   }
// # }
// # 
// mutation {
//   editUser(id: "42", companyId: "3") {
//     id
//     firstName
//     age
//     company {
//       id
//       name
//     }
//   }
// }

// # fragments enable you to not repeat yourself
// # fragment companyDetails on Company {
// #   id,
// #   name,
// #   description,
// #   users {
// #     firstName
// #     age
// #   }
// # }
