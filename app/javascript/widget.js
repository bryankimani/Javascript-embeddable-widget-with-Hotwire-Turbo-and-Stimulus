import { get } from "@rails/request.js"

async function getEmailForm() {
    const response = await get('api/v1/email_catchers/new', {
        responseKind: "turbo-stream"
    })

    if (response.ok) {
        console.log('All Good')
    } else {
        console.log('Not Good')
    }
}
getEmailForm()
