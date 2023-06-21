const family = function () {
    const members = []
    return  function (name) {
        members.push(name)
        console.log(members)
    }
}

const getBirth= family()

getBirth("Dave")
getBirth("Dave")

