const myFakeDb = async () => Array.from({
    length: 10000
}, (v, idx) => `${idx}-laptop`)

const PRODUCT_API = 'http://localhost:3000/products'
const CART_API = 'http://localhost:4000/carts'


//Process data at Once
/*
This will be processing, get ALL the data, and once it end getting all of it, will pass
*/
async function processDBData() {
    const products = await myFakeDb()
    const responses = []

    for (const product of products) {
        const productInfo = await (await fetch(`${PRODUCT_API}?name=${product}`)).json()
        const cartAPIInfo = await (await fetch(CART_API, {
            method: 'POST',
            body: JSON.stringify(productInfo)
        })).text()
        responses.push(cartAPIInfo)
    }
    return responses
}

//const dataFetched = await processDBData()
//console.table(dataFetched)


//Process data on-demand
//This give a iterator
/*
The main difference is that with a generator function;
1. We start fetching data, when it reach the yield it will PAUSE, until we call it again
2. Generator give us a iterable, so we can iterate above it
3. We use a for of, awaiting the result for every product, so it will get the information and immediately will pass it
4. Don't care if there are many many gb of information, because we will pass it on demand
*/
async function* processDBDataGen() {
    const products = await myFakeDb()

    for (const product of products) {
        const productInfo = await (await fetch(`${PRODUCT_API}?name=${product}`)).json()
        const cartAPIInfo = await (await fetch(CART_API, {
            method: 'POST',
            body: JSON.stringify(productInfo)
        })).text()

        yield cartAPIInfo
    }
}

//const gen = processDBDataGen()
//console.log(await gen.next())
for await (const data of processDBDataGen()) {
    console.table(data)
} 
