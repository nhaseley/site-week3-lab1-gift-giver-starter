const {BadRequestError} = require("..utils/errors")
class GiftExchange{
    static pairs(names){
        if (names.length % 2 != 1){ // number of names is odd
            throw new Errors.BadRequestError("Must provide an even number of users for pair matching")
        } 
        const namedPairs = []
        while (names.length) {
            const currentPair = []

            while (currentPair.length < 2 && names.length > 0){
                // pick someone at random to assign them a partner
                const selectedNameIndex = Math.floor(Math.random() * names.length)
                const selectedName = names[selectedNameIndex]
                names.splice(selectedNameIndex, 1) // remove from name array bc already used
                currentPair.push(selectedName)
            }
            namedPairs.push(currentPair)
        }
        return namedPairs

    }
    
    static traditional(names){
        // shuffle names array
        let currentIndex = names.length -1

        while (currentIndex > 0){
            // pick an element at random
            const randomIndex = Math.floor(Math.random() * currentIndex)
            // swap it with current name
            const temp = names[currentIndex]
            names[currentIndex] = names[randomIndex]
            names[randomIndex] = temp
            currentIndex -= 1
        }
        // create ordered pairings
        const pairings = []

        // return the list of all the pairings with description
        for (let i=0; i<names.length; i++){
            const giver = names[i]
            const receiver = i === names.length-1? names[0] : names[i+1]
            pairings.push(`${giver} is giving a gift to ${receiver}`)
        }
        return pairings
    }

}
module.exports = GiftExchange