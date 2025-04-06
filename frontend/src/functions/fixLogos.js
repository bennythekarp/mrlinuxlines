const fixLogos = (team) => {
    if (team.nickname === 'Heat') {
        console.log('heat')
        team.logo = 'https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg'
    } 
    else if (team.nickname === 'Bucks') {
        console.log('bucks')
        team.logo = 'https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg'
    }
    else if (team.nickname === 'Thunder') {
        team.logo = 'https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg'
    }
    else if (team.nickname === '76ers') {
        team.logo = 'https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg'
    }
    else if (team.nickname === 'Magic') {
        console.log('magic')
        team.logo = 'https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg'
    }
    else if (team.nickname === 'Wizards') {
        console.log('wizards')
        team.logo = 'https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg'
    }
    else return 
        
    return team
}

export default fixLogos