export default function postOfflineEarning(appFeatch:Promise<any>){
    return {
        postOfflineEarning:()=>{
            return (await appFeatch)("/offline-earning", {
                method: "POST",
            });
        }
    }
}