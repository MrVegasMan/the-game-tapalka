export default function healthCheckApi(appFeatch:Promise<any>){
    return {
        getHealthCheck:()=>{
            return (await appFeatch)("/health-check", {
                method: "GET",
            });
        }
    }
}