class hashTable {
    constructor (size=53) {
        this.keyMap = new Array(size)
    }

    // This hash function is bad because its time complexity is O(n). Ideally, it should be O(1).
    _hash(key) {
        let total = 0
        for(let char of key) {
            total = (total + char.charCodeAt(0)) % this.keyMap.length
        }
        
        return total
    }

    set(key, value) {
        const index = this._hash(key)
        if(!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }

    get(key) {
        const index = this._hash(key)
        
        if(!this.keyMap[index]) return undefined

        for(let element of this.keyMap[index]) {
            if (element[0] === key) return element[1]
        }
    }

    keys() {
        const keys = []

        for(let i = 0; i < this.keyMap.length; i++) {
            if(!this.keyMap[i]) continue

            for(let y = 0; y < this.keyMap[i].length; y++) {
                if(!keys.includes(this.keyMap[i][y][0])) {
                    keys.push(this.keyMap[i][y][0])
                }
            }
        }

        return keys
    }

    values() {
        const values = []

        for(let i = 0; i < this.keyMap.length; i++) {
            if(!this.keyMap[i]) continue

            for(let y = 0; y < this.keyMap[i].length; y++) {
                if(!values.includes(this.keyMap[i][y][1])) {
                    values.push(this.keyMap[i][y][1])
                }
            }
        }

        return values
    }
}
