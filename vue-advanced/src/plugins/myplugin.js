//UpperCase  plugin
export const myPlugin = {
    install(app, options) {
        //configure application
        //plugin logic: plugin reads data 
        app.config.globalProperties.$uppercase = key => {
            return key.toUpperCase();
        }
    }
};