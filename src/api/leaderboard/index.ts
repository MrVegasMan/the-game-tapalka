export default function getLeaderboard(appFeatch:Promise<any>){
    return {
        getLeaderboardList:()=>{
            return (await appFeatch)("/leaderboard", {
                method: "GET",
            });
        }
    }
}