function parseStats(stat) {
    let over_fraction = stat.stat_over.fraction
    let over_color = stat.stat_over.color
    let over_percent = stat.stat_over.percent
                
    let oneLess_fraction = stat.stat_one_less.fraction
    let oneLess_color = stat.stat_one_less.color
    let oneLess_percent = stat.stat_one_less.percent

    let twoLess_fraction = stat.stat_two_less.fraction 
    let twoLess_color = stat.stat_two_less.color 
    let twoLess_percent = stat.stat_two_less.percent
    
    let oneMore_fraction = stat.stat_one_more.fraction
    let oneMore_color = stat.stat_one_more.color 
    let oneMore_percent = stat.stat_one_more.percent
    
    let twoMore_fraction = stat.stat_two_more.fraction 
    let twoMore_color = stat.stat_two_more.color 
    let twoMore_percent = stat.stat_two_more.percent 
    
    return {over_fraction, over_color, over_percent, oneLess_fraction, oneLess_color, oneLess_percent, twoLess_fraction, twoLess_color, twoLess_percent, oneMore_fraction, oneMore_color, oneMore_percent, twoMore_fraction, twoMore_color, twoMore_percent}
}

export default parseStats