export default function takeReferrals(appFeatch:Promise<any>){
    return {
        getReferrals:()=>{
            return (await appFeatch)("/referral", {
                method: "GET",
            });
        }
    }
}