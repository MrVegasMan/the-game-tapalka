export default function createAdminApi(appFeatch:Promise<any>){
    return {
        getTaskGroups:()=>{
            return (await appFeatch)("/admin/offerwall", {
                method: "GET",
            });
        },
        postTaskGroups:()=>{
            return (await appFeatch)("/admin/offerwall", {
                method: "POST",
            });
        },
        postTaskGroupsMedia:()=>{
            return (await appFeatch)("/media", {
                method: "GET",
            });
        }
    }
}