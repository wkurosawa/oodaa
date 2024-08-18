// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import ResetFormController from "./controllers/reset_form_controller"
import { application } from "./controllers/application"

application.register("reset_form", ResetFormController)
