export default function takeUserRank(appFeatch:Promise<any>){
    return {
        getUserRank:()=>{
            return (await appFeatch)("/user", {
                method: "GET",
            });
        }
    }
}