document.addEventListener('alpine:init', () => {
    Alpine.data('totalPhoneBillWidget',function(){
        return {
            show2:false,
            string:'',
            stringAmount:'',
            calculateTotal(){
                this.stringAmount=totalPhoneBill(this.string)
                setTimeout(()=>{
                    this.show2=false;
                    this.string=''
                },5000)
            }
        }
    })
})