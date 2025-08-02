export const reportParser = (lines: number[][]) => {
    let safeTotal = 0
    
    for(const line of lines){
        let isIncreasing = true
        let isDecreasing = true
        let isValidRange = false

        for(let i = 1; i < line.length; i++){
            let level = line[i]
            let prevLevel = line[i - 1]
            isValidRange = false

            if(level > prevLevel){
                isDecreasing = false
                if(((level - prevLevel) <= 3)) 
                    isValidRange = true
                else
                    break
            } 
            if(level < prevLevel) {
                isIncreasing = false
                if(((prevLevel - level) <= 3)) 
                    isValidRange = true
                else
                    break
            }
            if(level == prevLevel){
                break
            }
        }

        if ((isIncreasing || isDecreasing) && isValidRange)
            safeTotal++
    }
    return safeTotal
}