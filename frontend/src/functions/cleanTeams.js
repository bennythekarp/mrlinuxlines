import fixLogos from "./fixLogos"

const cleanTeams = (teams) => {
    let NBAteams = teams.filter(team => team.nbaFranchise && !team.name.includes('Stephen A'))
    NBAteams.map(team =>fixLogos(team))
    return NBAteams
}
export default cleanTeams