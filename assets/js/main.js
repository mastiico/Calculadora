function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) return true;
    else{
    	if (tecla==8 || tecla==0) return true;
	else 
     if ((tecla>8 && tecla<223)) return false;
     return false
    }
}

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },
        clearDisplay() {
            this.display.value = '';
        },

        tiraUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta)

                if(!conta) {
                    alert('Conta inválidia');
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválidia');
                return;
            }
        },
        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.tiraUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                this.display.focus();
            });
        },
btnParaDisplay(valor) {
    this.display.value += valor;
}

    }
}

const calculadora = criaCalculadora();
calculadora.inicia();
