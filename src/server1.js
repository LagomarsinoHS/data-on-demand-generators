import { createServer } from 'node:http'
import { parse } from 'node:url'
import { randomUUID } from 'node:crypto'
// endpoint ->curl localhost:3000/products?name=laptop

const PORT = 3000
function handler(request, response) {
    if (request.method === 'GET' && request.url.includes('products')) {

        const { query: { name } } = parse(request.url, true)
        const item = {
            id: randomUUID(),
            product: name
        }
        //console.log("product name ->", name);
        response.end(JSON.stringify(item, null, 2))
    }

}


createServer(handler)
    .listen(PORT, () => console.log(`Products API running on ${PORT}`))
