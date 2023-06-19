import AppExpress from "../application/appExpress.js"

class AppFactory{
    static create(payload){
        const appType= payload? payload : 'AppExpress'
        const apps = new Map()

        apps.set('AppExpress', AppExpress)

        const app = apps.get(appType)
        return new app()
    }
}

export default AppFactory