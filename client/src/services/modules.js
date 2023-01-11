
export function incrementIndex(i) {
    return i + 1;
}
export function addAnswer(index){
    this.data.questions[index].answers.push({answer:"", id: Date.now()})
}
export function delAnswer(index, id){
    if(confirm('Do you rilly want to delete this answer?')){
        this.data.questions[index].answers = this.data.questions[index].answers.filter(item => item.id !== id)
    }
}
export function addQuestion(){
    this.data.questions.push({Question:"", id: Date.now(), answers:[{answer:"", id: Date.now()}]})
}
export function delQuestion(id){
    if(confirm('Do you rilly want to delete this question?')){
        this.data.questions = this.data.questions.filter(item => item.id !== id)
    }
}


export default { incrementIndex, addAnswer, addQuestion, delAnswer, delQuestion }