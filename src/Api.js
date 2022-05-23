const BASE_API = 'https://api.uplines.com.br/wp-content/plugins/json-content-importer/json/listas.json';

export default {
    checkToken: async () => {
        
    },
    SingIn: async () => {

    },
    SingUp: async () => {

    },
    PullList: async () => {
        // const req = await fetch(`${BASE_API}`,{
        //     method: 'POST',
        //     headers: {
        //         Accept: 'aplication/json',
        //         'content-type' : 'aplication/json'
        //     }
        // });
        const req = await fetch(BASE_API)
        const json = await req.json();

        return json;
    }
};