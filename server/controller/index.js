import { readData, writeData } from '../utils.js'

export const getName = ()=> {
    return "Rasvan G."
}

export const storeNames =  (name)=> {

readData()
.then(data => {
    data.push(name)
    writeData(data)
    return data
})
}

