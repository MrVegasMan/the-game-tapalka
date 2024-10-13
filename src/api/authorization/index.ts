export default function createAuthorizationApi(appFeatch:Promise<any>){
    return {
        postCreateUser:()=>{
            return (await appFeatch)("/entrypoint", {
                method: "POST",
            });
        }
    }
}