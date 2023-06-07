const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for( let i = 0; i< names.length; i++) {
    let human = {
        name : names[i],
        age : ages[i]
    }

    people.push(human)
}

console.table(people)

//post

const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

function remove(posts, id) {
    const objWithId = posts.findIndex((obj) => obj.id === id)
    posts.splice(objWithId, 1)
    return posts
}

const newPosts = remove(posts, 2)

console.log(newPosts)

console.log(posts)

//Delete comment in post

const posts3 = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]

  function searchPostWithId(posts3, id, commentId) {
   // const copy = Array.from(posts3)
    const postWithId = posts3.findIndex((obj) => obj.id === id)
    const copyPost = posts3[postWithId]
    const commentWithId = copyPost.comments.findIndex((obj) => obj.id === commentId)
    copyPost.comments.splice(commentWithId, 1)
    posts3.splice(postWithId, 1)
    posts3.splice(postWithId, 0, copyPost)
    return posts3
}

const result = searchPostWithId(posts3, 2, 2)

console.log(result)


const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

  function filter(dictionary, simvol) {
    for( let key of dictionary) {
        if (key === simvol) {
            retur
        }
    }
  }