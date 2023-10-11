import { get } from "@rails/request.js"
import "@hotwired/turbo-rails"
import { Application } from "@hotwired/stimulus"
import WidgetFormController from "./controllers/widget_form_controller"

// Load Stimulus
const application = Application.start()
window.stimulus = application
application.register("widget-form", WidgetFormController)

// Load Turbo
window.Turbo = Turbo

async function getEmailForm() {
    const response = await get('http://localhost:3000/api/v1/email_catchers/new', {
        responseKind: "turbo-stream"
    })

    if (response.ok) {
        console.log('All Good')
    } else {
        console.log('Not Good')
    }
}
getEmailForm()
