export default function sendWallet(appFeatch:Promise<any>){
    return {
        postWallet:()=>{
            return (await appFeatch)("/wallet", {
                method: "POST",
            });
        }
    }
}