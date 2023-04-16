import { createServer } from 'node:http'
import { once } from 'node:events'

// endpoint -> curl -X POST localhost:4000/cart? --data '{"id":"123"}'

const PORT = 4000
async function handler(request, response) {
    if (request.method === 'POST' && request.url.includes('cart')) {

        const data = JSON.parse(await once(request, 'data'))
        console.log("received ->", data);
        response.end(`process succeeded for ${data.id}`)
    }
}


createServer(handler)
    .listen(PORT, () => console.log(`Cart API running on ${PORT}`))
