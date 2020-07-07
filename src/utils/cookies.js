const cookieUtils = {
    create: (name,data) => { 
        document.cookie = `${name}=${JSON.stringify(data)}`;
    },
    get: () => {
        if(document.cookie){
            const cookie = document.cookie.split('=').pop();
            return JSON.parse(cookie);
        }
        return ''
    },
    delete: (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"`
    }

}

export default cookieUtils
