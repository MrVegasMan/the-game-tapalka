export default function takeUser(appFeatch:Promise<any>){
    return {
        getUser:()=>{
            return (await appFeatch)("/user", {
                method: "GET",
            });
        }
    }
}