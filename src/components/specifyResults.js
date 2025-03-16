function SpecifyResults(subject,result){
if(subject=="english"){
    switch (result) {
        case result<5:
            return "A1"
        case result<15:
            return "A2";
        case result<24:
            return "B1"
        case result<30:
            return "B2"
        case result>30:
            return "C1"
    
        default:
            "Aniqlanmagan"
            break;
    }
}
}
export default SpecifyResults;